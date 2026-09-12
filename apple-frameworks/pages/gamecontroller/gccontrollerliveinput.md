> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerliveinput](https://developer.apple.com/documentation/gamecontroller/gccontrollerliveinput)

# GCControllerLiveInput (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The input profile for a controller.

## Declaration

```swift
class GCControllerLiveInput
```

## Mentioned In

- [Handling input events](handling-input-events.md)

<a id="overview"></a>

## Overview

Instances of [GCControllerLiveInput](gccontrollerliveinput.md) represent the current input state of a controller. You can save snapshots of the input state and receive callbacks when the input state changes. You can also get the elements of the controller and their current input values from [GCControllerLiveInput](gccontrollerliveinput.md) instances.

Use the [capture()](gccontrollerliveinput/capture%28%29.md) method to save a copy of the current input state. If you want Game Controller to buffer snapshots of the input states for you, use the  [inputStateQueueDepth](gcdevicephysicalinput/inputstatequeuedepth.md) property to set the buffer’s queue depth to a value other than `0`. Then use the [nextInputState()](gccontrollerliveinput/nextinputstate%28%29.md) method to get the snapshots when you’re ready to process input.

## Topics

### Handling device input

- [nextInputState()](gccontrollerliveinput/nextinputstate%28%29.md): Returns the next device input state from the queue.
- [capture()](gccontrollerliveinput/capture%28%29.md): Returns a snapshot of the physical device inputs.

### Remapping controls

- [unmapped](gccontrollerliveinput/unmapped.md): The live input of a controller without any system-level remapping of the controls.

## Relationships

### Inherits From

- [GCControllerInputState](gccontrollerinputstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GCDevicePhysicalInput](gcdevicephysicalinput.md)
- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing controller input

- [input](gccontroller/input.md): The input profile for the controller.
- [GCControllerInputState](gccontrollerinputstate.md): A class that represents an input state for gamepads and arcade sticks.

# GCControllerLiveInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The input profile for a controller.

## Declaration

```objectivec
@interface GCControllerLiveInput : GCControllerInputState
```

## Mentioned In

- [Handling input events](handling-input-events.md)

<a id="overview"></a>

## Overview

Instances of [GCControllerLiveInput](gccontrollerliveinput.md) represent the current input state of a controller. You can save snapshots of the input state and receive callbacks when the input state changes. You can also get the elements of the controller and their current input values from [GCControllerLiveInput](gccontrollerliveinput.md) instances.

Use the [capture](gccontrollerliveinput/capture%28%29.md) method to save a copy of the current input state. If you want Game Controller to buffer snapshots of the input states for you, use the  [inputStateQueueDepth](gcdevicephysicalinput/inputstatequeuedepth.md) property to set the buffer’s queue depth to a value other than `0`. Then use the [nextInputState](gccontrollerliveinput/nextinputstate%28%29.md) method to get the snapshots when you’re ready to process input.

## Topics

### Handling device input

- [nextInputState](gccontrollerliveinput/nextinputstate%28%29.md): Returns the next device input state from the queue.
- [capture](gccontrollerliveinput/capture%28%29.md): Returns a snapshot of the physical device inputs.

### Remapping controls

- [unmappedInput](gccontrollerliveinput/unmapped.md): The live input of a controller without any system-level remapping of the controls.

## Relationships

### Inherits From

- [GCControllerInputState](gccontrollerinputstate.md)

### Conforms To

- [GCDevicePhysicalInput](gcdevicephysicalinput.md)

## See Also

### Accessing controller input

- [input](gccontroller/input.md): The input profile for the controller.
- [GCControllerInputState](gccontrollerinputstate.md): A class that represents an input state for gamepads and arcade sticks.
