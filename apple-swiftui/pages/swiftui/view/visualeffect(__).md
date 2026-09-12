> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/visualeffect(_:)](https://developer.apple.com/documentation/swiftui/view/visualeffect(_:))

# visualEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies effects to this view, while providing access to layout information through a geometry proxy.

## Declaration

```swift
nonisolated func visualEffect(_ effect: @escaping @Sendable (EmptyVisualEffect, GeometryProxy) -> some VisualEffect) -> some View

```

## Parameters

- `effect`: A closure that returns the effect to be applied. The first argument provided to the closure is a placeholder representing this view. The second argument is a `GeometryProxy`.

<a id="return-value"></a>

## Return Value

A view with the effect applied.

<a id="discussion"></a>

## Discussion

You return new effects by calling functions on the first argument provided to the `effect` closure. In this example, `ContentView` is offset by its own size, causing its top left corner to appear where the bottom right corner was originally located:

```swift
ContentView()
    .visualEffect { content, geometryProxy in
        content.offset(geometryProxy.size)
    }
```

## See Also

### Applying effects based on geometry

- [visualEffect3D(\_:)](visualeffect3d%28__%29.md): Applies effects to this view, while providing access to layout information through a 3D geometry proxy.
- [VisualEffect](../visualeffect.md): Visual Effects change the visual appearance of a view without changing its ancestors or descendents.
- [EmptyVisualEffect](../emptyvisualeffect.md): The base visual effect that you apply additional effect to.
