> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyaccessoryconfiguration/init(bluetoothchannelsoundingidentifier:previousbluetoothidentifier:)](https://developer.apple.com/documentation/nearbyinteraction/ninearbyaccessoryconfiguration/init(bluetoothchannelsoundingidentifier:previousbluetoothidentifier:))

# init(bluetoothChannelSoundingIdentifier:previousBluetoothIdentifier:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a configuration for Bluetooth Channel Sounding ranging with an accessory.

## Declaration

```swift
init(bluetoothChannelSoundingIdentifier bluetoothIdentifier: UUID, previousBluetoothIdentifier: UUID?)
```

## Parameters

- `bluetoothIdentifier`: An identifier that the session uses to establish the Bluetooth connection with the accessory. This identifier originates from the Bluetooth Channel Sounding protocol.
- `previousBluetoothIdentifier`: An optional previous Bluetooth identifier for reconnection scenarios.

<a id="discussion"></a>

## Discussion

Bluetooth Channel Sounding is a Bluetooth 6.0 specification ranging strategy that measure distance between iPhone and a paired accessory over a standard Bluetooth connection without requiring dedicated Ultra Wideband hardware.

Use this initializer to create an accessory configuration that implements Bluetooth Channel Sounding. Call [supportsBluetoothChannelSounding](../nidevicecapability/supportsbluetoothchannelsounding.md) before running a session to ensure device support, and pair your accessory with [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit); the Nearby Interaction framework only supports Bluetooth Channel Sounding with accessories paired through [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit).

<a id="Handle-reconnections"></a>

### Handle reconnections

When reconnecting to an accessory where the Bluetooth identifier can change, provide the previous identifier using the `previousBluetoothIdentifier` parameter. This allows the session to maintain internal state continuity across reconnections. For initial connections, pass `nil` for this parameter.

```swift
// Initial connection.
let config = NINearbyAccessoryConfiguration(
    bluetoothChannelSoundingIdentifier: btcsIdentifier,
    previousBluetoothIdentifier: nil
)
session.run(config)

// Reconnection with a new identifier.
let reconnectConfig = NINearbyAccessoryConfiguration(
    bluetoothChannelSoundingIdentifier: newBtcsIdentifier,
    previousBluetoothIdentifier: previousBtcsIdentifier
)
session.run(reconnectConfig)
```

# initWithBluetoothChannelSoundingIdentifier:previousBluetoothIdentifier: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a configuration for Bluetooth Channel Sounding ranging with an accessory.

## Declaration

```objectivec
- (instancetype) initWithBluetoothChannelSoundingIdentifier:(NSUUID *) bluetoothIdentifier previousBluetoothIdentifier:(NSUUID *) previousBluetoothIdentifier;
```

## Parameters

- `bluetoothIdentifier`: An identifier that the session uses to establish the Bluetooth connection with the accessory. This identifier originates from the Bluetooth Channel Sounding protocol.
- `previousBluetoothIdentifier`: An optional previous Bluetooth identifier for reconnection scenarios.

<a id="discussion"></a>

## Discussion

Bluetooth Channel Sounding is a Bluetooth 6.0 specification ranging strategy that measure distance between iPhone and a paired accessory over a standard Bluetooth connection without requiring dedicated Ultra Wideband hardware.

Use this initializer to create an accessory configuration that implements Bluetooth Channel Sounding. Call [supportsBluetoothChannelSounding](../nidevicecapability/supportsbluetoothchannelsounding.md) before running a session to ensure device support, and pair your accessory with [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit); the Nearby Interaction framework only supports Bluetooth Channel Sounding with accessories paired through [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit).

<a id="Handle-reconnections"></a>

### Handle reconnections

When reconnecting to an accessory where the Bluetooth identifier can change, provide the previous identifier using the `previousBluetoothIdentifier` parameter. This allows the session to maintain internal state continuity across reconnections. For initial connections, pass `nil` for this parameter.

```swift
// Initial connection.
let config = NINearbyAccessoryConfiguration(
    bluetoothChannelSoundingIdentifier: btcsIdentifier,
    previousBluetoothIdentifier: nil
)
session.run(config)

// Reconnection with a new identifier.
let reconnectConfig = NINearbyAccessoryConfiguration(
    bluetoothChannelSoundingIdentifier: newBtcsIdentifier,
    previousBluetoothIdentifier: previousBtcsIdentifier
)
session.run(reconnectConfig)
```
