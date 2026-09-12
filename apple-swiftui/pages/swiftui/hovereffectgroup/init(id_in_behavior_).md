> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectgroup/init(id:in:behavior:)](https://developer.apple.com/documentation/swiftui/hovereffectgroup/init(id:in:behavior:))

# init(id:in:behavior:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a new [HoverEffectGroup](../hovereffectgroup.md).

## Declaration

```swift
init(id: String?, in namespace: Namespace.ID, behavior: HoverEffectGroup.Behavior = .activatesGroup)
```

## Parameters

- `id`: An optional id to give the group. If provided, the group will be uniquely identified by combining the id and the namespace.
- `namespace`: The namespace that identifies the group.
- `behavior`: How the effect will behave relative to other effects in the group.

<a id="return-value"></a>

## Return Value

A new HoverEffectGroup
