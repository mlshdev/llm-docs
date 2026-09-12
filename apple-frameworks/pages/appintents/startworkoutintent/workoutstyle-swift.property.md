> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/startworkoutintent/workoutstyle-swift.property](https://developer.apple.com/documentation/appintents/startworkoutintent/workoutstyle-swift.property)

# workoutStyle

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The workout style for the intent.

## Declaration

```swift
var workoutStyle: Self.WorkoutStyle { get set }
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)

<a id="discussion"></a>

## Discussion

Your implementation’s `workoutStyle` property must be a type you define that adopts either the [AppEnum](../appenum.md) or [AppEntity](../appentity.md) protocol. Declare this property using the [AppIntent.Parameter](../appintent/parameter.md) property wrapper.

```swift
// Define a parameter that specifies the type of workout that this
// intent starts.
@Parameter(title: "Start Workout Entity")
var workoutStyle: WorkoutEnum
```

For a complete description of implementing a [StartWorkoutIntent](../startworkoutintent.md), see [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)

## See Also

### Defining supported workouts

- [WorkoutStyle](workoutstyle-swift.associatedtype.md): The type to use for defining the intent’s workout style.
- [suggestedWorkouts](suggestedworkouts.md): A list of the supported workout styles.
- [invalidateSuggestedWorkouts()](invalidatesuggestedworkouts%28%29.md): Tells the system when the list of suggested workouts changes.
