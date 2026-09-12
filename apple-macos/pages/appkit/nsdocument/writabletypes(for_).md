> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/writabletypes(for:)](https://developer.apple.com/documentation/appkit/nsdocument/writabletypes(for:))

# writableTypes(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the names of the types to which this document can be saved for a specified kind of save operation.

## Declaration

```swift
nonisolated func writableTypes(for saveOperation: NSDocument.SaveOperationType) -> [String]
```

## Parameters

- `saveOperation`: The kind of save operation.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects representing the writable document types.

<a id="Discussion"></a>

## Discussion

The save operation type is represented by `saveOperation`. For every kind of save operation except `NSSaveToOperation`, the returned array must only include types for which the app can play the Editor role. For `NSSaveToOperation` the returned array may include types for which the app can only play the Viewer role, and other types that the app can merely export. The default implementation of this method returns `[[self class] writableTypes]` with, except during `NSSaveToOperation`, types for which [isNativeType(\_:)](isnativetype%28__%29.md) returns [false](https://developer.apple.com/documentation/swift/false) filtered out.

You can override this method to limit the set of writable types when the document currently contains data that is not representable in all types. For example, you can disallow saving to RTF files when the document contains an attachment and can only be saved properly to RTFD files.

You can invoke this method when creating a custom save panel accessory view to present easily the same set of types as `NSDocument` does in its standard file format popup menu.

## See Also

### Managing File Type Information

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [writableTypes](writabletypes.md): Returns the types of data the receiver can write natively and any types filterable to that native type.
- [isNativeType(\_:)](isnativetype%28__%29.md): Returns a Boolean value that indicates whether the document can read and write the data natively.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.

# writableTypesForSaveOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the names of the types to which this document can be saved for a specified kind of save operation.

## Declaration

```objectivec
- (NSArray<NSString *> *) writableTypesForSaveOperation:(NSSaveOperationType) saveOperation;
```

## Parameters

- `saveOperation`: The kind of save operation.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects representing the writable document types.

<a id="Discussion"></a>

## Discussion

The save operation type is represented by `saveOperation`. For every kind of save operation except `NSSaveToOperation`, the returned array must only include types for which the app can play the Editor role. For `NSSaveToOperation` the returned array may include types for which the app can only play the Viewer role, and other types that the app can merely export. The default implementation of this method returns `[[self class] writableTypes]` with, except during `NSSaveToOperation`, types for which [isNativeType:](isnativetype%28__%29.md) returns [false](https://developer.apple.com/documentation/swift/false) filtered out.

You can override this method to limit the set of writable types when the document currently contains data that is not representable in all types. For example, you can disallow saving to RTF files when the document contains an attachment and can only be saved properly to RTFD files.

You can invoke this method when creating a custom save panel accessory view to present easily the same set of types as `NSDocument` does in its standard file format popup menu.

## See Also

### Managing File Type Information

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [writableTypes](writabletypes.md): Returns the types of data the receiver can write natively and any types filterable to that native type.
- [isNativeType:](isnativetype%28__%29.md): Returns a Boolean value that indicates whether the document can read and write the data natively.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.
