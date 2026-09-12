> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/displaylink(target:selector:)](https://developer.apple.com/documentation/uikit/uiwindowscene/displaylink(target:selector:))

# displayLink(target:selector:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a display link targeting the display associated with this scene.

## Declaration

```swift
func displayLink(target: Any, selector sel: Selector) -> CADisplayLink?
```

## Parameters

- `target`: An object that is the target of the display link callback.
- `sel`: A selector on `target` to call when the display link fires.

<a id="return-value"></a>

## Return Value

A new display link, or `nil` only in exceptional cases where the system cannot construct a display link.

<a id="discussion"></a>

## Discussion

The returned display link is automatically retargeted when the scene moves between displays.

# displayLinkWithTarget:selector: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a display link targeting the display associated with this scene.

## Declaration

```objectivec
- (CADisplayLink *) displayLinkWithTarget:(id) target selector:(SEL) sel;
```

## Parameters

- `target`: An object that is the target of the display link callback.
- `sel`: A selector on `target` to call when the display link fires.

<a id="return-value"></a>

## Return Value

A new display link, or `nil` only in exceptional cases where the system cannot construct a display link.

<a id="discussion"></a>

## Discussion

The returned display link is automatically retargeted when the scene moves between displays.
