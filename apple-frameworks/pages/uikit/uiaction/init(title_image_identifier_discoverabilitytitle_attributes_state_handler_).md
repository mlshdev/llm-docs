> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaction/init(title:image:identifier:discoverabilitytitle:attributes:state:handler:)](https://developer.apple.com/documentation/uikit/uiaction/init(title:image:identifier:discoverabilitytitle:attributes:state:handler:))

# init(title:image:identifier:discoverabilityTitle:attributes:state:handler:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 14.0+ · visionOS

Creates an action with the specified title, image, identifier, discoverability title, attributes, state, and handler.

## Declaration

```swift
@MainActor @preconcurrency convenience init(title: String = "", image: UIImage? = nil, identifier: UIAction.Identifier? = nil, discoverabilityTitle: String? = nil, attributes: UIMenuElement.Attributes = [], state: UIMenuElement.State = .off, handler: @escaping UIActionHandler)
```

## Parameters

- `title`: The title to display for the action.
- `image`: The image to display next to the action’s `title`. Only the [context](../uimenusystem/context.md) menu system supports the display of an image, and only when the app is running in iOS.
- `identifier`: The unique identifier for the action. Specify `nil` to let this method create a unique identifier for you.
- `discoverabilityTitle`: An elaborated title that explains the purpose of the action.
- `attributes`: The attributes indicating the style of the action.
- `state`: The initial state of the action.
- `handler`: The handler to invoke after a person selects the action. This handler has the following parameter:

  - **action**: The action that a person selects.

## See Also

### Creating an action

- [init(title:subtitle:image:identifier:discoverabilityTitle:attributes:state:handler:)](init%28title_subtitle_image_identifier_discoverabilitytitle_attributes_state_handler_%29.md): Creates an action with the specified title, subtitle, image, identifier, discoverability title, attributes, state, and handler.
- [captureTextFromCamera(responder:identifier:)](capturetextfromcamera%28responder_identifier_%29.md): Creates an action for capturing text using the device’s camera.
- [UIAction.Identifier](identifier-swift.struct.md): A type that represents an action identifier.
- [UIActionHandler](../uiactionhandler.md): A type that defines the closure for an action handler.
