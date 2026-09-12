> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insharefocusstatusintent](https://developer.apple.com/documentation/intents/insharefocusstatusintent)

# INShareFocusStatusIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that indicates the user’s focus status is changing.

## Declaration

```swift
class INShareFocusStatusIntent
```

## Topics

### Creating an Intent

- [init(focusStatus:)](insharefocusstatusintent/init%28focusstatus_%29.md): Creates an intent with the specified focus status.

### Accessing the Focus Status

- [focusStatus](insharefocusstatusintent/focusstatus.md): The user’s preference for receiving communication notifications.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.

# INShareFocusStatusIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that indicates the user’s focus status is changing.

## Declaration

```objectivec
@interface INShareFocusStatusIntent : INIntent
```

## Topics

### Creating an Intent

- [initWithFocusStatus:](insharefocusstatusintent/init%28focusstatus_%29.md): Creates an intent with the specified focus status.

### Accessing the Focus Status

- [focusStatus](insharefocusstatusintent/focusstatus.md): The user’s preference for receiving communication notifications.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Sharing the User’s Focus Status

- [INShareFocusStatusIntentHandling](insharefocusstatusintenthandling.md): A set of methods an object implements to process intents that share the user’s focus status.
- [INShareFocusStatusIntentResponse](insharefocusstatusintentresponse.md): Your app’s response to an intent that shares the user’s focus status.
- [INShareFocusStatusIntentResponseCode](insharefocusstatusintentresponsecode.md): A constant that indicates your app’s ability to handle an intent to share the user’s focus status.
- [INFocusStatus](infocusstatus.md): The user’s preference for receiving notifications.
- [INFocusStatusCenter](infocusstatuscenter.md): An object that maintains the user’s current focus status and your app’s ability to access it.
- [INFocusStatusAuthorizationStatus](infocusstatusauthorizationstatus.md): A constant that indicates whether your app has authorization to access the user’s focus status.
