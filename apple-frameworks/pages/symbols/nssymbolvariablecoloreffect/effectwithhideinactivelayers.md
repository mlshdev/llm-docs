> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/symbols/nssymbolvariablecoloreffect/effectwithhideinactivelayers

# effectWithHideInactiveLayers

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that hides inactive layers in a symbol-based image.

## Declaration

```objectivec
- (instancetype) effectWithHideInactiveLayers;
```

<a id="return-value"></a>

## Return Value

A copy of the symbol effect options that hides inactive layers.

<a id="Discussion"></a>

## Discussion

This effect hides inactive layers completely, rather than drawing them with reduced, but nonzero, opacity.

## See Also

### Affecting inactive layers

- [effectWithDimInactiveLayers](effectwithdiminactivelayers.md): An effect that dims inactive layers in a symbol-based image.
