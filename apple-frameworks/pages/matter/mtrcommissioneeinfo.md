> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioneeinfo](https://developer.apple.com/documentation/matter/mtrcommissioneeinfo)

# MTRCommissioneeInfo (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Information read from the commissionee device during commissioning.

## Declaration

```swift
class MTRCommissioneeInfo
```

## Topics

### Initializers

- [init(coder:)](mtrcommissioneeinfo/init%28coder_%29.md)

### Instance Properties

- [attributes](mtrcommissioneeinfo/attributes.md): Attributes that were read from the commissionee. This will contain the following, if they are available:
- [endpointsById](mtrcommissioneeinfo/endpointsbyid.md): Endpoint information for all endpoints of the commissionee. Will be present only if readEndpointInformation is set to YES on MTRCommissioningParameters.
- [productIdentity](mtrcommissioneeinfo/productidentity.md): The product identity (VID / PID) of the commissionee.
- [rootEndpoint](mtrcommissioneeinfo/rootendpoint.md): Endpoint information for the root endpoint of the commissionee. Will be present only if readEndpointInformation is set to YES on MTRCommissioningParameters.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTRCommissioneeInfo (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Information read from the commissionee device during commissioning.

## Declaration

```objectivec
@interface MTRCommissioneeInfo : NSObject
```

## Topics

### Instance Properties

- [attributes](mtrcommissioneeinfo/attributes.md): Attributes that were read from the commissionee. This will contain the following, if they are available:
- [endpointsById](mtrcommissioneeinfo/endpointsbyid.md): Endpoint information for all endpoints of the commissionee. Will be present only if readEndpointInformation is set to YES on MTRCommissioningParameters.
- [productIdentity](mtrcommissioneeinfo/productidentity.md): The product identity (VID / PID) of the commissionee.
- [rootEndpoint](mtrcommissioneeinfo/rootendpoint.md): Endpoint information for the root endpoint of the commissionee. Will be present only if readEndpointInformation is set to YES on MTRCommissioningParameters.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
