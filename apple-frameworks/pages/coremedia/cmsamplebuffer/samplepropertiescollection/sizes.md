> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/samplepropertiescollection/sizes](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/samplepropertiescollection/sizes)

# sizes

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access sample sizes.

## Declaration

```swift
var sizes: CMSampleBuffer.SizePerSample? { get set }
```

<a id="discussion"></a>

## Discussion

When setting distinct sizes, the number of entries must match [count](count.md).
