> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow/layers](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow/layers)

# layers

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The layers of entities that cast shadows from this light.

## Declaration

```swift
var layers: RenderLayer.Set? { get set }
```

<a id="discussion"></a>

## Discussion

An entity casts a shadow into this light’s shadow map when the layers of its [RenderLayerComponent](../../renderlayercomponent.md) intersect with this set.

Set this property to:

- `nil` (the default) to inherit [layers](../layers.md), so any entity the light illuminates can also cast a shadow from it.
- An empty set to disable shadow casting from this light entirely.

Shadow casting can be restricted by layer on devices with Apple6 GPU family feature support.

## See Also

### Creating a shadow

- [init()](init%28%29.md): Creates a new spot light shadow object.
- [init(layers:)](init%28layers_%29.md): Creates a spot light shadow that accepts shadow casters from the specified layers.
