export interface CancelOrderPara {
    Symbol: string; 
    OrderID: string; 
    Side: number;
}

export interface CancelCurPara {
    Symbol: string;
    WithdrawID: string;
}

export interface WithdrawCurPara {
    Symbol: string;
    Address: string;
    Amount: number;
}

export interface OrderTransactionPara {
    Symbol: string;
    Size: number;
    Price: number;
    Side: number; 
    Type: number; 
    Amount: number;
}

export interface ObtainOrderListPara {
    Symbol: string;
    PageIndex: number;
    PageSize: number;
    Status: number;
}

export interface CancelOrderResponse {
    result: number;
    code: string;
    data: boolean;
}

export interface CancelCurResponse {
    result: number;
    code: string;
    data: any;
}

export interface WithdrawCurResponse {
    result: number;
    code: string;
    data: any;
}

export interface OrderTransactionResponse {
    result: number;
    code: string;
    data: any;
}

export interface Order {
    orderid: string;
    symbol: string;
    price: number;
    avgprice: number;
    side: number;
    type: number;
    timestamp: string;
    amount: number;
    executedamount: number;
    status: number;
}

export interface ObtainOrderInformationResponse {
    result: number;
    code: string;
    data: [Order]
}
