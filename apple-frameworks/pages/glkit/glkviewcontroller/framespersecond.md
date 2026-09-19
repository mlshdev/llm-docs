> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/glkit/glkviewcontroller/framespersecond

# framesPerSecond (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The actual rate that the view controller attempts to call the view to update its contents.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var framesPerSecond: Int { get }
```

<a id="Discussion"></a>

## Discussion

The view controller attempts to maintain this frame rate, but it may still drop frames if the per-frame processing performed by your application takes more time than the time between frames.

## See Also

### Configuring the Frame rate

- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. The rate you want the view controller to call the view to update the contents of the view.

# framesPerSecond (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The actual rate that the view controller attempts to call the view to update its contents.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger framesPerSecond;
```

<a id="Discussion"></a>

## Discussion

The view controller attempts to maintain this frame rate, but it may still drop frames if the per-frame processing performed by your application takes more time than the time between frames.

## See Also

### Configuring the Frame rate

- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. The rate you want the view controller to call the view to update the contents of the view.
