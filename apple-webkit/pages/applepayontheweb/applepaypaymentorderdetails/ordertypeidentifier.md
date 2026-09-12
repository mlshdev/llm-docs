> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentorderdetails/ordertypeidentifier](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentorderdetails/ordertypeidentifier)

# orderTypeIdentifier

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An identifier for the order type associated with the order.

## Declaration

```
required DOMString orderTypeIdentifier;
```

<a id="Discussion"></a>

## Discussion

This value must correspond with your signing certificate and isn’t displayed to the customer.

## See Also

### Providing order information

- [authenticationToken](authenticationtoken.md): The authentication token supplied to your web service.
- [orderIdentifier](orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [webServiceURL](webserviceurl.md): The URL of your web service.
