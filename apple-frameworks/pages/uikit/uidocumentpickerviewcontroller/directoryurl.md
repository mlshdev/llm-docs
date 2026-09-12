> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller/directoryurl](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/directoryurl)

# directoryURL (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The initial directory that the document picker displays.

## Declaration

```swift
var directoryURL: URL? { get set }
```

## Mentioned In

- [Providing access to directories](../providing-access-to-directories.md)

<a id="Discussion"></a>

## Discussion

Set this property to specify the starting directory for the document picker. This property defaults to `nil`. If you specify a value, the document picker tries to start at the specified directory. Otherwise, it starts with the last directory chosen by the user.

The [directoryURL](directoryurl.md) property only returns a value when you explicitly set it. For example, it doesn’t calculate the default URL presented to the user when the property isn’t set.

> **Note**

>  This property has no effect in Mac apps built with Mac Catalyst.

## See Also

### Getting the user-selected document

- [delegate](delegate.md): An object that acts as the delegate of the view controller.
- [UIDocumentPickerDelegate](../uidocumentpickerdelegate.md): A set of methods for tracking when the user selects a document or destination, or cancels the operation.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether the user can select more than one document at a time.

# directoryURL (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The initial directory that the document picker displays.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * directoryURL;
```

## Mentioned In

- [Providing access to directories](../providing-access-to-directories.md)

<a id="Discussion"></a>

## Discussion

Set this property to specify the starting directory for the document picker. This property defaults to `nil`. If you specify a value, the document picker tries to start at the specified directory. Otherwise, it starts with the last directory chosen by the user.

The [directoryURL](directoryurl.md) property only returns a value when you explicitly set it. For example, it doesn’t calculate the default URL presented to the user when the property isn’t set.

> **Note**

>  This property has no effect in Mac apps built with Mac Catalyst.

## See Also

### Getting the user-selected document

- [delegate](delegate.md): An object that acts as the delegate of the view controller.
- [UIDocumentPickerDelegate](../uidocumentpickerdelegate.md): A set of methods for tracking when the user selects a document or destination, or cancels the operation.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that determines whether the user can select more than one document at a time.
