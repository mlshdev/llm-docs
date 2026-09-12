> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectcontent/scaleeffect(_:anchor:)](https://developer.apple.com/documentation/swiftui/hovereffectcontent/scaleeffect(_:anchor:))

# scaleEffect(\_:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Scales the view’s rendered output by the given amount in both the horizontal and vertical directions, relative to an anchor point.

## Declaration

```swift
func scaleEffect(_ scale: CGFloat, anchor: UnitPoint = .center) -> some HoverEffectContent

```

## Parameters

- `scale`: The amount to scale the view in the view in both the horizontal and vertical directions.
- `anchor`: The point with a default of [center](../unitpoint/center.md) that defines the location within the view from which to apply the transformation.

<a id="return-value"></a>

## Return Value

An effect that scales the view’s rendered output.
