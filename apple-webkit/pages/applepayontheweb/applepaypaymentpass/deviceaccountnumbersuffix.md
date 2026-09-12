> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentpass/deviceaccountnumbersuffix](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentpass/deviceaccountnumbersuffix)

# deviceAccountNumberSuffix

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A version of the device account number suitable for display in your UI.

## Declaration

```
DOMString deviceAccountNumberSuffix;
```

<a id="Discussion"></a>

## Discussion

This value is typically the last four or five digits of the device account number, but the number of digits can vary by issuer.

## See Also

### Account Identity

- [primaryAccountIdentifier](primaryaccountidentifier.md): The unique identifier for the primary account number for the payment card.
- [primaryAccountNumberSuffix](primaryaccountnumbersuffix.md): A version of the primary account number suitable for display in your UI.
- [deviceAccountIdentifier](deviceaccountidentifier.md): The unique identifier for the device-specific account number.
