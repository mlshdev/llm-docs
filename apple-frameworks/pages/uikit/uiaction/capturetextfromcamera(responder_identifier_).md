> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaction/capturetextfromcamera(responder:identifier:)](https://developer.apple.com/documentation/uikit/uiaction/capturetextfromcamera(responder:identifier:))

# captureTextFromCamera(responder:identifier:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates an action for capturing text using the device’s camera.

## Declaration

```swift
class func captureTextFromCamera(responder: any UIResponder & UIKeyInput, identifier: UIAction.Identifier?) -> Self
```

## Parameters

- `responder`: The [UIKeyInput](../uikeyinput.md) responder to send the [captureTextFromCamera(\_:)](../uiresponder/capturetextfromcamera%28__%29.md) message to.
- `identifier`: The unique identifier for the action. Specify `nil` to let this method create a unique identifier for you.

## See Also

### Creating an action

- [init(title:subtitle:image:identifier:discoverabilityTitle:attributes:state:handler:)](init%28title_subtitle_image_identifier_discoverabilitytitle_attributes_state_handler_%29.md): Creates an action with the specified title, subtitle, image, identifier, discoverability title, attributes, state, and handler.
- [init(title:image:identifier:discoverabilityTitle:attributes:state:handler:)](init%28title_image_identifier_discoverabilitytitle_attributes_state_handler_%29.md): Creates an action with the specified title, image, identifier, discoverability title, attributes, state, and handler.
- [UIAction.Identifier](identifier-swift.struct.md): A type that represents an action identifier.
- [UIActionHandler](../uiactionhandler.md): A type that defines the closure for an action handler.

# captureTextFromCameraActionForResponder:identifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates an action for capturing text using the device’s camera.

## Declaration

```objectivec
+ (instancetype) captureTextFromCameraActionForResponder:(UIResponder<UIKeyInput> *) responder identifier:(UIActionIdentifier) identifier;
```

## Parameters

- `responder`: The [UIKeyInput](../uikeyinput.md) responder to send the [captureTextFromCamera:](../uiresponder/capturetextfromcamera%28__%29.md) message to.
- `identifier`: The unique identifier for the action. Specify `nil` to let this method create a unique identifier for you.

## See Also

### Creating an action

- [actionWithTitle:image:identifier:handler:](actionwithtitle_image_identifier_handler_.md): Creates an action with the specified title, image, identifier, and handler.
- [actionWithHandler:](actionwithhandler_.md): Creates an action with the specified handler.
- [UIActionIdentifier](identifier-swift.struct.md): A type that represents an action identifier.
- [UIActionHandler](../uiactionhandler.md): A type that defines the closure for an action handler.
