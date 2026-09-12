> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessageclassificationrequest](https://developer.apple.com/documentation/identitylookup/ilmessageclassificationrequest)

# ILMessageClassificationRequest (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A classification request for SMS messages.

## Declaration

```swift
class ILMessageClassificationRequest
```

## Topics

### Accessing Messages

- [messageCommunications](ilmessageclassificationrequest/messagecommunications.md): The messages the user selected to report.

## Relationships

### Inherits From

- [ILClassificationRequest](ilclassificationrequest.md)

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

### Requests

- [ILClassificationRequest](ilclassificationrequest.md): The abstract superclass for classification requests.
- [ILCallClassificationRequest](ilcallclassificationrequest.md): A classification request for phone calls.

# ILMessageClassificationRequest (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A classification request for SMS messages.

## Declaration

```objectivec
@interface ILMessageClassificationRequest : ILClassificationRequest
```

## Topics

### Accessing Messages

- [messageCommunications](ilmessageclassificationrequest/messagecommunications.md): The messages the user selected to report.

## Relationships

### Inherits From

- [ILClassificationRequest](ilclassificationrequest.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Requests

- [ILClassificationRequest](ilclassificationrequest.md): The abstract superclass for classification requests.
- [ILCallClassificationRequest](ilcallclassificationrequest.md): A classification request for phone calls.
