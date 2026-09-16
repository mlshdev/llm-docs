> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/hovereffectgroup/init(_:behavior:)

# init(\_:behavior:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a new [HoverEffectGroup](../hovereffectgroup.md) from a `Namespace.ID`.

## Declaration

```swift
init(_ namespace: Namespace.ID, behavior: HoverEffectGroup.Behavior = .activatesGroup)
```

## Parameters

- `namespace`: The namespace that identifies the group.
- `behavior`: How the effect will behave relative to other effects in the group.

<a id="return-value"></a>

## Return Value

A new HoverEffectGroup
