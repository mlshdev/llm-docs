> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffer](https://developer.apple.com/documentation/coremedia/cmbuffer)

# CMBuffer (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to a buffer object.

## Declaration

```swift
typealias CMBuffer = CFTypeRef
```

<a id="Discussion"></a>

## Discussion

A `CMBuffer` can be an instance of any Core Foundation type, as long as a `getDuration` callback can be provided. Commonly used types are `CMSampleBuffer` and `CVPixelBuffer`.

## See Also

### Data Types

- [CMSampleBuffer](cmsamplebuffer.md): A reference to a buffer of media data.
- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMSampleTimingInfo](cmsampletiminginfo.md): A collection of timing information for a sample in a sample buffer.
- [CMBufferGetSizeCallback](cmbuffergetsizecallback.md): A client callback that returns a size.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.

# CMBufferRef (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to a buffer object.

## Declaration

```objectivec
typedef CFTypeRef CMBufferRef;
```

<a id="Discussion"></a>

## Discussion

A `CMBuffer` can be an instance of any Core Foundation type, as long as a `getDuration` callback can be provided. Commonly used types are `CMSampleBuffer` and `CVPixelBuffer`.

## See Also

### Data Types

- [CMSampleBufferRef](cmsamplebuffer.md): A reference to a buffer of media data.
- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMSampleTimingInfo](cmsampletiminginfo.md): A collection of timing information for a sample in a sample buffer.
- [CMBufferGetSizeCallback](cmbuffergetsizecallback.md): A client callback that returns a size.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.
