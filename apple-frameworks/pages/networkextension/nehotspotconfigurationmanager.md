> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfigurationmanager](https://developer.apple.com/documentation/networkextension/nehotspotconfigurationmanager)

# NEHotspotConfigurationManager (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

A manager that applies and removes hotspot configurations of Wi-Fi networks.

## Declaration

```swift
class NEHotspotConfigurationManager
```

<a id="overview"></a>

## Overview

When your app creates a new hotspot configuration using [NEHotspotConfiguration](nehotspotconfiguration.md) and applies it to a Wi-Fi network or attempts to update a previously configured network, the device prompts the user for approval. Without explicit user consent, your app can’t make configuration changes.

Your app can use [removeConfiguration(forHS20DomainName:)](nehotspotconfigurationmanager/removeconfiguration%28forhs20domainname_%29.md) or [removeConfiguration(forSSID:)](nehotspotconfigurationmanager/removeconfiguration%28forssid_%29.md) to delete a configuration that it has added, but not a configuration added by another app or user. The user can also delete configured networks using Settings \> Wi-Fi.

When your app is uninstalled, iOS removes the configurations of all networks your app has configured, including their keychain entries.

Hotspot Configuration Manager errors are listed in [NEHotspotConfigurationError](nehotspotconfigurationerror.md).

> **Important**

>  To use the [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md) class, you must enable the Hotspot Configuration capability in Xcode. For more information, see [Hotspot Configuration Entitlement](../bundleresources/entitlements/com.apple.developer.networking.hotspotconfiguration.md).

## Topics

### Creating configurations

- [shared](nehotspotconfigurationmanager/shared.md): Instantiates [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md) as a singleton, so it can be shared.
- [apply(\_:completionHandler:)](nehotspotconfigurationmanager/apply%28__completionhandler_%29.md): Adds or updates a Wi-Fi network configuration after prompting the user for permission, and then attempts to join the network under certain conditions.

### Getting a list of configurations

- [getConfiguredSSIDs(completionHandler:)](nehotspotconfigurationmanager/getconfiguredssids%28completionhandler_%29.md): Submits a completion handler the configuration manager calls to send your app the names of the SSIDs or Wi-Fi hotspot domains in the configuration.

### Removing configuration

- [removeConfiguration(forHS20DomainName:)](nehotspotconfigurationmanager/removeconfiguration%28forhs20domainname_%29.md): Removes a Wi-Fi hotspot configuration, identified by a Hotspot 2.0 domain name, that your app previously added.
- [removeConfiguration(forSSID:)](nehotspotconfigurationmanager/removeconfiguration%28forssid_%29.md): Removes a Wi-Fi configuration, identified by an SSID, that your app previously added.

### Errors

- [NEHotspotConfigurationErrorDomain](nehotspotconfigurationerrordomain.md): The domain string for errors involving hotspot configuration.
- [NEHotspotConfigurationError](nehotspotconfigurationerror.md): Error values returned by hotspot configuration manager methods.

### Entitlements

- [Hotspot Configuration Entitlement](../bundleresources/entitlements/com.apple.developer.networking.hotspotconfiguration.md): A Boolean value indicating whether your app can use the hotspot manager to configure Wi-Fi networks.

### Instance Methods

- [joinAccessoryHotspot(\_:passphrase:completionHandler:)](nehotspotconfigurationmanager/joinaccessoryhotspot%28__passphrase_completionhandler_%29.md)
- [joinAccessoryHotspotWithoutSecurity(\_:completionHandler:)](nehotspotconfigurationmanager/joinaccessoryhotspotwithoutsecurity%28__completionhandler_%29.md)

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

### Wi-Fi network configuration

- [NEHotspotConfiguration](nehotspotconfiguration.md): Configuration settings for a Wi-Fi network.
- [NEHotspotEAPSettings](nehotspoteapsettings.md): Extensible Authentication Protocol settings for configuring WPA and WPA2 enterprise Wi-Fi networks.
- [NEHotspotHS20Settings](nehotspoths20settings.md): Settings for configuring Hotspot 2.0 Wi-Fi networks.

# NEHotspotConfigurationManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

A manager that applies and removes hotspot configurations of Wi-Fi networks.

## Declaration

```objectivec
@interface NEHotspotConfigurationManager : NSObject
```

<a id="overview"></a>

## Overview

When your app creates a new hotspot configuration using [NEHotspotConfiguration](nehotspotconfiguration.md) and applies it to a Wi-Fi network or attempts to update a previously configured network, the device prompts the user for approval. Without explicit user consent, your app can’t make configuration changes.

Your app can use [removeConfigurationForHS20DomainName:](nehotspotconfigurationmanager/removeconfiguration%28forhs20domainname_%29.md) or [removeConfigurationForSSID:](nehotspotconfigurationmanager/removeconfiguration%28forssid_%29.md) to delete a configuration that it has added, but not a configuration added by another app or user. The user can also delete configured networks using Settings \> Wi-Fi.

When your app is uninstalled, iOS removes the configurations of all networks your app has configured, including their keychain entries.

Hotspot Configuration Manager errors are listed in [NEHotspotConfigurationError](nehotspotconfigurationerror.md).

> **Important**

>  To use the [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md) class, you must enable the Hotspot Configuration capability in Xcode. For more information, see [Hotspot Configuration Entitlement](../bundleresources/entitlements/com.apple.developer.networking.hotspotconfiguration.md).

## Topics

### Creating configurations

- [sharedManager](nehotspotconfigurationmanager/shared.md): Instantiates [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md) as a singleton, so it can be shared.
- [applyConfiguration:completionHandler:](nehotspotconfigurationmanager/apply%28__completionhandler_%29.md): Adds or updates a Wi-Fi network configuration after prompting the user for permission, and then attempts to join the network under certain conditions.

### Getting a list of configurations

- [getConfiguredSSIDsWithCompletionHandler:](nehotspotconfigurationmanager/getconfiguredssids%28completionhandler_%29.md): Submits a completion handler the configuration manager calls to send your app the names of the SSIDs or Wi-Fi hotspot domains in the configuration.

### Removing configuration

- [removeConfigurationForHS20DomainName:](nehotspotconfigurationmanager/removeconfiguration%28forhs20domainname_%29.md): Removes a Wi-Fi hotspot configuration, identified by a Hotspot 2.0 domain name, that your app previously added.
- [removeConfigurationForSSID:](nehotspotconfigurationmanager/removeconfiguration%28forssid_%29.md): Removes a Wi-Fi configuration, identified by an SSID, that your app previously added.

### Errors

- [NEHotspotConfigurationErrorDomain](nehotspotconfigurationerrordomain.md): The domain string for errors involving hotspot configuration.
- [NEHotspotConfigurationError](nehotspotconfigurationerror.md): Error values returned by hotspot configuration manager methods.

### Entitlements

- [Hotspot Configuration Entitlement](../bundleresources/entitlements/com.apple.developer.networking.hotspotconfiguration.md): A Boolean value indicating whether your app can use the hotspot manager to configure Wi-Fi networks.

### Instance Methods

- [joinAccessoryHotspot:passphrase:completionHandler:](nehotspotconfigurationmanager/joinaccessoryhotspot%28__passphrase_completionhandler_%29.md)
- [joinAccessoryHotspotWithoutSecurity:completionHandler:](nehotspotconfigurationmanager/joinaccessoryhotspotwithoutsecurity%28__completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Wi-Fi network configuration

- [NEHotspotConfiguration](nehotspotconfiguration.md): Configuration settings for a Wi-Fi network.
- [NEHotspotEAPSettings](nehotspoteapsettings.md): Extensible Authentication Protocol settings for configuring WPA and WPA2 enterprise Wi-Fi networks.
- [NEHotspotHS20Settings](nehotspoths20settings.md): Settings for configuring Hotspot 2.0 Wi-Fi networks.
