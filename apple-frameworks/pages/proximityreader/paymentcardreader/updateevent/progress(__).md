> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/updateevent/progress(_:)](https://developer.apple.com/documentation/proximityreader/paymentcardreader/updateevent/progress(_:))

# PaymentCardReader.UpdateEvent.progress(\_:)

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 15.4+ (deprecated in 16.0) · iPadOS 15.4+ (deprecated in 16.0) · Mac Catalyst 17.0+ (deprecated in 17.0)

The current update progress, specified as an integer value from 1 to 100.

> Use PaymentCardReader.Event

## Declaration

```swift
case progress(Int)
```

<a id="discussion"></a>

## Discussion

This value represents the completion percentage of the update process.
