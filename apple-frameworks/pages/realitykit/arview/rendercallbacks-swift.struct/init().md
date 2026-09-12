> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/rendercallbacks-swift.struct/init()](https://developer.apple.com/documentation/realitykit/arview/rendercallbacks-swift.struct/init())

# init()

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates a new object.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

When you create a new [ARView](../../arview.md), it automatically creates an [ARView.RenderCallbacks](../rendercallbacks-swift.struct.md) object and assigns it to the [renderCallbacks](../rendercallbacks-swift.property.md) property. Your code won’t usually need to create [ARView.RenderCallbacks](../rendercallbacks-swift.struct.md) objects.
