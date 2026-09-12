> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstate](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstate)

# GCDevicePhysicalInputState (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties for physical devices with elements.

## Declaration

```swift
protocol GCDevicePhysicalInputState : NSObjectProtocol
```

## Mentioned In

- [Handling input events](handling-input-events.md)

<a id="overview"></a>

## Overview

It’s safe to call any property and method implementation of this protocol from any thread, as long as you don’t do so from multiple threads concurrently.

## Topics

### Getting the device

- [device](gcdevicephysicalinputstate/device.md): The physical device that this profile represents.

### Getting change information

- [lastEventTimestamp](gcdevicephysicalinputstate/lasteventtimestamp.md): The time of the most recent event.
- [lastEventLatency](gcdevicephysicalinputstate/lasteventlatency.md): The time in seconds between the last event and the current time.

### Accessing elements

- [elements](gcdevicephysicalinputstate/elements-46hgy.md): The device’s elements as key-value pairs for lookup by name.
- [axes](gcdevicephysicalinputstate/axes-5u1xr.md): The device’s axes as key-value pairs for lookup by name.
- [buttons](gcdevicephysicalinputstate/buttons-2ovae.md): The device’s buttons as key-value pairs for lookup by name.
- [dpads](gcdevicephysicalinputstate/dpads-7b4o3.md): The device’s directional pads as key-value pairs for lookup by name.
- [switches](gcdevicephysicalinputstate/switches-6dcny.md): The device’s switches as key-value pairs for lookup by name.
- [subscript(\_:)](gcdevicephysicalinputstate/subscript%28__%29.md): Returns the element that the key specifies.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [GCDevicePhysicalInput](gcdevicephysicalinput.md)

### Conforming Types

- [GCControllerInputState](gccontrollerinputstate.md)
- [GCControllerLiveInput](gccontrollerliveinput.md)
- [GCRacingWheelInput](gcracingwheelinput.md)
- [GCRacingWheelInputState](gcracingwheelinputstate.md)

## See Also

### Essentials

- [Handling input events](handling-input-events.md): Receive controller input using either polling or callbacks.
- [GCDevicePhysicalInput](gcdevicephysicalinput.md): The common properties and methods for objects that represent the input profile of a device.
- [GCDevicePhysicalInputStateDiff](gcdevicephysicalinputstatediff.md): The common functions for objects that contain the differences between a current and previous input state object.

# GCDevicePhysicalInputState (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties for physical devices with elements.

## Declaration

```objectivec
@protocol GCDevicePhysicalInputState <NSObject>
```

## Mentioned In

- [Handling input events](handling-input-events.md)

<a id="overview"></a>

## Overview

It’s safe to call any property and method implementation of this protocol from any thread, as long as you don’t do so from multiple threads concurrently.

## Topics

### Getting the device

- [device](gcdevicephysicalinputstate/device.md): The physical device that this profile represents.

### Getting change information

- [lastEventTimestamp](gcdevicephysicalinputstate/lasteventtimestamp.md): The time of the most recent event.
- [lastEventLatency](gcdevicephysicalinputstate/lasteventlatency.md): The time in seconds between the last event and the current time.

### Accessing elements

- [elements](gcdevicephysicalinputstate/elements-1shp2.md): The device’s elements as key-value pairs for lookup by name.
- [axes](gcdevicephysicalinputstate/axes-80rx.md): The device’s axes as key-value pairs for lookup by name.
- [buttons](gcdevicephysicalinputstate/buttons-3257g.md): The device’s buttons as key-value pairs for lookup by name.
- [dpads](gcdevicephysicalinputstate/dpads-5yr9x.md): The device’s directional pads as key-value pairs for lookup by name.
- [switches](gcdevicephysicalinputstate/switches-6bws2.md): The device’s switches as key-value pairs for lookup by name.
- [objectForKeyedSubscript:](gcdevicephysicalinputstate/subscript%28__%29.md): Returns the element that the key specifies.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [GCDevicePhysicalInput](gcdevicephysicalinput.md)

### Conforming Types

- [GCControllerInputState](gccontrollerinputstate.md)
- [GCRacingWheelInputState](gcracingwheelinputstate.md)

## See Also

### Essentials

- [Handling input events](handling-input-events.md): Receive controller input using either polling or callbacks.
- [GCDevicePhysicalInput](gcdevicephysicalinput.md): The common properties and methods for objects that represent the input profile of a device.
- [GCDevicePhysicalInputStateDiff](gcdevicephysicalinputstatediff.md): The common functions for objects that contain the differences between a current and previous input state object.
