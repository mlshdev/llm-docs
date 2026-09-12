> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/environmenttexturing-swift.enum/automatic](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/environmenttexturing-swift.enum/automatic)

# ARWorldTrackingConfiguration.EnvironmentTexturing.automatic (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The framework automatically determines when and where to generate environment textures.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

When you use this [environmentTexturing](../environmenttexturing-swift.property.md) option, ARKit automatically chooses positions in the scene to generate environment textures based on the camera imagery it has collected and the other anchors you’ve placed.

If you display AR content using [ARSCNView](../../arscnview.md), SceneKit automatically retrieves texture maps from probe anchors and uses them to light the scene. Otherwise, use a delegate method such as [session(\_:didUpdate:)](../../arsessiondelegate/session%28__didupdate_%29-3qtt8.md) to find out when the probe anchor’s texture has been updated and access the [environmentTexture](../../arenvironmentprobeanchor/environmenttexture.md) property.

# AREnvironmentTexturingAutomatic (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The framework automatically determines when and where to generate environment textures.

## Declaration

```objectivec
AREnvironmentTexturingAutomatic
```

<a id="Discussion"></a>

## Discussion

When you use this [environmentTexturing](../environmenttexturing-swift.property.md) option, ARKit automatically chooses positions in the scene to generate environment textures based on the camera imagery it has collected and the other anchors you’ve placed.

If you display AR content using [ARSCNView](../../arscnview.md), SceneKit automatically retrieves texture maps from probe anchors and uses them to light the scene. Otherwise, use a delegate method such as [session:didUpdateAnchors:](../../arsessiondelegate/session%28__didupdate_%29-3qtt8.md) to find out when the probe anchor’s texture has been updated and access the [environmentTexture](../../arenvironmentprobeanchor/environmenttexture.md) property.
