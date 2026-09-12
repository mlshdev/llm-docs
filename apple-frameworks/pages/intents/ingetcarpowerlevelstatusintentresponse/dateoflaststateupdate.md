> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/dateoflaststateupdate](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/dateoflaststateupdate)

# dateOfLastStateUpdate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A timestamp that indicates the most recent charge status for the electric vehicle.

## Declaration

```swift
var dateOfLastStateUpdate: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

When creating a response object, you must set this property to the date and time when the system captured the charge status for the electric vehicle.

## See Also

### Providing the Charge Status

- [activeConnector](activeconnector.md): The type of connector that’s currently delivering charge to the electric vehicle’s battery.
- [charging](charging-6xnqj.md): A Boolean value that indicates whether the electric vehicle is currently charging.
- [minutesToFull](minutestofull-2kbt6.md): The number of minutes it takes to fully charge the electric vehicle’s battery.

# dateOfLastStateUpdate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A timestamp that indicates the most recent charge status for the electric vehicle.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDateComponents * dateOfLastStateUpdate;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDateComponents * dateOfLastStateUpdate;
```

<a id="Discussion"></a>

## Discussion

When creating a response object, you must set this property to the date and time when the system captured the charge status for the electric vehicle.

## See Also

### Providing the Charge Status

- [activeConnector](activeconnector.md): The type of connector that’s currently delivering charge to the electric vehicle’s battery.
- [charging](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/charging-7aamu): A Boolean value that indicates whether the electric vehicle is currently charging.
- [minutesToFull](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/minutestofull-25vcb): The number of minutes it will take to fully charge the electric vehicle’s battery.
