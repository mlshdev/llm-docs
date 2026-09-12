> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvpixelbufferpoolfreebuffernotification](https://developer.apple.com/documentation/corevideo/kcvpixelbufferpoolfreebuffernotification)

# kCVPixelBufferPoolFreeBufferNotification (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification that the system posts if a buffer becomes available after it fails to create a pixel buffer with auxiliary attributes because it exceeded the threshold you specified.

## Declaration

```swift
let kCVPixelBufferPoolFreeBufferNotification: CFString
```

<a id="Discussion"></a>

## Discussion

The system posts this notification if a buffer becomes available after the [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:)](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md) function fails because the system exceeds the threshold you set for the [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md) key. The system won’t post this notification if you don’t set a value for the [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md) key for the `auxAttributes` parameter of the [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:)](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md) function.

# kCVPixelBufferPoolFreeBufferNotification (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification that the system posts if a buffer becomes available after it fails to create a pixel buffer with auxiliary attributes because it exceeded the threshold you specified.

## Declaration

```objectivec
extern CFStringRef const kCVPixelBufferPoolFreeBufferNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification if a buffer becomes available after the [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md) function fails because the system exceeds the threshold you set for the [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md) key. The system won’t post this notification if you don’t set a value for the [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md) key for the `auxAttributes` parameter of the [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md) function.
