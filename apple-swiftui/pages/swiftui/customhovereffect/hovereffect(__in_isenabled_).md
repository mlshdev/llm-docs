> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/hovereffect(_:in:isenabled:)](https://developer.apple.com/documentation/swiftui/customhovereffect/hovereffect(_:in:isenabled:))

# hoverEffect(\_:in:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Applies this effect in parallel with the given `effect`.

## Declaration

```swift
func hoverEffect(_ effect: some CustomHoverEffect, in group: HoverEffectGroup? = nil, isEnabled: Bool = true) -> some CustomHoverEffect

```

## Parameters

- `effect`: A [CustomHoverEffect](../customhovereffect.md) to combine with this effect.
- `group`: An optional [HoverEffectGroup](../hovereffectgroup.md) to add this effect to.
- `isEnabled`: Whether `effect` is enabled or not.

<a id="discussion"></a>

## Discussion

Use `hoverEffect(_:)` to combine two effects into a single effect that applies both effects in parallel. Modifiers like [hoverEffectDisabled(\_:)](hovereffectdisabled%28__%29.md) applied to `effect` will not apply to this effect.

For example, in the following effect only the `ScaleUpEffect` is disabled, since modifiers applied to that effect are applied independently.

```swift
struct FadeAndScaleEffect: CustomHoverEffect {
    @Environment(\.accessibilityReduceMotion) var accessibilityReduceMotion
    func body(content: Content) -> some CustomHoverEffect {
        content
            .hoverEffect { effect, isActive, _ in
                effect.opacity(isActive ? 1 : 0.9)
            }
            .hoverEffect(
                ScaleUpEffect().hoverEffectDisabled(accessibilityReduceMotion)
            )
    }
}

struct ScaleUpEffect: CustomHoverEffect {
    func body(content: Content) -> some CustomHoverEffect {
        content.hoverEffect { effect, isActive, _ in
            effect.scaleEffect(isActive ? 1.05 : 1.0)
        }
    }
}
```

- Returns a new effect that applies both effects in parallel.

## See Also

### Creating custom hover effects

- [hoverEffect(in:isEnabled:body:)](hovereffect%28in_isenabled_body_%29-swift.method.md): Applies a hover effect based on the current phase.
- [hoverEffectGroup(\_:)](hovereffectgroup%28__%29-swift.method.md): Activates this effect as part of an effect group.
- [hoverEffectGroup(id:in:behavior:)](hovereffectgroup%28id_in_behavior_%29-swift.method.md): Activates this effect as part of an effect group.
- [hoverEffectDisabled(\_:)](hovereffectdisabled%28__%29.md): Disables this hover effect.
