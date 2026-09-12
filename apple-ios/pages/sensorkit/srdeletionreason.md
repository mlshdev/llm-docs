> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeletionreason](https://developer.apple.com/documentation/sensorkit/srdeletionreason)

# SRDeletionReason (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Reasons that the framework deletes samples.

## Declaration

```swift
enum SRDeletionReason
```

## Topics

### Reasons

- [SRDeletionReason.ageLimit](srdeletionreason/agelimit.md): Indicates that the sample outlived the framework’s retention limit.
- [SRDeletionReason.lowDiskSpace](srdeletionreason/lowdiskspace.md): Indicates that the system’s disk space is low.
- [SRDeletionReason.noInterestedClients](srdeletionreason/nointerestedclients.md): Indicates that the sensor has no active stakeholders.
- [SRDeletionReason.systemInitiated](srdeletionreason/systeminitiated.md): Indicates that the system requests deletion.
- [SRDeletionReason.userInitiated](srdeletionreason/userinitiated.md): Indicates that the user requests deletion.

### Initializers

- [init(rawValue:)](srdeletionreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Deletion Reason

- [reason](srdeletionrecord/reason.md): The reason the framework deletes samples.

# SRDeletionReason (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Reasons that the framework deletes samples.

## Declaration

```objectivec
enum SRDeletionReason : NSInteger;
```

## Topics

### Reasons

- [SRDeletionReasonAgeLimit](srdeletionreason/agelimit.md): Indicates that the sample outlived the framework’s retention limit.
- [SRDeletionReasonLowDiskSpace](srdeletionreason/lowdiskspace.md): Indicates that the system’s disk space is low.
- [SRDeletionReasonNoInterestedClients](srdeletionreason/nointerestedclients.md): Indicates that the sensor has no active stakeholders.
- [SRDeletionReasonSystemInitiated](srdeletionreason/systeminitiated.md): Indicates that the system requests deletion.
- [SRDeletionReasonUserInitiated](srdeletionreason/userinitiated.md): Indicates that the user requests deletion.

## See Also

### Accessing the Deletion Reason

- [reason](srdeletionrecord/reason.md): The reason the framework deletes samples.
