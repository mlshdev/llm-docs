> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymbolvariablecoloreffect/effectwithiterative](https://developer.apple.com/documentation/symbols/nssymbolvariablecoloreffect/effectwithiterative)

# effectWithIterative

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that momentarily enables each layer of a symbol-based image in sequence.

## Declaration

```objectivec
- (instancetype) effectWithIterative;
```

<a id="return-value"></a>

## Return Value

A copy of the symbol effect options that uses the `iterative` animation.

<a id="Discussion"></a>

## Discussion

This effect enables each successive variable layer for a short period of time, and then disables the layer until the animation cycle ends. This effect cancels the [cumulative](../variablecolorsymboleffect/cumulative.md) variant.

## See Also

### Controlling fill style

- [effectWithCumulative](effectwithcumulative.md): An effect that enables each layer of a symbol-based image in sequence.
