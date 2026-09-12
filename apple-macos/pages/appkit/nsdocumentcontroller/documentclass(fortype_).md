> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/documentclass(fortype:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/documentclass(fortype:))

# documentClass(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the `NSDocument` subclass associated with a given document type.

## Declaration

```swift
func documentClass(forType typeName: String) -> AnyClass?
```

## Parameters

- `typeName`: The name of a document type, specified by `CFBundleTypeName` in the application’s `Info.plist` file.

  The document type must be one the receiver can read.

<a id="return-value"></a>

## Return Value

Returns the `NSDocument` subclass associated with `documentTypeName`. If the class cannot be found, returns `nil`.

## See Also

### Managing Document Types

- [documentClassNames](documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [defaultType](defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [displayName(forType:)](displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
- [typeForContents(of:)](typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.

# documentClassForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the `NSDocument` subclass associated with a given document type.

## Declaration

```objectivec
- (Class) documentClassForType:(NSString *) typeName;
```

## Parameters

- `typeName`: The name of a document type, specified by `CFBundleTypeName` in the application’s `Info.plist` file.

  The document type must be one the receiver can read.

<a id="return-value"></a>

## Return Value

Returns the `NSDocument` subclass associated with `documentTypeName`. If the class cannot be found, returns `nil`.

## See Also

### Managing Document Types

- [documentClassNames](documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [defaultType](defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [displayNameForType:](displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
- [typeForContentsOfURL:error:](typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.
