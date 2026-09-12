> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidepthoffield](https://developer.apple.com/documentation/coreimage/cidepthoffield)

# CIDepthOfField (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a depth-of-field filter.

## Declaration

```swift
protocol CIDepthOfField : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](cidepthoffield/inputimage.md): The image to use as an input image.
- [point0](cidepthoffield/point0.md): The first point in the focused region of the output image.
- [point1](cidepthoffield/point1.md): The second point in the focused region of the output image.
- [radius](cidepthoffield/radius.md): The distance from the center of the effect.
- [saturation](cidepthoffield/saturation.md): The amount to adjust the saturation by.
- [unsharpMaskIntensity](cidepthoffield/unsharpmaskintensity.md): The intensity of the unsharp mask effect applied to the in-focus area.
- [unsharpMaskRadius](cidepthoffield/unsharpmaskradius.md): The radius of the unsharp mask effect applied to the in-focus area.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [depthOfField()](cifilter-swift.class/depthoffield%28%29.md): Simulates a depth of field effect.

### Protocols

- [CIBlendWithMask](ciblendwithmask.md): The properties you use to configure a blend with mask filter.
- [CIBloom](cibloom.md): The properties you use to configure a bloom filter.
- [CICannyEdgeDetector](cicannyedgedetector.md)
- [CIComicEffect](cicomiceffect.md): The properties you use to configure a comic effect filter.
- [CICoreMLModel](cicoremlmodel.md): The properties you use to configure a Core ML model filter.
- [CICrystallize](cicrystallize.md): The properties you use to configure a crystalize filter.
- [CIEdgeWork](ciedgework.md): The properties you use to configure an edge-work filter.
- [CIEdges](ciedges.md): The properties you use to configure an edges filter.
- [CIGaborGradients](cigaborgradients.md): The properties you use to configure a Gabor gradients filter.
- [CIGloom](cigloom.md): The properties you use to configure a gloom filter.
- [CIHeightFieldFromMask](ciheightfieldfrommask.md): The properties you use to configure a height-field-from-mask filter.
- [CIHexagonalPixellate](cihexagonalpixellate.md): The properties you use to configure a hexagonal pixellate filter.
- [CIHighlightShadowAdjust](cihighlightshadowadjust.md): The properties you use to configure a highlight-shadow adjust filter.
- [CILineOverlay](cilineoverlay.md): The properties you use to configure a line overlay filter.
- [CIMix](cimix.md): The properties you use to configure a mix filter.

# CIDepthOfField (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a depth-of-field filter.

## Declaration

```objectivec
@protocol CIDepthOfField <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](cidepthoffield/inputimage.md): The image to use as an input image.
- [point0](cidepthoffield/point0.md): The first point in the focused region of the output image.
- [point1](cidepthoffield/point1.md): The second point in the focused region of the output image.
- [radius](cidepthoffield/radius.md): The distance from the center of the effect.
- [saturation](cidepthoffield/saturation.md): The amount to adjust the saturation by.
- [unsharpMaskIntensity](cidepthoffield/unsharpmaskintensity.md): The intensity of the unsharp mask effect applied to the in-focus area.
- [unsharpMaskRadius](cidepthoffield/unsharpmaskradius.md): The radius of the unsharp mask effect applied to the in-focus area.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [depthOfFieldFilter](cifilter-swift.class/depthoffield%28%29.md): Simulates a depth of field effect.

### Protocols

- [CIBlendWithMask](ciblendwithmask.md): The properties you use to configure a blend with mask filter.
- [CIBloom](cibloom.md): The properties you use to configure a bloom filter.
- [CICannyEdgeDetector](cicannyedgedetector.md)
- [CIComicEffect](cicomiceffect.md): The properties you use to configure a comic effect filter.
- [CICoreMLModel](cicoremlmodel.md): The properties you use to configure a Core ML model filter.
- [CICrystallize](cicrystallize.md): The properties you use to configure a crystalize filter.
- [CIEdgeWork](ciedgework.md): The properties you use to configure an edge-work filter.
- [CIEdges](ciedges.md): The properties you use to configure an edges filter.
- [CIGaborGradients](cigaborgradients.md): The properties you use to configure a Gabor gradients filter.
- [CIGloom](cigloom.md): The properties you use to configure a gloom filter.
- [CIHeightFieldFromMask](ciheightfieldfrommask.md): The properties you use to configure a height-field-from-mask filter.
- [CIHexagonalPixellate](cihexagonalpixellate.md): The properties you use to configure a hexagonal pixellate filter.
- [CIHighlightShadowAdjust](cihighlightshadowadjust.md): The properties you use to configure a highlight-shadow adjust filter.
- [CILineOverlay](cilineoverlay.md): The properties you use to configure a line overlay filter.
- [CIMix](cimix.md): The properties you use to configure a mix filter.
