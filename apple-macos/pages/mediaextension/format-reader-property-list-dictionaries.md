> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/format-reader-property-list-dictionaries](https://developer.apple.com/documentation/mediaextension/format-reader-property-list-dictionaries)

# Format reader property list dictionaries

**Interface languages:** Swift, Objective-C

**Framework:** MediaExtension  
**Kind:** API Collection

Include property list dictionaries to describe a format reader and register the formats it supports.

<a id="overview"></a>

## Overview

An `ExtensionKit` format reader needs to include one required dictionary and can also include an optional dictionary in its `Info.plist` file:

1. `EXAppExtensionAttributes`: A required dictionary that describes the format reader and contains the following keys and values:

- [kMEFormatReaderClassImplementationIDKey](kmeformatreaderclassimplementationidkey.md): The identifier for the format reader. Format similarly to the bundle identifier.
- `EXExtensionPointIdentifier`: The extension point name for format readers. Set to the value for [kMEFormatReaderExtensionPointName](kmeformatreaderextensionpointname.md).
- `EXPrincipalClass`: The name of the format reader factory class that conforms to the [MEFormatReaderExtension](meformatreaderextension.md) protocol.
- [kMEFormatReaderFileNameExtensionArrayKey](kmeformatreaderfilenameextensionarraykey.md): An array of strings that specify the file name extensions that the format reader supports.
- [kMEFormatReaderUTTypeArrayKey](kmeformatreaderuttypearraykey.md): A key to the array of Uniform Type Identifiers that the format reader supports.
- [kMEFormatReaderObjectNameKey](kmeformatreaderobjectnamekey.md): A user-readable string that describes the format reader.

2. [UTExportedTypeDeclarations](https://developer.apple.com/documentation/bundleresources/information-property-list/utexportedtypedeclarations): An optional dictionary that registers the formats from the [kMEFormatReaderUTTypeArrayKey](kmeformatreaderuttypearraykey.md) array that the format reader supports, so the system can recognize those media files and open them in the appropriate app. It contains the following keys and values:

- [UTTypeDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/utexportedtypedeclarations/uttypedescription): A user-readable string that specifies the media kind, which Finder displays.
- [UTTypeConformsTo](https://developer.apple.com/documentation/bundleresources/information-property-list/utexportedtypedeclarations/uttypeconformsto): An array of `UTType` identifiers, with the first entry set to `com.apple.mediaextension-content`. This type also conforms to higher level abstract types such as `public.movie` and `public.audiovisual-content`. This array can include additional types as needed.
- [UTTypeIdentifier](https://developer.apple.com/documentation/bundleresources/information-property-list/utexportedtypedeclarations/uttypeidentifier): This value needs to match the value for `kMEFormatReaderUTTypeArrayKey` in the `EXAppExtensionAttributes` dictionary.
- [UTTypeTagSpecification](https://developer.apple.com/documentation/bundleresources/information-property-list/utexportedtypedeclarations/uttypetagspecification), `public.filename-extension` key: This value needs to match the value for [kMEFormatReaderFileNameExtensionArrayKey](kmeformatreaderfilenameextensionarraykey.md) in the `EXAppExtensionAttributes` dictionary.
- `public.mime-type`: This is an optional key to a MIME type that corresponds to the format.

For general information on how to make a `UTExportedTypeDeclarations` dictionary, see [UTExportedTypeDeclarations](https://developer.apple.com/documentation/bundleresources/information-property-list/utexportedtypedeclarations).

## Topics

### Property list keys

- [kMEFormatReaderClassImplementationIDKey](kmeformatreaderclassimplementationidkey.md): The unique identifier for the format reader.
- [kMEFormatReaderExtensionPointName](kmeformatreaderextensionpointname.md): A key to the extension point name for format readers.
- [kMEFormatReaderFileNameExtensionArrayKey](kmeformatreaderfilenameextensionarraykey.md): A key to the array of file extensions that the format reader plug-in supports.
- [kMEFormatReaderUTTypeArrayKey](kmeformatreaderuttypearraykey.md): A key to the array of Uniform Type Identifiers that the format reader supports.
- [kMEFormatReaderObjectNameKey](kmeformatreaderobjectnamekey.md): A user-readable string describing the format reader.

## See Also

### Format readers

- [MEFormatReader](meformatreader.md): A protocol that defines the requirements for a format reader, which represents a single media asset.
- [MEFormatReaderExtension](meformatreaderextension.md): A protocol that defines a factory to create a new format reader with a byte source.
- [MEFormatReaderInstantiationOptions](meformatreaderinstantiationoptions.md): An object that contains options to pass to a format reader extension.
- [MEFileInfo](mefileinfo.md): An object that contains file properties from the media asset.
- [Format reader entitlement](format-reader-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension format reader.
