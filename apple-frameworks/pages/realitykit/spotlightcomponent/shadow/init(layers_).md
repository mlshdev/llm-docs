> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/shadow/init(layers:)](https://developer.apple.com/documentation/realitykit/spotlightcomponent/shadow/init(layers:))

# init(layers:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a spot light shadow that accepts shadow casters from the specified layers.

## Declaration

```swift
init(layers: RenderLayer.Set? = nil)
```

## Parameters

- `layers`: The layers of entities that cast shadows from this light. Pass `nil` (the default) to inherit [layers](../layers.md), or an empty set to disable shadow casting entirely.

## See Also

### Creating a shadow

- [init()](init%28%29.md): Creates a new spot light shadow object.
- [layers](layers.md): The layers of entities that cast shadows from this light.
