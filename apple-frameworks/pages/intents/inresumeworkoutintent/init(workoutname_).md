> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintent/init(workoutname:)](https://developer.apple.com/documentation/intents/inresumeworkoutintent/init(workoutname:))

# init(workoutName:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes an intent object with the specified workout name.

## Declaration

```swift
init(workoutName: INSpeakableString?)
```

## Parameters

- `workoutName`: The name of the workout.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Siri creates instances when the user asks to resume a workout. However, you can use this method during testing to create intent objects that validate your intent handling code paths.

# initWithWorkoutName: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes an intent object with the specified workout name.

## Declaration

```objectivec
- (instancetype) initWithWorkoutName:(INSpeakableString *) workoutName;
```

## Parameters

- `workoutName`: The name of the workout.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Siri creates instances when the user asks to resume a workout. However, you can use this method during testing to create intent objects that validate your intent handling code paths.
