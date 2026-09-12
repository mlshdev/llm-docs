> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arenvironmentprobeanchor/extent](https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor/extent)

# extent (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The area around the anchor’s position that contains the texture.

## Declaration

```swift
var extent: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

Rendering reflective objects may involve projecting the [environmentTexture](environmenttexture.md) onto a proxy geometry centered on the anchor’s position, then sampling from the projected texture.

An environment probe anchor may have an infinite extent, which indicates that its texture is a global lighting environment, or a finite extent, which indicates that its texture represents the local lighting conditions in a specific area of the scene.

# extent (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The area around the anchor’s position that contains the texture.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 extent;
```

<a id="Discussion"></a>

## Discussion

Rendering reflective objects may involve projecting the [environmentTexture](environmenttexture.md) onto a proxy geometry centered on the anchor’s position, then sampling from the projected texture.

An environment probe anchor may have an infinite extent, which indicates that its texture is a global lighting environment, or a finite extent, which indicates that its texture represents the local lighting conditions in a specific area of the scene.
