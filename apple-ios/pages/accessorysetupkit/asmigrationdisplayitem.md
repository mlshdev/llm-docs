> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asmigrationdisplayitem](https://developer.apple.com/documentation/accessorysetupkit/asmigrationdisplayitem)

# ASMigrationDisplayItem (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A previously-discovered accessory as presented by the discovery picker, for use when migrating it to AccessorySetupKit.

## Declaration

```swift
class ASMigrationDisplayItem
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

Create instances of `ASMigrationDisplayItem` by calling the superclass’s initializer [init(name:productImage:descriptor:)](aspickerdisplayitem/init%28name_productimage_descriptor_%29.md), then specify the Bluetooth [peripheralIdentifier](asmigrationdisplayitem/peripheralidentifier.md), the Wi-Fi [hotspotSSID](asmigrationdisplayitem/hotspotssid.md), or both, for the specific accessory you want to migrate.

## Topics

### Accessory identifiers

- [peripheralIdentifier](asmigrationdisplayitem/peripheralidentifier.md): The Bluetooth identifier of the accessory to migrate.
- [hotspotSSID](asmigrationdisplayitem/hotspotssid.md): The Wi-Fi hotspot SSID of the accessory to migrate.
- [wifiAwarePairedDeviceID](asmigrationdisplayitem/wifiawarepaireddeviceid.md): The Wi-Fi Aware paired device identififer of the accessory to migrate.

## Relationships

### Inherits From

- [ASPickerDisplayItem](aspickerdisplayitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying picker items

- [ASPickerDisplayItem](aspickerdisplayitem.md): An accessory as presented by the discovery picker.
- [ASDiscoveredDisplayItem](asdiscovereddisplayitem.md): A picker display item created from customizing a discovered accessory.

# ASMigrationDisplayItem (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A previously-discovered accessory as presented by the discovery picker, for use when migrating it to AccessorySetupKit.

## Declaration

```objectivec
@interface ASMigrationDisplayItem : ASPickerDisplayItem
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

Create instances of `ASMigrationDisplayItem` by calling the superclass’s initializer [initWithName:productImage:descriptor:](aspickerdisplayitem/init%28name_productimage_descriptor_%29.md), then specify the Bluetooth [peripheralIdentifier](asmigrationdisplayitem/peripheralidentifier.md), the Wi-Fi [hotspotSSID](asmigrationdisplayitem/hotspotssid.md), or both, for the specific accessory you want to migrate.

## Topics

### Accessory identifiers

- [peripheralIdentifier](asmigrationdisplayitem/peripheralidentifier.md): The Bluetooth identifier of the accessory to migrate.
- [hotspotSSID](asmigrationdisplayitem/hotspotssid.md): The Wi-Fi hotspot SSID of the accessory to migrate.
- [wifiAwarePairedDeviceID](asmigrationdisplayitem/wifiawarepaireddeviceid.md): The Wi-Fi Aware paired device identififer of the accessory to migrate.

## Relationships

### Inherits From

- [ASPickerDisplayItem](aspickerdisplayitem.md)

## See Also

### Displaying picker items

- [ASPickerDisplayItem](aspickerdisplayitem.md): An accessory as presented by the discovery picker.
- [ASDiscoveredDisplayItem](asdiscovereddisplayitem.md): A picker display item created from customizing a discovered accessory.
