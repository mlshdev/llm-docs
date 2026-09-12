> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/replacesymboleffect/magic(fallback:)](https://developer.apple.com/documentation/symbols/replacesymboleffect/magic(fallback:))

# magic(fallback:)

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an effect preferring MagicReplace and a configured ReplaceEffect if MagicReplace is not possible.

## Declaration

```swift
func magic(fallback: ReplaceSymbolEffect) -> ReplaceSymbolEffect.MagicReplace
```
