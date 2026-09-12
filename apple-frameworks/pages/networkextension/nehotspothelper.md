> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelper](https://developer.apple.com/documentation/networkextension/nehotspothelper)

# NEHotspotHelper (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A class to register a hotspot helper.

> Use NEHotspotManager API

## Declaration

```swift
class NEHotspotHelper
```

<a id="overview"></a>

## Overview

The [NEHotspotHelper](nehotspothelper.md) API gives your app the ability to perform custom authentication for Wi-Fi Hotspots. It gives users a way to seamlessly connect to a large aggregated network of Wi-Fi Hotspots. The [NEHotspotConfiguration](nehotspotconfiguration.md) API lets your app configure those hotspots.

## Topics

### Registering a hotspot helper

- [register(options:queue:handler:)](nehotspothelper/register%28options_queue_handler_%29.md): Deprecated. Register the application as a Hotspot Helper.
- [kNEHotspotHelperOptionDisplayName](knehotspothelperoptiondisplayname.md): The string displayed in Wi-Fi Settings for a network handled by the application.
- [NEHotspotHelperHandler](nehotspothelperhandler.md): The type definition for the Hotspot Helper’s command handler block.

### Getting hotspot network status

- [supportedNetworkInterfaces()](nehotspothelper/supportednetworkinterfaces%28%29.md): Deprecated. Return the list of network interfaces managed by the Hotspot Helper infrastructure.

### Logging off

- [logoff(\_:)](nehotspothelper/logoff%28__%29.md): Deprecated. Terminate the authentication session for a Hotspot network.

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

# NEHotspotHelper (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A class to register a hotspot helper.

> Use NEHotspotManager API

## Declaration

```objectivec
@interface NEHotspotHelper : NSObject
```

<a id="overview"></a>

## Overview

The [NEHotspotHelper](nehotspothelper.md) API gives your app the ability to perform custom authentication for Wi-Fi Hotspots. It gives users a way to seamlessly connect to a large aggregated network of Wi-Fi Hotspots. The [NEHotspotConfiguration](nehotspotconfiguration.md) API lets your app configure those hotspots.

## Topics

### Registering a hotspot helper

- [registerWithOptions:queue:handler:](nehotspothelper/register%28options_queue_handler_%29.md): Deprecated. Register the application as a Hotspot Helper.
- [kNEHotspotHelperOptionDisplayName](knehotspothelperoptiondisplayname.md): The string displayed in Wi-Fi Settings for a network handled by the application.
- [NEHotspotHelperHandler](nehotspothelperhandler.md): The type definition for the Hotspot Helper’s command handler block.

### Getting hotspot network status

- [supportedNetworkInterfaces](nehotspothelper/supportednetworkinterfaces%28%29.md): Deprecated. Return the list of network interfaces managed by the Hotspot Helper infrastructure.

### Logging off

- [logoff:](nehotspothelper/logoff%28__%29.md): Deprecated. Terminate the authentication session for a Hotspot network.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
