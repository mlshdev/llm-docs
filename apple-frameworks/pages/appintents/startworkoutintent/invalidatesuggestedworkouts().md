> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/startworkoutintent/invalidatesuggestedworkouts()](https://developer.apple.com/documentation/appintents/startworkoutintent/invalidatesuggestedworkouts())

# invalidateSuggestedWorkouts()

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Tells the system when the list of suggested workouts changes.

## Declaration

```swift
static func invalidateSuggestedWorkouts()
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)

<a id="discussion"></a>

## Discussion

Call this method when you change the value of the [suggestedWorkouts](suggestedworkouts.md) property.

## See Also

### Defining supported workouts

- [WorkoutStyle](workoutstyle-swift.associatedtype.md): The type to use for defining the intent’s workout style.
- [workoutStyle](workoutstyle-swift.property.md): The workout style for the intent.
- [suggestedWorkouts](suggestedworkouts.md): A list of the supported workout styles.
