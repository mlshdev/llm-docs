> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatterntiling](https://developer.apple.com/documentation/coregraphics/cgpatterntiling)

# CGPatternTiling (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Different methods for rendering a tiled pattern.

## Declaration

```swift
enum CGPatternTiling
```

## Topics

### Constants

- [CGPatternTiling.noDistortion](cgpatterntiling/nodistortion.md): The pattern cell is not distorted when painted.The spacing between pattern cells may vary by as much as 1 devicepixel.
- [CGPatternTiling.constantSpacingMinimalDistortion](cgpatterntiling/constantspacingminimaldistortion.md): Pattern cells are spaced consistently. Thepattern cell may be distorted by as much as 1 device pixel whenthe pattern is painted.
- [CGPatternTiling.constantSpacing](cgpatterntiling/constantspacing.md): Pattern cells are spaced consistently, as with [CGPatternTiling.constantSpacingMinimalDistortion](cgpatterntiling/constantspacingminimaldistortion.md).The pattern cell may be distorted additionally to permit a moreefficient implementation.

### Initializers

- [init(rawValue:)](cgpatterntiling/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CGPatternTiling (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Different methods for rendering a tiled pattern.

## Declaration

```objectivec
enum CGPatternTiling : int32_t;
```

## Topics

### Constants

- [kCGPatternTilingNoDistortion](cgpatterntiling/nodistortion.md): The pattern cell is not distorted when painted.The spacing between pattern cells may vary by as much as 1 devicepixel.
- [kCGPatternTilingConstantSpacingMinimalDistortion](cgpatterntiling/constantspacingminimaldistortion.md): Pattern cells are spaced consistently. Thepattern cell may be distorted by as much as 1 device pixel whenthe pattern is painted.
- [kCGPatternTilingConstantSpacing](cgpatterntiling/constantspacing.md): Pattern cells are spaced consistently, as with [kCGPatternTilingConstantSpacingMinimalDistortion](cgpatterntiling/constantspacingminimaldistortion.md).The pattern cell may be distorted additionally to permit a moreefficient implementation.
