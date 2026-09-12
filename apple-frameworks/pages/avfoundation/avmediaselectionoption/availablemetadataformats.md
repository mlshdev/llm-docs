> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/availablemetadataformats](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/availablemetadataformats)

# availableMetadataFormats (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The metadata formats that contain metadata associated with the option.

## Declaration

```swift
var availableMetadataFormats: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains `NSString` objects, each representing a metadata format that contains metadata associated with the option (for example, ID3, iTunes metadata, and so on).

## See Also

### Managing metadata

- [commonMetadata](commonmetadata.md): An array of metadata items for each common metadata key for which a value is available.
- [metadata(forFormat:)](metadata%28forformat_%29.md): Returns an array of metadata items—one for each metadata item in the container of a given format.

# availableMetadataFormats (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The metadata formats that contain metadata associated with the option.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableMetadataFormats;
```

<a id="Discussion"></a>

## Discussion

The array contains `NSString` objects, each representing a metadata format that contains metadata associated with the option (for example, ID3, iTunes metadata, and so on).

## See Also

### Managing metadata

- [commonMetadata](commonmetadata.md): An array of metadata items for each common metadata key for which a value is available.
- [metadataForFormat:](metadata%28forformat_%29.md): Returns an array of metadata items—one for each metadata item in the container of a given format.
