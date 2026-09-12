> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/defaulttype](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/defaulttype)

# defaultType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the name of the document type that should be used when creating new documents.

## Declaration

```swift
var defaultType: String? { get }
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the first Editor type declared by the `CFBundleDocumentTypes` array in the application’s `Info.plist`, or returns `nil` if no Editor type is declared. You can override it to customize the type of document that is created when, for instance, the user chooses New in the File menu.

## See Also

### Managing Document Types

- [documentClassNames](documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [documentClass(forType:)](documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [displayName(forType:)](displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
- [typeForContents(of:)](typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.

# defaultType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the name of the document type that should be used when creating new documents.

## Declaration

```objectivec
@property (readonly, nullable) NSString * defaultType;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the first Editor type declared by the `CFBundleDocumentTypes` array in the application’s `Info.plist`, or returns `nil` if no Editor type is declared. You can override it to customize the type of document that is created when, for instance, the user chooses New in the File menu.

## See Also

### Managing Document Types

- [documentClassNames](documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [documentClassForType:](documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [displayNameForType:](displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
- [typeForContentsOfURL:error:](typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.
