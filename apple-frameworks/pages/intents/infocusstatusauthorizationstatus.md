> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/infocusstatusauthorizationstatus](https://developer.apple.com/documentation/intents/infocusstatusauthorizationstatus)

# INFocusStatusAuthorizationStatus (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that indicates whether your app has authorization to access the user’s focus status.

## Declaration

```swift
enum INFocusStatusAuthorizationStatus
```

## Topics

### Constants

- [INFocusStatusAuthorizationStatus.notDetermined](infocusstatusauthorizationstatus/notdetermined.md): The user hasn’t chosen whether to grant your app access to their focus status yet.
- [INFocusStatusAuthorizationStatus.restricted](infocusstatusauthorizationstatus/restricted.md): A restriction prevents your app from accessing the user’s focus status.
- [INFocusStatusAuthorizationStatus.denied](infocusstatusauthorizationstatus/denied.md): The user has denied your app access to their focus status.
- [INFocusStatusAuthorizationStatus.authorized](infocusstatusauthorizationstatus/authorized.md): Your app has authorization to access the user’s focus status.

### Initializers

- [init(rawValue:)](infocusstatusauthorizationstatus/init%28rawvalue_%29.md)

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
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.

# INFocusStatusAuthorizationStatus (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that indicates whether your app has authorization to access the user’s focus status.

## Declaration

```objectivec
enum INFocusStatusAuthorizationStatus : NSInteger;
```

## Topics

### Constants

- [INFocusStatusAuthorizationStatusNotDetermined](infocusstatusauthorizationstatus/notdetermined.md): The user hasn’t chosen whether to grant your app access to their focus status yet.
- [INFocusStatusAuthorizationStatusRestricted](infocusstatusauthorizationstatus/restricted.md): A restriction prevents your app from accessing the user’s focus status.
- [INFocusStatusAuthorizationStatusDenied](infocusstatusauthorizationstatus/denied.md): The user has denied your app access to their focus status.
- [INFocusStatusAuthorizationStatusAuthorized](infocusstatusauthorizationstatus/authorized.md): Your app has authorization to access the user’s focus status.

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
