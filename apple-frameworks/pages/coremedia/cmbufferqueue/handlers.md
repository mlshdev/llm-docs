> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmbufferqueue/handlers

# CMBufferQueue.Handlers

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
struct Handlers
```

## Topics

### Initializers

- [init(withHandlers:)](handlers/init%28withhandlers_%29.md)

### Instance Properties

- [compare](handlers/compare.md)
- [dataBecameReadyNotification](handlers/databecamereadynotification.md)
- [getDecodeTimeStamp](handlers/getdecodetimestamp.md)
- [getDuration](handlers/getduration.md)
- [getPresentationTimeStamp](handlers/getpresentationtimestamp.md)
- [getSize](handlers/getsize.md)
- [isDataReady](handlers/isdataready.md)

### Type Properties

- [outputPTSSortedSampleBuffers](handlers/outputptssortedsamplebuffers.md)
- [unsortedSampleBuffers](handlers/unsortedsamplebuffers.md)

### Instance Methods

- [withHandlers(\_:)](handlers/withhandlers%28__%29.md)

### Structures

- [CMBufferQueue.Handlers.Builder](handlers/builder.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CMBufferQueue.Buffers](buffers-swift.struct.md): A sequence of `CMBuffer`s.
- [CMBufferQueue.Error](error.md)
