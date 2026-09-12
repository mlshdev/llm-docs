> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediadevice/id](https://developer.apple.com/documentation/nowplaying/mediadevice/id)

# id

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The unique identifier for this device.

## Declaration

```swift
let id: String
```

<a id="discussion"></a>

## Discussion

Use a stable, locally unique identifier for this device, such as a serial number hardware address, or persistent device name. The identifier must be consistent across app launches for the same device.
