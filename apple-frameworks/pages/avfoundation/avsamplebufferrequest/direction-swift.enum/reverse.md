> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/direction-swift.enum/reverse](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/direction-swift.enum/reverse)

# AVSampleBufferRequest.Direction.reverse (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of previous samples may be zero or greater.

## Declaration

```swift
case reverse
```

<a id="Discussion"></a>

## Discussion

The number of previous samples allowed is subject to the [limitCursor](../limitcursor.md), [preferredMinSampleCount](../preferredminsamplecount.md), and [maxSampleCount](../maxsamplecount.md) property values.

## See Also

### Buffer direction

- [AVSampleBufferRequest.Direction.forward](forward.md): The number of following samples may be zero or greater.
- [AVSampleBufferRequest.Direction.none](none.md): A single sample will be loaded.

# AVSampleBufferRequestDirectionReverse (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of previous samples may be zero or greater.

## Declaration

```objectivec
AVSampleBufferRequestDirectionReverse
```

<a id="Discussion"></a>

## Discussion

The number of previous samples allowed is subject to the [limitCursor](../limitcursor.md), [preferredMinSampleCount](../preferredminsamplecount.md), and [maxSampleCount](../maxsamplecount.md) property values.

## See Also

### Buffer direction

- [AVSampleBufferRequestDirectionForward](forward.md): The number of following samples may be zero or greater.
- [AVSampleBufferRequestDirectionNone](none.md): A single sample will be loaded.
