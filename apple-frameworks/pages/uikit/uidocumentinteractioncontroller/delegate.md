> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/delegate](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate you want to receive document interaction notifications.

## Declaration

```swift
weak var delegate: (any UIDocumentInteractionControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You can implement a delegate object to track user interactions with menu items displayed by the document interaction controller. For more information, see [UIDocumentInteractionControllerDelegate](../uidocumentinteractioncontrollerdelegate.md).

The default value of this property is `nil`.

## See Also

### Handling document-related interactions

- [UIDocumentInteractionControllerDelegate](../uidocumentinteractioncontrollerdelegate.md): A set of methods you can implement to respond to messages from a document interaction controller.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate you want to receive document interaction notifications.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIDocumentInteractionControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You can implement a delegate object to track user interactions with menu items displayed by the document interaction controller. For more information, see [UIDocumentInteractionControllerDelegate](../uidocumentinteractioncontrollerdelegate.md).

The default value of this property is `nil`.

## See Also

### Handling document-related interactions

- [UIDocumentInteractionControllerDelegate](../uidocumentinteractioncontrollerdelegate.md): A set of methods you can implement to respond to messages from a document interaction controller.
