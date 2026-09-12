> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilterqueryrequest](https://developer.apple.com/documentation/identitylookup/ilmessagefilterqueryrequest)

# ILMessageFilterQueryRequest (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A request for a Message Filter app extension to determine the status of a message received from an unknown sender.

## Declaration

```swift
class ILMessageFilterQueryRequest
```

## Topics

### Getting Information About a Message

- [sender](ilmessagefilterqueryrequest/sender.md): The sender of the message.
- [messageBody](ilmessagefilterqueryrequest/messagebody.md): The body of a message received from an unknown sender.
- [receiverISOCountryCode](ilmessagefilterqueryrequest/receiverisocountrycode.md): The ISO Country Code of the receiving phone number, in format specified by the ISO 3166-2 standard.

### Initializers

- [init(coder:)](ilmessagefilterqueryrequest/init%28coder_%29.md)

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Queries

- [ILMessageFilterQueryHandling](ilmessagefilterqueryhandling.md): A set of methods implemented by a Message Filter app extension to handle query requests.

# ILMessageFilterQueryRequest (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A request for a Message Filter app extension to determine the status of a message received from an unknown sender.

## Declaration

```objectivec
@interface ILMessageFilterQueryRequest : NSObject
```

## Topics

### Getting Information About a Message

- [sender](ilmessagefilterqueryrequest/sender.md): The sender of the message.
- [messageBody](ilmessagefilterqueryrequest/messagebody.md): The body of a message received from an unknown sender.
- [receiverISOCountryCode](ilmessagefilterqueryrequest/receiverisocountrycode.md): The ISO Country Code of the receiving phone number, in format specified by the ISO 3166-2 standard.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Queries

- [ILMessageFilterQueryHandling](ilmessagefilterqueryhandling.md): A set of methods implemented by a Message Filter app extension to handle query requests.
