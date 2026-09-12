> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcbuttonelement/touchedinput](https://developer.apple.com/documentation/gamecontroller/gcbuttonelement/touchedinput)

# touchedInput (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The input object that provides the touch state of the element.

## Declaration

```swift
var touchedInput: (any GCTouchedStateInput)? { get }
```

## See Also

### Getting input state

- [pressedInput](pressedinput.md): The input object that provides the linear and press state of the element.

# touchedInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The input object that provides the touch state of the element.

## Declaration

```objectivec
@property (readonly, nullable) id<GCTouchedStateInput> touchedInput;
```

## See Also

### Getting input state

- [pressedInput](pressedinput.md): The input object that provides the linear and press state of the element.
