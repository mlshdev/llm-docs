> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ongeometrychange3d(for:of:action:)](https://developer.apple.com/documentation/swiftui/view/ongeometrychange3d(for:of:action:))

# onGeometryChange3D(for:of:action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Returns a new view that arranges to call `action(value)` whenever the value computed by `transform(proxy)` changes, where `proxy` provides access to the view’s 3D geometry properties.

## Declaration

```swift
@MainActor @preconcurrency func onGeometryChange3D<T>(for type: T.Type, of transform: @escaping (GeometryProxy3D) -> T, action: @escaping (T) -> Void) -> some View where T : Equatable

```

## See Also

### Geometry

- [onGeometryChange(for:of:action:)](ongeometrychange%28for_of_action_%29.md): Adds an action to be performed when a value, created from a geometry proxy, changes.
- [onInteractiveResizeChange(\_:)](oninteractiveresizechange%28__%29.md): Adds an action to perform when the enclosing window is being interactively resized.
