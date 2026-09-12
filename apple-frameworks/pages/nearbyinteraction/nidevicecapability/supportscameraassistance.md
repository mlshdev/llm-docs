> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidevicecapability/supportscameraassistance](https://developer.apple.com/documentation/nearbyinteraction/nidevicecapability/supportscameraassistance)

# supportsCameraAssistance (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

A Boolean value that indicates whether the device can leverage ARKit to improve interaction.

## Declaration

```swift
var supportsCameraAssistance: Bool { get }
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

For more on Camera Assistance, see [isCameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md).

> **Note**

>  Apple Watch doesn’t support Camera Assistance.

## See Also

### Checking session features

- [supportsPreciseDistanceMeasurement](supportsprecisedistancemeasurement.md): A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.
- [supportsDirectionMeasurement](supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsExtendedDistanceMeasurement](supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsDLTDOAMeasurement](supportsdltdoameasurement.md): A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.
- [supportsBluetoothChannelSounding](supportsbluetoothchannelsounding.md): A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.

# supportsCameraAssistance (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

A Boolean value that indicates whether the device can leverage ARKit to improve interaction.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsCameraAssistance;
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

For more on Camera Assistance, see [cameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md).

> **Note**

>  Apple Watch doesn’t support Camera Assistance.

## See Also

### Checking session features

- [supportsPreciseDistanceMeasurement](supportsprecisedistancemeasurement.md): A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.
- [supportsDirectionMeasurement](supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsExtendedDistanceMeasurement](supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsDLTDOAMeasurement](supportsdltdoameasurement.md): A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.
- [supportsBluetoothChannelSounding](supportsbluetoothchannelsounding.md): A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.
