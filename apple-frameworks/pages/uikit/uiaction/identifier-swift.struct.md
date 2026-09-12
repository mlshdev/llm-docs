> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaction/identifier-swift.struct](https://developer.apple.com/documentation/uikit/uiaction/identifier-swift.struct)

# UIAction.Identifier (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A type that represents an action identifier.

## Declaration

```swift
struct Identifier
```

## Topics

### Constants

- [paste](identifier-swift.struct/paste.md): Identifies the action that pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo](identifier-swift.struct/pasteandgo.md): Identifies the action that pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle](identifier-swift.struct/pasteandmatchstyle.md): Identifies the action that pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [pasteAndSearch](identifier-swift.struct/pasteandsearch.md): Identifies the action that pastes the current contents of the pasteboard into your app’s interface and performs a search.
- [newFromPasteboard](identifier-swift.struct/newfrompasteboard.md)

### Initializers

- [init(\_:)](identifier-swift.struct/init%28__%29.md): Creates an action identifier from the specified string.
- [init(rawValue:)](identifier-swift.struct/init%28rawvalue_%29.md): Creates an action identifier from the specified string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an action

- [init(title:subtitle:image:identifier:discoverabilityTitle:attributes:state:handler:)](init%28title_subtitle_image_identifier_discoverabilitytitle_attributes_state_handler_%29.md): Creates an action with the specified title, subtitle, image, identifier, discoverability title, attributes, state, and handler.
- [init(title:image:identifier:discoverabilityTitle:attributes:state:handler:)](init%28title_image_identifier_discoverabilitytitle_attributes_state_handler_%29.md): Creates an action with the specified title, image, identifier, discoverability title, attributes, state, and handler.
- [captureTextFromCamera(responder:identifier:)](capturetextfromcamera%28responder_identifier_%29.md): Creates an action for capturing text using the device’s camera.
- [UIActionHandler](../uiactionhandler.md): A type that defines the closure for an action handler.

# UIActionIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A type that represents an action identifier.

## Declaration

```objectivec
typedef NSString * UIActionIdentifier;
```

## Topics

### Constants

- [UIActionPaste](identifier-swift.struct/paste.md): Identifies the action that pastes the current contents of the pasteboard into your app’s interface.
- [UIActionPasteAndGo](identifier-swift.struct/pasteandgo.md): Identifies the action that pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [UIActionPasteAndMatchStyle](identifier-swift.struct/pasteandmatchstyle.md): Identifies the action that pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [UIActionPasteAndSearch](identifier-swift.struct/pasteandsearch.md): Identifies the action that pastes the current contents of the pasteboard into your app’s interface and performs a search.
- [UIActionNewFromPasteboard](identifier-swift.struct/newfrompasteboard.md)

## See Also

### Creating an action

- [actionWithTitle:image:identifier:handler:](actionwithtitle_image_identifier_handler_.md): Creates an action with the specified title, image, identifier, and handler.
- [actionWithHandler:](actionwithhandler_.md): Creates an action with the specified handler.
- [captureTextFromCameraActionForResponder:identifier:](capturetextfromcamera%28responder_identifier_%29.md): Creates an action for capturing text using the device’s camera.
- [UIActionHandler](../uiactionhandler.md): A type that defines the closure for an action handler.
