> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymbolpulseeffect/effectwithbylayer](https://developer.apple.com/documentation/symbols/nssymbolpulseeffect/effectwithbylayer)

# effectWithByLayer

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A copy of the effect requesting an animation that pulses only the layers marked to always pulse.

## Declaration

```objectivec
- (instancetype) effectWithByLayer;
```

<a id="return-value"></a>

## Return Value

A copy of the effect options that pulses only the layers marked to always pulse.

## See Also

### Determining effect scope

- [effectWithWholeSymbol](effectwithwholesymbol.md): A copy of the effect requesting an animation that pulses all layers simultaneously.
