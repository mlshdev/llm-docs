> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleproperties/size](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleproperties/size)

# size

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Size in bytes of the sample.

## Declaration

```swift
var size: Int?
```

<a id="discussion"></a>

## Discussion

The size of the sample is only applicable for buffers carrying data blocks. For pixel buffers and tagged buffers, the size should be set to `nil`.
