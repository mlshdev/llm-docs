> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inpauseworkoutintentresponse/code

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code that indicates whether you successfully handled the intent.

## Declaration

```swift
var code: INPauseWorkoutIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INPauseWorkoutIntentResponseCode](../inpauseworkoutintentresponsecode.md): Constants that indicate the response state.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code that indicates whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INPauseWorkoutIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INPauseWorkoutIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INPauseWorkoutIntentResponseCode](../inpauseworkoutintentresponsecode.md): Constants that indicate the response state.
