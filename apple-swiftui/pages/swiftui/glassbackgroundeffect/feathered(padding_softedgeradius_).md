> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/glassbackgroundeffect/feathered(padding:softedgeradius:)](https://developer.apple.com/documentation/swiftui/glassbackgroundeffect/feathered(padding:softedgeradius:))

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

- `softEdgeRadius`: When a blur is clipped, the radial size of the blur’s edge. If you set the value to `nil`, SwiftUI uses a default amount. The default value of this parameter is `nil`.

<a id="return-value"></a>

## Return Value

A feathered background effect.
