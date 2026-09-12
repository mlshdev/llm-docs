> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/pressurebehavior-swift.enum](https://developer.apple.com/documentation/appkit/nsevent/pressurebehavior-swift.enum)

# NSEvent.PressureBehavior (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10.3+

These constants describe the behavior and progression of a pressure gesture.

## Declaration

```swift
enum PressureBehavior
```

<a id="overview"></a>

## Overview

These constants describe the behavior and progression of a pressure gesture. They allow you to configure how pressure from a pressure-sensitive device, such as the Force Touch trackpad, is interpreted by the system. For example, a drawing or painting app may adjust the behavior of pressure events to focus on variable pressure and prevent force clicks from occurring.

In most cases, a pressure gesture’s behavior goes into effect when the gesture event’s [stage](stage.md) property reaches a value of `1` and remains in effect until the gesture event’s [stage](stage.md) property reaches a value of `0`. This behavior corresponds to the behavior of simultaneously generated mouse-up and mouse-down events.

## Topics

### Constants

- [NSEvent.PressureBehavior.unknown](pressurebehavior-swift.enum/unknown.md): A pressure gesture’s behavior is not known, perhaps because the input device does not support pressure gestures.
- [NSEvent.PressureBehavior.primaryDefault](pressurebehavior-swift.enum/primarydefault.md): This is the default behavior when a pressure gesture’s behavior has not been explicitly configured. In OS X 10.10.3, this behavior defaults to the behavior of `NSPressureBehaviorPrimaryDeepClick`.
- [NSEvent.PressureBehavior.primaryClick](pressurebehavior-swift.enum/primaryclick.md): A pressure gesture’s behavior begins on left mouse-down events. A maximum of one stage is supported, and a stage transition animation occurs when moving from stage 1 to stage 0. Actuations (haptic feedback the user feels) occur during mouse-down and mouse-up events when this behavior is configured. Note that the pressure gesture operates on a separate event stream from the mouse events.
- [NSEvent.PressureBehavior.primaryGeneric](pressurebehavior-swift.enum/primarygeneric.md): A pressure gesture’s behavior begins on left mouse-down events. A maximum of one stage is supported, and a stage transition animation occurs when moving from stage 1 to stage 0. Actuations occur during the mouse-down and mouse-up events when this behavior is configured. This configuration is ideal for drawing, painting, and general use. Variable pressure occurs throughout the course of the gesture. Note that the pressure gesture operates on a separate event stream from the mouse events.
- [NSEvent.PressureBehavior.primaryAccelerator](pressurebehavior-swift.enum/primaryaccelerator.md): A pressure gesture’s behavior begins on left mouse-down events. A maximum of one stage is supported, and a stage transition animation occurs when moving from stage 1 to stage 0. Actuations occur during the mouse-down and mouse-up events when this behavior is configured. This configuration uses specific pressure mappings that are ideal for controlling speed as variable pressure occurs between the mouse-down and mouse-up events. The [NSAcceleratorButton](../nsacceleratorbutton.md) class uses this behavior. Note that the pressure gesture operates on a separate event stream from the mouse events.
- [NSEvent.PressureBehavior.primaryDeepClick](pressurebehavior-swift.enum/primarydeepclick.md): A pressure gesture’s behavior begins on left mouse-down events. Two stages are supported, and a stage transition animation may occur when moving between stages—from stage 1 to stage 0, stage 1 to stage 2, stage 2 to stage 1, and stage 2 to stage 0. With this behavior type, stage 2 becomes disabled once dragging occurs. When this behavior is configured, actuations occur during the mouse-down and mouse-up events, as well as when force click is activated and released when entering or exiting stage 2. This configuration is ideal for responding to force clicks. Note that the pressure gesture operates on a separate event stream from the mouse events.
- [NSEvent.PressureBehavior.primaryDeepDrag](pressurebehavior-swift.enum/primarydeepdrag.md): A pressure gesture’s behavior begins on left mouse-down events. Two stages are supported, and a stage transition animation may occur when moving between stages—from stage 1 to stage 0, stage 1 to stage 2, stage 2 to stage 1, or stage 2 to stage 0. Actuations occur during the mouse-down and mouse-up events, as well as during the transitions up and down between stage 1 and stage 2, when this behavior is configured. This configuration is ideal for responding to force clicks during drag operations. Note that the pressure gesture operates on a separate event stream from the mouse events.

### Initializers

- [init(rawValue:)](pressurebehavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting pressure information

- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.
- [stage](stage.md): A value that indicates the stage of a pressure gesture event.
- [stageTransition](stagetransition.md): The transition value for the stage of a pressure gesture event.
- [pressureBehavior](pressurebehavior-swift.property.md): The behavior and progression for a pressure event.

# NSPressureBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10.3+

These constants describe the behavior and progression of a pressure gesture.

## Declaration

```objectivec
enum NSPressureBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

These constants describe the behavior and progression of a pressure gesture. They allow you to configure how pressure from a pressure-sensitive device, such as the Force Touch trackpad, is interpreted by the system. For example, a drawing or painting app may adjust the behavior of pressure events to focus on variable pressure and prevent force clicks from occurring.

In most cases, a pressure gesture’s behavior goes into effect when the gesture event’s [stage](stage.md) property reaches a value of `1` and remains in effect until the gesture event’s [stage](stage.md) property reaches a value of `0`. This behavior corresponds to the behavior of simultaneously generated mouse-up and mouse-down events.

## Topics

### Constants

- [NSPressureBehaviorUnknown](pressurebehavior-swift.enum/unknown.md): A pressure gesture’s behavior is not known, perhaps because the input device does not support pressure gestures.
- [NSPressureBehaviorPrimaryDefault](pressurebehavior-swift.enum/primarydefault.md): This is the default behavior when a pressure gesture’s behavior has not been explicitly configured. In OS X 10.10.3, this behavior defaults to the behavior of `NSPressureBehaviorPrimaryDeepClick`.
- [NSPressureBehaviorPrimaryClick](pressurebehavior-swift.enum/primaryclick.md): A pressure gesture’s behavior begins on left mouse-down events. A maximum of one stage is supported, and a stage transition animation occurs when moving from stage 1 to stage 0. Actuations (haptic feedback the user feels) occur during mouse-down and mouse-up events when this behavior is configured. Note that the pressure gesture operates on a separate event stream from the mouse events.
- [NSPressureBehaviorPrimaryGeneric](pressurebehavior-swift.enum/primarygeneric.md): A pressure gesture’s behavior begins on left mouse-down events. A maximum of one stage is supported, and a stage transition animation occurs when moving from stage 1 to stage 0. Actuations occur during the mouse-down and mouse-up events when this behavior is configured. This configuration is ideal for drawing, painting, and general use. Variable pressure occurs throughout the course of the gesture. Note that the pressure gesture operates on a separate event stream from the mouse events.
- [NSPressureBehaviorPrimaryAccelerator](pressurebehavior-swift.enum/primaryaccelerator.md): A pressure gesture’s behavior begins on left mouse-down events. A maximum of one stage is supported, and a stage transition animation occurs when moving from stage 1 to stage 0. Actuations occur during the mouse-down and mouse-up events when this behavior is configured. This configuration uses specific pressure mappings that are ideal for controlling speed as variable pressure occurs between the mouse-down and mouse-up events. The [NSAcceleratorButton](../nsacceleratorbutton.md) class uses this behavior. Note that the pressure gesture operates on a separate event stream from the mouse events.
- [NSPressureBehaviorPrimaryDeepClick](pressurebehavior-swift.enum/primarydeepclick.md): A pressure gesture’s behavior begins on left mouse-down events. Two stages are supported, and a stage transition animation may occur when moving between stages—from stage 1 to stage 0, stage 1 to stage 2, stage 2 to stage 1, and stage 2 to stage 0. With this behavior type, stage 2 becomes disabled once dragging occurs. When this behavior is configured, actuations occur during the mouse-down and mouse-up events, as well as when force click is activated and released when entering or exiting stage 2. This configuration is ideal for responding to force clicks. Note that the pressure gesture operates on a separate event stream from the mouse events.
- [NSPressureBehaviorPrimaryDeepDrag](pressurebehavior-swift.enum/primarydeepdrag.md): A pressure gesture’s behavior begins on left mouse-down events. Two stages are supported, and a stage transition animation may occur when moving between stages—from stage 1 to stage 0, stage 1 to stage 2, stage 2 to stage 1, or stage 2 to stage 0. Actuations occur during the mouse-down and mouse-up events, as well as during the transitions up and down between stage 1 and stage 2, when this behavior is configured. This configuration is ideal for responding to force clicks during drag operations. Note that the pressure gesture operates on a separate event stream from the mouse events.

## See Also

### Getting pressure information

- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.
- [stage](stage.md): A value that indicates the stage of a pressure gesture event.
- [stageTransition](stagetransition.md): The transition value for the stage of a pressure gesture event.
- [pressureBehavior](pressurebehavior-swift.property.md): The behavior and progression for a pressure event.
