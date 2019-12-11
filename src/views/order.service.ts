import axios, { AxiosPromise } from 'axios';
import { user } from '@/env/user';
import { CancelOrderPara, CancelCurPara, WithdrawCurPara, OrderTransactionPara, ObtainOrderInformationResponse, WithdrawCurResponse, ObtainOrderListPara, CancelOrderResponse, OrderTransactionResponse, CancelCurResponse } from '@/views/order.interface';

const baseUrl: string = 'https://api.IDCM.cc:8323/api/v1';
class OrderService {
    private config: any = {
        headers: {
            'X-IDCM-APIKEY': user.apiKey,
            'X-IDCM-SIGNATURE': user.sign,
            'X-IDCM-INPUT': '',
            'Content-Type': 'application/json'
        }
    };

    public cancelOrder({ Symbol, OrderID, Side }: CancelOrderPara): AxiosPromise<CancelOrderResponse> {
        this.config.headers['X-IDCM-INPUT'] = { Symbol, OrderID, Side };
        return axios.post(`${ baseUrl }/cancel_order`, this.config);
    }

    public cancelCurrency({ Symbol, WithdrawID }: CancelCurPara): AxiosPromise<CancelCurResponse> {
        this.config.headers['X-IDCM-INPUT'] = { Symbol, WithdrawID };
        return axios.post(`${ baseUrl }/cancel_withdraw`, this.config);
    }

    public withdrawCurrency({ Symbol, Address, Amount }: WithdrawCurPara): AxiosPromise<WithdrawCurResponse> {
        this.config.headers['X-IDCM-INPUT'] = { Symbol, Address, Amount };
        return axios.post(`${ baseUrl }/withdraw`, this.config);
    }

    public orderTransaction({ Symbol, Size, Price, Side, Type, Amount }: OrderTransactionPara): AxiosPromise<OrderTransactionResponse> {
        this.config.headers['X-IDCM-INPUT'] = { Symbol, Size, Price, Side, Type, Amount };
        return axios.post(`${ baseUrl }/trade`, this.config);
    }

    public obtainOrderList({ Symbol, PageIndex, PageSize, Status }: ObtainOrderListPara): AxiosPromise<ObtainOrderInformationResponse> {
        this.config.headers['X-IDCM-INPUT'] = { Symbol, PageIndex, PageSize, Status };
        return axios.post(`${ baseUrl }/gethistoryorder`, this.config);
    }
}

export const orderService = new OrderService();
