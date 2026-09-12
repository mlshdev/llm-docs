> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/annotation/init(coordinate:anchor:content:label:)](https://developer.apple.com/documentation/mapkit/annotation/init(coordinate:anchor:content:label:))

# init(coordinate:anchor:content:label:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an annotation that displays a view on the map using coordinates, anchor location, view, and label you provide.

## Declaration

```swift
@MainActor @preconcurrency init(coordinate: CLLocationCoordinate2D, anchor: UnitPoint = .center, @ViewBuilder content: () -> Content, @ViewBuilder label: () -> Label)
```

## Parameters

- `coordinate`: The coordinate position of the annotation.
- `anchor`: How to place the content around the provided coordinate.
- `content`: The view to place on the map.
- `label`: The label for the annotation, including a title, and optional subtitle.

## See Also

### Creating annotations

- [init(\_:coordinate:anchor:accessoryAnchor:content:)](init%28__coordinate_anchor_accessoryanchor_content_%29-6rxmn.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:accessoryAnchor:content:)](init%28__coordinate_anchor_accessoryanchor_content_%29-14m3t.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(coordinate:anchor:accessoryAnchor:content:label:)](init%28coordinate_anchor_accessoryanchor_content_label_%29.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(item:anchor:accessoryAnchor:content:)](init%28item_anchor_accessoryanchor_content_%29.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:content:)](init%28__coordinate_anchor_content_%29-2w242.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:content:)](init%28__coordinate_anchor_content_%29-6wnoh.md): Creates an annotation that displays a view at a coordinate on the map using a title key, coordinate, anchor location, and view you provide.
