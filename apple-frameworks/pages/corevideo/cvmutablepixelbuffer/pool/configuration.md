> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/pool/configuration](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/pool/configuration)

# CVMutablePixelBuffer.Pool.Configuration

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configuration passed to pixel buffer pool on creation.

## Declaration

```swift
struct Configuration
```

## Topics

### Initializers

- [init(ageOutDuration:minimumBufferCount:)](configuration/init%28ageoutduration_minimumbuffercount_%29.md): Create new configuration instance

### Instance Properties

- [ageOutDuration](configuration/ageoutduration.md): Backing memory of released buffers is kept around for this duration before being freed (default is 1 second). If set to 0, the backing memory of released buffers is freed immediately.
- [minimumBufferCount](configuration/minimumbuffercount.md): The pool keeps at least this many buffers alive. These buffers do not participate in the age-out mechanism.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
