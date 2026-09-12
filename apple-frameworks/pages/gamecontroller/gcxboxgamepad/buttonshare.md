> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcxboxgamepad/buttonshare](https://developer.apple.com/documentation/gamecontroller/gcxboxgamepad/buttonshare)

# buttonShare (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The share button on an Xbox Series X|S controller or later.

## Declaration

```swift
var buttonShare: GCControllerButtonInput? { get }
```

<a id="Discussion"></a>

## Discussion

The system reserves the Share button for screenshot and video recording gestures. If you want to disable these gestures in your app, set the button’s [preferredSystemGestureState](../gccontrollerelement/preferredsystemgesturestate.md) to [GCControllerElement.SystemGestureState.disabled](../gccontrollerelement/systemgesturestate/disabled.md).

## See Also

### Getting button inputs

- [paddleButton1](paddlebutton1.md): The controller’s paddle 1 button element, which has a P1 label on the back of the controller.
- [paddleButton2](paddlebutton2.md): The paddle 2 button element, which has a P2 label on the back of the controller.
- [paddleButton3](paddlebutton3.md): The paddle 3 button element, which has a P3 label on the back of the controller.
- [paddleButton4](paddlebutton4.md): The paddle 4 button element, which has a P4 label on the back of the controller.

# buttonShare (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The share button on an Xbox Series X|S controller or later.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) GCControllerButtonInput * buttonShare;
```

<a id="Discussion"></a>

## Discussion

The system reserves the Share button for screenshot and video recording gestures. If you want to disable these gestures in your app, set the button’s [preferredSystemGestureState](../gccontrollerelement/preferredsystemgesturestate.md) to [GCSystemGestureStateDisabled](../gccontrollerelement/systemgesturestate/disabled.md).

## See Also

### Getting button inputs

- [paddleButton1](paddlebutton1.md): The controller’s paddle 1 button element, which has a P1 label on the back of the controller.
- [paddleButton2](paddlebutton2.md): The paddle 2 button element, which has a P2 label on the back of the controller.
- [paddleButton3](paddlebutton3.md): The paddle 3 button element, which has a P3 label on the back of the controller.
- [paddleButton4](paddlebutton4.md): The paddle 4 button element, which has a P4 label on the back of the controller.
