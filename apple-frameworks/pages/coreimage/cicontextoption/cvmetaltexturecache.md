> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption/cvmetaltexturecache](https://developer.apple.com/documentation/coreimage/cicontextoption/cvmetaltexturecache)

# cvMetalTextureCache (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Core Video Metal texture cache object to improve the performance of Core Image context renders that use Core Video pixel buffers.

## Declaration

```swift
static let cvMetalTextureCache: CIContextOption
```

<a id="discussion"></a>

## Discussion

Creating a Core Image context with this optional `CVMetalTextureCache` can improve the performance of creating a Metal texture from a `CVPixelBuffer`. It is recommended to specify this option if the context renders to or from pixel buffers that come from a `CVPixelBufferPool`.

It is the client’s responsibility to flush the cache when appropriate.

# kCIContextCVMetalTextureCache (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Core Video Metal texture cache object to improve the performance of Core Image context renders that use Core Video pixel buffers.

## Declaration

```objectivec
extern CIContextOption const kCIContextCVMetalTextureCache;
```

<a id="discussion"></a>

## Discussion

Creating a Core Image context with this optional `CVMetalTextureCache` can improve the performance of creating a Metal texture from a `CVPixelBuffer`. It is recommended to specify this option if the context renders to or from pixel buffers that come from a `CVPixelBufferPool`.

It is the client’s responsibility to flush the cache when appropriate.
