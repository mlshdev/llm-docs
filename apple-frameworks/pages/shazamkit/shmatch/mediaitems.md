> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmatch/mediaitems](https://developer.apple.com/documentation/shazamkit/shmatch/mediaitems)

# mediaItems (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of the media items in the catalog that match the query signature, in order of the quality of the match.

## Declaration

```swift
var mediaItems: [SHMatchedMediaItem] { get }
```

## See Also

### Reading match information

- [querySignature](querysignature.md): The query signature for the match.

# mediaItems (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of the media items in the catalog that match the query signature, in order of the quality of the match.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<SHMatchedMediaItem *> * mediaItems;
```

```objectivec
@property (atomic, strong, readonly) NSArray<SHMatchedMediaItem *> * mediaItems;
```

## See Also

### Reading match information

- [querySignature](querysignature.md): The query signature for the match.
