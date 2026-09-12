> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmatch/querysignature](https://developer.apple.com/documentation/shazamkit/shmatch/querysignature)

# querySignature (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The query signature for the match.

## Declaration

```swift
var querySignature: SHSignature { get }
```

## See Also

### Reading match information

- [mediaItems](mediaitems.md): An array of the media items in the catalog that match the query signature, in order of the quality of the match.

# querySignature (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The query signature for the match.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) SHSignature * querySignature;
```

```objectivec
@property (atomic, strong, readonly) SHSignature * querySignature;
```

## See Also

### Reading match information

- [mediaItems](mediaitems.md): An array of the media items in the catalog that match the query signature, in order of the quality of the match.
