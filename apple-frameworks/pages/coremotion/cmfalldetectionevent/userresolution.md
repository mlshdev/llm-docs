> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectionevent/userresolution](https://developer.apple.com/documentation/coremotion/cmfalldetectionevent/userresolution)

# CMFallDetectionEvent.UserResolution (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** watchOS 7.2+

User resolutions for fall detection events.

## Declaration

```swift
enum UserResolution
```

<a id="overview"></a>

## Overview

The resolution of an event reflects the user’s action in response to the fall detection notification. For example, the user might tap a button to respond inside the notification, or press the digital crown to dismiss the notification.

## Topics

### Resolutions

- [CMFallDetectionEvent.UserResolution.confirmed](userresolution/confirmed.md): The user confirmed the event.
- [CMFallDetectionEvent.UserResolution.dismissed](userresolution/dismissed.md): The user dismissed the fall event alert, but didn’t explicitly confirm or reject the event.
- [CMFallDetectionEvent.UserResolution.rejected](userresolution/rejected.md): The user rejected the fall event.
- [CMFallDetectionEvent.UserResolution.unresponsive](userresolution/unresponsive.md): The user didn’t respond to the fall event and the system hasn’t detected recovery motions.

### Initializers

- [init(rawValue:)](userresolution/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Fall Data

- [resolution](resolution.md): The event’s resolution.

# CMFallDetectionEventUserResolution (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

User resolutions for fall detection events.

## Declaration

```objectivec
enum CMFallDetectionEventUserResolution : NSInteger;
```

<a id="overview"></a>

## Overview

The resolution of an event reflects the user’s action in response to the fall detection notification. For example, the user might tap a button to respond inside the notification, or press the digital crown to dismiss the notification.

## Topics

### Resolutions

- [CMFallDetectionEventUserResolutionConfirmed](userresolution/confirmed.md): The user confirmed the event.
- [CMFallDetectionEventUserResolutionDismissed](userresolution/dismissed.md): The user dismissed the fall event alert, but didn’t explicitly confirm or reject the event.
- [CMFallDetectionEventUserResolutionRejected](userresolution/rejected.md): The user rejected the fall event.
- [CMFallDetectionEventUserResolutionUnresponsive](userresolution/unresponsive.md): The user didn’t respond to the fall event and the system hasn’t detected recovery motions.

## See Also

### Accessing Fall Data

- [resolution](resolution.md): The event’s resolution.
