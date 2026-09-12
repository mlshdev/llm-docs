> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphoneactivitymanager/status](https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager/status)

# CMHeadphoneActivityManager.Status (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · watchOS 2.0+

Headphone connection status updates.

## Declaration

```swift
enum Status
```

## Topics

### Enumeration Cases

- [CMHeadphoneActivityManager.Status.connected](status/connected.md): A compatible set of headphones is connected.
- [CMHeadphoneActivityManager.Status.disconnected](status/disconnected.md): The headphones disconnected.

### Initializers

- [init(rawValue:)](status/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [CMHeadphoneActivityManager.ActivityHandler](activityhandler.md): The type for a handler to be invoked when headphone motion activity data is available.
- [CMHeadphoneActivityManager.StatusHandler](statushandler.md): The type for a handler to be invoked with status updates.

# CMHeadphoneActivityStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Headphone connection status updates.

## Declaration

```objectivec
enum CMHeadphoneActivityStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [CMHeadphoneActivityStatusConnected](status/connected.md): A compatible set of headphones is connected.
- [CMHeadphoneActivityStatusDisconnected](status/disconnected.md): The headphones disconnected.

## See Also

### Supporting Types

- [CMHeadphoneActivityHandler](activityhandler.md): The type for a handler to be invoked when headphone motion activity data is available.
- [CMHeadphoneActivityStatusHandler](statushandler.md): The type for a handler to be invoked with status updates.
