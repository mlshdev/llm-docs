> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insharefocusstatusintentresponsecode](https://developer.apple.com/documentation/intents/insharefocusstatusintentresponsecode)

# INShareFocusStatusIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that indicates your app’s ability to handle an intent to share the user’s focus status.

## Declaration

```swift
enum INShareFocusStatusIntentResponseCode
```

## Topics

### Confirming the Intent

- [INShareFocusStatusIntentResponseCode.ready](insharefocusstatusintentresponsecode/ready.md): Your intent handler is ready to handle the intent.

### Handling the Intent

- [INShareFocusStatusIntentResponseCode.success](insharefocusstatusintentresponsecode/success.md): Your intent handler successfully updated the user’s communication status.
- [INShareFocusStatusIntentResponseCode.inProgress](insharefocusstatusintentresponsecode/inprogress.md): Your intent handler is handling the intent, but it may take some time.

### Reporting a Problem

- [INShareFocusStatusIntentResponseCode.failure](insharefocusstatusintentresponsecode/failure.md): Your intent handler is unable to handle the intent.
- [INShareFocusStatusIntentResponseCode.failureRequiringAppLaunch](insharefocusstatusintentresponsecode/failurerequiringapplaunch.md): The user needs to launch your app to update their focus status.
- [INShareFocusStatusIntentResponseCode.unspecified](insharefocusstatusintentresponsecode/unspecified.md): An unspecified response code.

### Initializers

- [init(rawValue:)](insharefocusstatusintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.

# INShareFocusStatusIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that indicates your app’s ability to handle an intent to share the user’s focus status.

## Declaration

```objectivec
enum INShareFocusStatusIntentResponseCode : NSInteger;
```

## Topics

### Confirming the Intent

- [INShareFocusStatusIntentResponseCodeReady](insharefocusstatusintentresponsecode/ready.md): Your intent handler is ready to handle the intent.

### Handling the Intent

- [INShareFocusStatusIntentResponseCodeSuccess](insharefocusstatusintentresponsecode/success.md): Your intent handler successfully updated the user’s communication status.
- [INShareFocusStatusIntentResponseCodeInProgress](insharefocusstatusintentresponsecode/inprogress.md): Your intent handler is handling the intent, but it may take some time.

### Reporting a Problem

- [INShareFocusStatusIntentResponseCodeFailure](insharefocusstatusintentresponsecode/failure.md): Your intent handler is unable to handle the intent.
- [INShareFocusStatusIntentResponseCodeFailureRequiringAppLaunch](insharefocusstatusintentresponsecode/failurerequiringapplaunch.md): The user needs to launch your app to update their focus status.
- [INShareFocusStatusIntentResponseCodeUnspecified](insharefocusstatusintentresponsecode/unspecified.md): An unspecified response code.

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.
