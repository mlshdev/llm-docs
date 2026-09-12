> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/displayname(fortype:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/displayname(fortype:))

# displayName(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.

## Declaration

```swift
func displayName(forType typeName: String) -> String?
```

## Parameters

- `typeName`: The name of a document type, specified by `CFBundleTypeName` in the application’s `Info.plist` file.

<a id="return-value"></a>

## Return Value

The descriptive name for the document type specified by `documentTypeName`. If there is no descriptive name, returns `documentTypeName`.

<a id="Discussion"></a>

## Discussion

For a document-based application, supported document types are specified in the `Info.plist` file by the `CFBundleDocumentTypes` array. Each document type is specified by a dictionary in this array, and is named by the `CFBundleTypeName` attribute. You can provide a descriptive, localized, representation of this name by providing a corresponding entry in the `InfoPlist.strings` file(s). For example, given an `Info.plist` file that contains the following fragment:

```objc
<dict>
    <key>CFBundleDocumentTypes</key>
    <array>
        <dict>
            <key>CFBundleTypeName</key>
            <string>BinaryFile</string>
            <key>CFBundleTypeExtensions</key>
            <array>
                <string>binary</string>
            </array>
```

you could provide a descriptive name by adding an entry in the `InfoPlist.strings` file:

```objc
BinaryFile = "Binary file format";
```

## See Also

### Managing Document Types

- [documentClassNames](documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [defaultType](defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [documentClass(forType:)](documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [typeForContents(of:)](typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.

# displayNameForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.

## Declaration

```objectivec
- (NSString *) displayNameForType:(NSString *) typeName;
```

## Parameters

- `typeName`: The name of a document type, specified by `CFBundleTypeName` in the application’s `Info.plist` file.

<a id="return-value"></a>

## Return Value

The descriptive name for the document type specified by `documentTypeName`. If there is no descriptive name, returns `documentTypeName`.

<a id="Discussion"></a>

## Discussion

For a document-based application, supported document types are specified in the `Info.plist` file by the `CFBundleDocumentTypes` array. Each document type is specified by a dictionary in this array, and is named by the `CFBundleTypeName` attribute. You can provide a descriptive, localized, representation of this name by providing a corresponding entry in the `InfoPlist.strings` file(s). For example, given an `Info.plist` file that contains the following fragment:

```objc
<dict>
    <key>CFBundleDocumentTypes</key>
    <array>
        <dict>
            <key>CFBundleTypeName</key>
            <string>BinaryFile</string>
            <key>CFBundleTypeExtensions</key>
            <array>
                <string>binary</string>
            </array>
```

you could provide a descriptive name by adding an entry in the `InfoPlist.strings` file:

```objc
BinaryFile = "Binary file format";
```

## See Also

### Managing Document Types

- [documentClassNames](documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [defaultType](defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [documentClassForType:](documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [typeForContentsOfURL:error:](typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.
