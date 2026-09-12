> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/earlierdisplaytimesallowed](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/earlierdisplaytimesallowed)

# earlierDisplayTimesAllowed

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether later samples may have earlier display times.

## Declaration

```swift
var earlierDisplayTimesAllowed: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

This key has no default value. If this key is not present, this information for the sample is unknown.
