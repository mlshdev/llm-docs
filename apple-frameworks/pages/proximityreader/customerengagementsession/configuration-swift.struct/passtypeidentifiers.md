> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/configuration-swift.struct/passtypeidentifiers](https://developer.apple.com/documentation/proximityreader/customerengagementsession/configuration-swift.struct/passtypeidentifiers)

# passTypeIdentifiers

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An array of pass type identifiers for the your passes.

## Declaration

```swift
var passTypeIdentifiers: [String]
```

<a id="discussion"></a>

## Discussion

The session queries the Wallet app using this array when you request the pass attribute option in the [requestCustomerInfo(for:fields:message:)](../requestcustomerinfo%28for_fields_message_%29.md). The session also validates this array against `AddPassRequest` to ensure only the merchant supported passes are added to the Wallet.
