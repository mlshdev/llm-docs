> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assavepasswordrequest/event-swift.enum](https://developer.apple.com/documentation/authenticationservices/assavepasswordrequest/event-swift.enum)

# ASSavePasswordRequest.Event (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```swift
enum Event
```

## Topics

### Enumeration Cases

- [ASSavePasswordRequest.Event.formDidDisappear](event-swift.enum/formdiddisappear.md): The save event that occurs when a form is submitted or removed from the screen without prompting the user.
- [ASSavePasswordRequest.Event.generatedPasswordFilled](event-swift.enum/generatedpasswordfilled.md): A save event that occurs when generated password is filled into a not yet submitted form.
- [ASSavePasswordRequest.Event.userInitiated](event-swift.enum/userinitiated.md): The save event that occurs when a user has expressly stated they wish to save the credential.

### Initializers

- [init(rawValue:)](event-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ASSavePasswordRequestEvent (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```objectivec
enum ASSavePasswordRequestEvent : NSInteger;
```

## Topics

### Enumeration Cases

- [ASSavePasswordRequestEventFormDidDisappear](event-swift.enum/formdiddisappear.md): The save event that occurs when a form is submitted or removed from the screen without prompting the user.
- [ASSavePasswordRequestEventGeneratedPasswordFilled](event-swift.enum/generatedpasswordfilled.md): A save event that occurs when generated password is filled into a not yet submitted form.
- [ASSavePasswordRequestEventUserInitiated](event-swift.enum/userinitiated.md): The save event that occurs when a user has expressly stated they wish to save the credential.
