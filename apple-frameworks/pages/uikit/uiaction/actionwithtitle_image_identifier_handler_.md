> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaction/actionwithtitle:image:identifier:handler:](https://developer.apple.com/documentation/uikit/uiaction/actionwithtitle:image:identifier:handler:)

# actionWithTitle:image:identifier:handler:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an action with the specified title, image, identifier, and handler.

## Declaration

```objectivec
+ (instancetype) actionWithTitle:(NSString *) title image:(UIImage *) image identifier:(UIActionIdentifier) identifier handler:(UIActionHandler) handler;
```

## Parameters

- `title`: The title to display for the action.
- `image`: The image to display next to the action’s `title`. Only the [contextSystem](../uimenusystem/context.md) menu system supports the display of an image, and only when the app is running in iOS.
- `identifier`: The unique identifier for the action. Specify `nil` to let this method create a unique identifier for you.
- `handler`: The handler to invoke after a person selects the action. This handler has the following parameter:

  - **action**: The action that a person selects.

<a id="return-value"></a>

## Return Value

A newly initialized action object.

## See Also

### Creating an action

- [actionWithHandler:](actionwithhandler_.md): Creates an action with the specified handler.
- [captureTextFromCameraActionForResponder:identifier:](capturetextfromcamera%28responder_identifier_%29.md): Creates an action for capturing text using the device’s camera.
- [UIActionIdentifier](identifier-swift.struct.md): A type that represents an action identifier.
- [UIActionHandler](../uiactionhandler.md): A type that defines the closure for an action handler.
