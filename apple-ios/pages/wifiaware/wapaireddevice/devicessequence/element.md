> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wapaireddevice/devicessequence/element

# WAPairedDevice.DevicesSequence.Element

**Framework:** Wi-Fi Aware  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A dictionary holding a snapshot of currently paired devices accessible to your app.

## Declaration

```swift
typealias Element = WAPairedDevice.Devices
```

## See Also

### Getting async updates

- [WAPairedDevice.DevicesSequence.AsyncIterator](asynciterator.md): An iterator for the sequence of devices.
- [makeAsyncIterator()](makeasynciterator%28%29.md): Makes an asynchronous iterator that provides successive device snapshots when the list of paired devices known to the app changes.
