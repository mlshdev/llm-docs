> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagecommunication](https://developer.apple.com/documentation/identitylookup/ilmessagecommunication)

# ILMessageCommunication (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A concrete subclass representing a SMS message.

## Declaration

```swift
class ILMessageCommunication
```

## Topics

### Accessing Data

- [messageBody](ilmessagecommunication/messagebody.md): The content of the SMS message.

## Relationships

### Inherits From

- [ILCommunication](ilcommunication.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Communications

- [ILCommunication](ilcommunication.md): An abstract superclass representing a message or call to the user.
- [ILCallCommunication](ilcallcommunication.md): A concrete subclass representing a phone call.

# ILMessageCommunication (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A concrete subclass representing a SMS message.

## Declaration

```objectivec
@interface ILMessageCommunication : ILCommunication
```

## Topics

### Accessing Data

- [messageBody](ilmessagecommunication/messagebody.md): The content of the SMS message.

### Comparing Communications

- [isEqualToMessageCommunication:](ilmessagecommunication/isequaltomessagecommunication_.md): Indicates whether the current message is equal to the provided argument.

## Relationships

### Inherits From

- [ILCommunication](ilcommunication.md)

## See Also

### Communications

- [ILCommunication](ilcommunication.md): An abstract superclass representing a message or call to the user.
- [ILCallCommunication](ilcallcommunication.md): A concrete subclass representing a phone call.
