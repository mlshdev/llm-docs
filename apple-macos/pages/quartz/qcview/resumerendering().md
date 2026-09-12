> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/resumerendering()](https://developer.apple.com/documentation/quartz/qcview/resumerendering())

# resumeRendering() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Resumes rendering a paused composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func resumeRendering()
```

<a id="Discussion"></a>

## Discussion

You can nest calls to this method.

## See Also

### Managing Rendering

- [startRendering()](startrendering%28%29.md): Deprecated. Starts rendering the composition that is in the view.
- [isRendering()](isrendering%28%29.md): Deprecated. Checks whether a composition is rendering in the view.
- [autostartsRendering()](autostartsrendering%28%29.md): Deprecated. Checks whether the view is set to start rendering automatically.
- [setAutostartsRendering(\_:)](setautostartsrendering%28__%29.md): Deprecated. Sets whether the composition that is in the view starts rendering automatically when the view is put on the screen.
- [stopRendering()](stoprendering%28%29.md): Deprecated. Stops rendering the composition that is in the view.
- [pauseRendering()](pauserendering%28%29.md): Deprecated. Pauses rendering in the view.
- [isPausedRendering()](ispausedrendering%28%29.md): Deprecated. Returns whether or not the rendering in the view is paused.

# resumeRendering (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Resumes rendering a paused composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) resumeRendering;
```

<a id="Discussion"></a>

## Discussion

You can nest calls to this method.

## See Also

### Managing Rendering

- [startRendering](startrendering%28%29.md): Deprecated. Starts rendering the composition that is in the view.
- [isRendering](isrendering%28%29.md): Deprecated. Checks whether a composition is rendering in the view.
- [autostartsRendering](autostartsrendering%28%29.md): Deprecated. Checks whether the view is set to start rendering automatically.
- [setAutostartsRendering:](setautostartsrendering%28__%29.md): Deprecated. Sets whether the composition that is in the view starts rendering automatically when the view is put on the screen.
- [stopRendering](stoprendering%28%29.md): Deprecated. Stops rendering the composition that is in the view.
- [pauseRendering](pauserendering%28%29.md): Deprecated. Pauses rendering in the view.
- [isPausedRendering](ispausedrendering%28%29.md): Deprecated. Returns whether or not the rendering in the view is paused.
