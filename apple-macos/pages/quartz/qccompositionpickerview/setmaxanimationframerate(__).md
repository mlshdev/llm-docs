> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionpickerview/setmaxanimationframerate(_:)](https://developer.apple.com/documentation/quartz/qccompositionpickerview/setmaxanimationframerate(_:))

# setMaxAnimationFrameRate(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the maximum frame rate for animating compositions.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setMaxAnimationFrameRate(_ maxFPS: Float)
```

## Parameters

- `maxFPS`: A frame rate in frames per second. Pass `0.0` to specify no limit to the maximum value.

## See Also

### Managing Animation

- [startAnimation(\_:)](startanimation%28__%29.md): Deprecated. Starts animating the composition in the composition picker view.
- [stopAnimation(\_:)](stopanimation%28__%29.md): Deprecated. Stops animating the composition that is currently animating in the composition picker view.
- [isAnimating()](isanimating%28%29.md): Deprecated. Returns whether or not the composition picker view is currently animating its composition.
- [maxAnimationFrameRate()](maxanimationframerate%28%29.md): Deprecated. Retrieves the maximum frame rate for animating compositions.

# setMaxAnimationFrameRate: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the maximum frame rate for animating compositions.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) setMaxAnimationFrameRate:(float) maxFPS;
```

## Parameters

- `maxFPS`: A frame rate in frames per second. Pass `0.0` to specify no limit to the maximum value.

## See Also

### Managing Animation

- [startAnimation:](startanimation%28__%29.md): Deprecated. Starts animating the composition in the composition picker view.
- [stopAnimation:](stopanimation%28__%29.md): Deprecated. Stops animating the composition that is currently animating in the composition picker view.
- [isAnimating](isanimating%28%29.md): Deprecated. Returns whether or not the composition picker view is currently animating its composition.
- [maxAnimationFrameRate](maxanimationframerate%28%29.md): Deprecated. Retrieves the maximum frame rate for animating compositions.
