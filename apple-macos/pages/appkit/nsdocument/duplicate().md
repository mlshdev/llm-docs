> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/duplicate()](https://developer.apple.com/documentation/appkit/nsdocument/duplicate())

# duplicate() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates a new document whose contents are the same as the receiver and returns an error object if unsuccessful.

## Declaration

```swift
func duplicate() throws -> NSDocument
```

<a id="return-value"></a>

## Return Value

The new document if duplication is successful; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

The new document returned doesn’t yet have a value to return from [fileURL](fileurl.md).

The default implementation of this method first uses [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) to write the document’s current contents to a file located in the same directory that is used for the autosaved contents of untitled documents and with the same sort of name, then invokes `[[NSDocumentController sharedDocumentController] duplicateDocumentWithContentsOfURL:newContentsURL copying:NO displayName:aDisplayName error:outError]`.

You can override this method to customize what is done during document duplication, but if your override does not invoke `[NSDocumentController duplicateDocumentWithContentsOfURL:copying:displayName:error:]` you must take care to do things that that method does, especially invoking `[NSDocumentController addDocument:]` and `[NSFileCoordinator addFilePresenter:]`.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Duplicating the Document

- [duplicate(\_:)](duplicate%28__%29.md): Creates a copy of the receiving document in response to the user choosing Duplicate from the File menu.
- [duplicate(withDelegate:didDuplicate:contextInfo:)](duplicate%28withdelegate_didduplicate_contextinfo_%29.md): Creates a new document whose contents are the same as the current document.

# duplicateAndReturnError: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates a new document whose contents are the same as the receiver and returns an error object if unsuccessful.

## Declaration

```objectivec
- (NSDocument *) duplicateAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: On return, if the document could not be duplicated, a pointer to an error object that encapsulates the reason why it could not be duplicated.

<a id="return-value"></a>

## Return Value

The new document if duplication is successful; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

The new document returned doesn’t yet have a value to return from [fileURL](fileurl.md).

The default implementation of this method first uses [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) to write the document’s current contents to a file located in the same directory that is used for the autosaved contents of untitled documents and with the same sort of name, then invokes `[[NSDocumentController sharedDocumentController] duplicateDocumentWithContentsOfURL:newContentsURL copying:NO displayName:aDisplayName error:outError]`.

You can override this method to customize what is done during document duplication, but if your override does not invoke `[NSDocumentController duplicateDocumentWithContentsOfURL:copying:displayName:error:]` you must take care to do things that that method does, especially invoking `[NSDocumentController addDocument:]` and `[NSFileCoordinator addFilePresenter:]`.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Duplicating the Document

- [duplicateDocument:](duplicate%28__%29.md): Creates a copy of the receiving document in response to the user choosing Duplicate from the File menu.
- [duplicateDocumentWithDelegate:didDuplicateSelector:contextInfo:](duplicate%28withdelegate_didduplicate_contextinfo_%29.md): Creates a new document whose contents are the same as the current document.
