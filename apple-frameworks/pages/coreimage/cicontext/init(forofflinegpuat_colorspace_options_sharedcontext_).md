> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cicontext/init(forofflinegpuat:colorspace:options:sharedcontext:)

# init(forOfflineGPUAt:colorSpace:options:sharedContext:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** macOS 10.10+ (deprecated in 10.14)

> Core Image OpenGL API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
init?(forOfflineGPUAt index: UInt32, colorSpace: CGColorSpace?, options: [CIContextOption : Any]? = nil, sharedContext: CGLContextObj?)
```

# contextForOfflineGPUAtIndex:colorSpace:options:sharedContext: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.10+ (deprecated in 10.14)

> Core Image OpenGL API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (CIContext *) contextForOfflineGPUAtIndex:(unsigned int) index colorSpace:(CGColorSpaceRef) colorSpace options:(NSDictionary<NSString *,id> *) options sharedContext:(CGLContextObj) sharedContext;
```
