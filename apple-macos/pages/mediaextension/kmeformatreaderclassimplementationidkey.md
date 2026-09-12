> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/kmeformatreaderclassimplementationidkey](https://developer.apple.com/documentation/mediaextension/kmeformatreaderclassimplementationidkey)

# kMEFormatReaderClassImplementationIDKey (Swift)

**Framework:** MediaExtension  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

The unique identifier for the format reader.

## Declaration

```swift
var kMEFormatReaderClassImplementationIDKey: String { get }
```

<a id="Discussion"></a>

## Discussion

Format the string similar to the bundle identifier of the format reader. Start with the reverse domain identifier of your developer account, followed by `.formatreader.` and the name of the media format. If you plan to create multiple variants of the same media format, include an additional component to make each format reader identifier unique; for example `com.mycompany.formatreader.mymediaformat.formatvariant`.

## See Also

### Property list keys

- [kMEFormatReaderExtensionPointName](kmeformatreaderextensionpointname.md): A key to the extension point name for format readers.
- [kMEFormatReaderFileNameExtensionArrayKey](kmeformatreaderfilenameextensionarraykey.md): A key to the array of file extensions that the format reader plug-in supports.
- [kMEFormatReaderUTTypeArrayKey](kmeformatreaderuttypearraykey.md): A key to the array of Uniform Type Identifiers that the format reader supports.
- [kMEFormatReaderObjectNameKey](kmeformatreaderobjectnamekey.md): A user-readable string describing the format reader.

# kMEFormatReaderClassImplementationIDKey (Objective-C)

**Framework:** MediaExtension  
**Kind:** Macro  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

The unique identifier for the format reader.

## Declaration

```objectivec
#define kMEFormatReaderClassImplementationIDKey
```

<a id="Discussion"></a>

## Discussion

Format the string similar to the bundle identifier of the format reader. Start with the reverse domain identifier of your developer account, followed by `.formatreader.` and the name of the media format. If you plan to create multiple variants of the same media format, include an additional component to make each format reader identifier unique; for example `com.mycompany.formatreader.mymediaformat.formatvariant`.

## See Also

### Property list keys

- [kMEFormatReaderExtensionPointName](kmeformatreaderextensionpointname.md): A key to the extension point name for format readers.
- [kMEFormatReaderFileNameExtensionArrayKey](kmeformatreaderfilenameextensionarraykey.md): A key to the array of file extensions that the format reader plug-in supports.
- [kMEFormatReaderUTTypeArrayKey](kmeformatreaderuttypearraykey.md): A key to the array of Uniform Type Identifiers that the format reader supports.
- [kMEFormatReaderObjectNameKey](kmeformatreaderobjectnamekey.md): A user-readable string describing the format reader.
