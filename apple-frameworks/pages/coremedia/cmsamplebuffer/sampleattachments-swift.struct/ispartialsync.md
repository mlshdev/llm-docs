> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/ispartialsync](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/ispartialsync)

# isPartialSync

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the sample is a partial sync sample.

## Declaration

```swift
var isPartialSync: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A partial sync sample can be decoded without requiring any previous samples to have been decoded. Samples following two consecutive partial sync samples also do not require samples prior to the pair to have been decoded. To treat a sample as a partial sync sample, set to true for both this key and the `notSync` key.

This attachment is read from and written to media files.
