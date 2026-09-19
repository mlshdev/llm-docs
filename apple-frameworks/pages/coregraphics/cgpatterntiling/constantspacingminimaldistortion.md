> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpatterntiling/constantspacingminimaldistortion

# CGPatternTiling.constantSpacingMinimalDistortion (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Pattern cells are spaced consistently. Thepattern cell may be distorted by as much as 1 device pixel whenthe pattern is painted.

## Declaration

```swift
case constantSpacingMinimalDistortion
```

## See Also

### Constants

- [CGPatternTiling.noDistortion](nodistortion.md): The pattern cell is not distorted when painted.The spacing between pattern cells may vary by as much as 1 devicepixel.
- [CGPatternTiling.constantSpacing](constantspacing.md): Pattern cells are spaced consistently, as with [CGPatternTiling.constantSpacingMinimalDistortion](constantspacingminimaldistortion.md).The pattern cell may be distorted additionally to permit a moreefficient implementation.

# kCGPatternTilingConstantSpacingMinimalDistortion (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Pattern cells are spaced consistently. Thepattern cell may be distorted by as much as 1 device pixel whenthe pattern is painted.

## Declaration

```objectivec
kCGPatternTilingConstantSpacingMinimalDistortion
```

## See Also

### Constants

- [kCGPatternTilingNoDistortion](nodistortion.md): The pattern cell is not distorted when painted.The spacing between pattern cells may vary by as much as 1 devicepixel.
- [kCGPatternTilingConstantSpacing](constantspacing.md): Pattern cells are spaced consistently, as with [kCGPatternTilingConstantSpacingMinimalDistortion](constantspacingminimaldistortion.md).The pattern cell may be distorted additionally to permit a moreefficient implementation.
