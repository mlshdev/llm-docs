> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/hovereffect(in:isenabled:body:)-swift.method](https://developer.apple.com/documentation/swiftui/customhovereffect/hovereffect(in:isenabled:body:)-swift.method)

# hoverEffect(in:isEnabled:body:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Applies a hover effect based on the current phase.

## Declaration

```swift
func hoverEffect(in group: HoverEffectGroup? = nil, isEnabled: Bool = true, body: @escaping (EmptyHoverEffectContent, Bool, GeometryProxy) -> some HoverEffectContent) -> some CustomHoverEffect

```

## Parameters

- `group`: An optional [HoverEffectGroup](../hovereffectgroup.md) to add this effect to.
- `isEnabled`: Whether the effect is enabled or not. If `false`, the effect’s inactive state will be applied, and it will not apply the active state when hovered.
- `body`: The closure that constructs a `HoverEffectContent` for each of the effect’s phases.

<a id="return-value"></a>

## Return Value

A new effect that changes a view’s appearance when hovered.

<a id="discussion"></a>

## Discussion

You use this modifier to describe how a view should change when hovered. The given closure is provided an empty effect that you use to compose an effect, as well as a boolean describing which phase is being requested. A [GeometryProxy](../geometryproxy.md) is also provided, allowing effects to change based on the view’s geometry.

In the following example, the effect will apply a scale of 1.0 to a view when inactive, and then scale to 1.1 when active:

```swift
struct ScaleHoverEffect: CustomHoverEffect {
    func body(content: Content) -> some CustomHoverEffect {
        content.hoverEffect { effect, isActive, proxy in
            effect.scaleEffect(!isActive ? 1.0 : 1.1)
        }
    }
}
```

Use the [animation(\_:body:)](../hovereffectcontent/animation%28__body_%29.md) modifier to specify how visual changes should be animated.

## See Also

### Creating custom hover effects

- [hoverEffect(\_:in:isEnabled:)](hovereffect%28__in_isenabled_%29.md): Applies this effect in parallel with the given `effect`.
- [hoverEffectGroup(\_:)](hovereffectgroup%28__%29-swift.method.md): Activates this effect as part of an effect group.
- [hoverEffectGroup(id:in:behavior:)](hovereffectgroup%28id_in_behavior_%29-swift.method.md): Activates this effect as part of an effect group.
- [hoverEffectDisabled(\_:)](hovereffectdisabled%28__%29.md): Disables this hover effect.
