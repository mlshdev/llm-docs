> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asdiscoverydescriptor](https://developer.apple.com/documentation/accessorysetupkit/asdiscoverydescriptor)

# ASDiscoveryDescriptor (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Descriptive traits used to discover accessories.

## Declaration

```swift
class ASDiscoveryDescriptor
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

Use an instance of this type to identify accessories your app can set up, then set it as the [descriptor](aspickerdisplayitem/descriptor.md) property of an [ASPickerDisplayItem](aspickerdisplayitem.md).

Some of the Bluetooth identifier properties work together to filter matching accessories, as described in the following table.

| Use | Filter property | Also requires | Description |
| --- | --- | --- | --- |
| Required | [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md) or [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md) | (none) | Provide at least one UUID or manufacturer ID to filter. |
| Optional | [bluetoothNameSubstring](asdiscoverydescriptor/bluetoothnamesubstring.md) | [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md) or [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md) | Provide a name substring to look for.  Requires setting at least a service UUID or company ID, which identifies the service or company using the name. |
| Optional | [bluetoothManufacturerDataBlob](asdiscoverydescriptor/bluetoothmanufacturerdatablob.md) and [bluetoothManufacturerDataMask](asdiscoverydescriptor/bluetoothmanufacturerdatamask.md) | [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md) | When using manufacturer data filters, provide both the data and mask. These properties should have the same length and be less than or equal to the size of the advertised payload. The [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md) identifies the manufacturer associated with the data. |
| Optional | [bluetoothServiceDataBlob](asdiscoverydescriptor/bluetoothservicedatablob.md) and [bluetoothServiceDataMask](asdiscoverydescriptor/bluetoothservicedatamask.md) | [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md) | When using UUID service data filters, provide both the data and mask. These properties should have the same length and be less than or equal to the size of the advertised payload. The [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md) identifies the service associated with the data. |

The descriptor also allows you to set the [bluetoothRange](asdiscoverydescriptor/bluetoothrange.md) of matched accessories; set its value to [ASDiscoveryDescriptor.Range.immediate](asdiscoverydescriptor/range/immediate.md) to limit discovery of Bluetooth accessories to those within the immediate proximity of the device running your app.

## Topics

### Specifying Bluetooth properties

- [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md): The accessory’s 16-bit Bluetooth Company Identifier.
- [ASBluetoothCompanyIdentifier](asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [ASBluetoothCompanyIdentifier](asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [bluetoothManufacturerDataBlob](asdiscoverydescriptor/bluetoothmanufacturerdatablob.md): A byte buffer that matches the accessory’s Bluetooth manufacturer data.
- [bluetoothManufacturerDataMask](asdiscoverydescriptor/bluetoothmanufacturerdatamask.md): The accessory’s Bluetooth manufacturer data mask.
- [bluetoothServiceDataBlob](asdiscoverydescriptor/bluetoothservicedatablob.md): A byte buffer that matches the accessory’s Bluetooth service data.
- [bluetoothServiceDataMask](asdiscoverydescriptor/bluetoothservicedatamask.md): The accessory’s Bluetooth service data mask.
- [bluetoothNameSubstring](asdiscoverydescriptor/bluetoothnamesubstring.md): The accessory’s over-the-air Bluetooth name substring.
- [bluetoothNameSubstringCompareOptions](asdiscoverydescriptor/bluetoothnamesubstringcompareoptions.md): The accessory’s over-the-air Bluetooth name substring compare options.
- [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md): The accessory’s Bluetooth service UUID.
- [bluetoothRange](asdiscoverydescriptor/bluetoothrange.md): A property that tells the session to discover accessories within a specific Bluetooth range.
- [ASDiscoveryDescriptor.Range](asdiscoverydescriptor/range.md): The Bluetooth range in which to discover accessories.

### Specifying Wi-Fi properties

- [ssid](asdiscoverydescriptor/ssid.md): The SSID of the accessory’s Wi-Fi network.
- [ssidPrefix](asdiscoverydescriptor/ssidprefix.md): The prefix string of SSID of the accessory’s Wi-Fi network.

### Specifying options

- [supportedOptions](asdiscoverydescriptor/supportedoptions.md): Options supported by an accessory.
- [ASAccessory.SupportOptions](asaccessory/supportoptions.md): Options of discoverable accessories.

### Specifying Wi-Fi Aware properties

- [wifiAwareServiceName](asdiscoverydescriptor/wifiawareservicename.md): The accessory’s Wi-Fi Aware’s service name if available.
- [wifiAwareServiceRole](asdiscoverydescriptor/wifiawareservicerole-swift.property.md): The role of the accessory’s Wi-Fi Aware’s service.
- [ASDiscoveryDescriptor.WiFiAwareServiceRole](asdiscoverydescriptor/wifiawareservicerole-swift.enum.md): A type that defines the role of an accessory’s Wi-Fi Aware’s service.
- [wifiAwareModelNameMatch](asdiscoverydescriptor/wifiawaremodelnamematch.md): The accessory’s Wi-Fi Aware model name and matching options.
- [wifiAwareVendorNameMatch](asdiscoverydescriptor/wifiawarevendornamematch.md): The accessory’s Wi-Fi Aware vendor name and matching options.
- [ASPropertyCompareString](aspropertycomparestring.md): A type that specifies how to filter a property against a given string and comparison options.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessory discovery

- [ASAccessoryEvent](asaccessoryevent.md): Properties of an event encountered during accessory discovery.
- [ASAccessoryEventType](asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery

# ASDiscoveryDescriptor (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Descriptive traits used to discover accessories.

## Declaration

```objectivec
@interface ASDiscoveryDescriptor : NSObject
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

Use an instance of this type to identify accessories your app can set up, then set it as the [descriptor](aspickerdisplayitem/descriptor.md) property of an [ASPickerDisplayItem](aspickerdisplayitem.md).

Some of the Bluetooth identifier properties work together to filter matching accessories, as described in the following table.

| Use | Filter property | Also requires | Description |
| --- | --- | --- | --- |
| Required | [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md) or [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md) | (none) | Provide at least one UUID or manufacturer ID to filter. |
| Optional | [bluetoothNameSubstring](asdiscoverydescriptor/bluetoothnamesubstring.md) | [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md) or [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md) | Provide a name substring to look for.  Requires setting at least a service UUID or company ID, which identifies the service or company using the name. |
| Optional | [bluetoothManufacturerDataBlob](asdiscoverydescriptor/bluetoothmanufacturerdatablob.md) and [bluetoothManufacturerDataMask](asdiscoverydescriptor/bluetoothmanufacturerdatamask.md) | [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md) | When using manufacturer data filters, provide both the data and mask. These properties should have the same length and be less than or equal to the size of the advertised payload. The [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md) identifies the manufacturer associated with the data. |
| Optional | [bluetoothServiceDataBlob](asdiscoverydescriptor/bluetoothservicedatablob.md) and [bluetoothServiceDataMask](asdiscoverydescriptor/bluetoothservicedatamask.md) | [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md) | When using UUID service data filters, provide both the data and mask. These properties should have the same length and be less than or equal to the size of the advertised payload. The [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md) identifies the service associated with the data. |

The descriptor also allows you to set the [bluetoothRange](asdiscoverydescriptor/bluetoothrange.md) of matched accessories; set its value to [ASDiscoveryDescriptorRangeImmediate](asdiscoverydescriptor/range/immediate.md) to limit discovery of Bluetooth accessories to those within the immediate proximity of the device running your app.

## Topics

### Specifying Bluetooth properties

- [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md): The accessory’s 16-bit Bluetooth Company Identifier.
- [ASBluetoothCompanyIdentifier](asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [ASBluetoothCompanyIdentifier](asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [bluetoothManufacturerDataBlob](asdiscoverydescriptor/bluetoothmanufacturerdatablob.md): A byte buffer that matches the accessory’s Bluetooth manufacturer data.
- [bluetoothManufacturerDataMask](asdiscoverydescriptor/bluetoothmanufacturerdatamask.md): The accessory’s Bluetooth manufacturer data mask.
- [bluetoothServiceDataBlob](asdiscoverydescriptor/bluetoothservicedatablob.md): A byte buffer that matches the accessory’s Bluetooth service data.
- [bluetoothServiceDataMask](asdiscoverydescriptor/bluetoothservicedatamask.md): The accessory’s Bluetooth service data mask.
- [bluetoothNameSubstring](asdiscoverydescriptor/bluetoothnamesubstring.md): The accessory’s over-the-air Bluetooth name substring.
- [bluetoothNameSubstringCompareOptions](asdiscoverydescriptor/bluetoothnamesubstringcompareoptions.md): The accessory’s over-the-air Bluetooth name substring compare options.
- [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md): The accessory’s Bluetooth service UUID.
- [bluetoothRange](asdiscoverydescriptor/bluetoothrange.md): A property that tells the session to discover accessories within a specific Bluetooth range.
- [ASDiscoveryDescriptorRange](asdiscoverydescriptor/range.md): The Bluetooth range in which to discover accessories.

### Specifying Wi-Fi properties

- [SSID](asdiscoverydescriptor/ssid.md): The SSID of the accessory’s Wi-Fi network.
- [SSIDPrefix](asdiscoverydescriptor/ssidprefix.md): The prefix string of SSID of the accessory’s Wi-Fi network.

### Specifying options

- [supportedOptions](asdiscoverydescriptor/supportedoptions.md): Options supported by an accessory.
- [ASAccessorySupportOptions](asaccessory/supportoptions.md): Options of discoverable accessories.

### Specifying Wi-Fi Aware properties

- [wifiAwareServiceName](asdiscoverydescriptor/wifiawareservicename.md): The accessory’s Wi-Fi Aware’s service name if available.
- [wifiAwareServiceRole](asdiscoverydescriptor/wifiawareservicerole-swift.property.md): The role of the accessory’s Wi-Fi Aware’s service.
- [ASDiscoveryDescriptorWiFiAwareServiceRole](asdiscoverydescriptor/wifiawareservicerole-swift.enum.md): A type that defines the role of an accessory’s Wi-Fi Aware’s service.
- [wifiAwareModelNameMatch](asdiscoverydescriptor/wifiawaremodelnamematch.md): The accessory’s Wi-Fi Aware model name and matching options.
- [wifiAwareVendorNameMatch](asdiscoverydescriptor/wifiawarevendornamematch.md): The accessory’s Wi-Fi Aware vendor name and matching options.
- [ASPropertyCompareString](aspropertycomparestring.md): A type that specifies how to filter a property against a given string and comparison options.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Accessory discovery

- [ASAccessoryEvent](asaccessoryevent.md): Properties of an event encountered during accessory discovery.
- [ASAccessoryEventType](asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery
