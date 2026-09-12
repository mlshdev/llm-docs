> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediadevice/capabilities](https://developer.apple.com/documentation/nowplaying/mediadevice/capabilities)

# capabilities

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The control capabilities this device supports.

## Declaration

```swift
let capabilities: [MediaDevice.Capability]
```

<a id="discussion"></a>

## Discussion

Each value in the array describes one operation the device supports, built from a [MediaDevice.Capability](capability.md), such as [absoluteVolume(\_:onChange:)](capability/absolutevolume%28__onchange_%29.md) or [relativeVolume(onIncrement:onDecrement:)](capability/relativevolume%28onincrement_ondecrement_%29.md). Pass an empty array if the device exposes no controllable capabilities.
