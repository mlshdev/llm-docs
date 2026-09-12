> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/commonmetadata](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/commonmetadata)

# commonMetadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items for each common metadata key for which a value is available.

## Declaration

```swift
var commonMetadata: [AVMetadataItem] { get }
```

<a id="Discussion"></a>

## Discussion

You can filter the array of [AVMetadataItem](../avmetadataitem.md) objects according to locale using [metadataItems(from:with:)](../avmetadataitem/metadataitems%28from_with_%29.md), key using [metadataItems(from:withKey:keySpace:)](../avmetadataitem/metadataitems%28from_withkey_keyspace_%29.md), or language using [metadataItems(from:filteredAndSortedAccordingToPreferredLanguages:)](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md).

Clients that are filtering media selection options by language should be prepared to handle cases in which the [extendedLanguageTag](extendedlanguagetag.md) property value is `nil`. Further, they should be prepared to handle cases in which an `extendedLanguageTag` is present but indicates that the language is “undetermined” (a language value of @“und”, as defined in ISO 639-2).

## See Also

### Managing metadata

- [availableMetadataFormats](availablemetadataformats.md): The metadata formats that contain metadata associated with the option.
- [metadata(forFormat:)](metadata%28forformat_%29.md): Returns an array of metadata items—one for each metadata item in the container of a given format.

# commonMetadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of metadata items for each common metadata key for which a value is available.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMetadataItem *> * commonMetadata;
```

<a id="Discussion"></a>

## Discussion

You can filter the array of [AVMetadataItem](../avmetadataitem.md) objects according to locale using [metadataItemsFromArray:withLocale:](../avmetadataitem/metadataitems%28from_with_%29.md), key using [metadataItemsFromArray:withKey:keySpace:](../avmetadataitem/metadataitems%28from_withkey_keyspace_%29.md), or language using [metadataItemsFromArray:filteredAndSortedAccordingToPreferredLanguages:](../avmetadataitem/metadataitems%28from_filteredandsortedaccordingtopreferredlanguages_%29.md).

Clients that are filtering media selection options by language should be prepared to handle cases in which the [extendedLanguageTag](extendedlanguagetag.md) property value is `nil`. Further, they should be prepared to handle cases in which an `extendedLanguageTag` is present but indicates that the language is “undetermined” (a language value of @“und”, as defined in ISO 639-2).

## See Also

### Managing metadata

- [availableMetadataFormats](availablemetadataformats.md): The metadata formats that contain metadata associated with the option.
- [metadataForFormat:](metadata%28forformat_%29.md): Returns an array of metadata items—one for each metadata item in the container of a given format.
