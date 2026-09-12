> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssaveoperationtype/nsautosaveoperation](https://developer.apple.com/documentation/appkit/nssaveoperationtype/nsautosaveoperation)

# NSAutosaveOperation

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.4+ (deprecated in 10.7)

Old name for the [NSAutosaveElsewhereOperation](../nsdocument/saveoperationtype/autosaveelsewhereoperation.md) operation type.

> Deprecated in OS X v10.7. Use [NSAutosaveElsewhereOperation](../nsdocument/saveoperationtype/autosaveelsewhereoperation.md) instead.

## Declaration

```objectivec
NSAutosaveOperation
```

## See Also

### Constants

- [NSSaveOperation](../nsdocument/saveoperationtype/saveoperation.md): An operation that overwrites a document’s file or file package with the document’s contents.
- [NSSaveAsOperation](../nsdocument/saveoperationtype/saveasoperation.md): An operation that writes the document’s contents to a new location and updates the document to point to that location
- [NSSaveToOperation](../nsdocument/saveoperationtype/savetooperation.md): An operation that writes a copy of the document’s contents to the specified location, without changing the original document’s location.
- [NSAutosaveElsewhereOperation](../nsdocument/saveoperationtype/autosaveelsewhereoperation.md): An operation that writes an autosave version of the file to a different location.
- [NSAutosaveInPlaceOperation](../nsdocument/saveoperationtype/autosaveinplaceoperation.md): An operation that overwrites the document’s current contents with autosave data.
- [NSAutosaveAsOperation](../nsdocument/saveoperationtype/autosaveasoperation.md): An operation that writes a document’s contents to a new file or file package even though the user has not explicitly requested it, then changes the document’s current location to point to the just-written file or file package.
