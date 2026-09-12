> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/touches(for:)-9neb4](https://developer.apple.com/documentation/uikit/uievent/touches(for:)-9neb4)

# touches(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the touch objects from the event that belong to the specified given view.

## Declaration

```swift
func touches(for view: UIView) -> Set<UITouch>?
```

## Parameters

- `view`: The [UIView](../uiview.md) object in which the touches originally occurred.

<a id="return-value"></a>

## Return Value

A set of [UITouch](../uitouch.md) objects representing the touches that belong to the specified view.

## See Also

### Getting the touches for an event

- [allTouches](alltouches.md): All touches associated with the event.
- [touches(for:)](touches%28for_%29-767rm.md): Returns the touch objects from the event that belong to the specified window.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
- [predictedTouches(for:)](predictedtouches%28for_%29.md): Returns an array of touches that are predicted to occur for the specified touch.

# touchesForView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the touch objects from the event that belong to the specified given view.

## Declaration

```objectivec
- (NSSet<UITouch *> *) touchesForView:(UIView *) view;
```

## Parameters

- `view`: The [UIView](../uiview.md) object in which the touches originally occurred.

<a id="return-value"></a>

## Return Value

A set of [UITouch](../uitouch.md) objects representing the touches that belong to the specified view.

## See Also

### Getting the touches for an event

- [allTouches](alltouches.md): All touches associated with the event.
- [touchesForWindow:](touches%28for_%29-767rm.md): Returns the touch objects from the event that belong to the specified window.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
- [predictedTouchesForTouch:](predictedtouches%28for_%29.md): Returns an array of touches that are predicted to occur for the specified touch.
