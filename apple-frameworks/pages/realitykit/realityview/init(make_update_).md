> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityview/init(make:update:)](https://developer.apple.com/documentation/realitykit/realityview/init(make:update:))

# init(make:update:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Creates a reality view for iOS and macOS, with an optional update closure.

## Declaration

```swift
nonisolated init(make: @escaping @MainActor @Sendable (inout RealityViewCameraContent) async -> Void, update: (@MainActor (inout RealityViewCameraContent) -> Void)? = nil) where Content == RealityViewCameraContent.Body<RealityViewDefaultPlaceholder>
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
