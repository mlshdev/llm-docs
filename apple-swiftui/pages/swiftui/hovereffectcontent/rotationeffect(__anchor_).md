> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectcontent/rotationeffect(_:anchor:)](https://developer.apple.com/documentation/swiftui/hovereffectcontent/rotationeffect(_:anchor:))

# rotationEffect(\_:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Rotates content in two dimensions around the specified point.

## Declaration

```swift
func rotationEffect(_ angle: Angle, anchor: UnitPoint = .center) -> some HoverEffectContent

```

## Parameters

- `angle`: The angle by which to rotate the content.
- `anchor`: A unit point within the content about which to perform the rotation. The default value is [center](../unitpoint/center.md).

<a id="return-value"></a>

## Return Value

A rotation effect.

<a id="discussion"></a>

## Discussion

This effect rotates the content around the axis that points out of the xy-plane. It has no effect on the content’s frame.
