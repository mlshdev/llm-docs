> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insharefocusstatusintenthandling](https://developer.apple.com/documentation/intents/insharefocusstatusintenthandling)

# INShareFocusStatusIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

A set of methods an object implements to process intents that share the user’s focus status.

## Declaration

```swift
protocol INShareFocusStatusIntentHandling : NSObjectProtocol
```

## Topics

### Processing the Intent

- [confirm(intent:completion:)](insharefocusstatusintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the request to share the user’s focus status.
- [handle(intent:completion:)](insharefocusstatusintenthandling/handle%28intent_completion_%29.md): Handles the intent that shares the user’s focus status.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.

# INShareFocusStatusIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

A set of methods an object implements to process intents that share the user’s focus status.

## Declaration

```objectivec
@protocol INShareFocusStatusIntentHandling <NSObject>
```

## Topics

### Processing the Intent

- [confirmShareFocusStatus:completion:](insharefocusstatusintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the request to share the user’s focus status.
- [handleShareFocusStatus:completion:](insharefocusstatusintenthandling/handle%28intent_completion_%29.md): Handles the intent that shares the user’s focus status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.
