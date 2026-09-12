> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcbuttonelement/pressedinput](https://developer.apple.com/documentation/gamecontroller/gcbuttonelement/pressedinput)

# pressedInput (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The input object that provides the linear and press state of the element.

## Declaration

```swift
var pressedInput: any GCLinearInput & GCPressedStateInput { get }
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

## See Also

### Getting input state

- [touchedInput](touchedinput.md): The input object that provides the touch state of the element.

# pressedInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The input object that provides the linear and press state of the element.

## Declaration

```objectivec
@property (readonly) id<GCLinearInput,GCPressedStateInput> pressedInput;
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

## See Also

### Getting input state

- [touchedInput](touchedinput.md): The input object that provides the touch state of the element.
