> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/symboleffectsremoved(_:)](https://developer.apple.com/documentation/swiftui/view/symboleffectsremoved(_:))

# symbolEffectsRemoved(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new view with its inherited symbol image effects either removed or left unchanged.

## Declaration

```swift
@export(implementation) nonisolated func symbolEffectsRemoved(_ isEnabled: Bool = true) -> some View

```

## Parameters

- `isEnabled`: Whether to remove inherited symbol effects or not.

<a id="return-value"></a>

## Return Value

A copy of the view with its symbol effects either removed or left unchanged.

<a id="discussion"></a>

## Discussion

The following example adds a repeating pulse effect to two symbol images, but then disables the effect on one of them:

```swift
VStack {
    Image(systemName: "bolt.slash.fill") // does not pulse
        .symbolEffectsRemoved()
    Image(systemName: "folder.fill.badge.person.crop") // pulses
}
.symbolEffect(.pulse)
```

## See Also

### Managing symbol effects

- [symbolEffect(\_:options:isActive:)](symboleffect%28__options_isactive_%29.md): Returns a new view with a symbol effect added to it.
- [symbolEffect(\_:options:value:)](symboleffect%28__options_value_%29.md): Returns a new view with a symbol effect added to it.
- [SymbolEffectTransition](../symboleffecttransition.md): Creates a transition that applies the Appear, Disappear, DrawOn or DrawOff symbol animation to symbol images within the inserted or removed view hierarchy.
