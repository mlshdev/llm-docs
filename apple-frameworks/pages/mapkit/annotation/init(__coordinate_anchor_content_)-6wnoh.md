> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/annotation/init(_:coordinate:anchor:content:)-6wnoh](https://developer.apple.com/documentation/mapkit/annotation/init(_:coordinate:anchor:content:)-6wnoh)

# init(\_:coordinate:anchor:content:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an annotation that displays a view at a coordinate on the map using a title key, coordinate, anchor location, and view you provide.

## Declaration

```swift
@MainActor @preconcurrency init<S>(_ title: S, coordinate: CLLocationCoordinate2D, anchor: UnitPoint = .center, @ViewBuilder content: () -> Content) where Label == Text, S : StringProtocol
```

## Parameters

- `title`: The title of the annotation.
- `coordinate`: The coordinate position of the annotation.
- `anchor`: A [UnitPoint](https://developer.apple.com/documentation/swiftui/unitpoint) value that indicates how to position the content around the provided coordinate.
- `content`: The view to place on the map.

## See Also

### Creating annotations

- [init(\_:coordinate:anchor:accessoryAnchor:content:)](init%28__coordinate_anchor_accessoryanchor_content_%29-6rxmn.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:accessoryAnchor:content:)](init%28__coordinate_anchor_accessoryanchor_content_%29-14m3t.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(coordinate:anchor:accessoryAnchor:content:label:)](init%28coordinate_anchor_accessoryanchor_content_label_%29.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(item:anchor:accessoryAnchor:content:)](init%28item_anchor_accessoryanchor_content_%29.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(\_:coordinate:anchor:content:)](init%28__coordinate_anchor_content_%29-2w242.md): Creates an annotation that displays a view at a coordinate on the map.
- [init(coordinate:anchor:content:label:)](init%28coordinate_anchor_content_label_%29.md): Creates an annotation that displays a view on the map using coordinates, anchor location, view, and label you provide.
