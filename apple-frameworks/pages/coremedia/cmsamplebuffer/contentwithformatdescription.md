> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/contentwithformatdescription](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/contentwithformatdescription)

# CMSampleBuffer.ContentWithFormatDescription

**Framework:** Core Media  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

This is a marker protocol to indicate content that always has a format description.

## Declaration

```swift
protocol ContentWithFormatDescription : CMSampleBuffer.Content
```

## Relationships

### Inherits From

- [CMSampleBuffer.Content](content.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [CMReadOnlyDataBlockBuffer](../cmreadonlydatablockbuffer.md)
- [CMSampleDataReference](../cmsampledatareference.md)
