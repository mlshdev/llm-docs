> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsampletiminginfo](https://developer.apple.com/documentation/coremedia/cmsampletiminginfo)

# CMSampleTimingInfo (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of timing information for a sample in a sample buffer.

## Declaration

```swift
struct CMSampleTimingInfo
```

<a id="overview"></a>

## Overview

A single `CMSampleTimingInfo` struct can describe every individual sample in a `CMSampleBuffer`, if the samples all have the same duration and are in presentation order with no gaps.

## Topics

### Constants

- [invalid](cmsampletiminginfo/invalid.md)

### Initializers

- [init()](cmsampletiminginfo/init%28%29.md)
- [init(duration:presentationTimeStamp:decodeTimeStamp:)](cmsampletiminginfo/init%28duration_presentationtimestamp_decodetimestamp_%29.md)

### Properties

- [decodeTimeStamp](cmsampletiminginfo/decodetimestamp.md): The time at which the sample will be decoded.
- [duration](cmsampletiminginfo/duration.md): The duration of the sample.
- [presentationTimeStamp](cmsampletiminginfo/presentationtimestamp.md): The time at which the sample will be presented.

### Operators

- [!=(\_:\_:)](cmsampletiminginfo/!=%28____%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CMSampleBuffer](cmsamplebuffer.md): A reference to a buffer of media data.
- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMBuffer](cmbuffer.md): A reference to a buffer object.
- [CMBufferGetSizeCallback](cmbuffergetsizecallback.md): A client callback that returns a size.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.

# CMSampleTimingInfo (Objective-C)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A collection of timing information for a sample in a sample buffer.

## Declaration

```objectivec
typedef struct { ... } CMSampleTimingInfo;
```

<a id="overview"></a>

## Overview

A single `CMSampleTimingInfo` struct can describe every individual sample in a `CMSampleBuffer`, if the samples all have the same duration and are in presentation order with no gaps.

## Topics

### Constants

- [kCMTimingInfoInvalid](cmsampletiminginfo/invalid.md)

### Properties

- [decodeTimeStamp](cmsampletiminginfo/decodetimestamp.md): The time at which the sample will be decoded.
- [duration](cmsampletiminginfo/duration.md): The duration of the sample.
- [presentationTimeStamp](cmsampletiminginfo/presentationtimestamp.md): The time at which the sample will be presented.

## See Also

### Data Types

- [CMSampleBufferRef](cmsamplebuffer.md): A reference to a buffer of media data.
- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMBufferRef](cmbuffer.md): A reference to a buffer object.
- [CMBufferGetSizeCallback](cmbuffergetsizecallback.md): A client callback that returns a size.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.
