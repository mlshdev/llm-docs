> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerdelegate](https://developer.apple.com/documentation/uikit/uidocumentpickerdelegate)

# UIDocumentPickerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A set of methods for tracking when the user selects a document or destination, or cancels the operation.

## Declaration

```swift
@MainActor protocol UIDocumentPickerDelegate : NSObjectProtocol
```

## Topics

### Responding to user actions

- [documentPicker(\_:didPickDocumentsAt:)](uidocumentpickerdelegate/documentpicker%28__didpickdocumentsat_%29.md): Tells the delegate that the user has selected one or more documents.
- [documentPickerWasCancelled(\_:)](uidocumentpickerdelegate/documentpickerwascancelled%28__%29.md): Tells the delegate that the user canceled the document picker.
- [documentPicker(\_:didPickDocumentAt:)](uidocumentpickerdelegate/documentpicker%28__didpickdocumentat_%29.md): Deprecated. Tells the delegate that the user has selected a document or a destination.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the user-selected document

- [delegate](uidocumentpickerviewcontroller/delegate.md): An object that acts as the delegate of the view controller.
- [allowsMultipleSelection](uidocumentpickerviewcontroller/allowsmultipleselection.md): A Boolean value that determines whether the user can select more than one document at a time.
- [directoryURL](uidocumentpickerviewcontroller/directoryurl.md): The initial directory that the document picker displays.

# UIDocumentPickerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A set of methods for tracking when the user selects a document or destination, or cancels the operation.

## Declaration

```objectivec
@protocol UIDocumentPickerDelegate <NSObject>
```

## Topics

### Responding to user actions

- [documentPicker:didPickDocumentsAtURLs:](uidocumentpickerdelegate/documentpicker%28__didpickdocumentsat_%29.md): Tells the delegate that the user has selected one or more documents.
- [documentPickerWasCancelled:](uidocumentpickerdelegate/documentpickerwascancelled%28__%29.md): Tells the delegate that the user canceled the document picker.
- [documentPicker:didPickDocumentAtURL:](uidocumentpickerdelegate/documentpicker%28__didpickdocumentat_%29.md): Deprecated. Tells the delegate that the user has selected a document or a destination.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the user-selected document

- [delegate](uidocumentpickerviewcontroller/delegate.md): An object that acts as the delegate of the view controller.
- [allowsMultipleSelection](uidocumentpickerviewcontroller/allowsmultipleselection.md): A Boolean value that determines whether the user can select more than one document at a time.
- [directoryURL](uidocumentpickerviewcontroller/directoryurl.md): The initial directory that the document picker displays.
