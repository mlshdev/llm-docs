> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilterqueryresponse](https://developer.apple.com/documentation/identitylookup/ilmessagefilterqueryresponse)

# ILMessageFilterQueryResponse (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A response to a message filter query request.

## Declaration

```swift
class ILMessageFilterQueryResponse
```

## Topics

### Specifying the Action

- [action](ilmessagefilterqueryresponse/action.md): The action the Message Filter app extension recommends that the system perform on the queried message.
- [subAction](ilmessagefilterqueryresponse/subaction.md): The subaction the Message Filter app extension recommends that the system perform on the queried message.

### Initializers

- [init(coder:)](ilmessagefilterqueryresponse/init%28coder_%29.md)

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

- [ILNetworkResponse](ilnetworkresponse.md): A response to an HTTPS network request performed on behalf of a Message Filter app extension.
- [ILMessageFilterAction](ilmessagefilteraction.md): Responds to a received message with a filter action.

# ILMessageFilterQueryResponse (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A response to a message filter query request.

## Declaration

```objectivec
@interface ILMessageFilterQueryResponse : NSObject
```

## Topics

### Specifying the Action

- [action](ilmessagefilterqueryresponse/action.md): The action the Message Filter app extension recommends that the system perform on the queried message.
- [subAction](ilmessagefilterqueryresponse/subaction.md): The subaction the Message Filter app extension recommends that the system perform on the queried message.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Responses

- [ILNetworkResponse](ilnetworkresponse.md): A response to an HTTPS network request performed on behalf of a Message Filter app extension.
- [ILMessageFilterAction](ilmessagefilteraction.md): Responds to a received message with a filter action.
