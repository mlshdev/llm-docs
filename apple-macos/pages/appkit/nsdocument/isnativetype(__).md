> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/isnativetype(_:)](https://developer.apple.com/documentation/appkit/nsdocument/isnativetype(_:))

# isNativeType(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the document can read and write the data natively.

## Declaration

```swift
class func isNativeType(_ type: String) -> Bool
```

## Parameters

- `type`: The string that identifies the document type to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document type is a native type; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing File Type Information

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [writableTypes](writabletypes.md): Returns the types of data the receiver can write natively and any types filterable to that native type.
- [writableTypes(for:)](writabletypes%28for_%29.md): Returns the names of the types to which this document can be saved for a specified kind of save operation.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.

# isNativeType: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the document can read and write the data natively.

## Declaration

```objectivec
+ (BOOL) isNativeType:(NSString *) type;
```

## Parameters

- `type`: The string that identifies the document type to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document type is a native type; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing File Type Information

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [writableTypes](writabletypes.md): Returns the types of data the receiver can write natively and any types filterable to that native type.
- [writableTypesForSaveOperation:](writabletypes%28for_%29.md): Returns the names of the types to which this document can be saved for a specified kind of save operation.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.
