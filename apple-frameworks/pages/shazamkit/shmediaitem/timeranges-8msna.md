> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/timeranges-8msna](https://developer.apple.com/documentation/shazamkit/shmediaitem/timeranges-8msna)

# timeRanges

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An array of ranges that indicate the offsets within the reference signature that this media item describes.

## Declaration

```swift
var timeRanges: [Range<TimeInterval>] { get }
```

## See Also

### Working with media item properties

- [subscript(\_:)](subscript%28__%29.md): Accesses the property for the specified key for reading.
- [SHMediaItemProperty](../shmediaitemproperty.md): Constants for the media item property names.
- [frequencySkewRanges](frequencyskewranges-1j7d3.md): An array of ranges that indicate the frequency skews in the reference signature that this media item describes.
