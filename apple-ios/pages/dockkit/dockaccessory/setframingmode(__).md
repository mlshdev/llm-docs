> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/setframingmode(_:)](https://developer.apple.com/documentation/dockkit/dockaccessory/setframingmode(_:))

# setFramingMode(\_:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Customize the dock accessory’s tracking behavior.

## Declaration

```swift
final func setFramingMode(_ mode: DockAccessory.FramingMode) async throws
```

## Parameters

- `mode`: The framing mode to set tracking to. See [DockAccessory.FramingMode](framingmode-swift.enum.md) for more information.

<a id="discussion"></a>

## Discussion

Use this method to change where DockKit places a subject within the frame. For example, a face may be on the left or right side within the video. If you disable system tracking, this setting applies locally to the current dock accessory only. Otherwise, this setting applies to any active camera stream.

Set the frame mode to the desired value before performing your own custom tracking.

The default is [DockAccessory.FramingMode.automatic](framingmode-swift.enum/automatic.md). See [DockAccessory.FramingMode](framingmode-swift.enum.md) for other values you can use to override.

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if device isn’t connected, or [DockKitError.notSupported](../dockkiterror/notsupported.md) in macOS.

## See Also

### Setting framing mode

- [framingMode](framingmode-swift.property.md): The current framing mode.
- [DockAccessory.FramingMode](framingmode-swift.enum.md): The mode to control framing of the subject when tracking.
