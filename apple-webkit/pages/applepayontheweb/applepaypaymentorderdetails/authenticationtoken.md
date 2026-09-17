> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepayontheweb/applepaypaymentorderdetails/authenticationtoken

# authenticationToken

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The authentication token supplied to your web service.

## Declaration

```
required DOMString authenticationToken;
```

<a id="Discussion"></a>

## Discussion

Required if you provide a web service.

## See Also

### Providing order information

- [orderIdentifier](orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [orderTypeIdentifier](ordertypeidentifier.md): An identifier for the order type associated with the order.
- [webServiceURL](webserviceurl.md): The URL of your web service.
