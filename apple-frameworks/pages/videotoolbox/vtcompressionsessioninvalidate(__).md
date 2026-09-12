> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessioninvalidate(_:)](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessioninvalidate(_:))

# VTCompressionSessionInvalidate(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Tears down a compression session.

## Declaration

```swift
func VTCompressionSessionInvalidate(_ session: VTCompressionSession)
```

## Parameters

- `session`: The compression session to invalidate.

<a id="Discussion"></a>

## Discussion

When you finish using a compression session you created, call `VTCompressionSessionInvalidate` to tear it down, and then call [CFRelease](../corefoundation/cfrelease.md) to release its memory.

> **Note**

>  A compression session is automatically invalidated when its retain count reaches zero, but because sessions may be retained by multiple parties, it’s hard to predict when this will happen.  Calling `VTCompressionSessionInvalidate` ensures a deterministic, orderly teardown.

# VTCompressionSessionInvalidate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Tears down a compression session.

## Declaration

```objectivec
extern void VTCompressionSessionInvalidate(VTCompressionSessionRef session);
```

## Parameters

- `session`: The compression session to invalidate.

<a id="Discussion"></a>

## Discussion

When you finish using a compression session you created, call `VTCompressionSessionInvalidate` to tear it down, and then call [CFRelease](../corefoundation/cfrelease.md) to release its memory.

> **Note**

>  A compression session is automatically invalidated when its retain count reaches zero, but because sessions may be retained by multiple parties, it’s hard to predict when this will happen.  Calling `VTCompressionSessionInvalidate` ensures a deterministic, orderly teardown.
