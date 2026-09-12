> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/infocusstatuscenter](https://developer.apple.com/documentation/intents/infocusstatuscenter)

# INFocusStatusCenter (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that maintains the user’s current focus status and your app’s ability to access it.

## Declaration

```swift
class INFocusStatusCenter
```

## Topics

### Accessing the Default Status Center

- [default](infocusstatuscenter/default.md): The systemwide object that holds the user’s focus status.

### Requesting Authorization

- [requestAuthorization(completionHandler:)](infocusstatuscenter/requestauthorization%28completionhandler_%29.md): Asks the system for access to the user’s focus status.
- [authorizationStatus](infocusstatuscenter/authorizationstatus.md): Returns your app’s current ability to access the user’s focus status.

### Retrieving the User’s Focus Status

- [focusStatus](infocusstatuscenter/focusstatus.md): The user’s ability to receive notifications.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.

# INFocusStatusCenter (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that maintains the user’s current focus status and your app’s ability to access it.

## Declaration

```objectivec
@interface INFocusStatusCenter : NSObject
```

## Topics

### Accessing the Default Status Center

- [defaultCenter](infocusstatuscenter/default.md): The systemwide object that holds the user’s focus status.

### Requesting Authorization

- [requestAuthorizationWithCompletionHandler:](infocusstatuscenter/requestauthorization%28completionhandler_%29.md): Asks the system for access to the user’s focus status.
- [authorizationStatus](infocusstatuscenter/authorizationstatus.md): Returns your app’s current ability to access the user’s focus status.

### Retrieving the User’s Focus Status

- [focusStatus](infocusstatuscenter/focusstatus.md): The user’s ability to receive notifications.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.
