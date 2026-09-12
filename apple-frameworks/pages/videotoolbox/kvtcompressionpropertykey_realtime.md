> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_realtime](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_realtime)

# kVTCompressionPropertyKey_RealTime (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether it’s recommended that the video encoder perform compression in real time.

## Declaration

```swift
let kVTCompressionPropertyKey_RealTime: CFString
```

<a id="Discussion"></a>

## Discussion

For offline compression, clients may set this property to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), which indicates that it is OK for the video encoder to work slower than real time in order to produce a better result.

For real-time compression, clients may set this property to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to recommend that encoding stay timely.

By default, this property is `NULL`, indicating unknown.

## See Also

### Runtime Restrictions

- [kVTCompressionPropertyKey_MaxFrameDelayCount](kvtcompressionpropertykey_maxframedelaycount.md): The maximum number of frames that a compressor is allowed to hold before it must output a compressed frame.
- [kVTCompressionPropertyKey_MaxH264SliceBytes](kvtcompressionpropertykey_maxh264slicebytes.md): The maximum slice size for H.264 encoding.
- [kVTCompressionPropertyKey_MaximizePowerEfficiency](kvtcompressionpropertykey_maximizepowerefficiency.md)

# kVTCompressionPropertyKey_RealTime (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether it’s recommended that the video encoder perform compression in real time.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_RealTime;
```

<a id="Discussion"></a>

## Discussion

For offline compression, clients may set this property to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), which indicates that it is OK for the video encoder to work slower than real time in order to produce a better result.

For real-time compression, clients may set this property to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to recommend that encoding stay timely.

By default, this property is `NULL`, indicating unknown.

## See Also

### Runtime Restrictions

- [kVTCompressionPropertyKey_MaxFrameDelayCount](kvtcompressionpropertykey_maxframedelaycount.md): The maximum number of frames that a compressor is allowed to hold before it must output a compressed frame.
- [kVTCompressionPropertyKey_MaxH264SliceBytes](kvtcompressionpropertykey_maxh264slicebytes.md): The maximum slice size for H.264 encoding.
- [kVTCompressionPropertyKey_MaximizePowerEfficiency](kvtcompressionpropertykey_maximizepowerefficiency.md)
