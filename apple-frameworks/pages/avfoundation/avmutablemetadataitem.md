> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemetadataitem](https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem)

# AVMutableMetadataItem (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mutable metadata item for an audiovisual asset or for one of its tracks.

## Declaration

```swift
class AVMutableMetadataItem
```

<a id="overview"></a>

## Overview

You can initialize a mutable metadata item from an existing [AVMetadataItem](avmetadataitem.md) object or with a one or more of the basic properties of a metadata item: a key, a key space, a locale, and a value.

## Topics

### Identifying metadata items

- [identifier](avmutablemetadataitem/identifier.md): Indicates the identifier of the metadata item.

### Accessing keys and key spaces

- [key](avmutablemetadataitem/key.md): The key for a mutable metadata item.
- [keySpace](avmutablemetadataitem/keyspace.md): The key space of the metadata item’s key.

### Accessing values

- [value](avmutablemetadataitem/value.md): The value for the mutable metadata item.
- [extraAttributes](avmutablemetadataitem/extraattributes.md): A dictionary of additional attributes for a metadata item.
- [dataType](avmutablemetadataitem/datatype.md): The data type of the metadata item’s value.
- [stringValue](avmutablemetadataitem/stringvalue.md): The value of the metadata item as a string.
- [numberValue](avmutablemetadataitem/numbervalue.md): The value of the metadata item as a number.
- [dateValue](avmutablemetadataitem/datevalue.md): The value of the metadata item as a date.
- [dataValue](avmutablemetadataitem/datavalue.md): The value of the metadata item as a data value.

### Accessing timing

- [time](avmutablemetadataitem/time.md): The timestamp for a mutable metadata item.
- [startDate](avmutablemetadataitem/startdate.md): The start date of the timed metadata.
- [duration](avmutablemetadataitem/duration.md): The duration of a mutable metadata item.

### Accessing language support

- [locale](avmutablemetadataitem/locale.md): The locale for a mutable metadata item.
- [extendedLanguageTag](avmutablemetadataitem/extendedlanguagetag.md): The IETF BCP 47 (RFC 4646) language identifier of the metadata item.

## Relationships

### Inherits From

- [AVMetadataItem](avmetadataitem.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.

# AVMutableMetadataItem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mutable metadata item for an audiovisual asset or for one of its tracks.

## Declaration

```objectivec
@interface AVMutableMetadataItem : AVMetadataItem
```

<a id="overview"></a>

## Overview

You can initialize a mutable metadata item from an existing [AVMetadataItem](avmetadataitem.md) object or with a one or more of the basic properties of a metadata item: a key, a key space, a locale, and a value.

## Topics

### Creating a metadata item

- [metadataItem](avmutablemetadataitem/metadataitem.md): Returns a new mutable metadata item.

### Identifying metadata items

- [identifier](avmutablemetadataitem/identifier.md): Indicates the identifier of the metadata item.

### Accessing keys and key spaces

- [key](avmutablemetadataitem/key.md): The key for a mutable metadata item.
- [keySpace](avmutablemetadataitem/keyspace.md): The key space of the metadata item’s key.

### Accessing values

- [value](avmutablemetadataitem/value.md): The value for the mutable metadata item.
- [extraAttributes](avmutablemetadataitem/extraattributes.md): A dictionary of additional attributes for a metadata item.
- [dataType](avmutablemetadataitem/datatype.md): The data type of the metadata item’s value.

### Accessing timing

- [time](avmutablemetadataitem/time.md): The timestamp for a mutable metadata item.
- [startDate](avmutablemetadataitem/startdate.md): The start date of the timed metadata.
- [duration](avmutablemetadataitem/duration.md): The duration of a mutable metadata item.

### Accessing language support

- [locale](avmutablemetadataitem/locale.md): The locale for a mutable metadata item.
- [extendedLanguageTag](avmutablemetadataitem/extendedlanguagetag.md): The IETF BCP 47 (RFC 4646) language identifier of the metadata item.

## Relationships

### Inherits From

- [AVMetadataItem](avmetadataitem.md)

## See Also

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.
