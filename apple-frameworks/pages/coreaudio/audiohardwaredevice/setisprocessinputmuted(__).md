> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/setisprocessinputmuted(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/setisprocessinputmuted(_:))

# setIsProcessInputMuted(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the isProcessInputMuted property.

## Declaration

```swift
func setIsProcessInputMuted(_ muted: Bool) throws
```

## Parameters

- `muted`: A Bool where true indicates that the current process’s audio will be zeroed out by the system.

<a id="discussion"></a>

## Discussion

This property does not apply to aggregate devices, just real, physical devices.
