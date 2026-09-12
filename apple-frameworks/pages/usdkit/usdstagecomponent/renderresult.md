> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstagecomponent/renderresult](https://developer.apple.com/documentation/usdkit/usdstagecomponent/renderresult)

# USDStageComponent.RenderResult

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The result of a render operation.

## Declaration

```swift
struct RenderResult
```

## Topics

### Instance Properties

- [errors](renderresult/errors.md): The errors encountered during the render, or an empty array if it succeeded.
- [status](renderresult/status-swift.property.md): The status of the render operation.

### Enumerations

- [USDStageComponent.RenderResult.Status](renderresult/status-swift.enum.md): The status of a render operation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rendering the stage

- [render(\_:to:at:)](render%28__to_at_%29.md): Renders a USD stage to an entity in manual mode.
