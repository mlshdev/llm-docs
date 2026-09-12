> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentorderdetails](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentorderdetails)

# ApplePayPaymentOrderDetails

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Structure  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A dictionary that contains metadata related to an order.

## Declaration

```
dictionary ApplePayPaymentOrderDetails {
	required DOMString orderTypeIdentifier;
	required DOMString orderIdentifier;
	required DOMString webServiceURL;
	required DOMString authenticationToken;
};
```

## Topics

### Providing order information

- [authenticationToken](applepaypaymentorderdetails/authenticationtoken.md): The authentication token supplied to your web service.
- [orderIdentifier](applepaypaymentorderdetails/orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [orderTypeIdentifier](applepaypaymentorderdetails/ordertypeidentifier.md): An identifier for the order type associated with the order.
- [webServiceURL](applepaypaymentorderdetails/webserviceurl.md): The URL of your web service.

## See Also

### Providing order details

- [orderDetails](applepaypaymentauthorizationresult/orderdetails.md): Optional metadata for an order that the customer placed using this payment method.
