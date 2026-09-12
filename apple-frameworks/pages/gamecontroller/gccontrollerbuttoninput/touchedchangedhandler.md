> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttoninput/touchedchangedhandler](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttoninput/touchedchangedhandler)

# touchedChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The block that the element calls when the user touches the button.

## Declaration

```swift
var touchedChangedHandler: GCControllerButtonTouchedChangedHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this handler when you want to know when the user touches the button before pressing the button.

## See Also

### Getting change information

- [GCControllerButtonTouchedChangedHandler](../gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [pressedChangedHandler](pressedchangedhandler.md): The block that the element calls when the user presses or releases the button.
- [valueChangedHandler](valuechangedhandler.md): The block that the element calls when the user changes the level of pressure on the button.
- [GCControllerButtonValueChangedHandler](../gccontrollerbuttonvaluechangedhandler.md): The signature for the block that executes when a button’s state changes.

# touchedChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The block that the element calls when the user touches the button.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCControllerButtonTouchedChangedHandler touchedChangedHandler;
```

<a id="Discussion"></a>

## Discussion

Set this handler when you want to know when the user touches the button before pressing the button.

## See Also

### Getting change information

- [GCControllerButtonTouchedChangedHandler](../gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [pressedChangedHandler](pressedchangedhandler.md): The block that the element calls when the user presses or releases the button.
- [valueChangedHandler](valuechangedhandler.md): The block that the element calls when the user changes the level of pressure on the button.
- [GCControllerButtonValueChangedHandler](../gccontrollerbuttonvaluechangedhandler.md): The signature for the block that executes when a button’s state changes.
