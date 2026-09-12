> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice/devicessequence/asynciterator](https://developer.apple.com/documentation/wifiaware/wapaireddevice/devicessequence/asynciterator)

# WAPairedDevice.DevicesSequence.AsyncIterator

**Framework:** Wi-Fi Aware  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An iterator for the sequence of devices.

## Declaration

```swift
class AsyncIterator
```

## Topics

### Getting the next asynchronous update

- [WAPairedDevice.DevicesSequence.AsyncIterator.Element](asynciterator/element.md): A dictionary holding a snapshot of currently paired devices accessible to your app.
- [next()](asynciterator/next%28%29.md): Returns the next dictionary in the sequence.

### Throwing an error

- [WAPairedDevice.DevicesSequence.AsyncIterator.Failure](asynciterator/failure.md): The type of error that the sequence can produce.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

## See Also

### Getting async updates

- [makeAsyncIterator()](makeasynciterator%28%29.md): Makes an asynchronous iterator that provides successive device snapshots when the list of paired devices known to the app changes.
- [WAPairedDevice.DevicesSequence.Element](element.md): A dictionary holding a snapshot of currently paired devices accessible to your app.
