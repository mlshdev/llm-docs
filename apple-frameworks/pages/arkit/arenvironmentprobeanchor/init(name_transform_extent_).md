> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arenvironmentprobeanchor/init(name:transform:extent:)](https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor/init(name:transform:extent:))

# init(name:transform:extent:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Creates a new anchor object with a descriptive name.

## Declaration

```swift
init(name: String, transform: simd_float4x4, extent: simd_float3)
```

## Parameters

- `name`: A descriptive name for the anchor. ARKit doesn’t display the name to users, but your app can use it to identify anchors for debugging.
- `transform`: A matrix that encodes the position, orientation, and scale of the anchor, relative to the world coordinate space of the AR session in which you place the anchor.

  World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).
- `extent`: The area around the anchor’s position that contains the textrure.

  An environment probe anchor may have an infinite extent, which indicates that its texture is a global lighting environment, or a finite extent, which indicates that its texture represents the local lighting conditions in a specific area of the scene.

<a id="Discussion"></a>

## Discussion

Use the [add(anchor:)](../arsession/add%28anchor_%29.md) method to begin tracking your custom anchor in an AR session. After you add an environment probe anchor to the scene, ARKit begins generating environment textures for it. To be notified when the anchor has a new [environmentTexture](environmenttexture.md), implement the [session(\_:didUpdate:)](../arsessiondelegate/session%28__didupdate_%29-3qtt8.md), [renderer(\_:didUpdate:for:)](../arscnviewdelegate/renderer%28__didupdate_for_%29.md), or [view(\_:didUpdate:for:)](../arskviewdelegate/view%28__didupdate_for_%29.md) delegate method.

## See Also

### Creating Probe Anchors

- [init(transform:extent:)](init%28transform_extent_%29.md): Creates a new environment probe anchor.

# initWithName:transform:extent: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Creates a new anchor object with a descriptive name.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name transform:(simd_float4x4) transform extent:(simd_float3) extent;
```

## Parameters

- `name`: A descriptive name for the anchor. ARKit doesn’t display the name to users, but your app can use it to identify anchors for debugging.
- `transform`: A matrix that encodes the position, orientation, and scale of the anchor, relative to the world coordinate space of the AR session in which you place the anchor.

  World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).
- `extent`: The area around the anchor’s position that contains the textrure.

  An environment probe anchor may have an infinite extent, which indicates that its texture is a global lighting environment, or a finite extent, which indicates that its texture represents the local lighting conditions in a specific area of the scene.

<a id="Discussion"></a>

## Discussion

Use the [addAnchor:](../arsession/add%28anchor_%29.md) method to begin tracking your custom anchor in an AR session. After you add an environment probe anchor to the scene, ARKit begins generating environment textures for it. To be notified when the anchor has a new [environmentTexture](environmenttexture.md), implement the [session:didUpdateAnchors:](../arsessiondelegate/session%28__didupdate_%29-3qtt8.md), [renderer:didUpdateNode:forAnchor:](../arscnviewdelegate/renderer%28__didupdate_for_%29.md), or [view:didUpdateNode:forAnchor:](../arskviewdelegate/view%28__didupdate_for_%29.md) delegate method.

## See Also

### Creating Probe Anchors

- [initWithTransform:extent:](init%28transform_extent_%29.md): Creates a new environment probe anchor.
