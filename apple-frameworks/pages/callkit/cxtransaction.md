> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxtransaction](https://developer.apple.com/documentation/callkit/cxtransaction)

# CXTransaction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An object that contains zero or more action objects for a call controller to perform.

## Declaration

```swift
class CXTransaction
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

## Topics

### Creating New Transactions

- [init(action:)](cxtransaction/init%28action_%29.md): Initializes a new transaction with the specified action.
- [init(actions:)](cxtransaction/init%28actions_%29.md): Initializes a new transaction with the specified actions.

### Accessing Transaction Attributes

- [uuid](cxtransaction/uuid.md): The unique identifier of the transaction.
- [isComplete](cxtransaction/iscomplete.md): A Boolean value that indicates whether the transaction has been completed.
- [actions](cxtransaction/actions.md): The actions added to a transaction.

### Adding Actions

- [addAction(\_:)](cxtransaction/addaction%28__%29.md): Adds the specified action to the transaction.

### Initializers

- [init(coder:)](cxtransaction/init%28coder_%29.md)

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

### Outgoing calls

- [Sending End-to-End Encrypted VoIP Calls](sending-end-to-end-encrypted-voip-calls.md): Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.
- [CXCallController](cxcallcontroller.md): A programmatic interface for interacting with and observing calls.
- [CXStartCallAction](cxstartcallaction.md): An encapsulation of the act of initiating an outgoing call.

# CXTransaction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that contains zero or more action objects for a call controller to perform.

## Declaration

```objectivec
@interface CXTransaction : NSObject
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

## Topics

### Creating New Transactions

- [initWithAction:](cxtransaction/init%28action_%29.md): Initializes a new transaction with the specified action.
- [initWithActions:](cxtransaction/init%28actions_%29.md): Initializes a new transaction with the specified actions.

### Accessing Transaction Attributes

- [UUID](cxtransaction/uuid.md): The unique identifier of the transaction.
- [complete](cxtransaction/iscomplete.md): A Boolean value that indicates whether the transaction has been completed.
- [actions](cxtransaction/actions.md): The actions added to a transaction.

### Adding Actions

- [addAction:](cxtransaction/addaction%28__%29.md): Adds the specified action to the transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Outgoing calls

- [Sending End-to-End Encrypted VoIP Calls](sending-end-to-end-encrypted-voip-calls.md): Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.
- [CXCallController](cxcallcontroller.md): A programmatic interface for interacting with and observing calls.
- [CXStartCallAction](cxstartcallaction.md): An encapsulation of the act of initiating an outgoing call.
