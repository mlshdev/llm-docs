> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymenttokencontext/merchantdomain](https://developer.apple.com/documentation/applepayontheweb/applepaypaymenttokencontext/merchantdomain)

# merchantDomain

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The merchant’s top-level domain that the Apple Pay server associates with the payment token.

## Declaration

```
DOMString merchantDomain;
```

<a id="Discussion"></a>

## Discussion

This value is optional; provide the top-level domain for the merchant if it’s available.

## See Also

### Specifying the merchant

- [merchantIdentifier](merchantidentifier.md): The Apply Pay merchant identifier.
- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [externalIdentifier](externalidentifier.md): An external identifier for the merchant.
