> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapscaleview/init(anchoredge:scope:)](https://developer.apple.com/documentation/mapkit/mapscaleview/init(anchoredge:scope:))

# init(anchorEdge:scope:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS

Creates a map scale view.

## Declaration

```swift
@MainActor @preconcurrency init(anchorEdge: HorizontalEdge = .leading, scope: Namespace.ID? = nil)
```

## Parameters

- `anchorEdge`: The fixed edge the scale grows and shrinks from. Use this outside of [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29) view modifier.
- `scope`: A [Namespace.ID](https://developer.apple.com/documentation/swiftui/namespace/id) value that identifies this namespace and that you can use to associate this control with a map instance.

## See Also

### Creating a map scale view

- [init(alignment:scope:)](init%28alignment_scope_%29.md): Creates a scale view with the provided alignment and scope.
