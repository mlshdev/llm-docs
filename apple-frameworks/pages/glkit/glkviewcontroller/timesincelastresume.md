> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewcontroller/timesincelastresume](https://developer.apple.com/documentation/glkit/glkviewcontroller/timesincelastresume)

# timeSinceLastResume (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The amount of time that has passed since the last time the view controller resumed sending update events.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var timeSinceLastResume: TimeInterval { get }
```

## See Also

### Obtaining Information About View Updates

- [framesDisplayed](framesdisplayed.md): Deprecated. The number of frame updates that have been sent by the view controller since it was created.
- [timeSinceFirstResume](timesincefirstresume.md): Deprecated. The amount of time that has passed since first time the view controller resumed sending update events.
- [timeSinceLastUpdate](timesincelastupdate.md): Deprecated. The amount of time that has passed since the last time the view controller called the delegate’s [glkViewControllerUpdate(\_:)](../glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md) method.
- [timeSinceLastDraw](timesincelastdraw.md): Deprecated. The amount of time that has passed since the last time the view controller called the view’s [display()](../glkview/display%28%29.md) method.

# timeSinceLastResume (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The amount of time that has passed since the last time the view controller resumed sending update events.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timeSinceLastResume;
```

## See Also

### Obtaining Information About View Updates

- [framesDisplayed](framesdisplayed.md): Deprecated. The number of frame updates that have been sent by the view controller since it was created.
- [timeSinceFirstResume](timesincefirstresume.md): Deprecated. The amount of time that has passed since first time the view controller resumed sending update events.
- [timeSinceLastUpdate](timesincelastupdate.md): Deprecated. The amount of time that has passed since the last time the view controller called the delegate’s [glkViewControllerUpdate:](../glkviewcontrollerdelegate/glkviewcontrollerupdate%28__%29.md) method.
- [timeSinceLastDraw](timesincelastdraw.md): Deprecated. The amount of time that has passed since the last time the view controller called the view’s [display](../glkview/display%28%29.md) method.
