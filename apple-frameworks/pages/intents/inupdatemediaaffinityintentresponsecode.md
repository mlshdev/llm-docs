> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintentresponsecode](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintentresponsecode)

# INUpdateMediaAffinityIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Codes returned by an intents handler in response to an update media affinity request.

## Declaration

```swift
enum INUpdateMediaAffinityIntentResponseCode
```

## Topics

### Response Code

- [INUpdateMediaAffinityIntentResponseCode.unspecified](inupdatemediaaffinityintentresponsecode/unspecified.md): An unknown state.
- [INUpdateMediaAffinityIntentResponseCode.ready](inupdatemediaaffinityintentresponsecode/ready.md): The app is ready.
- [INUpdateMediaAffinityIntentResponseCode.inProgress](inupdatemediaaffinityintentresponsecode/inprogress.md): The app is currently trying to process the update affinity request.
- [INUpdateMediaAffinityIntentResponseCode.success](inupdatemediaaffinityintentresponsecode/success.md): The app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCode.failure](inupdatemediaaffinityintentresponsecode/failure.md): The app is unable to update the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCode.failureRequiringAppLaunch](inupdatemediaaffinityintentresponsecode/failurerequiringapplaunch.md): The user needs to launch the app to update the user’s affinity for the media.

### Initializers

- [init(rawValue:)](inupdatemediaaffinityintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing the Response Code

- [code](inupdatemediaaffinityintentresponse/code.md): The code that indicates whether the app successfully updated the user’s affinity for the media.

# INUpdateMediaAffinityIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Codes returned by an intents handler in response to an update media affinity request.

## Declaration

```objectivec
enum INUpdateMediaAffinityIntentResponseCode : NSInteger;
```

## Topics

### Response Code

- [INUpdateMediaAffinityIntentResponseCodeUnspecified](inupdatemediaaffinityintentresponsecode/unspecified.md): An unknown state.
- [INUpdateMediaAffinityIntentResponseCodeReady](inupdatemediaaffinityintentresponsecode/ready.md): The app is ready.
- [INUpdateMediaAffinityIntentResponseCodeInProgress](inupdatemediaaffinityintentresponsecode/inprogress.md): The app is currently trying to process the update affinity request.
- [INUpdateMediaAffinityIntentResponseCodeSuccess](inupdatemediaaffinityintentresponsecode/success.md): The app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCodeFailure](inupdatemediaaffinityintentresponsecode/failure.md): The app is unable to update the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCodeFailureRequiringAppLaunch](inupdatemediaaffinityintentresponsecode/failurerequiringapplaunch.md): The user needs to launch the app to update the user’s affinity for the media.

## See Also

### Providing the Response Code

- [code](inupdatemediaaffinityintentresponse/code.md): The code that indicates whether the app successfully updated the user’s affinity for the media.
