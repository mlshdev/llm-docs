> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/variablecolorsymboleffect/hideinactivelayers](https://developer.apple.com/documentation/symbols/variablecolorsymboleffect/hideinactivelayers)

# hideInactiveLayers

**Framework:** Symbols  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that hides inactive layers in a symbol-based image.

## Declaration

```swift
var hideInactiveLayers: VariableColorSymbolEffect { get }
```

<a id="Discussion"></a>

## Discussion

This effect hides inactive layers completely, rather than drawing them with reduced, but nonzero, opacity.

## See Also

### Affecting inactive layers

- [dimInactiveLayers](diminactivelayers.md): An effect that dims inactive layers in a symbol-based image.
