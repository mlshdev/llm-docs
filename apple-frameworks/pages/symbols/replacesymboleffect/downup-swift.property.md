> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/replacesymboleffect/downup-swift.property](https://developer.apple.com/documentation/symbols/replacesymboleffect/downup-swift.property)

# downUp

**Framework:** Symbols  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that replaces a symbol by scaling it down, and scaling a different symbol up.

## Declaration

```swift
var downUp: ReplaceSymbolEffect { get }
```

<a id="Discussion"></a>

## Discussion

The initial symbol scales down as it’s removed, and the new symbol scales up as it’s added.

## See Also

### Accessing symbol effects

- [offUp](offup-swift.property.md): An effect that replaces a symbol by removing it, and scaling a different symbol up.
- [upUp](upup-swift.property.md): An effect that replaces a symbol by scaling it up, and scaling a different symbol up.
