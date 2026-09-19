> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/directionallightcomponent/isrealworldproxy

# isRealWorldProxy

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

A Boolean that you use to control whether the directional light operates as a proxy for a real-world light.

## Declaration

```swift
var isRealWorldProxy: Bool
```

<a id="discussion"></a>

## Discussion

Set the value to `true` when you want the light to cast shadows on virtual content without illuminating anything in the scene. You can use this to create shadows on occlusion materials that accept dynamic lighting.

## See Also

### Setting intensity and shadows

- [intensity](intensity.md): The intensity of the directional light, measured in lumen per square meter.
