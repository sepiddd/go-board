import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { Controller, useForm } from 'react-hook-form';

type Inputs = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>();

  const onSubmit = (data: any) => console.log('data', data);

  return (
    <Row className="mt-[200px]">
      <Col span={8} offset={8}>
        <Card>
          <Typography.Title level={2}>Login</Typography.Title>
          <Form
            layout="vertical"
            className="mt-[50px]"
            onFinish={handleSubmit(onSubmit)}
          >
            <Form.Item
              label="Email"
              hasFeedback={!!errors.username}
              help={errors.username?.message}
            >
              <Controller
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input placeholder="Please enter your email" {...field} />
                )}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              hasFeedback={!!errors.password}
              help={errors.password?.message}
            >
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input placeholder="Please enter your password" {...field} />
                )}
              />
            </Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
