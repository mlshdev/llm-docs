> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/hovereffectgroup(_:)-swift.type.method](https://developer.apple.com/documentation/swiftui/customhovereffect/hovereffectgroup(_:)-swift.type.method)

# hoverEffectGroup(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

Creates an effect that activates a named group of effects.

## Declaration

```swift
static func hoverEffectGroup(_ group: HoverEffectGroup?) -> GroupHoverEffect
```

## Parameters

- `group`: The `HoverEffectGroup` to activate when this view is hovered. If `nil`, this modifier has no effect.

<a id="return-value"></a>

## Return Value

An effect that activates the given hover group.
