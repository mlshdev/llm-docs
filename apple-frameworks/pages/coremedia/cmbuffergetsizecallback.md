> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffergetsizecallback](https://developer.apple.com/documentation/coremedia/cmbuffergetsizecallback)

# CMBufferGetSizeCallback (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A client callback that returns a size.

## Declaration

```swift
typealias CMBufferGetSizeCallback = (CMBuffer, UnsafeMutableRawPointer?) -> Int
```

## Parameters

- `buf`: The buffer being interrogated.
- `refcon`: The client refcon. Can be `NULL`.

## See Also

### Data Types

- [CMSampleBuffer](cmsamplebuffer.md): A reference to a buffer of media data.
- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMSampleTimingInfo](cmsampletiminginfo.md): A collection of timing information for a sample in a sample buffer.
- [CMBuffer](cmbuffer.md): A reference to a buffer object.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.

# CMBufferGetSizeCallback (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A client callback that returns a size.

## Declaration

```objectivec
typedef unsigned long (*)(const void *, void *) CMBufferGetSizeCallback;
```

## Parameters

- `buf`: The buffer being interrogated.
- `refcon`: The client refcon. Can be `NULL`.

## See Also

### Data Types

- [CMSampleBufferRef](cmsamplebuffer.md): A reference to a buffer of media data.
- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMSampleTimingInfo](cmsampletiminginfo.md): A collection of timing information for a sample in a sample buffer.
- [CMBufferRef](cmbuffer.md): A reference to a buffer object.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.
