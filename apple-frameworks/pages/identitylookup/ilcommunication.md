> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilcommunication](https://developer.apple.com/documentation/identitylookup/ilcommunication)

# ILCommunication (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An abstract superclass representing a message or call to the user.

## Declaration

```swift
class ILCommunication
```

## Topics

### Accessing Data

- [sender](ilcommunication/sender.md): The email address or phone number of the sender.
- [dateReceived](ilcommunication/datereceived.md): The date and time when the system received the message.

### Initializers

- [init(coder:)](ilcommunication/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ILCallCommunication](ilcallcommunication.md)
- [ILMessageCommunication](ilmessagecommunication.md)

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

- [ILMessageCommunication](ilmessagecommunication.md): A concrete subclass representing a SMS message.
- [ILCallCommunication](ilcallcommunication.md): A concrete subclass representing a phone call.

# ILCommunication (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An abstract superclass representing a message or call to the user.

## Declaration

```objectivec
@interface ILCommunication : NSObject
```

## Topics

### Accessing Data

- [sender](ilcommunication/sender.md): The email address or phone number of the sender.
- [dateReceived](ilcommunication/datereceived.md): The date and time when the system received the message.

### Comparing Communications

- [isEqualToCommunication:](ilcommunication/isequaltocommunication_.md): Indicates whether the current communication is equal to the provided argument.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ILCallCommunication](ilcallcommunication.md)
- [ILMessageCommunication](ilmessagecommunication.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Communications

- [ILMessageCommunication](ilmessagecommunication.md): A concrete subclass representing a SMS message.
- [ILCallCommunication](ilcallcommunication.md): A concrete subclass representing a phone call.
