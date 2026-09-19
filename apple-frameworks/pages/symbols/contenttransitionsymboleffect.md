> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/symbols/contenttransitionsymboleffect

# ContentTransitionSymbolEffect

**Framework:** Symbols  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that animates between symbols or different configurations of the same symbol.

## Declaration

```swift
protocol ContentTransitionSymbolEffect
```

## Relationships

### Conforming Types

- [AutomaticSymbolEffect](automaticsymboleffect.md)
- [ReplaceSymbolEffect](replacesymboleffect.md)
- [ReplaceSymbolEffect.MagicReplace](replacesymboleffect/magicreplace.md)

## See Also

### Symbol effect protocols

- [SymbolEffect](symboleffect.md): A presentation effect that you apply to a symbol-based image.
- [DiscreteSymbolEffect](discretesymboleffect.md): An effect that performs a transient animation.
- [IndefiniteSymbolEffect](indefinitesymboleffect.md): An animation that continually affects a symbol until it’s disabled or removed.
- [TransitionSymbolEffect](transitionsymboleffect.md): An effect that animates a symbol in or out.
