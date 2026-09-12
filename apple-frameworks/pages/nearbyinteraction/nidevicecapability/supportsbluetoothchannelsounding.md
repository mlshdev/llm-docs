> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidevicecapability/supportsbluetoothchannelsounding](https://developer.apple.com/documentation/nearbyinteraction/nidevicecapability/supportsbluetoothchannelsounding)

# supportsBluetoothChannelSounding (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.

## Declaration

```swift
var supportsBluetoothChannelSounding: Bool { get }
```

<a id="discussion"></a>

## Discussion

Bluetooth Channel Sounding is a Bluetooth 6.0 specification ranging strategy that relies on a Bluetooth connection to measure distance between iPhone and a paired accessory.

Check this property before using Bluetooth Channel Sounding ranging to ensure the device has the required hardware capabilities. Running a Bluetooth Channel Sounding session on an unsupported device invalidates the session with an error.

To use Bluetooth Channel Sounding,

- Pair your accessory with [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit); the Nearby Interaction framework only supports Bluetooth Channel Sounding with accessories paired through [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit).
- Instantiate an [NINearbyAccessoryConfiguration](../ninearbyaccessoryconfiguration.md) using the [init(bluetoothChannelSoundingIdentifier:previousBluetoothIdentifier:)](../ninearbyaccessoryconfiguration/init%28bluetoothchannelsoundingidentifier_previousbluetoothidentifier_%29.md) initializer:

```swift
guard NISession.deviceCapabilities.supportsBluetoothChannelSounding else {
    print("Device doesn't support Bluetooth Channel Sounding.")
    return
}

// Create a configuration for Bluetooth Channel Sounding ranging.
let config = NINearbyAccessoryConfiguration(
    bluetoothChannelSoundingIdentifier: identifier,
    previousBluetoothIdentifier: nil
)
session.run(config)
```

## See Also

### Checking session features

- [supportsPreciseDistanceMeasurement](supportsprecisedistancemeasurement.md): A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.
- [supportsDirectionMeasurement](supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsCameraAssistance](supportscameraassistance.md): A Boolean value that indicates whether the device can leverage ARKit to improve interaction.
- [supportsExtendedDistanceMeasurement](supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsDLTDOAMeasurement](supportsdltdoameasurement.md): A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.

# supportsBluetoothChannelSounding (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsBluetoothChannelSounding;
```

<a id="discussion"></a>

## Discussion

Bluetooth Channel Sounding is a Bluetooth 6.0 specification ranging strategy that relies on a Bluetooth connection to measure distance between iPhone and a paired accessory.

Check this property before using Bluetooth Channel Sounding ranging to ensure the device has the required hardware capabilities. Running a Bluetooth Channel Sounding session on an unsupported device invalidates the session with an error.

To use Bluetooth Channel Sounding,

- Pair your accessory with [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit); the Nearby Interaction framework only supports Bluetooth Channel Sounding with accessories paired through [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit).
- Instantiate an [NINearbyAccessoryConfiguration](../ninearbyaccessoryconfiguration.md) using the [initWithBluetoothChannelSoundingIdentifier:previousBluetoothIdentifier:](../ninearbyaccessoryconfiguration/init%28bluetoothchannelsoundingidentifier_previousbluetoothidentifier_%29.md) initializer:

```swift
guard NISession.deviceCapabilities.supportsBluetoothChannelSounding else {
    print("Device doesn't support Bluetooth Channel Sounding.")
    return
}

// Create a configuration for Bluetooth Channel Sounding ranging.
let config = NINearbyAccessoryConfiguration(
    bluetoothChannelSoundingIdentifier: identifier,
    previousBluetoothIdentifier: nil
)
session.run(config)
```

## See Also

### Checking session features

- [supportsPreciseDistanceMeasurement](supportsprecisedistancemeasurement.md): A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.
- [supportsDirectionMeasurement](supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsCameraAssistance](supportscameraassistance.md): A Boolean value that indicates whether the device can leverage ARKit to improve interaction.
- [supportsExtendedDistanceMeasurement](supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsDLTDOAMeasurement](supportsdltdoameasurement.md): A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.
