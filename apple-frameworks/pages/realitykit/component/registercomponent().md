> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/component/registercomponent()](https://developer.apple.com/documentation/realitykit/component/registercomponent())

# registerComponent()

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Registers a new component type.

## Declaration

```swift
static func registerComponent()
```

<a id="discussion"></a>

## Discussion

Call the `registerComponent()` method once for every custom component type that you use in your app before you use it. You don’t need to call the method for built-in component types, like [ModelComponent](../modelcomponent.md) or [AnchoringComponent](../anchoringcomponent.md).
