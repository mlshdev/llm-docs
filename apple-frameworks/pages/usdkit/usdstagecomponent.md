> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstagecomponent](https://developer.apple.com/documentation/usdkit/usdstagecomponent)

# USDStageComponent

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that renders a USD stage as RealityKit entities.

## Declaration

```swift
struct USDStageComponent
```

<a id="overview"></a>

## Overview

Attach a `USDStageComponent` to an entity to render USD content as child entities. The component supports two modes of operation:

- **Manual mode**: Created with [init(allowsHitTesting:)](usdstagecomponent/init%28allowshittesting_%29.md). You control when rendering occurs by calling [render(\_:to:at:)](usdstagecomponent/render%28__to_at_%29.md).
- **Automatic mode**: Created with [init(\_:timeCode:allowsHitTesting:)](usdstagecomponent/init%28__timecode_allowshittesting_%29.md). The component manages rendering internally and updates when the stage or time code changes.

## Topics

### Creating a stage component

- [init(\_:timeCode:allowsHitTesting:)](usdstagecomponent/init%28__timecode_allowshittesting_%29.md): Creates a USDStageComponent in automatic mode and waits for the first render to complete.
- [init(allowsHitTesting:)](usdstagecomponent/init%28allowshittesting_%29.md): Creates a USDStageComponent in manual mode.

### Configuring the component

- [stage](usdstagecomponent/stage.md): The stage currently being rendered by this component, or `nil` if the component is in manual mode and no render has been performed yet.
- [timeCode](usdstagecomponent/timecode.md): The time code to render at.
- [allowsHitTesting](usdstagecomponent/allowshittesting.md): Whether the rendered entities support hit testing. Set at initialization and cannot be changed afterwards.
- [rendersAutomatically](usdstagecomponent/rendersautomatically.md): Whether the component renders automatically in response to stage or time code changes. `false` indicates manual mode, in which rendering must be triggered explicitly via [render(\_:to:at:)](usdstagecomponent/render%28__to_at_%29.md).

### Rendering the stage

- [render(\_:to:at:)](usdstagecomponent/render%28__to_at_%29.md): Renders a USD stage to an entity in manual mode.
- [USDStageComponent.RenderResult](usdstagecomponent/renderresult.md): The result of a render operation.

### Type Methods

- [coordinateSpace(on:at:timeCode:)](usdstagecomponent/coordinatespace%28on_at_timecode_%29.md): Returns a coordinate space anchored to the closest rendered ancestor of `path`.
- [waitForRenderCompletion(on:)](usdstagecomponent/waitforrendercompletion%28on_%29.md): Waits for automatic rendering to complete.

## Relationships

### Conforms To

- [Component](../realitykit/component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### RealityKit rendering and playback

- [USDPlayer](usdplayer.md): Drives timeline playback of a USD stage and produces per-frame render data.
