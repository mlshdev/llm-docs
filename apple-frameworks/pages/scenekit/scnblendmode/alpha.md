> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnblendmode/alpha](https://developer.apple.com/documentation/scenekit/scnblendmode/alpha)

# SCNBlendMode.alpha (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Blend by multiplying source and destination color values by their corresponding alpha values.

## Declaration

```swift
case alpha
```

<a id="Discussion"></a>

## Discussion

This mode is the default value of the [blendMode](../scnmaterial/blendmode.md) property.

## See Also

### Constants

- [SCNBlendMode.add](add.md): Blend by adding the source color to the destination color.
- [SCNBlendMode.subtract](subtract.md): Blend by subtracting the source color from the destination color.
- [SCNBlendMode.multiply](multiply.md): Blend by multiplying the source color with the background color.
- [SCNBlendMode.screen](screen.md): Blend by multiplying the inverse of the source color with the inverse of the destination color.
- [SCNBlendMode.replace](replace.md): Blend by replacing the destination color with the source color, ignoring alpha.

# SCNBlendModeAlpha (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blend by multiplying source and destination color values by their corresponding alpha values.

## Declaration

```objectivec
SCNBlendModeAlpha
```

<a id="Discussion"></a>

## Discussion

This mode is the default value of the [blendMode](../scnmaterial/blendmode.md) property.

## See Also

### Constants

- [SCNBlendModeAdd](add.md): Blend by adding the source color to the destination color.
- [SCNBlendModeSubtract](subtract.md): Blend by subtracting the source color from the destination color.
- [SCNBlendModeMultiply](multiply.md): Blend by multiplying the source color with the background color.
- [SCNBlendModeScreen](screen.md): Blend by multiplying the inverse of the source color with the inverse of the destination color.
- [SCNBlendModeReplace](replace.md): Blend by replacing the destination color with the source color, ignoring alpha.
