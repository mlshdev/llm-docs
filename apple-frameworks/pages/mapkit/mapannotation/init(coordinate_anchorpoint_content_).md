> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapannotation/init(coordinate:anchorpoint:content:)](https://developer.apple.com/documentation/mapkit/mapannotation/init(coordinate:anchorpoint:content:))

# init(coordinate:anchorPoint:content:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS · watchOS 7.0+ (deprecated in 10.0)

Creates a custom annotation that provides a SwiftUI view to display at the map location that you specify.

> Use Annotation along with Map initializers that take a MapContentBuilder instead.

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D, anchorPoint: CGPoint = CGPoint(x: 0.5, y: 0.5), @ViewBuilder content: () -> Content)
```

## Parameters

- `coordinate`: The location of the specified annotation.
- `anchorPoint`: A [CGPoint](../../corefoundation/cgpoint.md) value in unit coordinate space that aligns the coordinate location of the annotation with view created. The default value `0.5`, which represents the center of the view.
- `content`: The closure that returns a custom annotation view.

<a id="Discussion"></a>

## Discussion

Use the anchor point to align the SwiftUI view you return in content to the coordinate represented on the map. Anchor point uses unit coordinate space, that represents the distance between the frame edges as values between `0` and `1`. For example, to align the top-right or bottom-middle of the view with the coordinate location on the map use `CGPoint(1,0)` or `CGPoint(0.5,1)`, respectively.
