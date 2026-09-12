> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem](https://developer.apple.com/documentation/avfoundation/avmetadataitem)

# AVMetadataItem (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A metadata item for an audiovisual asset or one of its tracks.

## Declaration

```swift
class AVMetadataItem
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)
- [Retrieving media metadata](retrieving-media-metadata.md)
- [Presenting chapter markers](presenting-chapter-markers.md)

<a id="overview"></a>

## Overview

To effectively use `AVMetadataItem`, you need to understand how [AVFoundation](../avfoundation.md) organizes metadata. To simplify finding and filtering metadata items, the framework groups related metadata into key spaces:

- **Format-specific key spaces.** The framework defines several format-specific key spaces. They roughly correlate to a particular container or file format, such as QuickTime (QuickTime metadata and user data) or MP3 (ID3). However, a single asset may contain metadata values across multiple key spaces. To retrieve an asset’s complete collection of format-specific metadata, you use its [metadata](avasset/metadata.md) property.
- **Common key space.** There are several common metadata values, such as a movie’s creation date or description, that can exist across multiple key spaces. To help normalize access to this common metadata, the framework provides a common key space that gives access to a limited set of metadata values common to several key spaces. This makes it easy to retrieve commonly used metadata without concern for the specific format. To retrieve an asset’s collection of common metadata, you use its [commonMetadata](avasset/commonmetadata.md) property.

Metadata items have keys that accord with the specification of the container format from which they’re drawn. Full details of the metadata formats, metadata keys, and metadata key spaces supported by AVFoundation are available in [AVMetadataKeySpace](avmetadatakeyspace.md) and [AVMetadataKey](avmetadatakey.md).

To load values of a metadata item when you access them for the first time, use the methods from the [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md) protocol. The [AVAsset](avasset.md) class and other classes in turn provide their metadata as needed so that you can obtain objects from those arrays without incurring overhead for items you don’t inspect.

To filter arrays of metadata items, you use the methods of this class. For example, you can filter by key and key space, by locale, and by preferred language.

## Topics

### Creating a metadata item

- [init(propertiesOfMetadataItem:valueLoadingHandler:)](avmetadataitem/init%28propertiesofmetadataitem_valueloadinghandler_%29.md): Creates a metadata item whose value loads on an on-demand basis only.
- [AVMetadataItemValueRequest](avmetadataitemvaluerequest.md): An object that responds to a request to load the value of a metadata item.

### Identifying metadata items

- [identifier](avmetadataitem/identifier.md): An identifier for a metadata item.

### Loading values

- [dataType](avmetadataitem/datatype.md): The data type of the metadata item’s value.
- [value](avpartialasyncproperty/value.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item.
- [stringValue](avpartialasyncproperty/stringvalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a string.
- [numberValue](avpartialasyncproperty/numbervalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a number.
- [dateValue](avpartialasyncproperty/datevalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a date.
- [dataValue](avpartialasyncproperty/datavalue.md): Conforms when `Root` inherits `AVMetadataItem`. The value of the metadata item as a data value.
- [extraAttributes](avpartialasyncproperty/extraattributes.md): Conforms when `Root` inherits `AVMetadataItem`. A dictionary of additional attributes for the item.

### Accessing keys and key spaces

- [key](avmetadataitem/key.md): The key of the metadata item.
- [commonKey](avmetadataitem/commonkey.md): The common key of the metadata item.
- [keySpace](avmetadataitem/keyspace.md): The key space for the metadata item’s key.

### Accessing timing

- [time](avmetadataitem/time.md): The timestamp of the metadata item.
- [startDate](avmetadataitem/startdate.md): The start date of the timed metadata.
- [duration](avmetadataitem/duration.md): The duration of the metadata item.

### Accessing language support

- [locale](avmetadataitem/locale.md): The locale of the metadata item.
- [extendedLanguageTag](avmetadataitem/extendedlanguagetag.md): The IETF BCP 47 (RFC 4646) language identifier of the metadata item.

### Filtering arrays of metadata items

- [metadataItems(from:filteredByIdentifier:)](avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItems(from:withKey:keySpace:)](avmetadataitem/metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItems(from:with:)](avmetadataitem/metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
- [metadataItems(from:filteredBy:)](avmetadataitem/metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.

### Translating metadata items

- [identifier(forKey:keySpace:)](avmetadataitem/identifier%28forkey_keyspace_%29.md): Returns a metadata identifier for the specified key and key space.
- [key(forIdentifier:)](avmetadataitem/key%28foridentifier_%29.md): Returns a metadata key for the specified identifier.
- [keySpace(forIdentifier:)](avmetadataitem/keyspace%28foridentifier_%29.md): Returns a metadata key space for the specified identifier.

### Accessing values

Prefer loading values asynchronously using the symbols in Loading Values.

- [value](avmetadataitem/value.md): Deprecated. The value of the metadata item.
- [extraAttributes](avmetadataitem/extraattributes.md): Deprecated. A dictionary of additional attributes for a metadata item.
- [stringValue](avmetadataitem/stringvalue.md): Deprecated. The value of the metadata item as a string.
- [numberValue](avmetadataitem/numbervalue.md): Deprecated. The value of the metadata item as a number.
- [dateValue](avmetadataitem/datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](avmetadataitem/datavalue.md): Deprecated. The value of the metadata item as a data value.

### Initializers

- [init(propertiesOf:valueLoadingHandler:)](avmetadataitem/init%28propertiesof_valueloadinghandler_%29.md)

### Default Implementations

- [AVMetadataItem Implementations](avmetadataitem/avmetadataitem-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableMetadataItem](avmutablemetadataitem.md)

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
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.

# AVMetadataItem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A metadata item for an audiovisual asset or one of its tracks.

## Declaration

```objectivec
@interface AVMetadataItem : NSObject
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)
- [Retrieving media metadata](retrieving-media-metadata.md)
- [Presenting chapter markers](presenting-chapter-markers.md)

