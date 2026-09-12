> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/minutestofull-2kbt6](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/minutestofull-2kbt6)

# minutesToFull

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · watchOS 5.0+

The number of minutes it takes to fully charge the electric vehicle’s battery.

## Declaration

```swift
@nonobjc final var minutesToFull: Int? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically, you assign a value to this property only after handling the intent.

## See Also

### Providing the Charge Status

- [activeConnector](activeconnector.md): The type of connector that’s currently delivering charge to the electric vehicle’s battery.
- [charging](charging-6xnqj.md): A Boolean value that indicates whether the electric vehicle is currently charging.
- [dateOfLastStateUpdate](dateoflaststateupdate.md): A timestamp that indicates the most recent charge status for the electric vehicle.
