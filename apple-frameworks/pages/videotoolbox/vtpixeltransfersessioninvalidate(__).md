> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtpixeltransfersessioninvalidate(_:)](https://developer.apple.com/documentation/videotoolbox/vtpixeltransfersessioninvalidate(_:))

# VTPixelTransferSessionInvalidate(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.8+ · tvOS 16.0+ · visionOS 1.0+

Tears down a pixel transfer session.

## Declaration

```swift
func VTPixelTransferSessionInvalidate(_ session: VTPixelTransferSession)
```

## Parameters

- `session`: The pixel transfer session to invalidate.

<a id="Discussion"></a>

## Discussion

When you finish with a pixel transfer session you created, call this function to tear it down, and then call [CFRelease](../corefoundation/cfrelease.md) to release your object reference.

> **Note**

>  A pixel transfer session is automatically invalidated when its retain count reaches zero, but because sessions may be retained by multiple parties, it’s hard to predict when the invalidation will happen.  Calling this function ensures a deterministic, orderly teardown.

# VTPixelTransferSessionInvalidate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.8+ · tvOS 16.0+ · visionOS 1.0+

Tears down a pixel transfer session.

## Declaration

```objectivec
extern void VTPixelTransferSessionInvalidate(VTPixelTransferSessionRef session);
```

## Parameters

- `session`: The pixel transfer session to invalidate.

<a id="Discussion"></a>

## Discussion

When you finish with a pixel transfer session you created, call this function to tear it down, and then call [CFRelease](../corefoundation/cfrelease.md) to release your object reference.

> **Note**

>  A pixel transfer session is automatically invalidated when its retain count reaches zero, but because sessions may be retained by multiple parties, it’s hard to predict when the invalidation will happen.  Calling this function ensures a deterministic, orderly teardown.
