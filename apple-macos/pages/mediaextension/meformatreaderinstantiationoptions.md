> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreaderinstantiationoptions](https://developer.apple.com/documentation/mediaextension/meformatreaderinstantiationoptions)

# MEFormatReaderInstantiationOptions (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that contains options to pass to a format reader extension.

## Declaration

```swift
class MEFormatReaderInstantiationOptions
```

<a id="overview"></a>

## Overview

This object is mutable with options set through instance properties.

## Topics

### Inspecting format reader extension options

- [allowIncrementalFragmentParsing](meformatreaderinstantiationoptions/allowincrementalfragmentparsing.md): Enables support for parsing additional fragments.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Format readers

- [MEFormatReader](meformatreader.md): A protocol that defines the requirements for a format reader, which represents a single media asset.
- [MEFormatReaderExtension](meformatreaderextension.md): A protocol that defines a factory to create a new format reader with a byte source.
- [MEFileInfo](mefileinfo.md): An object that contains file properties from the media asset.
- [Format reader property list dictionaries](format-reader-property-list-dictionaries.md): Include property list dictionaries to describe a format reader and register the formats it supports.
- [Format reader entitlement](format-reader-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension format reader.

# MEFormatReaderInstantiationOptions (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that contains options to pass to a format reader extension.

## Declaration

```objectivec
@interface MEFormatReaderInstantiationOptions : NSObject
```

<a id="overview"></a>

## Overview

This object is mutable with options set through instance properties.

## Topics

### Inspecting format reader extension options

- [allowIncrementalFragmentParsing](meformatreaderinstantiationoptions/allowincrementalfragmentparsing.md): Enables support for parsing additional fragments.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Format readers

- [MEFormatReader](meformatreader.md): A protocol that defines the requirements for a format reader, which represents a single media asset.
- [MEFormatReaderExtension](meformatreaderextension.md): A protocol that defines a factory to create a new format reader with a byte source.
- [MEFileInfo](mefileinfo.md): An object that contains file properties from the media asset.
- [Format reader property list dictionaries](format-reader-property-list-dictionaries.md): Include property list dictionaries to describe a format reader and register the formats it supports.
- [Format reader entitlement](format-reader-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension format reader.
