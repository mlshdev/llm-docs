> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/charging-6xnqj](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/charging-6xnqj)

# charging

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · watchOS 5.0+

A Boolean value that indicates whether the electric vehicle is currently charging.

## Declaration

```swift
@nonobjc final var charging: Bool? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically, you assign a value to this property only after handling the intent.

## See Also

### Providing the Charge Status

- [activeConnector](activeconnector.md): The type of connector that’s currently delivering charge to the electric vehicle’s battery.
- [minutesToFull](minutestofull-2kbt6.md): The number of minutes it takes to fully charge the electric vehicle’s battery.
- [dateOfLastStateUpdate](dateoflaststateupdate.md): A timestamp that indicates the most recent charge status for the electric vehicle.
