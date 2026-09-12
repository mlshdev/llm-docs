> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltercapabilitiesqueryresponse](https://developer.apple.com/documentation/identitylookup/ilmessagefiltercapabilitiesqueryresponse)

# ILMessageFilterCapabilitiesQueryResponse (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A response to a message filter capabilities query request.

## Declaration

```swift
class ILMessageFilterCapabilitiesQueryResponse
```

## Topics

### Setting the Subactions

- [promotionalSubActions](ilmessagefiltercapabilitiesqueryresponse/promotionalsubactions-98kzj.md)
- [transactionalSubActions](ilmessagefiltercapabilitiesqueryresponse/transactionalsubactions-4bfqz.md)

### Initializers

- [init(coder:)](ilmessagefiltercapabilitiesqueryresponse/init%28coder_%29.md)

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

### Responses

- [ILMessageFilterSubAction](ilmessagefiltersubaction.md): Responds to a received message with a filter subaction.

# ILMessageFilterCapabilitiesQueryResponse (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A response to a message filter capabilities query request.

## Declaration

```objectivec
@interface ILMessageFilterCapabilitiesQueryResponse : NSObject
```

## Topics

### Setting the Subactions

- [promotionalSubActions](ilmessagefiltercapabilitiesqueryresponse/promotionalsubactions-5d9c5.md): The promotional action the Message Filter app extension recommends that the system perform on the queried message.
- [transactionalSubActions](ilmessagefiltercapabilitiesqueryresponse/transactionalsubactions-5fmpl.md): The transactional action the Message Filter app extension recommends that the system perform on the queried message.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Responses

- [ILMessageFilterSubAction](ilmessagefiltersubaction.md): Responds to a received message with a filter subaction.
