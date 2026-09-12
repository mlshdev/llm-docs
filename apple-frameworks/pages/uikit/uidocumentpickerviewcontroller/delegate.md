> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller/delegate](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that acts as the delegate of the view controller.

## Declaration

```swift
weak var delegate: (any UIDocumentPickerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIDocumentPickerDelegate](../uidocumentpickerdelegate.md) protocol.

## See Also

### Getting the user-selected document

- [UIDocumentPickerDelegate](../uidocumentpickerdelegate.md): A set of methods for tracking when the user selects a document or destination, or cancels the operation.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether the user can select more than one document at a time.
- [directoryURL](directoryurl.md): The initial directory that the document picker displays.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that acts as the delegate of the view controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIDocumentPickerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIDocumentPickerDelegate](../uidocumentpickerdelegate.md) protocol.

## See Also

### Getting the user-selected document

- [UIDocumentPickerDelegate](../uidocumentpickerdelegate.md): A set of methods for tracking when the user selects a document or destination, or cancels the operation.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether the user can select more than one document at a time.
- [directoryURL](directoryurl.md): The initial directory that the document picker displays.
