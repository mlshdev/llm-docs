> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/cancelread()

# cancelRead()

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

Dismiss the sheet that prompts someone to present their card for reading.

## Declaration

```swift
func cancelRead() async throws -> Bool
```

<a id="discussion"></a>

## Discussion

You can cancel a read operation before the device detects the card and starts reading it, but not after. Once the device begins reading the card, you cannot dismiss the sheet.

The reader supports only one read operation at a time. This method affects only the currently active read operation.
