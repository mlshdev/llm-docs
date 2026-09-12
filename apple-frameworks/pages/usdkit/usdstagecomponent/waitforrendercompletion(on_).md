> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstagecomponent/waitforrendercompletion(on:)](https://developer.apple.com/documentation/usdkit/usdstagecomponent/waitforrendercompletion(on:))

# waitForRenderCompletion(on:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Waits for automatic rendering to complete.

## Declaration

```swift
@MainActor static func waitForRenderCompletion(on entity: Entity) async -> USDStageComponent.RenderResult
```

## Parameters

- `entity`: The entity with a `USDStageComponent`.

<a id="return-value"></a>

## Return Value

The result of the render operation.

<a id="discussion"></a>

## Discussion

If the entity does not have a `USDStageComponent` attached, or if the attached component is in manual mode, the result is `.failed`.
