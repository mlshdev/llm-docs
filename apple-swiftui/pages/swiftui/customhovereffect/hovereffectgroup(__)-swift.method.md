> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/hovereffectgroup(_:)-swift.method](https://developer.apple.com/documentation/swiftui/customhovereffect/hovereffectgroup(_:)-swift.method)

# hoverEffectGroup(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Activates this effect as part of an effect group.

## Declaration

```swift
func hoverEffectGroup(_ group: HoverEffectGroup?) -> some CustomHoverEffect

```

## Parameters

- `group`: The `HoverEffectGroup` to activate when this view is hovered. If `nil`, this modifier has no effect.

<a id="return-value"></a>

## Return Value

A new effect that activates with other effects in the same group.

<a id="discussion"></a>

## Discussion

You use this method to compose effects that affect multiple views in concert. In the following example, both views’ effects are in the same group. As a result, hovering over either view will activate all effects in the group, causing both views to become fully opaque:

```swift
struct EffectView: View {
    var effectGroup: HoverEffectGroup?

    var body: some View {
        Color.red
            .frame(width: 100, height: 100)
            .hoverEffect(
                FadeEffect().hoverEffectGroup(effectGroup)
            )
        Color.blue
            .frame(width: 100, height: 100)
            .hoverEffect(
                FadeEffect().hoverEffectGroup(effectGroup)
            )
    }
}

struct FadeEffect: CustomHoverEffect {
    func body(content: Content) -> some CustomHoverEffect {
        content.hoverEffect { effect, isActive, _ in
            effect.opacity(isActive ? 1 : 0.5)
        }
    }
}
```

## See Also

### Creating custom hover effects

- [hoverEffect(\_:in:isEnabled:)](hovereffect%28__in_isenabled_%29.md): Applies this effect in parallel with the given `effect`.
- [hoverEffect(in:isEnabled:body:)](hovereffect%28in_isenabled_body_%29-swift.method.md): Applies a hover effect based on the current phase.
- [hoverEffectGroup(id:in:behavior:)](hovereffectgroup%28id_in_behavior_%29-swift.method.md): Activates this effect as part of an effect group.
- [hoverEffectDisabled(\_:)](hovereffectdisabled%28__%29.md): Disables this hover effect.
