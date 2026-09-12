> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerinputstate](https://developer.apple.com/documentation/gamecontroller/gccontrollerinputstate)

# GCControllerInputState (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A class that represents an input state for gamepads and arcade sticks.

## Declaration

```swift
class GCControllerInputState
```

<a id="overview"></a>

## Overview

This class implements the [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md) protocol for gamepads and arcade sticks. Instances of this class represent the state of the controller’s inputs at a moment in time, which can be the current time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GCControllerLiveInput](gccontrollerliveinput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing controller input

- [input](gccontroller/input.md): The input profile for the controller.
- [GCControllerLiveInput](gccontrollerliveinput.md): The input profile for a controller.

# GCControllerInputState (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A class that represents an input state for gamepads and arcade sticks.

## Declaration

```objectivec
@interface GCControllerInputState : NSObject
```

<a id="overview"></a>

## Overview

This class implements the [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md) protocol for gamepads and arcade sticks. Instances of this class represent the state of the controller’s inputs at a moment in time, which can be the current time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GCControllerLiveInput](gccontrollerliveinput.md)

### Conforms To

- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md)

## See Also

### Accessing controller input

- [input](gccontroller/input.md): The input profile for the controller.
- [GCControllerLiveInput](gccontrollerliveinput.md): The input profile for a controller.
