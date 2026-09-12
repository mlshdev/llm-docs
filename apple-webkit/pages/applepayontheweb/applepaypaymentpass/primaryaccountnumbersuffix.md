> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentpass/primaryaccountnumbersuffix](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentpass/primaryaccountnumbersuffix)

# primaryAccountNumberSuffix

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A version of the primary account number suitable for display in your UI.

## Declaration

```
required DOMString primaryAccountNumberSuffix;
```

<a id="Discussion"></a>

## Discussion

Note that this value is typically the last four or five digits of the account number, but the number of digits can vary by issuer. This value is not related to the value of the [primaryAccountIdentifier](primaryaccountidentifier.md) value.

## See Also

### Account Identity

- [primaryAccountIdentifier](primaryaccountidentifier.md): The unique identifier for the primary account number for the payment card.
- [deviceAccountIdentifier](deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [deviceAccountNumberSuffix](deviceaccountnumbersuffix.md): A version of the device account number suitable for display in your UI.
