> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/depthdatamap](https://developer.apple.com/documentation/avfoundation/avdepthdata/depthdatamap)

# depthDataMap (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A pixel buffer containing the depth data’s per-pixel depth or disparity data map.

## Declaration

```swift
var depthDataMap: CVPixelBuffer { get }
```

## See Also

### Reading pixel depth information

- [depthDataType](depthdatatype.md): The pixel format of the depth data map.

# depthDataMap (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A pixel buffer containing the depth data’s per-pixel depth or disparity data map.

## Declaration

```objectivec
@property (readonly) CVPixelBufferRef depthDataMap;
```

## See Also

### Reading pixel depth information

- [depthDataType](depthdatatype.md): The pixel format of the depth data map.
