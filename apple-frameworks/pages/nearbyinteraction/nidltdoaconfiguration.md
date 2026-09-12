> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoaconfiguration](https://developer.apple.com/documentation/nearbyinteraction/nidltdoaconfiguration)

# NIDLTDOAConfiguration (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A configuration that enables Downlink Time-Difference-of-Arrival ranging.

## Declaration

```swift
class NIDLTDOAConfiguration
```

<a id="overview"></a>

## Overview

Run an instance of this configuration to participate in a session that supports the Downlink Time-Difference-of-Arrival (DL-TDOA) feature. Before creating an instance of this class, call [supportsDLTDOAMeasurement](nidevicecapability/supportsdltdoameasurement.md) first to ensure device support.

## Topics

### Creating a configuration

- [init(networkIdentifier:)](nidltdoaconfiguration/init%28networkidentifier_%29.md): Initializes a Downlink Time-Difference-of-Arrival (DL-TDOA) configuration for a specific tracked area.
- [init(networkIdentifier:discoveryMethod:)](nidltdoaconfiguration/init%28networkidentifier_discoverymethod_%29.md): Initializes a DL-TDOA configuration with a network identifier and discovery method.

### Identifying the network

- [networkIdentifier](nidltdoaconfiguration/networkidentifier.md): A unique identifier for a Downlink Time-Difference-of-Arrival network.

### Specifing the discovery method

- [discoveryMethod](nidltdoaconfiguration/discoverymethod-swift.property.md): The technology your app uses to discover DL-TDOA anchors.
- [NIDLTDOAConfiguration.DiscoveryMethod](nidltdoaconfiguration/discoverymethod-swift.enum.md): The technologies an app can use to discover Downlink Time-Difference-of-Arrival anchors.

## Relationships

### Inherits From

- [NIConfiguration](niconfiguration.md)

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

# NIDLTDOAConfiguration (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A configuration that enables Downlink Time-Difference-of-Arrival ranging.

## Declaration

```objectivec
@interface NIDLTDOAConfiguration : NIConfiguration
```

<a id="overview"></a>

## Overview

Run an instance of this configuration to participate in a session that supports the Downlink Time-Difference-of-Arrival (DL-TDOA) feature. Before creating an instance of this class, call [supportsDLTDOAMeasurement](nidevicecapability/supportsdltdoameasurement.md) first to ensure device support.

## Topics

### Creating a configuration

- [initWithNetworkIdentifier:](nidltdoaconfiguration/init%28networkidentifier_%29.md): Initializes a Downlink Time-Difference-of-Arrival (DL-TDOA) configuration for a specific tracked area.
- [initWithNetworkIdentifier:discoveryMethod:](nidltdoaconfiguration/init%28networkidentifier_discoverymethod_%29.md): Initializes a DL-TDOA configuration with a network identifier and discovery method.

### Identifying the network

- [networkIdentifier](nidltdoaconfiguration/networkidentifier.md): A unique identifier for a Downlink Time-Difference-of-Arrival network.

### Specifing the discovery method

- [discoveryMethod](nidltdoaconfiguration/discoverymethod-swift.property.md): The technology your app uses to discover DL-TDOA anchors.
- [NIDLTDOADiscoveryMethod](nidltdoaconfiguration/discoverymethod-swift.enum.md): The technologies an app can use to discover Downlink Time-Difference-of-Arrival anchors.

## Relationships

### Inherits From

- [NIConfiguration](niconfiguration.md)
