> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeletionreason/nointerestedclients](https://developer.apple.com/documentation/sensorkit/srdeletionreason/nointerestedclients)

# SRDeletionReason.noInterestedClients (Swift)

**Framework:** SensorKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Indicates that the sensor has no active stakeholders.

## Declaration

```swift
case noInterestedClients
```

<a id="Discussion"></a>

## Discussion

The framework deletes samples for this reason when there’s been no recording activity for a particular sensor.

## See Also

### Reasons

- [SRDeletionReason.ageLimit](agelimit.md): Indicates that the sample outlived the framework’s retention limit.
- [SRDeletionReason.lowDiskSpace](lowdiskspace.md): Indicates that the system’s disk space is low.
- [SRDeletionReason.systemInitiated](systeminitiated.md): Indicates that the system requests deletion.
- [SRDeletionReason.userInitiated](userinitiated.md): Indicates that the user requests deletion.

# SRDeletionReasonNoInterestedClients (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Indicates that the sensor has no active stakeholders.

## Declaration

```objectivec
SRDeletionReasonNoInterestedClients
```

<a id="Discussion"></a>

## Discussion

The framework deletes samples for this reason when there’s been no recording activity for a particular sensor.

## See Also

### Reasons

- [SRDeletionReasonAgeLimit](agelimit.md): Indicates that the sample outlived the framework’s retention limit.
- [SRDeletionReasonLowDiskSpace](lowdiskspace.md): Indicates that the system’s disk space is low.
- [SRDeletionReasonSystemInitiated](systeminitiated.md): Indicates that the system requests deletion.
- [SRDeletionReasonUserInitiated](userinitiated.md): Indicates that the user requests deletion.
