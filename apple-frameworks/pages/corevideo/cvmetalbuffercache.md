> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetalbuffercache](https://developer.apple.com/documentation/corevideo/cvmetalbuffercache)

# CVMetalBufferCache (Swift)

**Framework:** Core Video  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

A cache used to create and manage Metal buffer objects.

## Declaration

```swift
class CVMetalBufferCache
```

<a id="overview"></a>

## Overview

A Core Video Metal buffer cache creates and manages [CVMetalBuffer](cvmetalbuffer.md) buffers. You use a Metal buffer cache to directly read from or write to GPU-based Core Video image buffers in rendering, or for sharing data with Metal kernels.

## Topics

### Functions

- [CVMetalBufferCacheCreate(\_:\_:\_:\_:)](cvmetalbuffercachecreate%28________%29.md)
- [CVMetalBufferCacheCreateBufferFromImage(\_:\_:\_:\_:)](cvmetalbuffercachecreatebufferfromimage%28________%29.md)
- [CVMetalBufferCacheFlush(\_:\_:)](cvmetalbuffercacheflush%28____%29.md)
- [CVMetalBufferCacheGetTypeID()](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetBuffer(\_:)](cvmetalbuffergetbuffer%28__%29.md)
- [CVMetalBufferGetTypeID()](cvmetalbuffergettypeid%28%29.md)

### Data Types

- [CVMetalBuffer](cvmetalbuffer.md)

### Constants

- [kCVMetalBufferCacheMaximumBufferAgeKey](kcvmetalbuffercachemaximumbufferagekey.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Metal

- [CVMetalTextureCache](cvmetaltexturecache-q3j.md): A cache used to create and manage Metal texture objects.
- [CVMetalTexture](cvmetaltexture-q3g.md): A texture-based image buffer that supplies source image data for use with the Metal framework.

# CVMetalBufferCacheRef (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

A cache used to create and manage Metal buffer objects.

## Declaration

```objectivec
typedef struct __CVMetalBufferCache * CVMetalBufferCacheRef;
```

<a id="overview"></a>

## Overview

A Core Video Metal buffer cache creates and manages [CVMetalBufferRef](cvmetalbuffer.md) buffers. You use a Metal buffer cache to directly read from or write to GPU-based Core Video image buffers in rendering, or for sharing data with Metal kernels.

## Topics

### Functions

- [CVMetalBufferCacheCreate](cvmetalbuffercachecreate%28________%29.md)
- [CVMetalBufferCacheCreateBufferFromImage](cvmetalbuffercachecreatebufferfromimage%28________%29.md)
- [CVMetalBufferCacheFlush](cvmetalbuffercacheflush%28____%29.md)
- [CVMetalBufferCacheGetTypeID](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetBuffer](cvmetalbuffergetbuffer%28__%29.md)
- [CVMetalBufferGetTypeID](cvmetalbuffergettypeid%28%29.md)

### Data Types

- [CVMetalBufferRef](cvmetalbuffer.md)

### Constants

- [kCVMetalBufferCacheMaximumBufferAgeKey](kcvmetalbuffercachemaximumbufferagekey.md)

## See Also

### Metal

- [CVMetalTextureCache](cvmetaltexturecache-q3j.md): A cache used to create and manage Metal texture objects.
- [CVMetalTexture](cvmetaltexture-q3g.md): A texture-based image buffer that supplies source image data for use with the Metal framework.
