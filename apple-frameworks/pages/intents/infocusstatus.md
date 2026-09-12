> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/infocusstatus](https://developer.apple.com/documentation/intents/infocusstatus)

# INFocusStatus (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The user’s preference for receiving notifications.

## Declaration

```swift
class INFocusStatus
```

<a id="overview"></a>

## Overview

When a user wants to focus, they can choose to prevent or delay notifications from most apps. Use this information to display that the user is in a focus to other people in your communication service.

## Topics

### Creating a Status

- [init(isFocused:)](infocusstatus/init%28isfocused_%29.md): Creates an object that indicates the user’s focus status.

### Accessing the User’s Status

- [isFocused](infocusstatus/isfocused-8ytve.md): The user’s preference for receiving communication notifications.

### Initializers

- [init(coder:)](infocusstatus/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.

# INFocusStatus (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The user’s preference for receiving notifications.

## Declaration

```objectivec
@interface INFocusStatus : NSObject
```

<a id="overview"></a>

## Overview

When a user wants to focus, they can choose to prevent or delay notifications from most apps. Use this information to display that the user is in a focus to other people in your communication service.

## Topics

### Creating a Status

- [initWithIsFocused:](https://developer.apple.com/documentation/intents/infocusstatus/initwithisfocused:): Creates an object that indicates the user’s ability to receive communication notifications.

### Accessing the User’s Status

- [isFocused](https://developer.apple.com/documentation/intents/infocusstatus/isfocused-78wbx): The user’s preference for receiving communication notifications.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntent](insharefocusstatusintent.md): An object that indicates the user’s focus status is changing.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.
