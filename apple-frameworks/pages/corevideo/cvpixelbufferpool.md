> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpool](https://developer.apple.com/documentation/corevideo/cvpixelbufferpool)

# CVPixelBufferPool (Swift)

**Framework:** Core Video  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A reference to a pixel buffer pool object.

## Declaration

```swift
class CVPixelBufferPool
```

<a id="overview"></a>

## Overview

CVPixelBufferPool is a utility object for managing a recyclable set of [CVPixelBuffer](cvpixelbuffer.md) objects.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data types

- [CVPixelBufferPoolFlushFlags](cvpixelbufferpoolflushflags.md): The flags to pass to flush the pool.

# CVPixelBufferPoolRef (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A reference to a pixel buffer pool object.

## Declaration

```objectivec
typedef struct __CVPixelBufferPool * CVPixelBufferPoolRef;
```

<a id="overview"></a>

## Overview

CVPixelBufferPool is a utility object for managing a recyclable set of [CVPixelBufferRef](cvpixelbuffer.md) objects.

## See Also

### Data types

- [CVPixelBufferPoolFlushFlags](cvpixelbufferpoolflushflags.md): The flags to pass to flush the pool.
