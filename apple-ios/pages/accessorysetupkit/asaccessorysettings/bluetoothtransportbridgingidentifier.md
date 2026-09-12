> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysettings/bluetoothtransportbridgingidentifier](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysettings/bluetoothtransportbridgingidentifier)

# bluetoothTransportBridgingIdentifier (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A 6-byte identifier for bridging classic transport profiles.

## Declaration

```swift
var bluetoothTransportBridgingIdentifier: Data? { get set }
```

<a id="discussion"></a>

## Discussion

AccessorySetupKit ignores this property if another app already authorized and bridged the accessory.

## See Also

### Inspecting accessory settings

- [ssid](ssid.md): A hotspot identifier that clients can use to connect to an accessory’s hotspot.

# bluetoothTransportBridgingIdentifier (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A 6-byte identifier for bridging classic transport profiles.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSData * bluetoothTransportBridgingIdentifier;
```

<a id="discussion"></a>

## Discussion

AccessorySetupKit ignores this property if another app already authorized and bridged the accessory.

## See Also

### Inspecting accessory settings

- [SSID](ssid.md): A hotspot identifier that clients can use to connect to an accessory’s hotspot.
