> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/customerinfo/barcodemessage](https://developer.apple.com/documentation/proximityreader/customerengagement/customerinfo/barcodemessage)

# barcodeMessage

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A message for the barcode.

## Declaration

```swift
let barcodeMessage: String?
```

<a id="discussion"></a>

## Discussion

The value is the `message` field of the barcode dictionary of the selected pass.

## See Also

### Getting customer information details

- [customerVASData](customervasdata.md): The encrypted VAS content of a selected Wallet pass.
- [emailAddress](emailaddress.md): The customer’s email address or Hide My Email address if supported.
- [phoneNumber](phonenumber.md): The customer’s phone number, if provided.
