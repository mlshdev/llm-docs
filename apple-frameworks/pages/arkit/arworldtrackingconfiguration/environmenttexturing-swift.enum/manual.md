> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/environmenttexturing-swift.enum/manual](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/environmenttexturing-swift.enum/manual)

# ARWorldTrackingConfiguration.EnvironmentTexturing.manual (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The framework generates environment textures only for probe anchors you explicitly add to the session.

## Declaration

```swift
case manual
```

<a id="Discussion"></a>

## Discussion

When you use this [environmentTexturing](../environmenttexturing-swift.property.md) option, you must manually choose when and where to generate environment map textures:

1. Create an [AREnvironmentProbeAnchor](../../arenvironmentprobeanchor.md) object with a `transform` indicating its position in the scene.
2. Add the probe anchor to the session with the [add(anchor:)](../../arsession/add%28anchor_%29.md) method.

If you display AR content using [ARSCNView](../../arscnview.md), SceneKit automatically retrieves texture maps from probe anchors and uses them to light the scene. Otherwise, use a delegate method such as [session(\_:didUpdate:)](../../arsessiondelegate/session%28__didupdate_%29-3qtt8.md) to find out when the probe anchor’s texture has been updated and access the [environmentTexture](../../arenvironmentprobeanchor/environmenttexture.md) property.

# AREnvironmentTexturingManual (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The framework generates environment textures only for probe anchors you explicitly add to the session.

## Declaration

```objectivec
AREnvironmentTexturingManual
```

<a id="Discussion"></a>

## Discussion

When you use this [environmentTexturing](../environmenttexturing-swift.property.md) option, you must manually choose when and where to generate environment map textures:

1. Create an [AREnvironmentProbeAnchor](../../arenvironmentprobeanchor.md) object with a `transform` indicating its position in the scene.
2. Add the probe anchor to the session with the [addAnchor:](../../arsession/add%28anchor_%29.md) method.

If you display AR content using [ARSCNView](../../arscnview.md), SceneKit automatically retrieves texture maps from probe anchors and uses them to light the scene. Otherwise, use a delegate method such as [session:didUpdateAnchors:](../../arsessiondelegate/session%28__didupdate_%29-3qtt8.md) to find out when the probe anchor’s texture has been updated and access the [environmentTexture](../../arenvironmentprobeanchor/environmenttexture.md) property.
