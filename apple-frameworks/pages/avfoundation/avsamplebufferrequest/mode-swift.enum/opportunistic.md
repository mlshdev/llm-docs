> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/mode-swift.enum/opportunistic](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/mode-swift.enum/opportunistic)

# AVSampleBufferRequest.Mode.opportunistic (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mode that indicates that opportunistic sample buffer creation requests load data as soon as possible.

## Declaration

```swift
case opportunistic
```

<a id="Discussion"></a>

## Discussion

In situations with multiple competing requests, a sample buffer generator may defer an opportunistic request in favor of another immediate request, or a scheduled requests with a presentation time close to the timebase time.

> **Important**

>  The system may postpone an opportunistic request indefinitely. Don’t use this mode for time-sensitive processing.

## See Also

### Mode scheduling

- [AVSampleBufferRequest.Mode.immediate](immediate.md): A mode that indicates that sample buffer creation requests load data as soon as possible.
- [AVSampleBufferRequest.Mode.scheduled](scheduled.md): A mode that indicates that sample buffer creation requests load data according to a scheduled deadline.

# AVSampleBufferRequestModeOpportunistic (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mode that indicates that opportunistic sample buffer creation requests load data as soon as possible.

## Declaration

```objectivec
AVSampleBufferRequestModeOpportunistic
```

<a id="Discussion"></a>

## Discussion

In situations with multiple competing requests, a sample buffer generator may defer an opportunistic request in favor of another immediate request, or a scheduled requests with a presentation time close to the timebase time.

> **Important**

>  The system may postpone an opportunistic request indefinitely. Don’t use this mode for time-sensitive processing.

## See Also

### Mode scheduling

- [AVSampleBufferRequestModeImmediate](immediate.md): A mode that indicates that sample buffer creation requests load data as soon as possible.
- [AVSampleBufferRequestModeScheduled](scheduled.md): A mode that indicates that sample buffer creation requests load data according to a scheduled deadline.
