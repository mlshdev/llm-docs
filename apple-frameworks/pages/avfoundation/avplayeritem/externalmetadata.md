> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/externalmetadata](https://developer.apple.com/documentation/avfoundation/avplayeritem/externalmetadata)

# externalMetadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of additional metadata for the player item to supplement or replace an asset’s embedded metadata.

## Declaration

```swift
var externalMetadata: [AVMetadataItem] { get set }
```

<a id="Discussion"></a>

## Discussion

[AVPlayerViewController](../../avkit/avplayerviewcontroller.md) supports displaying the following metadata identifiers:

- [commonKeyTitle](../avmetadatakey/commonkeytitle.md)
- [iTunesMetadataTrackSubTitle](../avmetadataidentifier/itunesmetadatatracksubtitle.md)
- [commonIdentifierArtwork](../avmetadataidentifier/commonidentifierartwork.md)
- [commonKeyDescription](../avmetadatakey/commonkeydescription.md)
- [iTunesMetadataKeyContentRating](../avmetadatakey/itunesmetadatakeycontentrating.md)
- [quickTimeMetadataKeyGenre](../avmetadatakey/quicktimemetadatakeygenre.md)

# externalMetadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of additional metadata for the player item to supplement or replace an asset’s embedded metadata.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVMetadataItem *> * externalMetadata;
```

<a id="Discussion"></a>

## Discussion

[AVPlayerViewController](../../avkit/avplayerviewcontroller.md) supports displaying the following metadata identifiers:

- [AVMetadataCommonKeyTitle](../avmetadatakey/commonkeytitle.md)
- [AVMetadataIdentifieriTunesMetadataTrackSubTitle](../avmetadataidentifier/itunesmetadatatracksubtitle.md)
- [AVMetadataCommonIdentifierArtwork](../avmetadataidentifier/commonidentifierartwork.md)
- [AVMetadataCommonKeyDescription](../avmetadatakey/commonkeydescription.md)
- [AVMetadataiTunesMetadataKeyContentRating](../avmetadatakey/itunesmetadatakeycontentrating.md)
- [AVMetadataQuickTimeMetadataKeyGenre](../avmetadatakey/quicktimemetadatakeygenre.md)
