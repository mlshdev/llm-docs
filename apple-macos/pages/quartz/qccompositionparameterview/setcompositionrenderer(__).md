> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionparameterview/setcompositionrenderer(_:)](https://developer.apple.com/documentation/quartz/qccompositionparameterview/setcompositionrenderer(_:))

# setCompositionRenderer(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the composition parameter view for editing the input parameters of the provided renderer object.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setCompositionRenderer(_ renderer: (any QCCompositionRenderer)!)
```

## Parameters

- `renderer`: A `QCCompositionRenderer` object, either [QCView](../qcview.md), [QCRenderer](../qcrenderer.md), or [QCCompositionLayer](../qccompositionlayer.md). Pass `nil` to unset this renderer.

<a id="Discussion"></a>

## Discussion

If the renderer is a [QCView](../qcview.md) object, the view track the composition.

## See Also

### Getting and Setting the Renderer

- [compositionRenderer()](compositionrenderer%28%29.md): Deprecated. Returns the renderer object associated with the composition parameter view.

# setCompositionRenderer: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the composition parameter view for editing the input parameters of the provided renderer object.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) setCompositionRenderer:(id<QCCompositionRenderer>) renderer;
```

## Parameters

- `renderer`: A `QCCompositionRenderer` object, either [QCView](../qcview.md), [QCRenderer](../qcrenderer.md), or [QCCompositionLayer](../qccompositionlayer.md). Pass `nil` to unset this renderer.

<a id="Discussion"></a>

## Discussion

If the renderer is a [QCView](../qcview.md) object, the view track the composition.

## See Also

### Getting and Setting the Renderer

- [compositionRenderer](compositionrenderer%28%29.md): Deprecated. Returns the renderer object associated with the composition parameter view.
