> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/saveoperationtype/autosaveasoperation](https://developer.apple.com/documentation/appkit/nsdocument/saveoperationtype/autosaveasoperation)

# NSDocument.SaveOperationType.autosaveAsOperation (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.8+

An operation that writes a document’s contents to a new file or file package even though the user has not explicitly requested it, then changes the document’s current location to point to the just-written file or file package.

## Declaration

```swift
case autosaveAsOperation
```

## See Also

### Constants

- [NSDocument.SaveOperationType.saveOperation](saveoperation.md): An operation that overwrites a document’s file or file package with the document’s contents.
- [NSDocument.SaveOperationType.saveAsOperation](saveasoperation.md): An operation that writes the document’s contents to a new location and updates the document to point to that location
- [NSDocument.SaveOperationType.saveToOperation](savetooperation.md): An operation that writes a copy of the document’s contents to the specified location, without changing the original document’s location.
- [NSDocument.SaveOperationType.autosaveElsewhereOperation](autosaveelsewhereoperation.md): An operation that writes an autosave version of the file to a different location.
- [NSDocument.SaveOperationType.autosaveInPlaceOperation](autosaveinplaceoperation.md): An operation that overwrites the document’s current contents with autosave data.

# NSAutosaveAsOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.8+

An operation that writes a document’s contents to a new file or file package even though the user has not explicitly requested it, then changes the document’s current location to point to the just-written file or file package.

## Declaration

```objectivec
NSAutosaveAsOperation
```

## See Also

### Constants

- [NSSaveOperation](saveoperation.md): An operation that overwrites a document’s file or file package with the document’s contents.
- [NSSaveAsOperation](saveasoperation.md): An operation that writes the document’s contents to a new location and updates the document to point to that location
- [NSSaveToOperation](savetooperation.md): An operation that writes a copy of the document’s contents to the specified location, without changing the original document’s location.
- [NSAutosaveElsewhereOperation](autosaveelsewhereoperation.md): An operation that writes an autosave version of the file to a different location.
- [NSAutosaveInPlaceOperation](autosaveinplaceoperation.md): An operation that overwrites the document’s current contents with autosave data.
- [NSAutosaveOperation](../../nssaveoperationtype/nsautosaveoperation.md): Deprecated. Old name for the [NSAutosaveElsewhereOperation](autosaveelsewhereoperation.md) operation type.
