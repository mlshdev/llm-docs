> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/content](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/content)

# CMSampleBuffer.Content

**Framework:** Core Media  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

All buffer types that can be carried by sample buffer are marked by this protocol.

## Declaration

```swift
protocol Content : Sendable
```

<a id="overview"></a>

## Overview

Note: This protocol is a marker protocol sealed to CoreMedia framework. Any types outside of the CoreMedia framework that implement this protocol will cause precondition failures when passed to sample buffer methods.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [CMSampleBuffer.ContentWithFormatDescription](contentwithformatdescription.md)
- [CMSampleBuffer.MultiSampleContent](multisamplecontent.md)

### Conforming Types

- [CMReadOnlyDataBlockBuffer](../cmreadonlydatablockbuffer.md)
- [CMSampleBuffer.DynamicContent](dynamiccontent.md)
- [CMSampleDataReference](../cmsampledatareference.md)
