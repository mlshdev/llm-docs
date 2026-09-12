> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/startrendering()](https://developer.apple.com/documentation/quartz/qcview/startrendering())

# startRendering() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Starts rendering the composition that is in the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func startRendering() -> Bool
```

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if the composition fails to start rendering; [true](https://developer.apple.com/documentation/swift/true) otherwise.

## See Also

### Managing Rendering

- [isRendering()](isrendering%28%29.md): Deprecated. Checks whether a composition is rendering in the view.
- [autostartsRendering()](autostartsrendering%28%29.md): Deprecated. Checks whether the view is set to start rendering automatically.
- [setAutostartsRendering(\_:)](setautostartsrendering%28__%29.md): Deprecated. Sets whether the composition that is in the view starts rendering automatically when the view is put on the screen.
- [stopRendering()](stoprendering%28%29.md): Deprecated. Stops rendering the composition that is in the view.
- [pauseRendering()](pauserendering%28%29.md): Deprecated. Pauses rendering in the view.
- [isPausedRendering()](ispausedrendering%28%29.md): Deprecated. Returns whether or not the rendering in the view is paused.
- [resumeRendering()](resumerendering%28%29.md): Deprecated. Resumes rendering a paused composition.

# startRendering (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Starts rendering the composition that is in the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) startRendering;
```

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if the composition fails to start rendering; [true](https://developer.apple.com/documentation/swift/true) otherwise.

## See Also

### Managing Rendering

- [isRendering](isrendering%28%29.md): Deprecated. Checks whether a composition is rendering in the view.
- [autostartsRendering](autostartsrendering%28%29.md): Deprecated. Checks whether the view is set to start rendering automatically.
- [setAutostartsRendering:](setautostartsrendering%28__%29.md): Deprecated. Sets whether the composition that is in the view starts rendering automatically when the view is put on the screen.
- [stopRendering](stoprendering%28%29.md): Deprecated. Stops rendering the composition that is in the view.
- [pauseRendering](pauserendering%28%29.md): Deprecated. Pauses rendering in the view.
- [isPausedRendering](ispausedrendering%28%29.md): Deprecated. Returns whether or not the rendering in the view is paused.
- [resumeRendering](resumerendering%28%29.md): Deprecated. Resumes rendering a paused composition.
