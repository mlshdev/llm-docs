> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/customerinfo/customervasdata](https://developer.apple.com/documentation/proximityreader/customerengagement/customerinfo/customervasdata)

# customerVASData

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The encrypted VAS content of a selected Wallet pass.

## Declaration

```swift
let customerVASData: Data?
```

<a id="discussion"></a>

## Discussion

The encrypted content of the pass stored in Wallet, which contains the loyalty or reward pass identifier. See [VASReadResult.ReadEntry](../../vasreadresult/readentry.md).

## See Also

### Getting customer information details

- [barcodeMessage](barcodemessage.md): A message for the barcode.
- [emailAddress](emailaddress.md): The customer’s email address or Hide My Email address if supported.
- [phoneNumber](phonenumber.md): The customer’s phone number, if provided.
