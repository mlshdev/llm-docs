> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/direction-swift.enum/forward](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/direction-swift.enum/forward)

# AVSampleBufferRequest.Direction.forward (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of following samples may be zero or greater.

## Declaration

```swift
case forward
```

<a id="Discussion"></a>

## Discussion

The number of following samples allowed is subject to the [limitCursor](../limitcursor.md), [preferredMinSampleCount](../preferredminsamplecount.md), and [maxSampleCount](../maxsamplecount.md) property values.

## See Also

### Buffer direction

- [AVSampleBufferRequest.Direction.none](none.md): A single sample will be loaded.
- [AVSampleBufferRequest.Direction.reverse](reverse.md): The number of previous samples may be zero or greater.

# AVSampleBufferRequestDirectionForward (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of following samples may be zero or greater.

## Declaration

```objectivec
AVSampleBufferRequestDirectionForward
```

<a id="Discussion"></a>

## Discussion

The number of following samples allowed is subject to the [limitCursor](../limitcursor.md), [preferredMinSampleCount](../preferredminsamplecount.md), and [maxSampleCount](../maxsamplecount.md) property values.

## See Also

### Buffer direction

- [AVSampleBufferRequestDirectionNone](none.md): A single sample will be loaded.
- [AVSampleBufferRequestDirectionReverse](reverse.md): The number of previous samples may be zero or greater.
