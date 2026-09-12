> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingpartialip](https://developer.apple.com/documentation/avrouting/avcustomroutingpartialip)

# AVCustomRoutingPartialIP (Swift)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

An object that represents a full or partial IP address.

## Declaration

```swift
class AVCustomRoutingPartialIP
```

<a id="overview"></a>

## Overview

Use this type to define the IP address and subnet mask of known routes on a local network. Create an instance of this class and add it to a custom routing controller’s [knownRouteIPs](avcustomroutingcontroller/knownrouteips.md) array like shown below:

```swift
// Define the IP address.
let anIPAddressInBytes:[UInt8] = [192, 168, 10, 5]
let address = Data(bytes: anIPAddressInBytes, count: anIPAddressInBytes.count)

// Define the subnet mask.
let aMaskInBytes:[UInt8] = [255, 255, 255, 255]
let mask = Data(bytes: aMaskInBytes, count: aMaskInBytes.count)

// Create a new object to represent the address and mask.
let partialIP = AVCustomRoutingPartialIP(address: address, mask: mask)

// Add the instance to the custom routing controller's known routes.
routingController.knownRouteIPs.append(partialIP)
```

## Topics

### Creating an IP fragment

- [init(address:mask:)](avcustomroutingpartialip/init%28address_mask_%29.md): Creates an IP fragment.

### Inspecting the IP fragment

- [address](avcustomroutingpartialip/address.md): A full or partial IP address for a device known to be on the network.
- [mask](avcustomroutingpartialip/mask.md): A mask that represents how many octets of the IP address to respect.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring route addresses

- [knownRouteIPs](avcustomroutingcontroller/knownrouteips.md): An array of route addresses known to be on the local network.

# AVCustomRoutingPartialIP (Objective-C)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

An object that represents a full or partial IP address.

## Declaration

```objectivec
@interface AVCustomRoutingPartialIP : NSObject
```

<a id="overview"></a>

## Overview

Use this type to define the IP address and subnet mask of known routes on a local network. Create an instance of this class and add it to a custom routing controller’s [knownRouteIPs](avcustomroutingcontroller/knownrouteips.md) array like shown below:

```swift
// Define the IP address.
let anIPAddressInBytes:[UInt8] = [192, 168, 10, 5]
let address = Data(bytes: anIPAddressInBytes, count: anIPAddressInBytes.count)

// Define the subnet mask.
let aMaskInBytes:[UInt8] = [255, 255, 255, 255]
let mask = Data(bytes: aMaskInBytes, count: aMaskInBytes.count)

// Create a new object to represent the address and mask.
let partialIP = AVCustomRoutingPartialIP(address: address, mask: mask)

// Add the instance to the custom routing controller's known routes.
routingController.knownRouteIPs.append(partialIP)
```

## Topics

### Creating an IP fragment

- [initWithAddress:mask:](avcustomroutingpartialip/init%28address_mask_%29.md): Creates an IP fragment.

### Inspecting the IP fragment

- [address](avcustomroutingpartialip/address.md): A full or partial IP address for a device known to be on the network.
- [mask](avcustomroutingpartialip/mask.md): A mask that represents how many octets of the IP address to respect.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring route addresses

- [knownRouteIPs](avcustomroutingcontroller/knownrouteips.md): An array of route addresses known to be on the local network.
