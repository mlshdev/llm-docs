> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/updateevent](https://developer.apple.com/documentation/proximityreader/paymentcardreader/updateevent)

# PaymentCardReader.UpdateEvent

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ (deprecated in 16.0) · iPadOS 15.4+ (deprecated in 16.0) · Mac Catalyst 17.0+ (deprecated in 17.0)

An event you receive during the configuration of the payment system.

> Use PaymentCardReader.Event

## Declaration

```swift
enum UpdateEvent
```

<a id="overview"></a>

## Overview

If the [prepare(using:updateHandler:)](prepare%28using_updatehandler_%29.md) must update the device’s configuration, it delivers events to the update handler you provided. Use those events to monitor the status of the update.

## Topics

### Enumeration Cases

- [PaymentCardReader.UpdateEvent.notReady](updateevent/notready.md): Deprecated. A reader that is not ready to perform transactions.
- [PaymentCardReader.UpdateEvent.progress(\_:)](updateevent/progress%28__%29.md): Deprecated. The current update progress, specified as an integer value from 1 to 100.

### Instance Properties

- [name](updateevent/name.md): Deprecated. The name of the event.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [id](id.md): Deprecated. A unique identifier for this object.
- [prepare(using:updateHandler:)](prepare%28using_updatehandler_%29.md): Deprecated. Configures the pipeline for reading payment or loyalty cards.
