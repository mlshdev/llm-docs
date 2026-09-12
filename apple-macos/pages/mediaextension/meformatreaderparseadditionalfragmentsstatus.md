> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreaderparseadditionalfragmentsstatus](https://developer.apple.com/documentation/mediaextension/meformatreaderparseadditionalfragmentsstatus)

# MEFormatReaderParseAdditionalFragmentsStatus (Swift)

**Framework:** MediaExtension  
**Kind:** Structure  
**Availability:** macOS 14.0+

Informational status flags that the format reader returns after parsing additional fragments.

## Declaration

```swift
struct MEFormatReaderParseAdditionalFragmentsStatus
```

## Topics

### Creating informational status flags

- [init(rawValue:)](meformatreaderparseadditionalfragmentsstatus/init%28rawvalue_%29.md): Create a new information status flag for parsing additional fragments.

### Evaluating a fragment parsing operation

- [sizeIncreased](meformatreaderparseadditionalfragmentsstatus/sizeincreased.md): Indicates that the format reader file size increased.
- [fragmentAdded](meformatreaderparseadditionalfragmentsstatus/fragmentadded.md): Indicates that the format reader received one or more fragments.
- [fragmentsComplete](meformatreaderparseadditionalfragmentsstatus/fragmentscomplete.md): Indicates that the format reader can’t receive any more fragments.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Reading and parsing media assets

- [loadFileInfo(completionHandler:)](meformatreader/loadfileinfo%28completionhandler_%29.md): Loads the file info object with the properties of the media asset.
- [loadMetadata(completionHandler:)](meformatreader/loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset.
- [loadTrackReaders(completionHandler:)](meformatreader/loadtrackreaders%28completionhandler_%29.md): Loads the array of track readers that represent the tracks in the media asset.
- [parseAdditionalFragments(completionHandler:)](meformatreader/parseadditionalfragments%28completionhandler_%29.md): Incorporates additional fragments that the file received after the last time the format reader parsed it.

# MEFormatReaderParseAdditionalFragmentsStatus (Objective-C)

**Framework:** MediaExtension  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Informational status flags that the format reader returns after parsing additional fragments.

## Declaration

```objectivec
enum MEFormatReaderParseAdditionalFragmentsStatus : NSUInteger;
```

## Topics

### Evaluating a fragment parsing operation

- [MEFormatReaderParseAdditionalFragmentsStatusSizeIncreased](meformatreaderparseadditionalfragmentsstatus/sizeincreased.md): Indicates that the format reader file size increased.
- [MEFormatReaderParseAdditionalFragmentsStatusFragmentAdded](meformatreaderparseadditionalfragmentsstatus/fragmentadded.md): Indicates that the format reader received one or more fragments.
- [MEFormatReaderParseAdditionalFragmentsStatusFragmentsComplete](meformatreaderparseadditionalfragmentsstatus/fragmentscomplete.md): Indicates that the format reader can’t receive any more fragments.

## See Also

### Reading and parsing media assets

- [loadFileInfoWithCompletionHandler:](meformatreader/loadfileinfo%28completionhandler_%29.md): Loads the file info object with the properties of the media asset.
- [loadMetadataWithCompletionHandler:](meformatreader/loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset.
- [loadTrackReadersWithCompletionHandler:](meformatreader/loadtrackreaders%28completionhandler_%29.md): Loads the array of track readers that represent the tracks in the media asset.
- [parseAdditionalFragmentsWithCompletionHandler:](meformatreader/parseadditionalfragments%28completionhandler_%29.md): Incorporates additional fragments that the file received after the last time the format reader parsed it.
