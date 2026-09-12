> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnblendmode/add](https://developer.apple.com/documentation/scenekit/scnblendmode/add)

# SCNBlendMode.add (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Blend by adding the source color to the destination color.

## Declaration

```swift
case add
```

<a id="Discussion"></a>

## Discussion

This mode results in a brightening effect that can be useful for making objects appear to glow relative to their surroundings.

## See Also

### Constants

- [SCNBlendMode.alpha](alpha.md): Blend by multiplying source and destination color values by their corresponding alpha values.
- [SCNBlendMode.subtract](subtract.md): Blend by subtracting the source color from the destination color.
- [SCNBlendMode.multiply](multiply.md): Blend by multiplying the source color with the background color.
- [SCNBlendMode.screen](screen.md): Blend by multiplying the inverse of the source color with the inverse of the destination color.
- [SCNBlendMode.replace](replace.md): Blend by replacing the destination color with the source color, ignoring alpha.

# SCNBlendModeAdd (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blend by adding the source color to the destination color.

## Declaration

```objectivec
SCNBlendModeAdd
```

<a id="Discussion"></a>

## Discussion

This mode results in a brightening effect that can be useful for making objects appear to glow relative to their surroundings.

## See Also

### Constants

- [SCNBlendModeAlpha](alpha.md): Blend by multiplying source and destination color values by their corresponding alpha values.
- [SCNBlendModeSubtract](subtract.md): Blend by subtracting the source color from the destination color.
- [SCNBlendModeMultiply](multiply.md): Blend by multiplying the source color with the background color.
- [SCNBlendModeScreen](screen.md): Blend by multiplying the inverse of the source color with the inverse of the destination color.
- [SCNBlendModeReplace](replace.md): Blend by replacing the destination color with the source color, ignoring alpha.
