> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymbolvariablecoloreffect/effectwithdiminactivelayers](https://developer.apple.com/documentation/symbols/nssymbolvariablecoloreffect/effectwithdiminactivelayers)

# effectWithDimInactiveLayers

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that dims inactive layers in a symbol-based image.

## Declaration

```objectivec
- (instancetype) effectWithDimInactiveLayers;
```

<a id="return-value"></a>

## Return Value

A copy of the symbol effect options that dims inactive layers.

<a id="Discussion"></a>

## Discussion

This effect draws inactive layers with reduced, but nonzero, opacity.

## See Also

### Affecting inactive layers

- [effectWithHideInactiveLayers](effectwithhideinactivelayers.md): An effect that hides inactive layers in a symbol-based image.
