> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/duplicate(_:)](https://developer.apple.com/documentation/appkit/nsdocument/duplicate(_:))

# duplicate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates a copy of the receiving document in response to the user choosing Duplicate from the File menu.

## Declaration

```swift
@IBAction func duplicate(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the action message.

<a id="Discussion"></a>

## Discussion

The default implementation of this method merely invokes `[self duplicateDocumentWithDelegate:nil didDuplicateSelector:NULL contextInfo:NULL]`.

## See Also

### Duplicating the Document

- [duplicate()](duplicate%28%29.md): Creates a new document whose contents are the same as the receiver and returns an error object if unsuccessful.
- [duplicate(withDelegate:didDuplicate:contextInfo:)](duplicate%28withdelegate_didduplicate_contextinfo_%29.md): Creates a new document whose contents are the same as the current document.

# duplicateDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates a copy of the receiving document in response to the user choosing Duplicate from the File menu.

## Declaration

```objectivec
- (void) duplicateDocument:(id) sender;
```

## Parameters

- `sender`: The control sending the action message.

<a id="Discussion"></a>

## Discussion

The default implementation of this method merely invokes `[self duplicateDocumentWithDelegate:nil didDuplicateSelector:NULL contextInfo:NULL]`.

## See Also

### Duplicating the Document

- [duplicateAndReturnError:](duplicate%28%29.md): Creates a new document whose contents are the same as the receiver and returns an error object if unsuccessful.
- [duplicateDocumentWithDelegate:didDuplicateSelector:contextInfo:](duplicate%28withdelegate_didduplicate_contextinfo_%29.md): Creates a new document whose contents are the same as the current document.
