> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidevicecapability/supportsdltdoameasurement](https://developer.apple.com/documentation/nearbyinteraction/nidevicecapability/supportsdltdoameasurement)

# supportsDLTDOAMeasurement (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.

## Declaration

```swift
var supportsDLTDOAMeasurement: Bool { get }
```

<a id="discussion"></a>

## Discussion

Only create a [NIDLTDOAConfiguration](../nidltdoaconfiguration.md) instance if the value of this property is `true`.

## See Also

### Checking session features

- [supportsPreciseDistanceMeasurement](supportsprecisedistancemeasurement.md): A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.
- [supportsDirectionMeasurement](supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsCameraAssistance](supportscameraassistance.md): A Boolean value that indicates whether the device can leverage ARKit to improve interaction.
- [supportsExtendedDistanceMeasurement](supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsBluetoothChannelSounding](supportsbluetoothchannelsounding.md): A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.

# supportsDLTDOAMeasurement (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsDLTDOAMeasurement;
```

<a id="discussion"></a>

## Discussion

Only create a [NIDLTDOAConfiguration](../nidltdoaconfiguration.md) instance if the value of this property is `true`.

## See Also

### Checking session features

- [supportsPreciseDistanceMeasurement](supportsprecisedistancemeasurement.md): A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.
- [supportsDirectionMeasurement](supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsCameraAssistance](supportscameraassistance.md): A Boolean value that indicates whether the device can leverage ARKit to improve interaction.
- [supportsExtendedDistanceMeasurement](supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsBluetoothChannelSounding](supportsbluetoothchannelsounding.md): A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.
