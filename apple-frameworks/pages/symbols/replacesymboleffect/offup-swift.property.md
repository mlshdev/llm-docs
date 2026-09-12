> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/replacesymboleffect/offup-swift.property](https://developer.apple.com/documentation/symbols/replacesymboleffect/offup-swift.property)

# offUp

**Framework:** Symbols  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that replaces a symbol by removing it, and scaling a different symbol up.

## Declaration

```swift
var offUp: ReplaceSymbolEffect { get }
```

<a id="Discussion"></a>

## Discussion

The initial symbol is removed with no animation, and the new symbol scales up as it’s added.

## See Also

### Accessing symbol effects

- [downUp](downup-swift.property.md): An effect that replaces a symbol by scaling it down, and scaling a different symbol up.
- [upUp](upup-swift.property.md): An effect that replaces a symbol by scaling it up, and scaling a different symbol up.
