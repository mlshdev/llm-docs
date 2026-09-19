> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/shmediaitem/frequencyskewranges-1j7d3

# frequencySkewRanges

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An array of ranges that indicate the frequency skews in the reference signature that this media item describes.

## Declaration

```swift
var frequencySkewRanges: [Range<Float>] { get }
```

## See Also

### Working with media item properties

- [subscript(\_:)](subscript%28__%29.md): Accesses the property for the specified key for reading.
- [SHMediaItemProperty](../shmediaitemproperty.md): Constants for the media item property names.
- [timeRanges](timeranges-8msna.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
