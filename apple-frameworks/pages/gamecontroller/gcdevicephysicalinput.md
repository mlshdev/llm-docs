> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinput](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinput)

# GCDevicePhysicalInput (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties and methods for objects that represent the input profile of a device.

## Declaration

```swift
protocol GCDevicePhysicalInput : GCDevicePhysicalInputState
```

## Mentioned In

- [Handling input events](handling-input-events.md)

<a id="overview"></a>

## Overview

You can safely call this protocol’s methods and access its properties from any thread, but not from multiple, concurrent threads.

## Topics

### Getting the device

- [device](gcdevicephysicalinput/device.md): The device that the physical input represents.

### Handling device input

- [nextInputState()](gcdevicephysicalinput/nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateAvailableHandler](gcdevicephysicalinput/inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [inputStateQueueDepth](gcdevicephysicalinput/inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [capture()](gcdevicephysicalinput/capture%28%29.md): Returns a snapshot of the physical device inputs.
- [elementValueDidChangeHandler](gcdevicephysicalinput/elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.

### Changing the callback dispatch queue

- [queue](gcdevicephysicalinput/queue.md): The dispatch queue that the system uses for callbacks.

### Instance Methods

- [inputState(forSpatialAccessoryAnchorTimestamp:)](gcdevicephysicalinput/inputstate%28forspatialaccessoryanchortimestamp_%29.md): Returns the buffered input state that best aligns with the provided spatial accessory anchor timestamp.

## Relationships

### Inherits From

- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [GCControllerLiveInput](gccontrollerliveinput.md)
- [GCRacingWheelInput](gcracingwheelinput.md)

## See Also

### Essentials

- [Handling input events](handling-input-events.md): Receive controller input using either polling or callbacks.
- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md): The common properties for physical devices with elements.
- [GCDevicePhysicalInputStateDiff](gcdevicephysicalinputstatediff.md): The common functions for objects that contain the differences between a current and previous input state object.

# GCDevicePhysicalInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties and methods for objects that represent the input profile of a device.

## Declaration

```objectivec
@protocol GCDevicePhysicalInput <GCDevicePhysicalInputState>
```

## Mentioned In

- [Handling input events](handling-input-events.md)

<a id="overview"></a>

## Overview

You can safely call this protocol’s methods and access its properties from any thread, but not from multiple, concurrent threads.

## Topics

### Getting the device

- [device](gcdevicephysicalinput/device.md): The device that the physical input represents.

### Handling device input

- [nextInputState](gcdevicephysicalinput/nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateAvailableHandler](gcdevicephysicalinput/inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [inputStateQueueDepth](gcdevicephysicalinput/inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [capture](gcdevicephysicalinput/capture%28%29.md): Returns a snapshot of the physical device inputs.
- [elementValueDidChangeHandler](gcdevicephysicalinput/elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.

### Changing the callback dispatch queue

- [queue](gcdevicephysicalinput/queue.md): The dispatch queue that the system uses for callbacks.

### Instance Methods

- [inputStateForSpatialAccessoryAnchorTimestamp:](gcdevicephysicalinput/inputstate%28forspatialaccessoryanchortimestamp_%29.md): Returns the buffered input state that best aligns with the provided spatial accessory anchor timestamp.

## Relationships

### Inherits From

- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md)

### Conforming Types

- [GCControllerLiveInput](gccontrollerliveinput.md)
- [GCRacingWheelInput](gcracingwheelinput.md)

## See Also

### Essentials

- [Handling input events](handling-input-events.md): Receive controller input using either polling or callbacks.
- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md): The common properties for physical devices with elements.
- [GCDevicePhysicalInputStateDiff](gcdevicephysicalinputstatediff.md): The common functions for objects that contain the differences between a current and previous input state object.
