> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/displaylink(withtarget:selector:)](https://developer.apple.com/documentation/uikit/uiscreen/displaylink(withtarget:selector:))

# displayLink(withTarget:selector:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0)

Returns a display link object for the current screen.

> Use the equivalent display link API on UIWindowScene

## Declaration

```swift
func displayLink(withTarget target: Any, selector sel: Selector) -> CADisplayLink?
```

## Parameters

- `target`: An object to be notified when the screen should be updated.
- `sel`: The method of `target` to call. This selector must have the following signature:

  ```objc
  - (void)selector:(CADisplayLink *)sender;
  ```

<a id="return-value"></a>

## Return Value

A newly constructed display link object.

<a id="Discussion"></a>

## Discussion

You use display link objects to synchronize your drawing code to the screen’s refresh rate. The newly constructed display link retains the target.

## See Also

### Getting a display link

- [maximumFramesPerSecond](maximumframespersecond.md): The maximum number of frames per second a screen can render.

# displayLinkWithTarget:selector: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0)

Returns a display link object for the current screen.

> Use the equivalent display link API on UIWindowScene

## Declaration

```objectivec
- (CADisplayLink *) displayLinkWithTarget:(id) target selector:(SEL) sel;
```

## Parameters

- `target`: An object to be notified when the screen should be updated.
- `sel`: The method of `target` to call. This selector must have the following signature:

  ```objc
  - (void)selector:(CADisplayLink *)sender;
  ```

<a id="return-value"></a>

## Return Value

A newly constructed display link object.

<a id="Discussion"></a>

## Discussion

You use display link objects to synchronize your drawing code to the screen’s refresh rate. The newly constructed display link retains the target.

## See Also

### Getting a display link

- [maximumFramesPerSecond](maximumframespersecond.md): The maximum number of frames per second a screen can render.
