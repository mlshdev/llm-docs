> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapscaleview/init(alignment:scope:)](https://developer.apple.com/documentation/mapkit/mapscaleview/init(alignment:scope:))

# init(alignment:scope:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a scale view with the provided alignment and scope.

## Declaration

```swift
@MainActor @preconcurrency init(alignment: HorizontalAlignment = .leading, scope: Namespace.ID? = nil)
```

## Parameters

- `alignment`: The alignment that describes the positioning of the scale view. The default is [leading](https://developer.apple.com/documentation/swiftui/horizontalalignment/leading).
- `scope`: A [Namespace.ID](https://developer.apple.com/documentation/swiftui/namespace/id) value that identifies this namespace and that you can use to associate this control with a map instance.

<a id="return-value"></a>

## Return Value

An initialized scale view.

## See Also

### Creating a map scale view

- [init(anchorEdge:scope:)](init%28anchoredge_scope_%29.md): Creates a map scale view.
