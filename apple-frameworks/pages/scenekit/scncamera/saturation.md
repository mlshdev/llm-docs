> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/saturation](https://developer.apple.com/documentation/scenekit/scncamera/saturation)

# saturation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An adjustment factor to apply to the overall color saturation of the rendered scene.

## Declaration

```swift
var saturation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `1.0` (the default) leaves scene colors unchanged. Greater values result in oversaturated colors, and a value of `0.0` makes the rendered scene entirely grayscale.

To enable this behavior, you must first enable the [wantsHDR](wantshdr.md) setting.

## See Also

### Adjusting Rendered Colors

- [contrast](contrast.md): An adjustment factor to apply to the overall visual contrast of the rendered scene.
- [colorGrading](colorgrading.md): A texture for applying color grading effects to the entire rendered scene.

# saturation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An adjustment factor to apply to the overall color saturation of the rendered scene.

## Declaration

```objectivec
@property (nonatomic) CGFloat saturation;
```

<a id="Discussion"></a>

## Discussion

A value of `1.0` (the default) leaves scene colors unchanged. Greater values result in oversaturated colors, and a value of `0.0` makes the rendered scene entirely grayscale.

To enable this behavior, you must first enable the [wantsHDR](wantshdr.md) setting.

## See Also

### Adjusting Rendered Colors

- [contrast](contrast.md): An adjustment factor to apply to the overall visual contrast of the rendered scene.
- [colorGrading](colorgrading.md): A texture for applying color grading effects to the entire rendered scene.
