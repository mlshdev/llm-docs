> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/hovereffectgroup(id:in:behavior:)-swift.type.method](https://developer.apple.com/documentation/swiftui/customhovereffect/hovereffectgroup(id:in:behavior:)-swift.type.method)

# hoverEffectGroup(id:in:behavior:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

Creates an effect that activates a named group of effects.

## Declaration

```swift
static func hoverEffectGroup(id: String? = nil, in namespace: Namespace.ID, behavior: HoverEffectGroup.Behavior = .activatesGroup) -> GroupHoverEffect
```

## Parameters

- `id`: An optional id to give the group. If provided, the group will be uniquely identified by combining the id and the namespace.
- `namespace`: The namespace that identifies the group. If `nil`, this modifier has no effect.
- `behavior`: How the effect will behave relative to other effects in the group.

<a id="return-value"></a>

## Return Value

A new effect that activates the given effect group.

<a id="discussion"></a>

## Discussion

The effect group is uniquely identified by combining the `id` and `namespace` parameters. If an `id` is not provided, the effect will be identified by the `namespace` alone. Providing an `id` is useful when creating effects that use multiple, closely-related groups.

The default behavior of an effect is to activate the effect group when hovered. The `behavior` parameter can be used to choose alternative behaviors. See [HoverEffectGroup.Behavior](../hovereffectgroup/behavior.md) for all possible behaviors.
