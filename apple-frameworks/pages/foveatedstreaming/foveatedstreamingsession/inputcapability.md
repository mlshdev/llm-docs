> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/inputcapability](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/inputcapability)

# FoveatedStreamingSession.InputCapability

**Framework:** Foveated Streaming  
**Kind:** Enumeration  
**Availability:** visionOS 27.0+

An input source that a streaming session can request to send.

## Declaration

```swift
enum InputCapability
```

<a id="overview"></a>

## Overview

A streaming session declares the input capabilities it needs via [requestedInputCapabilities](requestedinputcapabilities.md).

Input data will only be sent if a user authorizes it. To request authorization, use [requestAuthorization(for:)](requestauthorization%28for_%29.md). To understand if an input source is authorized, use [queryAuthorization(for:)](queryauthorization%28for_%29.md).

## Topics

### Enumeration Cases

- [FoveatedStreamingSession.InputCapability.accessoryTracking](inputcapability/accessorytracking.md): Accessory tracking input.
- [FoveatedStreamingSession.InputCapability.handTracking](inputcapability/handtracking.md): Hand tracking input.
- [FoveatedStreamingSession.InputCapability.microphone](inputcapability/microphone.md): Microphone input.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
