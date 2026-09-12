> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/annotation/init(coordinate:anchor:accessoryanchor:content:label:)](https://developer.apple.com/documentation/mapkit/annotation/init(coordinate:anchor:accessoryanchor:content:label:))

# init(coordinate:anchor:accessoryAnchor:content:label:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an annotation that displays a view at a coordinate on the map.

## Declaration

```swift
@MainActor @preconcurrency init(coordinate: CLLocationCoordinate2D, anchor: UnitPoint = .center, accessoryAnchor: UnitPoint, @ViewBuilder content: () -> Content, @ViewBuilder label: () -> Label)
```

## Parameters

- `coordinate`: The coordinate position of the annotation.
- `anchor`: A [UnitPoint](https://developer.apple.com/documentation/swiftui/unitpoint) value that indicates how to position the content around the provided coordinate.
- `accessoryAnchor`: A [UnitPoint](https://developer.apple.com/documentation/swiftui/unitpoint) value that indicates how to place accessories around the provided content.
- `content`: The view to place on the map.
- `label`: The label for the annotation, including a title, and optional subtitle.

## See Also

### Creating annotations

- [init(\_:coordinate:anchor:accessoryAnchor:content:)](init%28__coordinate_anchor_accessoryanchor_content_%29-6rxmn.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:accessoryAnchor:content:)](init%28__coordinate_anchor_accessoryanchor_content_%29-14m3t.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(item:anchor:accessoryAnchor:content:)](init%28item_anchor_accessoryanchor_content_%29.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:content:)](init%28__coordinate_anchor_content_%29-2w242.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:content:)](init%28__coordinate_anchor_content_%29-6wnoh.md): Creates an annotation that displays a view at a coordinate on the map using a title key, coordinate, anchor location, and view you provide.
- [init(coordinate:anchor:content:label:)](init%28coordinate_anchor_content_label_%29.md): Creates an annotation that displays a view on the map using coordinates, anchor location, view, and label you provide.
