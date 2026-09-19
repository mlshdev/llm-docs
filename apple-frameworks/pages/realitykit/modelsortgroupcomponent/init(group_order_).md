> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/modelsortgroupcomponent/init(group:order:)

# init(group:order:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a model sort group component.

## Declaration

```swift
init(group: ModelSortGroup, order: Int32)
```

## Parameters

- `group`: A group the component’s entity belongs to.
- `order`: An integer value in the range `(Int32.min, Int32.max)` that represents when the renderer draws the model relative to other the models in its group.

<a id="discussion"></a>

## Discussion

> **Warning**

> Don’t pass `Int32.max` or `Int32.min` to the `order` parameter because the framework reserves these as sentinel values, and using them may trigger erratic behavior.
