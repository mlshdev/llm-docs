> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/isglobaltonemappingsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isglobaltonemappingsupported)

# isGlobalToneMappingSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports global tone mapping.

## Declaration

```swift
var isGlobalToneMappingSupported: Bool { get }
```

## See Also

### Determining color support

- [supportedColorSpaces](supportedcolorspaces.md): The list of the device’s supported color spaces.

# globalToneMappingSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports global tone mapping.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isGlobalToneMappingSupported) BOOL globalToneMappingSupported;
```

## See Also

### Determining color support

- [supportedColorSpaces](../../avcapturedeviceformat/supportedcolorspaces.md): The list of color spaces the format supports for image and video capture.
