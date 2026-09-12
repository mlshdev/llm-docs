> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/documentclassnames](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/documentclassnames)

# documentClassNames (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of strings representing the custom document classes supported by this app.

## Declaration

```swift
var documentClassNames: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The items in the array are [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which represents the name of a document subclasses supported by the app. The document class names are derived from the app’s `Info.plist`.  You can override this property and use it to return the names of document classes that are dynamically loaded from plugins.

## See Also

### Managing Document Types

- [defaultType](defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [documentClass(forType:)](documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [displayName(forType:)](displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
- [typeForContents(of:)](typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.

# documentClassNames (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of strings representing the custom document classes supported by this app.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * documentClassNames;
```

<a id="Discussion"></a>

## Discussion

The items in the array are [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which represents the name of a document subclasses supported by the app. The document class names are derived from the app’s `Info.plist`.  You can override this property and use it to return the names of document classes that are dynamically loaded from plugins.

## See Also

### Managing Document Types

- [defaultType](defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [documentClassForType:](documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [displayNameForType:](displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
- [typeForContentsOfURL:error:](typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.
