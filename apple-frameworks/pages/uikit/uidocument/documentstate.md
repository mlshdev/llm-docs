> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/documentstate](https://developer.apple.com/documentation/uikit/uidocument/documentstate)

# documentState (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current state of the document.

## Declaration

```swift
var documentState: UIDocument.State { get }
```

<a id="Discussion"></a>

## Discussion

When document state changes, the [UIDocument](../uidocument.md) object stores a constant identifying the new state in this property. See the [UIDocument.State](state.md) enum for descriptions of these constants. To receive notifications about changes in document state, observe the [stateChangedNotification](statechangednotification.md) notification.

## See Also

### Accessing document attributes

- [fileURL](fileurl.md): The file URL you use to initialize the document.
- [localizedName](localizedname.md): The localized name of the document.
- [fileType](filetype.md): The file type of the document.
- [fileModificationDate](filemodificationdate.md): The date and time your app last modified the document file.
- [progress](progress.md): The upload or download progress of a document.

# documentState (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current state of the document.

## Declaration

```objectivec
@property (readonly) UIDocumentState documentState;
```

<a id="Discussion"></a>

## Discussion

When document state changes, the [UIDocument](../uidocument.md) object stores a constant identifying the new state in this property. See the [UIDocumentState](state.md) enum for descriptions of these constants. To receive notifications about changes in document state, observe the [UIDocumentStateChangedNotification](statechangednotification.md) notification.

## See Also

### Accessing document attributes

- [fileURL](fileurl.md): The file URL you use to initialize the document.
- [localizedName](localizedname.md): The localized name of the document.
- [fileType](filetype.md): The file type of the document.
- [fileModificationDate](filemodificationdate.md): The date and time your app last modified the document file.
- [progress](progress.md): The upload or download progress of a document.
