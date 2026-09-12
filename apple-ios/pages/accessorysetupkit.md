> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit](https://developer.apple.com/documentation/accessorysetupkit)

# AccessorySetupKit (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Framework  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Enable privacy-preserving discovery and configuration of accessories.

<a id="Overview"></a>

## Overview

Use AccessorySetupKit to discover and configure Bluetooth or Wi-Fi accessories with images and names provided by the app. Allow seamless, privacy-preserving user consent and control for Bluetooth, Wi-Fi, and Local Network permissions. AccessorySetupKit apps can access enhanced accessory controls including accessory pairing removal and renaming.

To use AccessorySetupKit with [Wi-Fi Aware](wifiaware.md), specify Wi-Fi Aware properties in a [ASDiscoveryDescriptor](accessorysetupkit/asdiscoverydescriptor.md) prior to beginning accessory discovery.

> **Important**

> AccessorySetupKit is available for iOS and iPadOS. In watchOS 26 and later, if someone sets up an accessory with your iOS app by using AccessorySetupKit, a companion watchOS app can also use CoreBluetooth to communicate with the new accessory and any other accessories.

## Topics

### Essentials

- [Setting up and authorizing a Bluetooth accessory](accessorysetupkit/setting-up-and-authorizing-a-bluetooth-accessory.md): Discover, select, and set up a specific Bluetooth accessory without requesting permission to use Bluetooth.
- [Discovering and configuring accessories](accessorysetupkit/discovering-and-configuring-accessories.md): Detect nearby accessories and facilitate their setup.
- [ASAccessorySession](accessorysetupkit/asaccessorysession.md): A class to coordinate accessory discovery.

### Accessory discovery

- [ASAccessoryEvent](accessorysetupkit/asaccessoryevent.md): Properties of an event encountered during accessory discovery.
- [ASAccessoryEventType](accessorysetupkit/asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery
- [ASDiscoveryDescriptor](accessorysetupkit/asdiscoverydescriptor.md): Descriptive traits used to discover accessories.

### Accessory description

- [ASAccessory](accessorysetupkit/asaccessory.md): An accessory discovered by the accessory session.
- [ASDiscoveredAccessory](accessorysetupkit/asdiscoveredaccessory.md): A discovered accessory, for use in creating a customized picker display item.
- [ASAccessory.AccessoryState](accessorysetupkit/asaccessory/accessorystate.md): An enumeration of possible authorization states of an accessory.

### Displaying picker items

- [ASPickerDisplayItem](accessorysetupkit/aspickerdisplayitem.md): An accessory as presented by the discovery picker.
- [ASDiscoveredDisplayItem](accessorysetupkit/asdiscovereddisplayitem.md): A picker display item created from customizing a discovered accessory.
- [ASMigrationDisplayItem](accessorysetupkit/asmigrationdisplayitem.md): A previously-discovered accessory as presented by the discovery picker, for use when migrating it to AccessorySetupKit.

### Information property list keys

- [NSAccessorySetupKitSupports](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupkitsupports): An array of strings that indicates the wireless technologies AccessorySetupKit uses when discovering and configuring accessories.
- [NSAccessorySetupBluetoothCompanyIdentifiers](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupbluetoothcompanyidentifiers): An array of strings that represent the Bluetooth company identifiers for accessories that your app configures.
- [NSAccessorySetupBluetoothNames](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupbluetoothnames): An array of strings that represent the Bluetooth device names or substrings for accessories that your app configures.
- [NSAccessorySetupBluetoothServices](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupbluetoothservices): An array of strings that represent the hexadecimal values of Bluetooth SIG-defined services or custom services for accessories your app configures.

### Errors

- [ASError](accessorysetupkit/aserror.md): An error encountered during accessory discovery.
- [ASErrorDomain](accessorysetupkit/aserrordomain.md): NSError domain for AccessorySetupKit errors.
- [ASError.Code](accessorysetupkit/aserror/code.md): Codes that describe errors encountered during accessory discovery.

# AccessorySetupKit (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Framework  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Enable privacy-preserving discovery and configuration of accessories.

<a id="Overview"></a>

## Overview

Use AccessorySetupKit to discover and configure Bluetooth or Wi-Fi accessories with images and names provided by the app. Allow seamless, privacy-preserving user consent and control for Bluetooth, Wi-Fi, and Local Network permissions. AccessorySetupKit apps can access enhanced accessory controls including accessory pairing removal and renaming.

To use AccessorySetupKit with [Wi-Fi Aware](wifiaware.md), specify Wi-Fi Aware properties in a [ASDiscoveryDescriptor](accessorysetupkit/asdiscoverydescriptor.md) prior to beginning accessory discovery.

> **Important**

> AccessorySetupKit is available for iOS and iPadOS. In watchOS 26 and later, if someone sets up an accessory with your iOS app by using AccessorySetupKit, a companion watchOS app can also use CoreBluetooth to communicate with the new accessory and any other accessories.

## Topics

### Essentials

- [Setting up and authorizing a Bluetooth accessory](accessorysetupkit/setting-up-and-authorizing-a-bluetooth-accessory.md): Discover, select, and set up a specific Bluetooth accessory without requesting permission to use Bluetooth.
- [Discovering and configuring accessories](accessorysetupkit/discovering-and-configuring-accessories.md): Detect nearby accessories and facilitate their setup.
- [ASAccessorySession](accessorysetupkit/asaccessorysession.md): A class to coordinate accessory discovery.

### Accessory discovery

- [ASAccessoryEvent](accessorysetupkit/asaccessoryevent.md): Properties of an event encountered during accessory discovery.
- [ASAccessoryEventType](accessorysetupkit/asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery
- [ASDiscoveryDescriptor](accessorysetupkit/asdiscoverydescriptor.md): Descriptive traits used to discover accessories.

### Accessory description

- [ASAccessory](accessorysetupkit/asaccessory.md): An accessory discovered by the accessory session.
- [ASDiscoveredAccessory](accessorysetupkit/asdiscoveredaccessory.md): A discovered accessory, for use in creating a customized picker display item.
- [ASAccessoryState](accessorysetupkit/asaccessory/accessorystate.md): An enumeration of possible authorization states of an accessory.

### Displaying picker items

- [ASPickerDisplayItem](accessorysetupkit/aspickerdisplayitem.md): An accessory as presented by the discovery picker.
- [ASDiscoveredDisplayItem](accessorysetupkit/asdiscovereddisplayitem.md): A picker display item created from customizing a discovered accessory.
- [ASMigrationDisplayItem](accessorysetupkit/asmigrationdisplayitem.md): A previously-discovered accessory as presented by the discovery picker, for use when migrating it to AccessorySetupKit.

### Information property list keys

- [NSAccessorySetupKitSupports](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupkitsupports): An array of strings that indicates the wireless technologies AccessorySetupKit uses when discovering and configuring accessories.
- [NSAccessorySetupBluetoothCompanyIdentifiers](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupbluetoothcompanyidentifiers): An array of strings that represent the Bluetooth company identifiers for accessories that your app configures.
- [NSAccessorySetupBluetoothNames](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupbluetoothnames): An array of strings that represent the Bluetooth device names or substrings for accessories that your app configures.
- [NSAccessorySetupBluetoothServices](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupbluetoothservices): An array of strings that represent the hexadecimal values of Bluetooth SIG-defined services or custom services for accessories your app configures.

### Errors

- [ASErrorDomain](accessorysetupkit/aserrordomain.md): NSError domain for AccessorySetupKit errors.
- [ASErrorCode](accessorysetupkit/aserror/code.md): Codes that describe errors encountered during accessory discovery.

### Macros

- [AS_EXTERN](accessorysetupkit/as_extern.md)
- [as_os_ownership](accessorysetupkit/as_os_ownership.md)
