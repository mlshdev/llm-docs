> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/featheredglassbackgroundeffect/init(padding:softedgeradius:)](https://developer.apple.com/documentation/swiftui/featheredglassbackgroundeffect/init(padding:softedgeradius:))

# init(padding:softEdgeRadius:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 2.4+

Creates a feathered glassBackground effect.

## Declaration

```swift
init(padding length: CGFloat, softEdgeRadius: CGFloat? = nil)
```

## Parameters

- `softEdgeRadius`: When a blur is clipped, the radial size of the blur’s edge. If you set the value to `nil`, SwiftUI uses a default amount. The default value of this parameter is `nil`.

<a id="return-value"></a>

## Return Value

A feathered background effect.
