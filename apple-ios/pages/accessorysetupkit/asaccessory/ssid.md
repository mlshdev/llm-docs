> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorysetupkit/asaccessory/ssid

# ssid (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory’s Wi-Fi SSID, if any.

## Declaration

```swift
var ssid: String? { get }
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

Use this identifier to establish a connection to the accessory.

## See Also

### Accessing identifiers

- [bluetoothIdentifier](bluetoothidentifier.md): The accessory’s unique Bluetooth identifier, if any.
- [bluetoothTransportBridgingIdentifier](bluetoothtransportbridgingidentifier.md): The accessory’s Bluetooth identifier, if any, for use when bridging classic transport profiles.

# SSID (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory’s Wi-Fi SSID, if any.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * SSID;
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

Use this identifier to establish a connection to the accessory.

## See Also

### Accessing identifiers

- [bluetoothIdentifier](bluetoothidentifier.md): The accessory’s unique Bluetooth identifier, if any.
- [bluetoothTransportBridgingIdentifier](bluetoothtransportbridgingidentifier.md): The accessory’s Bluetooth identifier, if any, for use when bridging classic transport profiles.
