> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/startworkoutintent/workoutstyle-swift.associatedtype](https://developer.apple.com/documentation/appintents/startworkoutintent/workoutstyle-swift.associatedtype)

# WorkoutStyle

**Framework:** App Intents  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The type to use for defining the intent’s workout style.

## Declaration

```swift
associatedtype WorkoutStyle : AppValue
```

<a id="discussion"></a>

## Discussion

Assign a type that adopts either the [AppEnum](../appenum.md) or [AppEntity](../appentity.md) protocol.

## See Also

### Defining supported workouts

- [workoutStyle](workoutstyle-swift.property.md): The workout style for the intent.
- [suggestedWorkouts](suggestedworkouts.md): A list of the supported workout styles.
- [invalidateSuggestedWorkouts()](invalidatesuggestedworkouts%28%29.md): Tells the system when the list of suggested workouts changes.
