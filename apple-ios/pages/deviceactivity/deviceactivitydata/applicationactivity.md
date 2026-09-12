> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata/applicationactivity](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/applicationactivity)

# DeviceActivityData.ApplicationActivity

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Activity data for an application.

## Declaration

```swift
struct ApplicationActivity
```

## Topics

### Identifying the application

- [application](applicationactivity/application.md): Access the application that accumulated the activity.

### Measuring activity

- [totalActivityDuration](applicationactivity/totalactivityduration.md): Access the total activity time for this application.

### Tracking usage

- [numberOfPickups](applicationactivity/numberofpickups.md): Access the number of pickups made directly to the application.
- [numberOfNotifications](applicationactivity/numberofnotifications.md): Access the number of notifications made by the application.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Organizing activity by type

- [DeviceActivityData.CategoryActivity](categoryactivity.md): Categorized representation of application and web domain activity.
- [DeviceActivityData.WebDomainActivity](webdomainactivity.md): Activity data for a web domain.
