> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymenttokencontext/merchantidentifier](https://developer.apple.com/documentation/applepayontheweb/applepaypaymenttokencontext/merchantidentifier)

# merchantIdentifier

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The Apply Pay merchant identifier.

## Declaration

```
required DOMString merchantIdentifier;
```

<a id="Discussion"></a>

## Discussion

The merchant identifier you provide when you make an Apple Pay payment request. If you request a payment token for another merchant, use their merchant identifier, if available. Otherwise, use your own merchant identifier.

For more information about merchant identifiers, see [Configuring Your Environment](../configuring-your-environment.md).

## See Also

### Specifying the merchant

- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [merchantDomain](merchantdomain.md): The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- [externalIdentifier](externalidentifier.md): An external identifier for the merchant.
