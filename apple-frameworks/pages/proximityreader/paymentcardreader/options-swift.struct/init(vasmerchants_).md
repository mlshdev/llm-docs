> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/options-swift.struct/init(vasmerchants:)](https://developer.apple.com/documentation/proximityreader/paymentcardreader/options-swift.struct/init(vasmerchants:))

# init(vasMerchants:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 15.4+ (deprecated in 18.0) · iPadOS 15.4+ (deprecated in 18.0) · Mac Catalyst 17.0+ (deprecated in 18.0)

Creates a new options structure with the specified list of merchants.

> Use the init without vasMerchants

## Declaration

```swift
init(vasMerchants: [VASRequest.Merchant] = [])
```

## Parameters

- `vasMerchants`: An array of merchants with supported loyalty cards.
