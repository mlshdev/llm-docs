> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexturecache-cache-attributes](https://developer.apple.com/documentation/corevideo/cvopengltexturecache-cache-attributes)

# Cache Attributes (Swift)

**Framework:** Core Video  
**Kind:** API Collection

Dictionary keys and values for use with the cacheAttributes parameter of [CVOpenGLTextureCacheCreate(\_:\_:\_:\_:\_:\_:)](cvopengltexturecachecreate%28____________%29.md)

<a id="Overview"></a>

## Overview

In some cases, a texture cache can do higher quality chroma upsampling on GPUs that support `ARB_fragment_program`. By default, it will be enabled automatically if the texture cache determines that the GPU has the needed support and the image size is something reasonable for the GPU being used. The default behavior can be overridden using the values defined below.

> **Note**

> Setting the chroma sampling mode to `kCVOpenGLTextureCacheChromaSamplingModeHighQuality` is only a request. GPUs that don’t support `ARB_fragment_program` will still resort back to the native hardware support for YCbCr textures.

## Topics

### Key

- [kCVOpenGLTextureCacheChromaSamplingModeKey](kcvopengltexturecachechromasamplingmodekey.md): Deprecated. The key used to define the cache’s requested chroma sampling mode.

### Values

- [kCVOpenGLTextureCacheChromaSamplingModeAutomatic](kcvopengltexturecachechromasamplingmodeautomatic.md): Deprecated. The default mode if not otherwise specified.
- [kCVOpenGLTextureCacheChromaSamplingModeHighestQuality](kcvopengltexturecachechromasamplingmodehighestquality.md): Deprecated. Forces the highest quality regardless of performance impact.
- [kCVOpenGLTextureCacheChromaSamplingModeBestPerformance](kcvopengltexturecachechromasamplingmodebestperformance.md): Deprecated. Set the chroma sample mode to use the most performant way possible.

# Cache Attributes (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

Dictionary keys and values for use with the cacheAttributes parameter of [CVOpenGLTextureCacheCreate](cvopengltexturecachecreate%28____________%29.md)

<a id="Overview"></a>

## Overview

In some cases, a texture cache can do higher quality chroma upsampling on GPUs that support `ARB_fragment_program`. By default, it will be enabled automatically if the texture cache determines that the GPU has the needed support and the image size is something reasonable for the GPU being used. The default behavior can be overridden using the values defined below.

> **Note**

> Setting the chroma sampling mode to `kCVOpenGLTextureCacheChromaSamplingModeHighQuality` is only a request. GPUs that don’t support `ARB_fragment_program` will still resort back to the native hardware support for YCbCr textures.

## Topics

### Key

- [kCVOpenGLTextureCacheChromaSamplingModeKey](kcvopengltexturecachechromasamplingmodekey.md): Deprecated. The key used to define the cache’s requested chroma sampling mode.

### Values

- [kCVOpenGLTextureCacheChromaSamplingModeAutomatic](kcvopengltexturecachechromasamplingmodeautomatic.md): Deprecated. The default mode if not otherwise specified.
- [kCVOpenGLTextureCacheChromaSamplingModeHighestQuality](kcvopengltexturecachechromasamplingmodehighestquality.md): Deprecated. Forces the highest quality regardless of performance impact.
- [kCVOpenGLTextureCacheChromaSamplingModeBestPerformance](kcvopengltexturecachechromasamplingmodebestperformance.md): Deprecated. Set the chroma sample mode to use the most performant way possible.