<a id="overview"></a>

## Overview

To effectively use `AVMetadataItem`, you need to understand how [AVFoundation](../avfoundation.md) organizes metadata. To simplify finding and filtering metadata items, the framework groups related metadata into key spaces:

- **Format-specific key spaces.** The framework defines several format-specific key spaces. They roughly correlate to a particular container or file format, such as QuickTime (QuickTime metadata and user data) or MP3 (ID3). However, a single asset may contain metadata values across multiple key spaces. To retrieve an asset’s complete collection of format-specific metadata, you use its [metadata](avasset/metadata.md) property.
- **Common key space.** There are several common metadata values, such as a movie’s creation date or description, that can exist across multiple key spaces. To help normalize access to this common metadata, the framework provides a common key space that gives access to a limited set of metadata values common to several key spaces. This makes it easy to retrieve commonly used metadata without concern for the specific format. To retrieve an asset’s collection of common metadata, you use its [commonMetadata](avasset/commonmetadata.md) property.

Metadata items have keys that accord with the specification of the container format from which they’re drawn. Full details of the metadata formats, metadata keys, and metadata key spaces supported by AVFoundation are available in [AVMetadataKeySpace](avmetadatakeyspace.md) and [AVMetadataKey](avmetadatakey.md).

To load values of a metadata item when you access them for the first time, use the methods from the [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md) protocol. The [AVAsset](avasset.md) class and other classes in turn provide their metadata as needed so that you can obtain objects from those arrays without incurring overhead for items you don’t inspect.

To filter arrays of metadata items, you use the methods of this class. For example, you can filter by key and key space, by locale, and by preferred language.

## Topics

### Creating a metadata item

- [AVMetadataItemValueRequest](avmetadataitemvaluerequest.md): An object that responds to a request to load the value of a metadata item.

### Identifying metadata items

- [identifier](avmetadataitem/identifier.md): An identifier for a metadata item.

### Loading values

- [dataType](avmetadataitem/datatype.md): The data type of the metadata item’s value.

### Accessing keys and key spaces

- [key](avmetadataitem/key.md): The key of the metadata item.
- [commonKey](avmetadataitem/commonkey.md): The common key of the metadata item.
- [keySpace](avmetadataitem/keyspace.md): The key space for the metadata item’s key.

### Accessing timing

- [time](avmetadataitem/time.md): The timestamp of the metadata item.
- [startDate](avmetadataitem/startdate.md): The start date of the timed metadata.
- [duration](avmetadataitem/duration.md): The duration of the metadata item.

### Accessing language support

- [locale](avmetadataitem/locale.md): The locale of the metadata item.
- [extendedLanguageTag](avmetadataitem/extendedlanguagetag.md): The IETF BCP 47 (RFC 4646) language identifier of the metadata item.

### Filtering arrays of metadata items

- [metadataItemsFromArray:filteredByIdentifier:](avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md): Returns metadata items for the specified identifier.
- [metadataItemsFromArray:withKey:keySpace:](avmetadataitem/metadataitems%28from_withkey_keyspace_%29.md): Returns metadata items that match a specified key or key space.
- [metadataItemsFromArray:withLocale:](avmetadataitem/metadataitems%28from_with_%29.md): Returns metadata items that match a specified locale.
- [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns metadata items whose locales match one of the specified language identifiers.
- [metadataItemsFromArray:filteredByMetadataItemFilter:](avmetadataitem/metadataitems%28from_filteredby_%29.md): Returns filtered metadata items.

### Translating metadata items

- [identifierForKey:keySpace:](avmetadataitem/identifier%28forkey_keyspace_%29.md): Returns a metadata identifier for the specified key and key space.
- [keyForIdentifier:](avmetadataitem/key%28foridentifier_%29.md): Returns a metadata key for the specified identifier.
- [keySpaceForIdentifier:](avmetadataitem/keyspace%28foridentifier_%29.md): Returns a metadata key space for the specified identifier.

### Accessing values

Prefer loading values asynchronously using the symbols in Loading Values.

- [value](avmetadataitem/value.md): Deprecated. The value of the metadata item.
- [extraAttributes](avmetadataitem/extraattributes.md): Deprecated. A dictionary of additional attributes for a metadata item.
- [stringValue](avmetadataitem/stringvalue.md): Deprecated. The value of the metadata item as a string.
- [numberValue](avmetadataitem/numbervalue.md): Deprecated. The value of the metadata item as a number.
- [dateValue](avmetadataitem/datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](avmetadataitem/datavalue.md): Deprecated. The value of the metadata item as a data value.
- [loadValuesAsynchronouslyForKeys:completionHandler:](avmetadataitem/loadvaluesasynchronouslyforkeys_completionhandler_.md): Tells the object to load the values of any of the specified keys that aren’t already loaded.
- [statusOfValueForKey:error:](avmetadataitem/statusofvalueforkey_error_.md): Reports whether the value for a given key is immediately available without blocking.

### Type Methods

- [metadataItemWithPropertiesOfMetadataItem:valueLoadingHandler:](avmetadataitem/init%28propertiesof_valueloadinghandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableMetadataItem](avmutablemetadataitem.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.
