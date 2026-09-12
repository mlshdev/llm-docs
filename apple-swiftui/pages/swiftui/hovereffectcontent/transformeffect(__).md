> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectcontent/transformeffect(_:)](https://developer.apple.com/documentation/swiftui/hovereffectcontent/transformeffect(_:))

# transformEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Applies an affine transformation to the view’s rendered output.

## Declaration

```swift
func transformEffect(_ transform: CGAffineTransform) -> some HoverEffectContent

```

## Parameters

- `transform`: A [CGAffineTransform](https://developer.apple.com/documentation/corefoundation/cgaffinetransform) to apply to the view.

<a id="return-value"></a>

## Return Value

An effect that applies an affine transformation to the view’s rendered output.

<a id="discussion"></a>

## Discussion

Use `transformEffect(_:)` to rotate, scale, translate, or skew the output of the view according to the provided [CGAffineTransform](https://developer.apple.com/documentation/corefoundation/cgaffinetransform).
