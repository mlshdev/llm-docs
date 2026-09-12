> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidevicecapability](https://developer.apple.com/documentation/nearbyinteraction/nidevicecapability)

# NIDeviceCapability (Swift)

**Framework:** Nearby Interaction  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An interface that adds Boolean values that indicate an interaction session feature support.

## Declaration

```swift
protocol NIDeviceCapability
```

<a id="overview"></a>

## Overview

The [NISession](nisession.md) class property [deviceCapabilities](nisession/devicecapabilities.md) adopts this protocol. At runtime, inspect this property to determine the available features of an interaction session on the person’s device.

In a compatible iPad or iPhone app running in visionOS, the framework reports that all capabilities are unavailable.

## Topics

### Checking session features

- [supportsPreciseDistanceMeasurement](nidevicecapability/supportsprecisedistancemeasurement.md): A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.
- [supportsDirectionMeasurement](nidevicecapability/supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsCameraAssistance](nidevicecapability/supportscameraassistance.md): A Boolean value that indicates whether the device can leverage ARKit to improve interaction.
- [supportsExtendedDistanceMeasurement](nidevicecapability/supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsDLTDOAMeasurement](nidevicecapability/supportsdltdoameasurement.md): A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.
- [supportsBluetoothChannelSounding](nidevicecapability/supportsbluetoothchannelsounding.md): A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.

## See Also

### Ensuring feature support

- [deviceCapabilities](nisession/devicecapabilities.md): An object that communicates the device’s supported framework features.

# NIDeviceCapability (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An interface that adds Boolean values that indicate an interaction session feature support.

## Declaration

```objectivec
@protocol NIDeviceCapability
```

<a id="overview"></a>

## Overview

The [NISession](nisession.md) class property [deviceCapabilities](nisession/devicecapabilities.md) adopts this protocol. At runtime, inspect this property to determine the available features of an interaction session on the person’s device.

In a compatible iPad or iPhone app running in visionOS, the framework reports that all capabilities are unavailable.

## Topics

### Checking session features

- [supportsPreciseDistanceMeasurement](nidevicecapability/supportsprecisedistancemeasurement.md): A Boolean value that indicates whether the device produces precise distance measurements to nearby objects.
- [supportsDirectionMeasurement](nidevicecapability/supportsdirectionmeasurement.md): A Boolean value that indicates whether the device produces instantaneous direction measurements to nearby objects.
- [supportsCameraAssistance](nidevicecapability/supportscameraassistance.md): A Boolean value that indicates whether the device can leverage ARKit to improve interaction.
- [supportsExtendedDistanceMeasurement](nidevicecapability/supportsextendeddistancemeasurement.md): A Boolean value that indicates whether this device supports extended distance measurement.
- [supportsDLTDOAMeasurement](nidevicecapability/supportsdltdoameasurement.md): A property that indicates if the device supports Downlink Time-Difference-of-Arrival ranging.
- [supportsBluetoothChannelSounding](nidevicecapability/supportsbluetoothchannelsounding.md): A Boolean value that indicates whether the device supports distance measurements over a Bluetooth connection.

## See Also

### Ensuring feature support

- [deviceCapabilities](nisession/devicecapabilities.md): An object that communicates the device’s supported framework features.
