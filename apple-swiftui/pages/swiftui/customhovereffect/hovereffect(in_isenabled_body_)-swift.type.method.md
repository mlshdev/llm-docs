> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/hovereffect(in:isenabled:body:)-swift.type.method](https://developer.apple.com/documentation/swiftui/customhovereffect/hovereffect(in:isenabled:body:)-swift.type.method)

# hoverEffect(in:isEnabled:body:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

Creates a hover effect that applies effects to a view using the given closure.

## Declaration

```swift
static func hoverEffect<C>(in group: HoverEffectGroup? = nil, isEnabled: Bool = true, body: @escaping (EmptyHoverEffectContent, Bool, GeometryProxy) -> C) -> ContentHoverEffect<C> where Self == ContentHoverEffect<C>, C : HoverEffectContent
```

## Parameters

- `group`: An optional [HoverEffectGroup](../hovereffectgroup.md) to add this effect to.
- `isEnabled`: Whether the effect is enabled or not. If `false`, the effect will not become active when hovered.
- `body`: The closure that constructs a `HoverEffectContent` for each of the effect’s phases.

<a id="return-value"></a>

## Return Value

A new effect that applies effects to a view using the given body closure.

<a id="discussion"></a>

## Discussion

The closure is provided an empty effect that you use to compose effects, as well as a boolean describing which phase is being requested. A [GeometryProxy](../geometryproxy.md) is also provided, allowing effects to change based on the view’s geometry.

Typically the `CustomHoverEffect/hoverEffect(in:isEnabled:body:)` or [hoverEffect(in:isEnabled:body:)](../view/hovereffect%28in_isenabled_body_%29.md) modifiers are used to create effects. Use this method when you need to create effects in other contexts.

For example, the following code uses this method and [HoverEffect](../hovereffect.md) to create a type-erased fade effect:

```swift
HoverEffect(
    .hoverEffect { e, isActive, _ in
        e.opacity(isActive ? 1 : 0)
    }
)
```
