> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/samplepropertiescollection](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/samplepropertiescollection)

# CMSampleBuffer.SamplePropertiesCollection

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Fixed size collection of sample information.

## Declaration

```swift
struct SamplePropertiesCollection
```

<a id="overview"></a>

## Overview

This collection contains one element for each sample in the sample buffer. The size of collection is fixed to the number of samples in a sample buffer. Convenience static methods are available on timings & sizes to create this collection by specifying just one value.

## Topics

### Initializers

- [init()](samplepropertiescollection/init%28%29.md): Creates an empty collection.
- [init(\_:)](samplepropertiescollection/init%28__%29.md)
- [init(sampleCount:sizes:timings:attachments:)](samplepropertiescollection/init%28samplecount_sizes_timings_attachments_%29.md): Create a collection with specified sample information.

### Instance Properties

- [attachments](samplepropertiescollection/attachments.md): Access sample attachments.
- [count](samplepropertiescollection/count.md): The number of elements in the collection.
- [endIndex](samplepropertiescollection/endindex.md): The position one greater than the last valid subscript argument.
- [sizes](samplepropertiescollection/sizes.md): Access sample sizes.
- [startIndex](samplepropertiescollection/startindex.md): The position of the first element.
- [timings](samplepropertiescollection/timings.md): Access sample timings.

### Subscripts

- [subscript(\_:)](samplepropertiescollection/subscript%28__%29.md): Accesses the element at the specified position.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
