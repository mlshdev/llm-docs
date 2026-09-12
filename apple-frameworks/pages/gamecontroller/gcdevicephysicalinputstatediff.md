> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstatediff](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstatediff)

# GCDevicePhysicalInputStateDiff (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common functions for objects that contain the differences between a current and previous input state object.

## Declaration

```swift
protocol GCDevicePhysicalInputStateDiff : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the `GCDevicePhysicalInput` [nextInputState()](gcdevicephysicalinput/nextinputstate%28%29.md) method to get an input state object conforming to this protocol.

## Topics

### Getting changes

- [change(for:)](gcdevicephysicalinputstatediff/change%28for_%29.md): Returns whether the input value of an element changes.
- [GCDevicePhysicalInputElementChange](gcdevicephysicalinputelementchange.md): Possible values that describe whether the input value of an element changes.
- [changedElements()](gcdevicephysicalinputstatediff/changedelements%28%29-9cdq4.md): Returns the elements that changed since the previous input state.
- [changedElements()](gcdevicephysicalinputstatediff/changedelements%28%29-2zzwm.md): Returns the elements that changed since the previous input state.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Handling input events](handling-input-events.md): Receive controller input using either polling or callbacks.
- [GCDevicePhysicalInput](gcdevicephysicalinput.md): The common properties and methods for objects that represent the input profile of a device.
- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md): The common properties for physical devices with elements.

# GCDevicePhysicalInputStateDiff (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common functions for objects that contain the differences between a current and previous input state object.

## Declaration

```objectivec
@protocol GCDevicePhysicalInputStateDiff <NSObject>
```

<a id="overview"></a>

## Overview

Use the `GCDevicePhysicalInput` [nextInputState](gcdevicephysicalinput/nextinputstate%28%29.md) method to get an input state object conforming to this protocol.

## Topics

### Getting changes

- [changeForElement:](gcdevicephysicalinputstatediff/change%28for_%29.md): Returns whether the input value of an element changes.
- [GCDevicePhysicalInputElementChange](gcdevicephysicalinputelementchange.md): Possible values that describe whether the input value of an element changes.
- [changedElements](gcdevicephysicalinputstatediff/changedelements.md): Returns the elements that changed since the previous input state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Handling input events](handling-input-events.md): Receive controller input using either polling or callbacks.
- [GCDevicePhysicalInput](gcdevicephysicalinput.md): The common properties and methods for objects that represent the input profile of a device.
- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md): The common properties for physical devices with elements.
