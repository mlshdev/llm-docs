> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreaderextension](https://developer.apple.com/documentation/mediaextension/meformatreaderextension)

# MEFormatReaderExtension (Swift)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 14.0+

A protocol that defines a factory to create a new format reader with a byte source.

## Declaration

```swift
protocol MEFormatReaderExtension : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Media Toolbox creates the `MEFormatReaderExtension` object and the [MEByteSource](mebytesource.md) object based on the media asset.

## Topics

### Creating a format reader

- [init()](meformatreaderextension/init%28%29.md): Creates a new format reader factory.
- [formatReader(with:options:)](meformatreaderextension/formatreader%28with_options_%29.md): Creates a new format reader with the byte source and options that you specify.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Format readers

- [MEFormatReader](meformatreader.md): A protocol that defines the requirements for a format reader, which represents a single media asset.
- [MEFormatReaderInstantiationOptions](meformatreaderinstantiationoptions.md): An object that contains options to pass to a format reader extension.
- [MEFileInfo](mefileinfo.md): An object that contains file properties from the media asset.
- [Format reader property list dictionaries](format-reader-property-list-dictionaries.md): Include property list dictionaries to describe a format reader and register the formats it supports.
- [Format reader entitlement](format-reader-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension format reader.

# MEFormatReaderExtension (Objective-C)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 14.0+

A protocol that defines a factory to create a new format reader with a byte source.

## Declaration

```objectivec
@protocol MEFormatReaderExtension <NSObject>
```

<a id="overview"></a>

## Overview

Media Toolbox creates the `MEFormatReaderExtension` object and the [MEByteSource](mebytesource.md) object based on the media asset.

## Topics

### Creating a format reader

- [init](meformatreaderextension/init%28%29.md): Creates a new format reader factory.
- [formatReaderWithByteSource:options:error:](meformatreaderextension/formatreader%28with_options_%29.md): Creates a new format reader with the byte source and options that you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Format readers

- [MEFormatReader](meformatreader.md): A protocol that defines the requirements for a format reader, which represents a single media asset.
- [MEFormatReaderInstantiationOptions](meformatreaderinstantiationoptions.md): An object that contains options to pass to a format reader extension.
- [MEFileInfo](mefileinfo.md): An object that contains file properties from the media asset.
- [Format reader property list dictionaries](format-reader-property-list-dictionaries.md): Include property list dictionaries to describe a format reader and register the formats it supports.
- [Format reader entitlement](format-reader-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension format reader.
