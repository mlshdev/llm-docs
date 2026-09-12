> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_usinghardwareacceleratedvideoencoder](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_usinghardwareacceleratedvideoencoder)

# kVTCompressionPropertyKey_UsingHardwareAcceleratedVideoEncoder (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 10.9+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value indicating whether a hardware-accelerated video encoder is used.

## Declaration

```swift
let kVTCompressionPropertyKey_UsingHardwareAcceleratedVideoEncoder: CFString
```

<a id="Discussion"></a>

## Discussion

You can query this property using [VTSessionCopyProperty(\_:key:allocator:valueOut:)](vtsessioncopyproperty%28__key_allocator_valueout_%29.md) after you have enabled hardware accelerated encode using [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md) to see if a hardware-accelerated encoder was selected ([kCFBooleanTrue](../corefoundation/kcfbooleantrue.md)).

## See Also

### Hardware Acceleration

- [kVTCompressionPropertyKey_UsingGPURegistryID](kvtcompressionpropertykey_usinggpuregistryid.md)

# kVTCompressionPropertyKey_UsingHardwareAcceleratedVideoEncoder (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 10.9+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value indicating whether a hardware-accelerated video encoder is used.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_UsingHardwareAcceleratedVideoEncoder;
```

<a id="Discussion"></a>

## Discussion

You can query this property using [VTSessionCopyProperty](vtsessioncopyproperty%28__key_allocator_valueout_%29.md) after you have enabled hardware accelerated encode using [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md) to see if a hardware-accelerated encoder was selected ([kCFBooleanTrue](../corefoundation/kcfbooleantrue.md)).

## See Also

### Hardware Acceleration

- [kVTCompressionPropertyKey_UsingGPURegistryID](kvtcompressionpropertykey_usinggpuregistryid.md)
