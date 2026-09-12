> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionparameterview/compositionrenderer()](https://developer.apple.com/documentation/quartz/qccompositionparameterview/compositionrenderer())

# compositionRenderer() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the renderer object associated with the composition parameter view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func compositionRenderer() -> (any QCCompositionRenderer)!
```

<a id="return-value"></a>

## Return Value

A renderer object or `nil`, if the composition parameter view is not set to a renderer object.

## See Also

### Getting and Setting the Renderer

- [setCompositionRenderer(\_:)](setcompositionrenderer%28__%29.md): Deprecated. Sets the composition parameter view for editing the input parameters of the provided renderer object.

# compositionRenderer (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the renderer object associated with the composition parameter view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id<QCCompositionRenderer>) compositionRenderer;
```

<a id="return-value"></a>

## Return Value

A renderer object or `nil`, if the composition parameter view is not set to a renderer object.

## See Also

### Getting and Setting the Renderer

- [setCompositionRenderer:](setcompositionrenderer%28__%29.md): Deprecated. Sets the composition parameter view for editing the input parameters of the provided renderer object.
