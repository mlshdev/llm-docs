> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintentresponse/code](https://developer.apple.com/documentation/intents/instartworkoutintentresponse/code)

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code that indicates whether you successfully handled the intent.

## Declaration

```swift
var code: INStartWorkoutIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INStartWorkoutIntentResponseCode](../instartworkoutintentresponsecode.md): Constants that indicate the response state.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code that indicates whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INStartWorkoutIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INStartWorkoutIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INStartWorkoutIntentResponseCode](../instartworkoutintentresponsecode.md): Constants that indicate the response state.
