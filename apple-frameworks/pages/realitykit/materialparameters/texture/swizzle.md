> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/materialparameters/texture/swizzle

# swizzle

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Channel swizzle to use when RealityKit reads or samples from the texture.

## Declaration

```swift
var swizzle: MTLTextureSwizzleChannels
```

<a id="discussion"></a>

## Discussion

The default value performs no swizzle, sampling red from the texture’s red channel, green from the texture’s green channel, blue from the texture’s blue channel, and alpha from the texture’s alpha channel.
