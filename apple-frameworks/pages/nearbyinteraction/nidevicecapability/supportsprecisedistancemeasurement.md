> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidevicecapability/supportsprecisedistancemeasurement](https://developer.apple.com/documentation/nearbyinteraction/nidevicecapability/supportsprecisedistancemeasurement)

# supportsPreciseDistanceMeasurement (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.

## Declaration

```swift
var supportsPreciseDistanceMeasurement: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), then the device doesn’t support Nearby Interaction.

This property is functionally equivalent to the deprecated [isSupported](../nisession/issupported.md).

## See Also

### Checking session features

- [supportsDirectionMeasurement](supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsCameraAssistance](supportscameraassistance.md): A Boolean value that indicates whether the device can leverage ARKit to improve interaction.
- [supportsExtendedDistanceMeasurement](supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsDLTDOAMeasurement](supportsdltdoameasurement.md): A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.
- [supportsBluetoothChannelSounding](supportsbluetoothchannelsounding.md): A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.

# supportsPreciseDistanceMeasurement (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsPreciseDistanceMeasurement;
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), then the device doesn’t support Nearby Interaction.

This property is functionally equivalent to the deprecated [supported](../nisession/issupported.md).

## See Also

### Checking session features

- [supportsDirectionMeasurement](supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsCameraAssistance](supportscameraassistance.md): A Boolean value that indicates whether the device can leverage ARKit to improve interaction.
- [supportsExtendedDistanceMeasurement](supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsDLTDOAMeasurement](supportsdltdoameasurement.md): A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.
- [supportsBluetoothChannelSounding](supportsbluetoothchannelsounding.md): A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.
