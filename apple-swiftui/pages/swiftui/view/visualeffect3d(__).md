> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/visualeffect3d(_:)](https://developer.apple.com/documentation/swiftui/view/visualeffect3d(_:))

# visualEffect3D(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Applies effects to this view, while providing access to layout information through a 3D geometry proxy.

## Declaration

```swift
nonisolated func visualEffect3D(_ effect: @escaping @Sendable (EmptyVisualEffect, GeometryProxy3D) -> some VisualEffect) -> some View

```

## Parameters

- `effect`: A closure that returns the effect to be applied. The first argument provided to the closure is a placeholder representing this view. The second argument is a `GeometryProxy3D`.

<a id="return-value"></a>

## Return Value

A view with the effect applied.

<a id="discussion"></a>

## Discussion

You return new effects by calling functions on the first argument provided to the `effect` closure. In this example, `ContentView` is offset in Z by its own depth, causing its back face to appear where the front face of the view was originally located:

```swift
ContentView()
    .visualEffect3D { content, geometryProxy in
        content.offset(z: geometryProxy.size.depth)
    }
```

## See Also

### Applying effects based on geometry

- [visualEffect(\_:)](visualeffect%28__%29.md): Applies effects to this view, while providing access to layout information through a geometry proxy.
- [VisualEffect](../visualeffect.md): Visual Effects change the visual appearance of a view without changing its ancestors or descendents.
- [EmptyVisualEffect](../emptyvisualeffect.md): The base visual effect that you apply additional effect to.
