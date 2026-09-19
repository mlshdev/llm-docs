> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerbase/depthtexture

# depthTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS · visionOS 1.0+

An input depth texture you set for the scaler that supports the correct color texture usage options.

## Declaration

```swift
var depthTexture: (any MTLTexture)? { get set }
```

# depthTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

An input depth texture you set for the scaler that supports the correct color texture usage options.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> depthTexture;
```
