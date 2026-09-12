> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningoperation](https://developer.apple.com/documentation/matter/mtrcommissioningoperation)

# MTRCommissioningOperation (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

## Declaration

```swift
class MTRCommissioningOperation
```

## Topics

### Initializers

- [init(parameters:setupPayload:delegate:queue:)](mtrcommissioningoperation/init%28parameters_setuppayload_delegate_queue_%29.md): Prepare to commission a device with the given parameters and the given setup payload (QR code, manual pairing code, etc). Returns nil if the payload is not valid.

### Instance Properties

- [matchedPayload](mtrcommissioningoperation/matchedpayload.md): If not nil, the payload (from possibly multiple payloads represented by the provided setupPayload) that represents the commissionee we successfully established PASE with. This will only be non-nil after successful PASE establishment.

### Instance Methods

- [start(with:)](mtrcommissioningoperation/start%28with_%29.md): Start commissioning with the given controller (which identifies the fabric the commissionee should be commissioned into). The delegate will be notified if there are any failures.
- [stop()](mtrcommissioningoperation/stop%28%29.md): Stop commissioning. This will typically result in commissioning:failedWithError: callbacks to delegates.

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

# MTRCommissioningOperation (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

## Declaration

```objectivec
@interface MTRCommissioningOperation : NSObject
```

## Topics

### Instance Properties

- [matchedPayload](mtrcommissioningoperation/matchedpayload.md): If not nil, the payload (from possibly multiple payloads represented by the provided setupPayload) that represents the commissionee we successfully established PASE with. This will only be non-nil after successful PASE establishment.

### Instance Methods

- [initWithParameters:setupPayload:delegate:queue:](mtrcommissioningoperation/init%28parameters_setuppayload_delegate_queue_%29.md): Prepare to commission a device with the given parameters and the given setup payload (QR code, manual pairing code, etc). Returns nil if the payload is not valid.
- [startWithController:](mtrcommissioningoperation/start%28with_%29.md): Start commissioning with the given controller (which identifies the fabric the commissionee should be commissioned into). The delegate will be notified if there are any failures.
- [stop](mtrcommissioningoperation/stop%28%29.md): Stop commissioning. This will typically result in commissioning:failedWithError: callbacks to delegates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
