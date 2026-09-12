> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityview/init(make:update:placeholder:)-4x7ds](https://developer.apple.com/documentation/realitykit/realityview/init(make:update:placeholder:)-4x7ds)

# init(make:update:placeholder:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Creates a reality view for iOS and macOS, with an optional update closure and placeholder view.

## Declaration

```swift
nonisolated init<P>(make: @escaping @MainActor @Sendable (inout RealityViewCameraContent) async -> Void, update: (@MainActor (inout RealityViewCameraContent) -> Void)? = nil, @ViewBuilder placeholder: () -> P) where Content == RealityViewCameraContent.Body<P>, P : View
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

### Creating a reality view for iOS and macOS

- [init(make:update:)](init%28make_update_%29-234sv.md): Conforms when `Content` conforms to `View`. Creates a reality view for iOS and macOS, with an optional update closure.
