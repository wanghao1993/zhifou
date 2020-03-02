import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd';
import { login } from '../../actions/login'
import './login.scss'

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  state = {
    loading: '1'
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        login('/login', values).then(res => {
          message.success('登陆成功')
          this.setState({loading: false})
          this.props.history.push('/home')
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <div className='content'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>

          {/* <a className="login-form-forgot" href="">
            忘记密码
          </a> */}
          {/* Or <a href="">register now!</a> */}
          <div>
            <Button type="primary" htmlType="submit" loading={this.state.loaidng} className="login-form-button">
              登陆
              { this.state.loading }
            </Button>
          </div>
{/*
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)} */}

        </Form.Item>
        <div className='operation'>
          <span className="login-form-forgot" href="">
            忘记密码
          </span>
          <span href="">现在注册</span>
        </div>
      </Form>

        </div>
         </div>

    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login
