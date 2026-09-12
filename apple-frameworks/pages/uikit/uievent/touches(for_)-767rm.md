> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/touches(for:)-767rm](https://developer.apple.com/documentation/uikit/uievent/touches(for:)-767rm)

# touches(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the touch objects from the event that belong to the specified window.

## Declaration

```swift
func touches(for window: UIWindow) -> Set<UITouch>?
```

## Parameters

- `window`: The [UIWindow](../uiwindow.md) object in which the touches originally occurred.

<a id="return-value"></a>

## Return Value

A set of [UITouch](../uitouch.md) objects representing the touches that belong to the specified window.

## See Also

### Getting the touches for an event

- [allTouches](alltouches.md): All touches associated with the event.
- [touches(for:)](touches%28for_%29-9neb4.md): Returns the touch objects from the event that belong to the specified given view.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
- [predictedTouches(for:)](predictedtouches%28for_%29.md): Returns an array of touches that are predicted to occur for the specified touch.

# touchesForWindow: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the touch objects from the event that belong to the specified window.

## Declaration

```objectivec
- (NSSet<UITouch *> *) touchesForWindow:(UIWindow *) window;
```

## Parameters

- `window`: The [UIWindow](../uiwindow.md) object in which the touches originally occurred.

<a id="return-value"></a>

## Return Value

A set of [UITouch](../uitouch.md) objects representing the touches that belong to the specified window.

## See Also

### Getting the touches for an event

- [allTouches](alltouches.md): All touches associated with the event.
- [touchesForView:](touches%28for_%29-9neb4.md): Returns the touch objects from the event that belong to the specified given view.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
- [predictedTouchesForTouch:](predictedtouches%28for_%29.md): Returns an array of touches that are predicted to occur for the specified touch.
