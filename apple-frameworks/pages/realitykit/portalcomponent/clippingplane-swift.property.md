> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/clippingplane-swift.property](https://developer.apple.com/documentation/realitykit/portalcomponent/clippingplane-swift.property)

# clippingPlane

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The clipping plane of the portal, in the entity’s local coordinates.

## Declaration

```swift
var clippingPlane: PortalComponent.ClippingPlane? { get set }
```

<a id="discussion"></a>

## Discussion

When you set this property to a non-`nil` value, the portal clips meshes inside the portal world that are in front of the clipping plane.

This property is a convenience that maps onto the more general [clippingMode](clippingmode-swift.property.md). Reading it returns a value only when [clippingMode](clippingmode-swift.property.md) is [PortalComponent.ClippingMode.plane(\_:)](clippingmode-swift.enum/plane%28__%29.md); for [PortalComponent.ClippingMode.disabled](clippingmode-swift.enum/disabled.md) or [PortalComponent.ClippingMode.volume(\_:)](clippingmode-swift.enum/volume%28__%29.md), it returns `nil`.

For new code, prefer [clippingMode](clippingmode-swift.property.md) directly. It supports [PortalComponent.ClippingMode.volume(\_:)](clippingmode-swift.enum/volume%28__%29.md) for box-shaped clipping boundaries and pairs naturally with [crossingMode](crossingmode-swift.property.md).
