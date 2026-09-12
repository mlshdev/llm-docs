> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/hovereffectdisabled(_:)](https://developer.apple.com/documentation/swiftui/customhovereffect/hovereffectdisabled(_:))

# hoverEffectDisabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Disables this hover effect.

## Declaration

```swift
func hoverEffectDisabled(_ isDisabled: Bool = true) -> some CustomHoverEffect

```

## Parameters

- `isDisabled`: A Boolean value that determines whether the hover effect is disabled or not. Specifying `true` takes precedence over `false`. Default: `true`.

<a id="return-value"></a>

## Return Value

A conditionally disabled hover effect.

<a id="discussion"></a>

## Discussion

Use `hoverEffectDisabled(_:)` to prevent a hover effect from becoming active. When an effect is disabled, all contained effects are also disabled and cannot be re-enabled.

In the following example, the scale effect is disabled if the `accessibilityReduceMotion` setting is enabled:

```swift
struct ScaleAndFadeEffect: CustomHoverEffect {
    @Environment(\.accessibilityReduceMotion) var accessibilityReduceMotion
    func body(content: Content) -> some CustomHoverEffect {
        content.hoverEffect { effect, isActive, _ in
            effect.scaleEffect(!isActive ? 0.95 : 1.05)
        }
        .hoverEffectDisabled(accessibilityReduceMotion)
        .hoverEffect { effect, isActive, _ in
            effect.opacity(!isActive ? 0.9 : 1)
        }
    }
}
```

## See Also

### Creating custom hover effects

- [hoverEffect(\_:in:isEnabled:)](hovereffect%28__in_isenabled_%29.md): Applies this effect in parallel with the given `effect`.
- [hoverEffect(in:isEnabled:body:)](hovereffect%28in_isenabled_body_%29-swift.method.md): Applies a hover effect based on the current phase.
- [hoverEffectGroup(\_:)](hovereffectgroup%28__%29-swift.method.md): Activates this effect as part of an effect group.
- [hoverEffectGroup(id:in:behavior:)](hovereffectgroup%28id_in_behavior_%29-swift.method.md): Activates this effect as part of an effect group.
