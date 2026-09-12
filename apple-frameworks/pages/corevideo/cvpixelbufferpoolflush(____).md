> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolflush(_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolflush(_:_:))

# CVPixelBufferPoolFlush(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Frees pixel buffers from the pool based on the options that you specify.

## Declaration

```swift
func CVPixelBufferPoolFlush(_ pool: CVPixelBufferPool, _ options: CVPixelBufferPoolFlushFlags)
```

## Parameters

- `pool`: The pixel buffer pool to free.
- `options`: Set to [excessBuffers](cvpixelbufferpoolflushflags/excessbuffers.md) to free all unused buffers regardless of their age. Pass an empty set to free only all aged-out buffers, or set it to [excessBuffers](cvpixelbufferpoolflushflags/excessbuffers.md) to free all unused buffers regardless of age.

# CVPixelBufferPoolFlush (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Frees pixel buffers from the pool based on the options that you specify.

## Declaration

```objectivec
extern void CVPixelBufferPoolFlush(CVPixelBufferPoolRef pool, CVPixelBufferPoolFlushFlags options);
```

## Parameters

- `pool`: The pixel buffer pool to free.
- `options`: Set to [kCVPixelBufferPoolFlushExcessBuffers](cvpixelbufferpoolflushflags/excessbuffers.md) to free all unused buffers regardless of their age. Pass an empty set to free only all aged-out buffers, or set it to [kCVPixelBufferPoolFlushExcessBuffers](cvpixelbufferpoolflushflags/excessbuffers.md) to free all unused buffers regardless of age.
