import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Radio, Button } from "antd";
import { useDispatch, useSelector } from "@/store";
import { submitAccount } from "./slice";

const { Item } = Form;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(state => state.register.isLogged);

  const onFinish = async (values: any) => {
    console.log("value ==>", values);
    await dispatch(submitAccount(values));
    isLogged && navigate("/");
  };
  const onFinishFailed = (err_info: any) => {
    console.log("err_info ==>", err_info);
  };
  return (
    <Form
      name="register"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Item
        label="账号"
        name="user_name"
        rules={[{ required: true, message: "用户名是必填项" }]}
      >
        <Input />
      </Item>
      <Item
        label="姓名"
        name="real_name"
        rules={[{ required: true, message: "用户姓名是必填项" }]}
      >
        <Input />
      </Item>
      <Item
        label="密码"
        name="pass_word"
        rules={[{ required: true, message: "用户密码是必填项" }]}
      >
        <Input />
      </Item>
      <Item name="gender" wrapperCol={{ offset: 8, span: 16 }}>
        <Radio.Group>
          <Radio value={1}>男</Radio>
          <Radio value={0}>女</Radio>
          <Radio value={-1}>其他</Radio>
        </Radio.Group>
      </Item>
      <Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button.Group>
          <Button animate="pulse" type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="submit">取消</Button>
        </Button.Group>
      </Item>
    </Form>
  );
};
export default Register;
