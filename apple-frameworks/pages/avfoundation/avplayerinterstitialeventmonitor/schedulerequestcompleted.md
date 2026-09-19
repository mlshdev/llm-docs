> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/schedulerequestcompleted

# AVPlayerInterstitialEventMonitor.ScheduleRequestCompleted

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

A NotificationCenter AsyncMessage that is sent when a daterange-schedule request completes

## Declaration

```swift
struct ScheduleRequestCompleted
```

## Parameters

- `scheduleIdentifier`: The ID attribute of the daterange-schedule
- `result`: On success, the serialized JSON Data from the schedule response

## Topics

### Inspecting the completion

- [scheduleIdentifier](schedulerequestcompleted/scheduleidentifier.md)
- [result](schedulerequestcompleted/result.md)

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
