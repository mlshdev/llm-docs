> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagesourceprioritizequality](https://developer.apple.com/documentation/imageio/kcgimagesourceprioritizequality)

# kCGImageSourcePrioritizeQuality (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean value that indicates whether to prioritize image quality over decode speed.

## Declaration

```swift
let kCGImageSourcePrioritizeQuality: CFString
```

<a id="discussion"></a>

## Discussion

When you set this key to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the image source decodes the full-size image using the highest-quality decode method available for the file. The value of this key is a [CFBoolean](../corefoundation/cfboolean.md). The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md).

Currently, image sources support this option only for camera RAW images. This key is a no-op when it is absent or [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), when the image isn’t a camera RAW format, or when no higher-quality decode method is available, so it is always safe to set.

Include this key in the options dictionary you pass to the functions [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md) and [CGImageSourceCreateImageAtIndex(\_:\_:\_:)](cgimagesourcecreateimageatindex%28______%29.md).

<a id="Example"></a>

## Example

**Swift**

```swift
let options = [
    kCGImageSourcePrioritizeQuality: true
] as CFDictionary
let image = CGImageSourceCreateImageAtIndex(source, 0, options)
```

**Objective-C**

```objc
NSDictionary *options = @{
    (id)kCGImageSourcePrioritizeQuality: @YES
};
CGImageRef image = CGImageSourceCreateImageAtIndex(source, 0, (CFDictionaryRef)options);
```

# kCGImageSourcePrioritizeQuality (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean value that indicates whether to prioritize image quality over decode speed.

## Declaration

```objectivec
extern CFStringRef const kCGImageSourcePrioritizeQuality;
```

<a id="discussion"></a>

## Discussion

When you set this key to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the image source decodes the full-size image using the highest-quality decode method available for the file. The value of this key is a [CFBooleanRef](../corefoundation/cfboolean.md). The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md).

Currently, image sources support this option only for camera RAW images. This key is a no-op when it is absent or [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), when the image isn’t a camera RAW format, or when no higher-quality decode method is available, so it is always safe to set.

Include this key in the options dictionary you pass to the functions [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md) and [CGImageSourceCreateImageAtIndex](cgimagesourcecreateimageatindex%28______%29.md).

<a id="Example"></a>

## Example

**Swift**

```swift
let options = [
    kCGImageSourcePrioritizeQuality: true
] as CFDictionary
let image = CGImageSourceCreateImageAtIndex(source, 0, options)
```

**Objective-C**

```objc
NSDictionary *options = @{
    (id)kCGImageSourcePrioritizeQuality: @YES
};
CGImageRef image = CGImageSourceCreateImageAtIndex(source, 0, (CFDictionaryRef)options);
```
