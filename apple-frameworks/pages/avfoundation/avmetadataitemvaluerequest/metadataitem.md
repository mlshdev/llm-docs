> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitemvaluerequest/metadataitem](https://developer.apple.com/documentation/avfoundation/avmetadataitemvaluerequest/metadataitem)

# metadataItem (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata item to request a value for.

## Declaration

```swift
weak var metadataItem: AVMetadataItem? { get }
```

## See Also

### Handling the response

- [respond(value:)](respond%28value_%29.md): Returns the metadata item’s value.
- [respond(error:)](respond%28error_%29.md): Returns an error when the system fails to load the value.

# metadataItem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata item to request a value for.

## Declaration

```objectivec
@property (weak, readonly) AVMetadataItem * metadataItem;
```

## See Also

### Handling the response

- [respondWithValue:](respond%28value_%29.md): Returns the metadata item’s value.
- [respondWithError:](respond%28error_%29.md): Returns an error when the system fails to load the value.
