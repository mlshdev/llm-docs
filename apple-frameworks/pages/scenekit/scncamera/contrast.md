> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/contrast](https://developer.apple.com/documentation/scenekit/scncamera/contrast)

# contrast (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An adjustment factor to apply to the overall visual contrast of the rendered scene.

## Declaration

```swift
var contrast: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A value of 0.0 (the default) leaves the rendered scene unchanged. Positive values increase contrast between bright and dark areas, and negative values reduce contrast, shifting the rendered scene towards a uniform gray.

To enable this behavior, you must first enable the [wantsHDR](wantshdr.md) setting.

## See Also

### Adjusting Rendered Colors

- [saturation](saturation.md): An adjustment factor to apply to the overall color saturation of the rendered scene.
- [colorGrading](colorgrading.md): A texture for applying color grading effects to the entire rendered scene.

# contrast (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An adjustment factor to apply to the overall visual contrast of the rendered scene.

## Declaration

```objectivec
@property (nonatomic) CGFloat contrast;
```

<a id="Discussion"></a>

## Discussion

A value of 0.0 (the default) leaves the rendered scene unchanged. Positive values increase contrast between bright and dark areas, and negative values reduce contrast, shifting the rendered scene towards a uniform gray.

To enable this behavior, you must first enable the [wantsHDR](wantshdr.md) setting.

## See Also

### Adjusting Rendered Colors

- [saturation](saturation.md): An adjustment factor to apply to the overall color saturation of the rendered scene.
- [colorGrading](colorgrading.md): A texture for applying color grading effects to the entire rendered scene.
