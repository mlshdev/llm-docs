> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arenvironmentprobeanchor/init(transform:extent:)](https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor/init(transform:extent:))

# init(transform:extent:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Creates a new environment probe anchor.

## Declaration

```swift
init(transform: simd_float4x4, extent: simd_float3)
```

## Parameters

- `transform`: A matrix that encodes the position, orientation, and scale of the anchor, relative to the world coordinate space of the AR session in which you place the anchor.
- `extent`: The extent (of *bounds*) of the probe anchor.

  World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).

<a id="Discussion"></a>

## Discussion

Use the [add(anchor:)](../arsession/add%28anchor_%29.md) method to begin tracking your custom anchor in an AR session. After you add an environment probe anchor to the scene, ARKit begins generating environment textures for it. To be notified when the anchor has a new [environmentTexture](environmenttexture.md), implement the [session(\_:didUpdate:)](../arsessiondelegate/session%28__didupdate_%29-3qtt8.md), [renderer(\_:didUpdate:for:)](../arscnviewdelegate/renderer%28__didupdate_for_%29.md), or [view(\_:didUpdate:for:)](../arskviewdelegate/view%28__didupdate_for_%29.md) delegate method.

## See Also

### Creating Probe Anchors

- [init(name:transform:extent:)](init%28name_transform_extent_%29.md): Creates a new anchor object with a descriptive name.

# initWithTransform:extent: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Creates a new environment probe anchor.

## Declaration

```objectivec
- (instancetype) initWithTransform:(simd_float4x4) transform extent:(simd_float3) extent;
```

## Parameters

- `transform`: A matrix that encodes the position, orientation, and scale of the anchor, relative to the world coordinate space of the AR session in which you place the anchor.
- `extent`: The extent (of *bounds*) of the probe anchor.

  World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).

<a id="Discussion"></a>

## Discussion

Use the [addAnchor:](../arsession/add%28anchor_%29.md) method to begin tracking your custom anchor in an AR session. After you add an environment probe anchor to the scene, ARKit begins generating environment textures for it. To be notified when the anchor has a new [environmentTexture](environmenttexture.md), implement the [session:didUpdateAnchors:](../arsessiondelegate/session%28__didupdate_%29-3qtt8.md), [renderer:didUpdateNode:forAnchor:](../arscnviewdelegate/renderer%28__didupdate_for_%29.md), or [view:didUpdateNode:forAnchor:](../arskviewdelegate/view%28__didupdate_for_%29.md) delegate method.

## See Also

### Creating Probe Anchors

- [initWithName:transform:extent:](init%28name_transform_extent_%29.md): Creates a new anchor object with a descriptive name.
