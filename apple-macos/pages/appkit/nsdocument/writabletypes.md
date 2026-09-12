> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/writabletypes](https://developer.apple.com/documentation/appkit/nsdocument/writabletypes)

# writableTypes (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the types of data the receiver can write natively and any types filterable to that native type.

## Declaration

```swift
class var writableTypes: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects representing the writable document types.

## See Also

### Managing File Type Information

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [isNativeType(\_:)](isnativetype%28__%29.md): Returns a Boolean value that indicates whether the document can read and write the data natively.
- [writableTypes(for:)](writabletypes%28for_%29.md): Returns the names of the types to which this document can be saved for a specified kind of save operation.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.

# writableTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the types of data the receiver can write natively and any types filterable to that native type.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * writableTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects representing the writable document types.

## See Also

### Managing File Type Information

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [isNativeType:](isnativetype%28__%29.md): Returns a Boolean value that indicates whether the document can read and write the data natively.
- [writableTypesForSaveOperation:](writabletypes%28for_%29.md): Returns the names of the types to which this document can be saved for a specified kind of save operation.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.
