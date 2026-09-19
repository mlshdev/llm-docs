> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/symbols/nssymbolvariablecoloreffect/effectwithcumulative

# effectWithCumulative

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that enables each layer of a symbol-based image in sequence.

## Declaration

```objectivec
- (instancetype) effectWithCumulative;
```

<a id="return-value"></a>

## Return Value

A copy of the symbol effect options that uses the `cumulative` animation.

<a id="Discussion"></a>

## Discussion

This effect enables each successive variable layer, and the layer remains enabled until the end of the animation cycle. This effect cancels the [iterative](../variablecolorsymboleffect/iterative.md) variant.

## See Also

### Controlling fill style

- [effectWithIterative](effectwithiterative.md): An effect that momentarily enables each layer of a symbol-based image in sequence.
