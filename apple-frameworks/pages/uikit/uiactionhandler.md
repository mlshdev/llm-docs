> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionhandler](https://developer.apple.com/documentation/uikit/uiactionhandler)

# UIActionHandler (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A type that defines the closure for an action handler.

## Declaration

```swift
typealias UIActionHandler = (UIAction) -> Void
```

## Parameters

- `action`: The action selected by the user.

## See Also

### Creating an action

- [init(title:subtitle:image:identifier:discoverabilityTitle:attributes:state:handler:)](uiaction/init%28title_subtitle_image_identifier_discoverabilitytitle_attributes_state_handler_%29.md): Creates an action with the specified title, subtitle, image, identifier, discoverability title, attributes, state, and handler.
- [init(title:image:identifier:discoverabilityTitle:attributes:state:handler:)](uiaction/init%28title_image_identifier_discoverabilitytitle_attributes_state_handler_%29.md): Creates an action with the specified title, image, identifier, discoverability title, attributes, state, and handler.
- [captureTextFromCamera(responder:identifier:)](uiaction/capturetextfromcamera%28responder_identifier_%29.md): Creates an action for capturing text using the device’s camera.
- [UIAction.Identifier](uiaction/identifier-swift.struct.md): A type that represents an action identifier.

# UIActionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A type that defines the closure for an action handler.

## Declaration

```objectivec
typedef void (^)(__kindof UIAction *) UIActionHandler;
```

## Parameters

- `action`: The action selected by the user.

## See Also

### Creating an action

- [actionWithTitle:image:identifier:handler:](uiaction/actionwithtitle_image_identifier_handler_.md): Creates an action with the specified title, image, identifier, and handler.
- [actionWithHandler:](uiaction/actionwithhandler_.md): Creates an action with the specified handler.
- [captureTextFromCameraActionForResponder:identifier:](uiaction/capturetextfromcamera%28responder_identifier_%29.md): Creates an action for capturing text using the device’s camera.
- [UIActionIdentifier](uiaction/identifier-swift.struct.md): A type that represents an action identifier.
