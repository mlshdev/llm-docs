> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidiscoverytoken](https://developer.apple.com/documentation/nearbyinteraction/nidiscoverytoken)

# NIDiscoveryToken (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that uniquely identifies a peer that participates in an interaction session.

## Declaration

```swift
class NIDiscoveryToken
```

## Mentioned In

- [Extending advanced direction finding and ranging](extending-advanced-direction-finding-and-ranging.md)

<a id="overview"></a>

## Overview

Use `NIDiscoveryToken` to determine the peer device’s nearby interaction capabilities by examining the [deviceCapabilities](nidiscoverytoken/devicecapabilities.md) that describes the available capabilities on a person’s device.

## Topics

### Understanding device capabilities

- [deviceCapabilities](nidiscoverytoken/devicecapabilities.md): A protocol object that describes the nearby interaction capabilities of a person’s device.

### Initializers

- [init(coder:)](nidiscoverytoken/init%28coder_%29.md)

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

### Connecting to a peer device

- [discoveryToken](nisession/discoverytoken.md): A temporary, random identifier for a device.
- [run(\_:)](nisession/run%28__%29.md): Starts a session with a nearby peer.
- [configuration](nisession/configuration.md): The configuration run by the session.
- [delegateQueue](nisession/delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.

# NIDiscoveryToken (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that uniquely identifies a peer that participates in an interaction session.

## Declaration

```objectivec
@interface NIDiscoveryToken : NSObject
```

## Mentioned In

- [Extending advanced direction finding and ranging](extending-advanced-direction-finding-and-ranging.md)

<a id="overview"></a>

## Overview

Use `NIDiscoveryToken` to determine the peer device’s nearby interaction capabilities by examining the [deviceCapabilities](nidiscoverytoken/devicecapabilities.md) that describes the available capabilities on a person’s device.

## Topics

### Understanding device capabilities

- [deviceCapabilities](nidiscoverytoken/devicecapabilities.md): A protocol object that describes the nearby interaction capabilities of a person’s device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Connecting to a peer device

- [discoveryToken](nisession/discoverytoken.md): A temporary, random identifier for a device.
- [runWithConfiguration:](nisession/run%28__%29.md): Starts a session with a nearby peer.
- [configuration](nisession/configuration.md): The configuration run by the session.
- [delegateQueue](nisession/delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.
