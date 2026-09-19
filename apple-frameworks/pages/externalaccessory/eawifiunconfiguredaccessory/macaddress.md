> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessory/macaddress

# macAddress (Swift)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The primary MAC address of the accessory.

## Declaration

```swift
var macAddress: String { get }
```

## See Also

### Getting Information About the Accessory

- [name](name.md): The name of the accessory.
- [manufacturer](manufacturer.md): The name of the accessory’s manufacturer.
- [model](model.md): The model name of accessory.
- [ssid](ssid.md): The Wi-Fi SSID of the accessory.
- [properties](properties.md): The properties the accessory supports.
- [EAWiFiUnconfiguredAccessoryProperties](../eawifiunconfiguredaccessoryproperties.md): Options that can be combined using the C bitwise `OR` operator to represent the properties of an unconfigured accessory.

# macAddress (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The primary MAC address of the accessory.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * macAddress;
```

## See Also

### Getting Information About the Accessory

- [name](name.md): The name of the accessory.
- [manufacturer](manufacturer.md): The name of the accessory’s manufacturer.
- [model](model.md): The model name of accessory.
- [ssid](ssid.md): The Wi-Fi SSID of the accessory.
- [properties](properties.md): The properties the accessory supports.
- [EAWiFiUnconfiguredAccessoryProperties](../eawifiunconfiguredaccessoryproperties.md): Options that can be combined using the C bitwise `OR` operator to represent the properties of an unconfigured accessory.
