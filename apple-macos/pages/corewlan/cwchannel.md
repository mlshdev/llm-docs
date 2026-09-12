> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwchannel](https://developer.apple.com/documentation/corewlan/cwchannel)

# CWChannel (Swift)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.7+

Encapsulates an IEEE 802.11 channel.

## Declaration

```swift
class CWChannel
```

## Topics

### Comparing channels

- [isEqual(to:)](cwchannel/isequal%28to_%29.md): Determine CWChannel object equality.

### Instance Properties

- [channelBand](cwchannel/channelband.md): The channel band.
- [channelNumber](cwchannel/channelnumber.md): The channel number.
- [channelWidth](cwchannel/channelwidth.md): The channel width.

### Initializers

- [init(coder:)](cwchannel/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Classes

- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

# CWChannel (Objective-C)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.7+

Encapsulates an IEEE 802.11 channel.

## Declaration

```objectivec
@interface CWChannel : NSObject
```

## Topics

### Comparing channels

- [isEqualToChannel:](cwchannel/isequal%28to_%29.md): Determine CWChannel object equality.

### Instance Properties

- [channelBand](cwchannel/channelband.md): The channel band.
- [channelNumber](cwchannel/channelnumber.md): The channel number.
- [channelWidth](cwchannel/channelwidth.md): The channel width.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Classes

- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.
