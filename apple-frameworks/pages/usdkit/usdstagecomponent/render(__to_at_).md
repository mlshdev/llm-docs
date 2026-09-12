> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstagecomponent/render(_:to:at:)](https://developer.apple.com/documentation/usdkit/usdstagecomponent/render(_:to:at:))

# render(\_:to:at:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Renders a USD stage to an entity in manual mode.

## Declaration

```swift
nonisolated(nonsending) static func render(_ stage: USDStage, to entity: Entity, at timeCode: USDStage.TimeCode = .default) async -> USDStageComponent.RenderResult
```

## Parameters

- `stage`: The USD stage to render.
- `entity`: The entity to render into.
- `timeCode`: The time code to render at.

<a id="return-value"></a>

## Return Value

The result of the render operation.

<a id="discussion"></a>

## Discussion

If the entity does not have a `USDStageComponent` attached, or if the attached component is in automatic mode, the result is `.failed`.

## See Also

### Rendering the stage

- [USDStageComponent.RenderResult](renderresult.md): The result of a render operation.
