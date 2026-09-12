> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/content-6ihvr](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/content-6ihvr)

# content

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Payload containing the samples.

## Declaration

```swift
var content: CMReadOnlyDataBlockBuffer { get set }
```

<a id="discussion"></a>

## Discussion

The content type of the sample buffer can not be changed by assigning different content.
