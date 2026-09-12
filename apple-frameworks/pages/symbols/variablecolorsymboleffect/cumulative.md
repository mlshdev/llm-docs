> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/variablecolorsymboleffect/cumulative](https://developer.apple.com/documentation/symbols/variablecolorsymboleffect/cumulative)

# cumulative

**Framework:** Symbols  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that enables each layer of a symbol-based image in sequence.

## Declaration

```swift
var cumulative: VariableColorSymbolEffect { get }
```

<a id="Discussion"></a>

## Discussion

This effect enables each successive variable layer, and the layer remains enabled until the end of the animation cycle. This effect cancels the [iterative](iterative.md) variant.

## See Also

### Controlling fill style

- [iterative](iterative.md): An effect that momentarily enables each layer of a symbol-based image in sequence.
