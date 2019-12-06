import { Col, Dropdown, Icon, Menu, Card, Skeleton, Avatar, Descriptions } from 'antd';
import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import PageLoading from './components/PageLoading';
import { getTimeDistance } from './utils/utils';
import styles from './style.less';
import autoHeight from './components/Charts/autoHeight';
const { Meta } = Card;
const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));
const SalesCard = React.lazy(() => import('./components/SalesCard'));
const TopSearch = React.lazy(() => import('./components/TopSearch'));
const ProportionSales = React.lazy(() => import('./components/ProportionSales'));
const OfflineData = React.lazy(() => import('./components/OfflineData'));

@connect(({ dashboardAndanalysis, loading }) => ({
  dashboardAndanalysis,
  loading: loading.effects['dashboardAndanalysis/fetch'],
}))
class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };

  reqRef = 0;

  timeoutId = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'dashboardAndanalysis/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndanalysis/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = e => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = key => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = rangePickerValue => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  selectDate = type => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  render() {
    const { salesType } = this.state;
    const { dashboardAndanalysis, loading } = this.props;
    console.log(this.props);
    const {
      visitData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = dashboardAndanalysis;
    let salesPieData;

    if (salesType === 'all') {
      salesPieData = salesTypeData;
    } else {
      salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
    }

    const gridStyle = {
      width: '50%',
      textAlign: 'left',
    };
    const descriptionStyle = {
      width: '85%',
      margin: '0 auto',
    };
    return (
      <GridContent>
        <React.Fragment>
          <Suspense fallback={<PageLoading />}>
            <IntroduceRow loading={loading} visitData={visitData} />
          </Suspense>
          <Card title="产品列表">
            <Card.Grid style={gridStyle}>
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      style={{ marginRight: '15px', width: '100px', height: '100px' }}
                    />
                  }
                  title="口红机"
                  description="T口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，斯柯达速度快【 是，DPS看到视频"
                />
                <Col style={{ marginTop: '24px' }}>
                  <Descriptions bordered layout="vertical" size="small" style={descriptionStyle}>
                    <Descriptions.Item label="白银">40%</Descriptions.Item>
                    <Descriptions.Item label="黄金">20%</Descriptions.Item>
                    <Descriptions.Item label="钻石">40%</Descriptions.Item>
                    <Descriptions.Item label="触达用户">123232人</Descriptions.Item>
                    <Descriptions.Item label="累计收益">123232元</Descriptions.Item>
                    <Descriptions.Item label="ARPU">0.5/人</Descriptions.Item>
                  </Descriptions>
                </Col>
              </Skeleton>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      style={{ marginRight: '15px', width: '100px', height: '100px' }}
                    />
                  }
                  title="口红机"
                  description="T口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，斯柯达速度快【 是，DPS看到视频"
                />
                <Col style={{ marginTop: '24px' }}>
                  <Descriptions bordered layout="vertical" size="small">
                    <Descriptions.Item label="白银">40%</Descriptions.Item>
                    <Descriptions.Item label="黄金">20%</Descriptions.Item>
                    <Descriptions.Item label="钻石">40%</Descriptions.Item>
                    <Descriptions.Item label="触达用户">123232人</Descriptions.Item>
                    <Descriptions.Item label="累计收益">123232元</Descriptions.Item>
                    <Descriptions.Item label="ARPU">0.5/人</Descriptions.Item>
                  </Descriptions>
                </Col>
              </Skeleton>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              {' '}
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      style={{ marginRight: '15px', width: '100px', height: '100px' }}
                    />
                  }
                  title="口红机"
                  description="T口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，斯柯达速度快【 是，DPS看到视频"
                />
                <Col style={{ marginTop: '24px' }}>
                  <Descriptions bordered layout="vertical" size="small">
                    <Descriptions.Item label="白银">40%</Descriptions.Item>
                    <Descriptions.Item label="黄金">20%</Descriptions.Item>
                    <Descriptions.Item label="钻石">40%</Descriptions.Item>
                    <Descriptions.Item label="触达用户">123232人</Descriptions.Item>
                    <Descriptions.Item label="累计收益">123232元</Descriptions.Item>
                    <Descriptions.Item label="ARPU">0.5/人</Descriptions.Item>
                  </Descriptions>
                </Col>
              </Skeleton>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              {' '}
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      style={{ marginRight: '15px', width: '100px', height: '100px' }}
                    />
                  }
                  title="口红机"
                  description="T口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，斯柯达速度快【 是，DPS看到视频"
                />
                <Col style={{ marginTop: '24px' }}>
                  <Descriptions bordered layout="vertical" size="small">
                    <Descriptions.Item label="白银">40%</Descriptions.Item>
                    <Descriptions.Item label="黄金">20%</Descriptions.Item>
                    <Descriptions.Item label="钻石">40%</Descriptions.Item>
                    <Descriptions.Item label="触达用户">123232人</Descriptions.Item>
                    <Descriptions.Item label="累计收益">123232元</Descriptions.Item>
                    <Descriptions.Item label="ARPU">0.5/人</Descriptions.Item>
                  </Descriptions>
                </Col>
              </Skeleton>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              {' '}
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      style={{ marginRight: '15px', width: '100px', height: '100px' }}
                    />
                  }
                  title="口红机"
                  description="T口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，口红机手机四季豆苏东坡上课都是蝌蚪宽松皮短裤上课哦平底宽松皮裤哦，斯柯达速度快【 是，DPS看到视频"
                />
                <Col style={{ marginTop: '24px' }}>
                  <Descriptions bordered layout="vertical" size="small">
                    <Descriptions.Item label="白银">40%</Descriptions.Item>
                    <Descriptions.Item label="黄金">20%</Descriptions.Item>
                    <Descriptions.Item label="钻石">40%</Descriptions.Item>
                    <Descriptions.Item label="触达用户">123232人</Descriptions.Item>
                    <Descriptions.Item label="累计收益">123232元</Descriptions.Item>
                    <Descriptions.Item label="ARPU">0.5/人</Descriptions.Item>
                  </Descriptions>
                </Col>
              </Skeleton>
            </Card.Grid>
          </Card>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default Analysis;
