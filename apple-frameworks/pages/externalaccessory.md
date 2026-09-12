> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory](https://developer.apple.com/documentation/externalaccessory)

# External Accessory (Swift)

**Framework:** External Accessory  
**Kind:** Framework  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Communicate with accessories that connect to a device with the Apple Lightning connector, or with Bluetooth wireless technology.

<a id="overview"></a>

## Overview

Use the External Accessory framework to set up and manage a connection to an MFi accessory your iOS app supports. The framework supports hardware that connects to an iOS or iPadOS device physically through an Apple Lightning or a 30-pin connector, or wirelessly with Bluetooth technology. The framework notifies your app when the accessory connects or disconnects from the user’s device. While connected, you communicate directly with the accessory using any hardware protocols the device supports.

> **Note**

>  iPad and iPhone apps running on a Mac with Apple silicon can’t connect to external accessories using this framework. You may continue to link apps to this framework and run other features on Apple silicon.

The manufacturer of an MFi accessory decides which third-party apps may communicate with their accessories. If you’re developing an app, work with the manufacturer to obtain the information you need to communicate with their hardware. For example, obtain the specifications for the communication protocols the device supports.

For more information about how to connect to external accessories, see [External Accessory Programming Topics](https://developer.apple.com/library/archive/featuredarticles/ExternalAccessoryPT/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009502).

## Topics

### Essentials

- [UISupportedExternalAccessoryProtocols](bundleresources/information-property-list/uisupportedexternalaccessoryprotocols.md): The protocols that the app uses to communicate with external accessory hardware.
- [EAAccessoryManager](externalaccessory/eaaccessorymanager.md): The object you use to identify connected accessories, and begin delivery of connection and disconnection notifications.

### Accessory Communication

- [EAAccessory](externalaccessory/eaaccessory.md): An object that contains information about a single, connected hardware accessory.
- [EASession](externalaccessory/easession.md): The object you use to manage communications between your app and a connected hardware accessory.

### Wi-Fi Accessory Configuration

- [Wireless Accessory Configuration Entitlement](bundleresources/entitlements/com.apple.external-accessory.wireless-configuration.md): A Boolean value that indicates whether your app may configure MFi Wi-Fi accessories.
- [EAWiFiUnconfiguredAccessoryBrowser](externalaccessory/eawifiunconfiguredaccessorybrowser.md): An object you use to scan for wireless accessories and configure them for use with the user’s app.
- [EAWiFiUnconfiguredAccessory](externalaccessory/eawifiunconfiguredaccessory.md): An object that provides information about an unconfigured MFi Wireless Accessory Configuration accessory.

# External Accessory (Objective-C)

**Framework:** External Accessory  
**Kind:** Framework  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Communicate with accessories that connect to a device with the Apple Lightning connector, or with Bluetooth wireless technology.

<a id="overview"></a>

## Overview

Use the External Accessory framework to set up and manage a connection to an MFi accessory your iOS app supports. The framework supports hardware that connects to an iOS or iPadOS device physically through an Apple Lightning or a 30-pin connector, or wirelessly with Bluetooth technology. The framework notifies your app when the accessory connects or disconnects from the user’s device. While connected, you communicate directly with the accessory using any hardware protocols the device supports.

> **Note**

>  iPad and iPhone apps running on a Mac with Apple silicon can’t connect to external accessories using this framework. You may continue to link apps to this framework and run other features on Apple silicon.

The manufacturer of an MFi accessory decides which third-party apps may communicate with their accessories. If you’re developing an app, work with the manufacturer to obtain the information you need to communicate with their hardware. For example, obtain the specifications for the communication protocols the device supports.

For more information about how to connect to external accessories, see [External Accessory Programming Topics](https://developer.apple.com/library/archive/featuredarticles/ExternalAccessoryPT/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009502).

## Topics

### Essentials

- [UISupportedExternalAccessoryProtocols](bundleresources/information-property-list/uisupportedexternalaccessoryprotocols.md): The protocols that the app uses to communicate with external accessory hardware.
- [EAAccessoryManager](externalaccessory/eaaccessorymanager.md): The object you use to identify connected accessories, and begin delivery of connection and disconnection notifications.

### Accessory Communication

- [EAAccessory](externalaccessory/eaaccessory.md): An object that contains information about a single, connected hardware accessory.
- [EASession](externalaccessory/easession.md): The object you use to manage communications between your app and a connected hardware accessory.

### Wi-Fi Accessory Configuration

- [Wireless Accessory Configuration Entitlement](bundleresources/entitlements/com.apple.external-accessory.wireless-configuration.md): A Boolean value that indicates whether your app may configure MFi Wi-Fi accessories.
- [EAWiFiUnconfiguredAccessoryBrowser](externalaccessory/eawifiunconfiguredaccessorybrowser.md): An object you use to scan for wireless accessories and configure them for use with the user’s app.
- [EAWiFiUnconfiguredAccessory](externalaccessory/eawifiunconfiguredaccessory.md): An object that provides information about an unconfigured MFi Wireless Accessory Configuration accessory.

### Macros

- [EA_EXTERN](externalaccessory/ea_extern.md)
- [EA_EXTERN_CLASS](externalaccessory/ea_extern_class.md)
- [EA_EXTERN_CLASS_AVAILABLE](externalaccessory/ea_extern_class_available.md)
