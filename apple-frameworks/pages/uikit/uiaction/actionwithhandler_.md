> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaction/actionwithhandler:](https://developer.apple.com/documentation/uikit/uiaction/actionwithhandler:)

# actionWithHandler:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates an action with the specified handler.

## Declaration

```objectivec
+ (instancetype) actionWithHandler:(UIActionHandler) handler;
```

## Parameters

- `handler`: The handler to invoke after a person selects the action. This handler has the following parameter:

  - **action**: The action that a person selects.

## See Also

### Creating an action

- [actionWithTitle:image:identifier:handler:](actionwithtitle_image_identifier_handler_.md): Creates an action with the specified title, image, identifier, and handler.
- [captureTextFromCameraActionForResponder:identifier:](capturetextfromcamera%28responder_identifier_%29.md): Creates an action for capturing text using the device’s camera.
- [UIActionIdentifier](identifier-swift.struct.md): A type that represents an action identifier.
- [UIActionHandler](../uiactionhandler.md): A type that defines the closure for an action handler.
