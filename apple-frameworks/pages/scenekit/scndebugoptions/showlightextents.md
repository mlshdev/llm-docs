> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scndebugoptions/showlightextents](https://developer.apple.com/documentation/scenekit/scndebugoptions/showlightextents)

# showLightExtents (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Display the regions affected by each [SCNLight](../scnlight.md) object in the scene.

## Declaration

```swift
static var showLightExtents: SCNDebugOptions { get }
```

<a id="Discussion"></a>

## Discussion

Only lights whose type is [omni](../scnlight/lighttype/omni.md) or [spot](../scnlight/lighttype/spot.md) have an area of effect; directional and ambient lights affect the entire scene.

## See Also

### Debugging Cameras and Lighting

- [showCameras](showcameras.md): Display visualizations for nodes in the scene with attached cameras and their fields of view.
- [showLightInfluences](showlightinfluences.md): Display the locations of each [SCNLight](../scnlight.md) object in the scene.

# SCNDebugOptionShowLightExtents (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Display the regions affected by each [SCNLight](../scnlight.md) object in the scene.

## Declaration

```objectivec
SCNDebugOptionShowLightExtents
```

<a id="Discussion"></a>

## Discussion

Only lights whose type is [SCNLightTypeOmni](../scnlight/lighttype/omni.md) or [SCNLightTypeSpot](../scnlight/lighttype/spot.md) have an area of effect; directional and ambient lights affect the entire scene.

## See Also

### Debugging Cameras and Lighting

- [SCNDebugOptionShowCameras](showcameras.md): Display visualizations for nodes in the scene with attached cameras and their fields of view.
- [SCNDebugOptionShowLightInfluences](showlightinfluences.md): Display the locations of each [SCNLight](../scnlight.md) object in the scene.
