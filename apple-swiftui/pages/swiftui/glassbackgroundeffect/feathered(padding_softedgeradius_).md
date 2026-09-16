> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/glassbackgroundeffect/feathered(padding:softedgeradius:)

# feathered(padding:softEdgeRadius:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 2.4+

A feathered background effect with custom padding and soft edge radius.

## Declaration

```swift
static func feathered(padding length: CGFloat, softEdgeRadius: CGFloat? = nil) -> FeatheredGlassBackgroundEffect
```

## Parameters

- `length`: An amount, given in points, to pad all edges when the style is rendering. However, it does not affect the layout size, which is based on the content size. When it is less than the effect’s blur size, the blur will be clipped.
- `softEdgeRadius`: When a blur is clipped, the radial size of the blur’s edge. If you set the value to `nil`, SwiftUI uses a default amount. The default value of this parameter is `nil`.

<a id="return-value"></a>

## Return Value

A feathered background effect.
