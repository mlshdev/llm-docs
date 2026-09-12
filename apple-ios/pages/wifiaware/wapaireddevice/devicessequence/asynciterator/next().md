> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice/devicessequence/asynciterator/next()](https://developer.apple.com/documentation/wifiaware/wapaireddevice/devicessequence/asynciterator/next())

# next()

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns the next dictionary in the sequence.

## Declaration

```swift
func next() async throws -> WAPairedDevice.DevicesSequence.AsyncIterator.Element?
```

<a id="return-value"></a>

## Return Value

The next [WAPairedDevice.Devices](../../devices.md) snapshot, or `nil` if it’s at the end of the sequence.

<a id="discussion"></a>

## Discussion

The [WAPairedDevice.Devices](../../devices.md) dictionary holds the latest snapshot of the currently paired devices that are known and accessible to your app.

> **Throws**

> An error if the system can’t read the sequence, or if your app isn’t permitted to access Wi-Fi Aware devices.

## See Also

### Getting the next asynchronous update

- [WAPairedDevice.DevicesSequence.AsyncIterator.Element](element.md): A dictionary holding a snapshot of currently paired devices accessible to your app.
