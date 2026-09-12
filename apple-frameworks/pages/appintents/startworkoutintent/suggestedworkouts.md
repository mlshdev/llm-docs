> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/startworkoutintent/suggestedworkouts](https://developer.apple.com/documentation/appintents/startworkoutintent/suggestedworkouts)

# suggestedWorkouts

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A list of the supported workout styles.

## Declaration

```swift
static var suggestedWorkouts: [Self] { get }
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)

<a id="discussion"></a>

## Discussion

If your app is installed on Apple Watch Ultra, the system displays these workouts as options under the First Press settings when someone sets your app as the workout app in Settings \> Action Button.

For a complete description of implementing a [StartWorkoutIntent](../startworkoutintent.md), see [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)

## See Also

### Defining supported workouts

- [WorkoutStyle](workoutstyle-swift.associatedtype.md): The type to use for defining the intent’s workout style.
- [workoutStyle](workoutstyle-swift.property.md): The workout style for the intent.
- [invalidateSuggestedWorkouts()](invalidatesuggestedworkouts%28%29.md): Tells the system when the list of suggested workouts changes.
