> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asdiscoveredaccessory](https://developer.apple.com/documentation/accessorysetupkit/asdiscoveredaccessory)

# ASDiscoveredAccessory (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 26.1+ · iPadOS 26.1+

A discovered accessory, for use in creating a customized picker display item.

## Declaration

```swift
class ASDiscoveredAccessory
```

<a id="overview"></a>

## Overview

When your app’s picker uses the [filterDiscoveryResults](aspickerdisplaysettings/options-swift.struct/filterdiscoveryresults.md) option, you receive [ASAccessoryEventType.accessoryDiscovered](asaccessoryeventtype/accessorydiscovered.md) events that contain this type. Use the discovered accessory’s Bluetooth properties to create a new [ASDiscoveredDisplayItem](asdiscovereddisplayitem.md), incorporating traits like a custom accessory name or a newly downloaded product image. You can then add this item to the picker to allow the person using the app to set up the accessory.

## Topics

### Working with accessory properties

- [bluetoothAdvertisementData](asdiscoveredaccessory/bluetoothadvertisementdata.md): The Bluetooth advertisement data from the discovered accessory.
- [bluetoothRSSI](asdiscoveredaccessory/bluetoothrssi-5a2gp.md): The Bluetooth RSSI (Received Signal Strength Indicator) value from the discovered accessory.

## Relationships

### Inherits From

- [ASAccessory](asaccessory.md)

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

### Accessory description

- [ASAccessory](asaccessory.md): An accessory discovered by the accessory session.
- [ASAccessory.AccessoryState](asaccessory/accessorystate.md): An enumeration of possible authorization states of an accessory.

# ASDiscoveredAccessory (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 26.1+ · iPadOS 26.1+

A discovered accessory, for use in creating a customized picker display item.

## Declaration

```objectivec
@interface ASDiscoveredAccessory : ASAccessory
```

<a id="overview"></a>

## Overview

When your app’s picker uses the [ASPickerDisplaySettingsOptionFilterDiscoveryResults](aspickerdisplaysettings/options-swift.struct/filterdiscoveryresults.md) option, you receive [ASAccessoryEventTypeAccessoryDiscovered](asaccessoryeventtype/accessorydiscovered.md) events that contain this type. Use the discovered accessory’s Bluetooth properties to create a new [ASDiscoveredDisplayItem](asdiscovereddisplayitem.md), incorporating traits like a custom accessory name or a newly downloaded product image. You can then add this item to the picker to allow the person using the app to set up the accessory.

## Topics

### Working with accessory properties

- [bluetoothAdvertisementData](asdiscoveredaccessory/bluetoothadvertisementdata.md): The Bluetooth advertisement data from the discovered accessory.
- [bluetoothRSSI](asdiscoveredaccessory/bluetoothrssi-3c75a.md): The Bluetooth RSSI (Received Signal Strength Indicator) value from the discovered accessory.

## Relationships

### Inherits From

- [ASAccessory](asaccessory.md)

## See Also

### Accessory description

- [ASAccessory](asaccessory.md): An accessory discovered by the accessory session.
- [ASAccessoryState](asaccessory/accessorystate.md): An enumeration of possible authorization states of an accessory.
