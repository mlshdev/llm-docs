> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/direction-swift.enum/none](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/direction-swift.enum/none)

# AVSampleBufferRequest.Direction.none (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single sample will be loaded.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

When this constant is set, the [limitCursor](../limitcursor.md), [preferredMinSampleCount](../preferredminsamplecount.md), and [maxSampleCount](../maxsamplecount.md) properties are ignored.

## See Also

### Buffer direction

- [AVSampleBufferRequest.Direction.forward](forward.md): The number of following samples may be zero or greater.
- [AVSampleBufferRequest.Direction.reverse](reverse.md): The number of previous samples may be zero or greater.

# AVSampleBufferRequestDirectionNone (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single sample will be loaded.

## Declaration

```objectivec
AVSampleBufferRequestDirectionNone
```

<a id="Discussion"></a>

## Discussion

When this constant is set, the [limitCursor](../limitcursor.md), [preferredMinSampleCount](../preferredminsamplecount.md), and [maxSampleCount](../maxsamplecount.md) properties are ignored.

## See Also

### Buffer direction

- [AVSampleBufferRequestDirectionForward](forward.md): The number of following samples may be zero or greater.
- [AVSampleBufferRequestDirectionReverse](reverse.md): The number of previous samples may be zero or greater.
