> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatterntiling/constantspacing](https://developer.apple.com/documentation/coregraphics/cgpatterntiling/constantspacing)

# CGPatternTiling.constantSpacing (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Pattern cells are spaced consistently, as with [CGPatternTiling.constantSpacingMinimalDistortion](constantspacingminimaldistortion.md).The pattern cell may be distorted additionally to permit a moreefficient implementation.

## Declaration

```swift
case constantSpacing
```

## See Also

### Constants

- [CGPatternTiling.noDistortion](nodistortion.md): The pattern cell is not distorted when painted.The spacing between pattern cells may vary by as much as 1 devicepixel.
- [CGPatternTiling.constantSpacingMinimalDistortion](constantspacingminimaldistortion.md): Pattern cells are spaced consistently. Thepattern cell may be distorted by as much as 1 device pixel whenthe pattern is painted.

# kCGPatternTilingConstantSpacing (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Pattern cells are spaced consistently, as with [kCGPatternTilingConstantSpacingMinimalDistortion](constantspacingminimaldistortion.md).The pattern cell may be distorted additionally to permit a moreefficient implementation.

## Declaration

```objectivec
kCGPatternTilingConstantSpacing
```

## See Also

### Constants

- [kCGPatternTilingNoDistortion](nodistortion.md): The pattern cell is not distorted when painted.The spacing between pattern cells may vary by as much as 1 devicepixel.
- [kCGPatternTilingConstantSpacingMinimalDistortion](constantspacingminimaldistortion.md): Pattern cells are spaced consistently. Thepattern cell may be distorted by as much as 1 device pixel whenthe pattern is painted.
