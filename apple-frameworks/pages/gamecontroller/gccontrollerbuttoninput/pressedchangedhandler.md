> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttoninput/pressedchangedhandler](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttoninput/pressedchangedhandler)

# pressedChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The block that the element calls when the user presses or releases the button.

## Declaration

```swift
var pressedChangedHandler: GCControllerButtonValueChangedHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this handler when you only want to know when the user presses or releases the button — that is, when the [isPressed](ispressed.md) property changes.

## See Also

### Getting change information

- [touchedChangedHandler](touchedchangedhandler.md): The block that the element calls when the user touches the button.
- [GCControllerButtonTouchedChangedHandler](../gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [valueChangedHandler](valuechangedhandler.md): The block that the element calls when the user changes the level of pressure on the button.
- [GCControllerButtonValueChangedHandler](../gccontrollerbuttonvaluechangedhandler.md): The signature for the block that executes when a button’s state changes.

# pressedChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The block that the element calls when the user presses or releases the button.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCControllerButtonValueChangedHandler pressedChangedHandler;
```

<a id="Discussion"></a>

## Discussion

Set this handler when you only want to know when the user presses or releases the button — that is, when the [pressed](ispressed.md) property changes.

## See Also

### Getting change information

- [touchedChangedHandler](touchedchangedhandler.md): The block that the element calls when the user touches the button.
- [GCControllerButtonTouchedChangedHandler](../gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [valueChangedHandler](valuechangedhandler.md): The block that the element calls when the user changes the level of pressure on the button.
- [GCControllerButtonValueChangedHandler](../gccontrollerbuttonvaluechangedhandler.md): The signature for the block that executes when a button’s state changes.
