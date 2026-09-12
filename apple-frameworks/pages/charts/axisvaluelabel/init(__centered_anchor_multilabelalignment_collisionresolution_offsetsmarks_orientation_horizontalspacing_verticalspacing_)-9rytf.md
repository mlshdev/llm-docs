> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axisvaluelabel/init(_:centered:anchor:multilabelalignment:collisionresolution:offsetsmarks:orientation:horizontalspacing:verticalspacing:)-9rytf](https://developer.apple.com/documentation/charts/axisvaluelabel/init(_:centered:anchor:multilabelalignment:collisionresolution:offsetsmarks:orientation:horizontalspacing:verticalspacing:)-9rytf)

# init(\_:centered:anchor:multiLabelAlignment:collisionResolution:offsetsMarks:orientation:horizontalSpacing:verticalSpacing:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Constructs an axis value label with the given properties to display the given string.

## Declaration

```swift
nonisolated init<S>(_ title: S, centered: Bool? = nil, anchor: UnitPoint? = nil, multiLabelAlignment: Alignment? = nil, collisionResolution: AxisValueLabelCollisionResolution = .automatic, offsetsMarks: Bool? = nil, orientation: AxisValueLabelOrientation = .automatic, horizontalSpacing: CGFloat? = nil, verticalSpacing: CGFloat? = nil) where Content == Text, S : StringProtocol
```

## Parameters

- `title`: A title generated from a string.
- `centered`: Whether to center the label between two axis values. If `nil`, default to true for discrete data, false to continuous data.
- `anchor`: The anchor point on the bounding box of the text element that attaches to the `position`.
- `multiLabelAlignment`: How labels along the axis are aligned with each other.
- `collisionResolution`: How labels that collide with others are resolved.
- `offsetsMarks`: Whether to offset marks to accomodate for the space used by the label.
- `orientation`: The orientation of the label.
- `horizontalSpacing`: The horizontal spacing of the label. If `nil`, a default spacing will be used.
- `verticalSpacing`: The vertical spacing of the label.
