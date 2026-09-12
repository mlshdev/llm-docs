> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/configuration/elements](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/configuration/elements)

# elements (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The input elements of a virtual controller.

## Declaration

```swift
var elements: Set<String> { get set }
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](../../adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

<a id="Discussion"></a>

## Discussion

The possible values you can include in this array are the names of the following constants: [GCInputButtonA](../../gcinputbuttona-8z15w.md), [GCInputButtonB](../../gcinputbuttonb-6z361.md), [GCInputButtonX](../../gcinputbuttonx-32i2z.md), [GCInputButtonY](../../gcinputbuttony-9x9i9.md), [GCInputDirectionPad](../../gcinputdirectionpad-115st.md), [GCInputLeftThumbstick](../../gcinputleftthumbstick-3hlff.md), [GCInputRightThumbstick](../../gcinputrightthumbstick-8469p.md), [GCInputLeftShoulder](../../gcinputleftshoulder-9assr.md), [GCInputRightShoulder](../../gcinputrightshoulder-5lcq1.md), [GCInputLeftTrigger](../../gcinputlefttrigger-80png.md), and [GCInputRightTrigger](../../gcinputrighttrigger-96vtj.md).

> **Note**

>  If you include both `GCInputDirectionPad` and `GCInputLeftThumbstick` in the array, the virtual controller contains only the left thumb stick, not the input direction pad.

For example, configure a virtual controller with a left thumb stick, right thumb stick, A button, and B button.

```swift
virtualConfiguration.elements = [GCInputLeftThumbstick,GCInputRightThumbstick,GCInputButtonA,GCInputButtonB]
```

# elements (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The input elements of a virtual controller.

## Declaration

```objectivec
@property (nonatomic, strong) NSSet<NSString *> * elements;
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](../../adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

<a id="Discussion"></a>

## Discussion

The possible values you can include in this array are the names of the following constants: [GCInputButtonA](../../gcinputbuttona-8z15w.md), [GCInputButtonB](../../gcinputbuttonb-6z361.md), [GCInputButtonX](../../gcinputbuttonx-32i2z.md), [GCInputButtonY](../../gcinputbuttony-9x9i9.md), [GCInputDirectionPad](../../gcinputdirectionpad-115st.md), [GCInputLeftThumbstick](../../gcinputleftthumbstick-3hlff.md), [GCInputRightThumbstick](../../gcinputrightthumbstick-8469p.md), [GCInputLeftShoulder](../../gcinputleftshoulder-9assr.md), [GCInputRightShoulder](../../gcinputrightshoulder-5lcq1.md), [GCInputLeftTrigger](../../gcinputlefttrigger-80png.md), and [GCInputRightTrigger](../../gcinputrighttrigger-96vtj.md).

> **Note**

>  If you include both `GCInputDirectionPad` and `GCInputLeftThumbstick` in the array, the virtual controller contains only the left thumb stick, not the input direction pad.

For example, configure a virtual controller with a left thumb stick, right thumb stick, A button, and B button.

```swift
virtualConfiguration.elements = [GCInputLeftThumbstick,GCInputRightThumbstick,GCInputButtonA,GCInputButtonB]
```
