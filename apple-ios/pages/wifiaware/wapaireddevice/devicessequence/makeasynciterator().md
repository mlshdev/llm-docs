> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wapaireddevice/devicessequence/makeasynciterator()

# makeAsyncIterator()

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Makes an asynchronous iterator that provides successive device snapshots when the list of paired devices known to the app changes.

## Declaration

```swift
func makeAsyncIterator() -> WAPairedDevice.DevicesSequence.AsyncIterator
```

<a id="return-value"></a>

## Return Value

A new asynchronous iterator vending [WAPairedDevice.Devices](../devices.md) elements when changes occur.

## See Also

### Getting async updates

- [WAPairedDevice.DevicesSequence.AsyncIterator](asynciterator.md): An iterator for the sequence of devices.
- [WAPairedDevice.DevicesSequence.Element](element.md): A dictionary holding a snapshot of currently paired devices accessible to your app.
