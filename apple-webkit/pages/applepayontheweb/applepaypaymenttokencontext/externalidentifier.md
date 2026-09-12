> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymenttokencontext/externalidentifier](https://developer.apple.com/documentation/applepayontheweb/applepaypaymenttokencontext/externalidentifier)

# externalIdentifier

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An external identifier for the merchant.

## Declaration

```
required DOMString externalIdentifier;
```

<a id="Discussion"></a>

## Discussion

An external identifier for the merchant that the developer provides. If you request a payment token for another merchant, always use the same external identifier for that merchant on your website.

## See Also

### Specifying the merchant

- [merchantIdentifier](merchantidentifier.md): The Apply Pay merchant identifier.
- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [merchantDomain](merchantdomain.md): The merchant’s top-level domain that the Apple Pay server associates with the payment token.
