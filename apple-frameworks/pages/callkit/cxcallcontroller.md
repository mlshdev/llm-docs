> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallcontroller](https://developer.apple.com/documentation/callkit/cxcallcontroller)

# CXCallController (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A programmatic interface for interacting with and observing calls.

## Declaration

```swift
class CXCallController
```

<a id="overview"></a>

## Overview

A [CXCallController](cxcallcontroller.md) object interacts with calls by performing actions, which are represented by instances of [CXCallAction](cxcallaction.md) subclasses. You can request that one or more actions be performed in a single [CXTransaction](cxtransaction.md) object using the [request(\_:completion:)](cxcallcontroller/request%28__completion_%29.md) method. A transaction may be rejected by the system for one of the reasons listed in the [CXErrorCodeRequestTransactionError.Code](cxerrorcoderequesttransactionerror-swift.struct/code.md) enumeration.

Each [CXCallController](cxcallcontroller.md) object manages a [CXCallObserver](cxcallobserver.md) object, which can be accessed using the [callObserver](cxcallcontroller/callobserver.md) property. You can provide an object conforming to the [CXCallObserverDelegate](cxcallobserverdelegate.md) protocol to the call observer in order to be notified of any changes to active calls.

## Topics

### Creating New Call Controllers

- [init()](cxcallcontroller/init%28%29.md): Initializes a new call controller with a private, serial queue, which is used for calling completion blocks.
- [init(queue:)](cxcallcontroller/init%28queue_%29.md): Initializes a new call controller with a specified queue, which is used for calling completion blocks.

### Accessing the Call Observer

- [callObserver](cxcallcontroller/callobserver.md): Returns an observer for active calls.

### Requesting Transactions

- [request(\_:completion:)](cxcallcontroller/request%28__completion_%29.md): Requests that the actions in the specified transaction be asynchronously performed by the telephony provider.
- [requestTransaction(with:completion:)](cxcallcontroller/requesttransaction%28with_completion_%29-ffme.md): Requests that the transaction that contains the specified action be asynchronously performed by the telephony provider.
- [requestTransaction(with:completion:)](cxcallcontroller/requesttransaction%28with_completion_%29-4o1m4.md): Requests that the transaction that contains the specified actions be asynchronously performed by the telephony provider.

### Errors

- [CXErrorCodeRequestTransactionError](cxerrorcoderequesttransactionerror-swift.struct.md)
- [CXErrorCodeRequestTransactionError.Code](cxerrorcoderequesttransactionerror-swift.struct/code.md): Error codes for the CallKit error domain.
- [CXErrorDomainRequestTransaction](cxerrordomainrequesttransaction.md): Domain for errors when requesting a transaction from a call controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Outgoing calls

- [Sending End-to-End Encrypted VoIP Calls](sending-end-to-end-encrypted-voip-calls.md): Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.
- [CXTransaction](cxtransaction.md): An object that contains zero or more action objects for a call controller to perform.
- [CXStartCallAction](cxstartcallaction.md): An encapsulation of the act of initiating an outgoing call.

# CXCallController (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A programmatic interface for interacting with and observing calls.

## Declaration

```objectivec
@interface CXCallController : NSObject
```

<a id="overview"></a>

## Overview

A [CXCallController](cxcallcontroller.md) object interacts with calls by performing actions, which are represented by instances of [CXCallAction](cxcallaction.md) subclasses. You can request that one or more actions be performed in a single [CXTransaction](cxtransaction.md) object using the [requestTransaction:completion:](cxcallcontroller/request%28__completion_%29.md) method. A transaction may be rejected by the system for one of the reasons listed in the [CXErrorCodeRequestTransactionError](cxerrorcoderequesttransactionerror-swift.struct/code.md) enumeration.

Each [CXCallController](cxcallcontroller.md) object manages a [CXCallObserver](cxcallobserver.md) object, which can be accessed using the [callObserver](cxcallcontroller/callobserver.md) property. You can provide an object conforming to the [CXCallObserverDelegate](cxcallobserverdelegate.md) protocol to the call observer in order to be notified of any changes to active calls.

## Topics

### Creating New Call Controllers

- [init](cxcallcontroller/init%28%29.md): Initializes a new call controller with a private, serial queue, which is used for calling completion blocks.
- [initWithQueue:](cxcallcontroller/init%28queue_%29.md): Initializes a new call controller with a specified queue, which is used for calling completion blocks.

### Accessing the Call Observer

- [callObserver](cxcallcontroller/callobserver.md): Returns an observer for active calls.

### Requesting Transactions

- [requestTransaction:completion:](cxcallcontroller/request%28__completion_%29.md): Requests that the actions in the specified transaction be asynchronously performed by the telephony provider.
- [requestTransactionWithAction:completion:](cxcallcontroller/requesttransaction%28with_completion_%29-ffme.md): Requests that the transaction that contains the specified action be asynchronously performed by the telephony provider.
- [requestTransactionWithActions:completion:](cxcallcontroller/requesttransaction%28with_completion_%29-4o1m4.md): Requests that the transaction that contains the specified actions be asynchronously performed by the telephony provider.

### Errors

- [CXErrorCodeRequestTransactionError](cxerrorcoderequesttransactionerror-swift.struct/code.md): Error codes for the CallKit error domain.
- [CXErrorDomainRequestTransaction](cxerrordomainrequesttransaction.md): Domain for errors when requesting a transaction from a call controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Outgoing calls

- [Sending End-to-End Encrypted VoIP Calls](sending-end-to-end-encrypted-voip-calls.md): Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.
- [CXTransaction](cxtransaction.md): An object that contains zero or more action objects for a call controller to perform.
- [CXStartCallAction](cxstartcallaction.md): An encapsulation of the act of initiating an outgoing call.
