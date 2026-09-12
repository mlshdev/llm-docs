> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprivateltenetwork](https://developer.apple.com/documentation/networkextension/neprivateltenetwork)

# NEPrivateLTENetwork (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The parameters of a private LTE network.

## Declaration

```swift
class NEPrivateLTENetwork
```

<a id="overview"></a>

## Overview

Populate your manager’s [matchPrivateLTENetworks](neapppushmanager/matchprivateltenetworks.md) with an array of objects of this type. The system starts the provider when the device’s current private LTE provider matches the properties of any member of the array.

## Topics

### Accessing network properties

- [mobileCountryCode](neprivateltenetwork/mobilecountrycode.md): The Mobile Country Code (MCC) of the private LTE network.
- [mobileNetworkCode](neprivateltenetwork/mobilenetworkcode.md): The Mobile Network Code (MNC) of the private LTE network.
- [trackingAreaCode](neprivateltenetwork/trackingareacode.md): The Tracking Area Code of the private LTE network.

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

### Matching Wi-Fi networks

- [matchSSIDs](neapppushmanager/matchssids.md): An array of Wi-Fi SSID strings that the system matches for local push activation.
- [matchPrivateLTENetworks](neapppushmanager/matchprivateltenetworks.md): An array of private LTE networks that the system matches for local push activation.

# NEPrivateLTENetwork (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The parameters of a private LTE network.

## Declaration

```objectivec
@interface NEPrivateLTENetwork : NSObject
```

<a id="overview"></a>

## Overview

Populate your manager’s [matchPrivateLTENetworks](neapppushmanager/matchprivateltenetworks.md) with an array of objects of this type. The system starts the provider when the device’s current private LTE provider matches the properties of any member of the array.

## Topics

### Accessing network properties

- [mobileCountryCode](neprivateltenetwork/mobilecountrycode.md): The Mobile Country Code (MCC) of the private LTE network.
- [mobileNetworkCode](neprivateltenetwork/mobilenetworkcode.md): The Mobile Network Code (MNC) of the private LTE network.
- [trackingAreaCode](neprivateltenetwork/trackingareacode.md): The Tracking Area Code of the private LTE network.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Matching Wi-Fi networks

- [matchSSIDs](neapppushmanager/matchssids.md): An array of Wi-Fi SSID strings that the system matches for local push activation.
- [matchPrivateLTENetworks](neapppushmanager/matchprivateltenetworks.md): An array of private LTE networks that the system matches for local push activation.
