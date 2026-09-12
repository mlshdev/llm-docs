> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsessioninvalidate(_:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessioninvalidate(_:))

# VTDecompressionSessionInvalidate(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Tears down a decompression session.

## Declaration

```swift
func VTDecompressionSessionInvalidate(_ session: VTDecompressionSession)
```

## Parameters

- `session`: The decompression session to invalidate.

<a id="Discussion"></a>

## Discussion

When you finish with a decompression session you created, call this function to tear it down, and then [CFRelease](../corefoundation/cfrelease.md) to release your object reference.

> **Note**

>  A decompression session is automatically invalidated when its retain count reaches zero, but because sessions may be retained by multiple parties, it can be hard to predict when this will happen. Calling `VTDecompressionSessionInvalidate` ensures a deterministic, orderly teardown.

# VTDecompressionSessionInvalidate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Tears down a decompression session.

## Declaration

```objectivec
extern void VTDecompressionSessionInvalidate(VTDecompressionSessionRef session);
```

## Parameters

- `session`: The decompression session to invalidate.

<a id="Discussion"></a>

## Discussion

When you finish with a decompression session you created, call this function to tear it down, and then [CFRelease](../corefoundation/cfrelease.md) to release your object reference.

> **Note**

>  A decompression session is automatically invalidated when its retain count reaches zero, but because sessions may be retained by multiple parties, it can be hard to predict when this will happen. Calling `VTDecompressionSessionInvalidate` ensures a deterministic, orderly teardown.
