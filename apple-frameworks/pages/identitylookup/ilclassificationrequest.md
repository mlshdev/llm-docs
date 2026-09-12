> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilclassificationrequest](https://developer.apple.com/documentation/identitylookup/ilclassificationrequest)

# ILClassificationRequest (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The abstract superclass for classification requests.

## Declaration

```swift
class ILClassificationRequest
```

## Topics

### Initializers

- [init(coder:)](ilclassificationrequest/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ILCallClassificationRequest](ilcallclassificationrequest.md)
- [ILMessageClassificationRequest](ilmessageclassificationrequest.md)

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

- [ILMessageClassificationRequest](ilmessageclassificationrequest.md): A classification request for SMS messages.
- [ILCallClassificationRequest](ilcallclassificationrequest.md): A classification request for phone calls.

# ILClassificationRequest (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The abstract superclass for classification requests.

## Declaration

```objectivec
@interface ILClassificationRequest : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ILCallClassificationRequest](ilcallclassificationrequest.md)
- [ILMessageClassificationRequest](ilmessageclassificationrequest.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Requests

- [ILMessageClassificationRequest](ilmessageclassificationrequest.md): A classification request for SMS messages.
- [ILCallClassificationRequest](ilcallclassificationrequest.md): A classification request for phone calls.
