> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/events](https://developer.apple.com/documentation/proximityreader/paymentcardreader/events)

# events

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+

A stream of events you receive indicating the activities of the payment card reader.

## Declaration

```swift
final let events: AsyncStream<PaymentCardReader.Event>
```

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](../adding-support-for-tap-to-pay-on-iphone-to-your-app.md)

<a id="discussion"></a>

## Discussion

When calling [prepare(using:)](prepare%28using_%29.md), the [PaymentCardReader.Event.updateProgress(\_:)](event/updateprogress%28__%29.md) event will indicate the completion percentage of the configuration. When reading cards with [PaymentCardReaderSession](../paymentcardreadersession.md), the raised events will indicate the current state of the card-reading process.

## See Also

### Observing reader events

- [PaymentCardReader.Event](event.md): An event you receive indicating the state or activity of the payment card reader.
