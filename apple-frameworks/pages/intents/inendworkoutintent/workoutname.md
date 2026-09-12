> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintent/workoutname](https://developer.apple.com/documentation/intents/inendworkoutintent/workoutname)

# workoutName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The name of the workout.

## Declaration

```swift
@NSCopying var workoutName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

If the user ended a specific workout, this property contains the name of that workout. The workout name can be user-specified, a workout name defined in your app’s global vocabulary file, or a custom user-spoken workout name.

# workoutName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The name of the workout.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * workoutName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * workoutName;
```

<a id="Discussion"></a>

## Discussion

If the user ended a specific workout, this property contains the name of that workout. The workout name can be user-specified, a workout name defined in your app’s global vocabulary file, or a custom user-spoken workout name.
