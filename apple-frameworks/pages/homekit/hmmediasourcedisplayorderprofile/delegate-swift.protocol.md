> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmediasourcedisplayorderprofile/delegate-swift.protocol](https://developer.apple.com/documentation/homekit/hmmediasourcedisplayorderprofile/delegate-swift.protocol)

# HMMediaSourceDisplayOrderProfile.Delegate

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The protocol through which a delegate receives updates on the order of input media sources.

## Declaration

```swift
protocol Delegate : AnyObject, Sendable
```

## Topics

### Instance Methods

- [mediaSourceDisplayOrderProfileDidUpdateOrder(\_:)](delegate-swift.protocol/mediasourcedisplayorderprofiledidupdateorder%28__%29.md): Informs the delegate when the system modifies the media source display order.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing input source order

- [writeOrder(\_:)](writeorder%28__%29.md): Writes the display order of the media sources to the accessory.
- [delegate](delegate-swift.property.md): The property that handles updates to the display order.
- [order](order.md): The display order of input media sources.
- [canModifyOrder](canmodifyorder.md): A Boolean that indicates if the display order of the input media sources can be modified.
