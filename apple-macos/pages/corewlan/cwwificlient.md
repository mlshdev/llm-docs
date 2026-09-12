> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient](https://developer.apple.com/documentation/corewlan/cwwificlient)

# CWWiFiClient (Swift)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.10+

A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

## Declaration

```swift
class CWWiFiClient
```

<a id="overview"></a>

## Overview

Wi-Fi client objects are heavy. Therefore, it’s more efficient to use a single, long-running client instance, rather than creating several short-lived instances. For convenience, you can use the singleton instance returned by the [shared()](cwwificlient/shared%28%29.md) class method.

Instead of instantiating [CWInterface](cwinterface.md) objects directly, use the ones provided by the instance methods of this class. For example, the [interface()](cwwificlient/interface%28%29.md) method returns the default Wi-Fi interface.

## Topics

### Getting the Shared Instance

- [shared()](cwwificlient/shared%28%29.md): The shared Wi-Fi client object.

### Initializing a Wi-Fi Client

- [init()](cwwificlient/init%28%29.md): Initializes a Wi-Fi client object.

### Setting a Delegate

- [delegate](cwwificlient/delegate.md): An object that provides Wi-Fi event handling.

### Getting Interfaces

- [interface()](cwwificlient/interface%28%29.md): Returns the default Wi-Fi interface.
- [interface(withName:)](cwwificlient/interface%28withname_%29.md): Returns the Wi-Fi interface with the given name.
- [interfaces()](cwwificlient/interfaces%28%29.md): Returns all available Wi-Fi interfaces.
- [interfaceNames()](cwwificlient/interfacenames%28%29-swift.type.method.md): Deprecated. Returns the list of the names of available Wi-Fi interfaces.

### Monitoring Events

- [startMonitoringEvent(with:)](cwwificlient/startmonitoringevent%28with_%29.md): Register for specific Wi-Fi event notifications.
- [stopMonitoringAllEvents()](cwwificlient/stopmonitoringallevents%28%29.md): Unregister for all Wi-Fi event notifications.
- [stopMonitoringEvent(with:)](cwwificlient/stopmonitoringevent%28with_%29.md): Unregister for specific Wi-Fi event notifications.

### Instance Methods

- [interfaceNames()](cwwificlient/interfacenames%28%29-swift.method.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.

# CWWiFiClient (Objective-C)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.10+

A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

## Declaration

```objectivec
@interface CWWiFiClient : NSObject
```

<a id="overview"></a>

## Overview

Wi-Fi client objects are heavy. Therefore, it’s more efficient to use a single, long-running client instance, rather than creating several short-lived instances. For convenience, you can use the singleton instance returned by the [sharedWiFiClient](cwwificlient/shared%28%29.md) class method.

Instead of instantiating [CWInterface](cwinterface.md) objects directly, use the ones provided by the instance methods of this class. For example, the [interface](cwwificlient/interface%28%29.md) method returns the default Wi-Fi interface.

## Topics

### Getting the Shared Instance

- [sharedWiFiClient](cwwificlient/shared%28%29.md): The shared Wi-Fi client object.

### Initializing a Wi-Fi Client

- [init](cwwificlient/init%28%29.md): Initializes a Wi-Fi client object.

### Setting a Delegate

- [delegate](cwwificlient/delegate.md): An object that provides Wi-Fi event handling.

### Getting Interfaces

- [interface](cwwificlient/interface%28%29.md): Returns the default Wi-Fi interface.
- [interfaceWithName:](cwwificlient/interface%28withname_%29.md): Returns the Wi-Fi interface with the given name.
- [interfaces](cwwificlient/interfaces%28%29.md): Returns all available Wi-Fi interfaces.
- [interfaceNames](cwwificlient/interfacenames%28%29-swift.type.method.md): Deprecated. Returns the list of the names of available Wi-Fi interfaces.

### Monitoring Events

- [startMonitoringEventWithType:error:](cwwificlient/startmonitoringevent%28with_%29.md): Register for specific Wi-Fi event notifications.
- [stopMonitoringAllEventsAndReturnError:](cwwificlient/stopmonitoringallevents%28%29.md): Unregister for all Wi-Fi event notifications.
- [stopMonitoringEventWithType:error:](cwwificlient/stopmonitoringevent%28with_%29.md): Unregister for specific Wi-Fi event notifications.

### Instance Methods

- [interfaceNames](cwwificlient/interfacenames%28%29-swift.method.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
