> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityview/init(make:update:placeholder:)-4c8yv](https://developer.apple.com/documentation/realitykit/realityview/init(make:update:placeholder:)-4c8yv)

# init(make:update:placeholder:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a new reality view for visionOS with an optional update closure and placeholder view.

## Declaration

```swift
nonisolated init<P>(make: @escaping @MainActor @Sendable (inout RealityViewContent) async -> Void, update: (@MainActor (inout RealityViewContent) -> Void)? = nil, @ViewBuilder placeholder: () -> P) where Content == RealityViewContent.Body<P>, P : View
```

## Parameters

- `make`: An asynchronous closure that configures the initial content of the new `RealityView`. This closure is asynchronous to keep your app’s UI responsive while you load content to populate this view.
- `update`: An optional closure that updates the `RealityView` instance’s content as the view’s state changes.
- `placeholder`: A temporary view that the [RealityView](../realityview.md) displays until your closure for the `make` parameter completes. For example, you can display a loading indicator with a [ProgressView](https://developer.apple.com/documentation/swiftui/progressview) instance as a placeholder.

<a id="discussion"></a>

## Discussion

For example, your app can asynchronously load an [Entity](../entity.md) from a `.reality` or `.usdz` file, and display a [ProgressView](https://developer.apple.com/documentation/swiftui/progressview) while the system loads the file:

```swift
RealityView { content in
    if let newEntity = try? await Entity(named: "model_file_name") {
        content.add(newEntity)
    }
} placeholder: {
    ProgressView()
}
```

## See Also

### Creating a reality view for visionOS

- [init(make:update:)](init%28make_update_%29-666xr.md): Conforms when `Content` conforms to `View`. Creates a new reality view for visionOS with an optional update closure.
- [init(make:update:attachments:)](init%28make_update_attachments_%29.md): Conforms when `Content` conforms to `View`. Creates a reality view for visionOS, with attachments and an optional update closure.
- [init(make:update:placeholder:attachments:)](init%28make_update_placeholder_attachments_%29.md): Conforms when `Content` conforms to `View`. Creates a reality view for visionOS, with attachments, an optional update closure, and placeholder view.
