> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentorderdetails/orderidentifier](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentorderdetails/orderidentifier)

# orderIdentifier

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A unique order identifier scoped to your order type identifier.

## Declaration

```
required DOMString orderIdentifier;
```

<a id="Discussion"></a>

## Discussion

In combination with the order type identifier, this uniquely identifies an order within the system. The framework doesn’t display this value to the customer.

## See Also

### Providing order information

- [authenticationToken](authenticationtoken.md): The authentication token supplied to your web service.
- [orderTypeIdentifier](ordertypeidentifier.md): An identifier for the order type associated with the order.
- [webServiceURL](webserviceurl.md): The URL of your web service.
