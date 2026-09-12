> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/variablecolorsymboleffect/iterative](https://developer.apple.com/documentation/symbols/variablecolorsymboleffect/iterative)

# iterative

**Framework:** Symbols  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that momentarily enables each layer of a symbol-based image in sequence.

## Declaration

```swift
var iterative: VariableColorSymbolEffect { get }
```

<a id="Discussion"></a>

## Discussion

This effect enables each successive variable layer for a short period of time, and then disables the layer until the animation cycle ends. This effect cancels the [cumulative](cumulative.md) variant.

## See Also

### Controlling fill style

- [cumulative](cumulative.md): An effect that enables each layer of a symbol-based image in sequence.
