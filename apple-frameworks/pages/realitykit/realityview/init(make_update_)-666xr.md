> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityview/init(make:update:)-666xr](https://developer.apple.com/documentation/realitykit/realityview/init(make:update:)-666xr)

# init(make:update:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a new reality view for visionOS with an optional update closure.

## Declaration

```swift
nonisolated init(make: @escaping @MainActor @Sendable (inout RealityViewContent) async -> Void, update: (@MainActor (inout RealityViewContent) -> Void)? = nil) where Content == RealityViewContent.Body<RealityViewDefaultPlaceholder>
```

## Parameters

- `make`: An asynchronous closure that configures the initial content of the new `RealityView`. This closure is asynchronous to keep your app’s UI responsive while you load content to populate this view.
- `update`: An optional closure that updates the `RealityView` instance’s content as the view’s state changes.

<a id="discussion"></a>

## Discussion

Use the `update` closure to modify entities in the scene based on a Boolean state property, like in the following example:

```swift
RealityView { content in
    content.add(boxEntity)
} update: { content in
    boxEntity.scale = isEnlarged ? .one * 2 : .one
}
```

## See Also

### Creating a reality view for visionOS

- [init(make:update:placeholder:)](init%28make_update_placeholder_%29-4c8yv.md): Conforms when `Content` conforms to `View`. Creates a new reality view for visionOS with an optional update closure and placeholder view.
- [init(make:update:attachments:)](init%28make_update_attachments_%29.md): Conforms when `Content` conforms to `View`. Creates a reality view for visionOS, with attachments and an optional update closure.
- [init(make:update:placeholder:attachments:)](init%28make_update_placeholder_attachments_%29.md): Conforms when `Content` conforms to `View`. Creates a reality view for visionOS, with attachments, an optional update closure, and placeholder view.
