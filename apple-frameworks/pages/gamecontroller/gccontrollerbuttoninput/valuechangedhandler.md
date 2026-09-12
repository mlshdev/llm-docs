> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttoninput/valuechangedhandler](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttoninput/valuechangedhandler)

# valueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The block that the element calls when the user changes the level of pressure on the button.

## Declaration

```swift
var valueChangedHandler: GCControllerButtonValueChangedHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this handler when you want to know when the pressure level changes.

## See Also

### Getting change information

- [touchedChangedHandler](touchedchangedhandler.md): The block that the element calls when the user touches the button.
- [GCControllerButtonTouchedChangedHandler](../gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [pressedChangedHandler](pressedchangedhandler.md): The block that the element calls when the user presses or releases the button.
- [GCControllerButtonValueChangedHandler](../gccontrollerbuttonvaluechangedhandler.md): The signature for the block that executes when a button’s state changes.

# valueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The block that the element calls when the user changes the level of pressure on the button.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCControllerButtonValueChangedHandler valueChangedHandler;
```

<a id="Discussion"></a>

## Discussion

Set this handler when you want to know when the pressure level changes.

## See Also

### Getting change information

- [touchedChangedHandler](touchedchangedhandler.md): The block that the element calls when the user touches the button.
- [GCControllerButtonTouchedChangedHandler](../gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [pressedChangedHandler](pressedchangedhandler.md): The block that the element calls when the user presses or releases the button.
- [GCControllerButtonValueChangedHandler](../gccontrollerbuttonvaluechangedhandler.md): The signature for the block that executes when a button’s state changes.
