> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/alltouches](https://developer.apple.com/documentation/uikit/uievent/alltouches)

# allTouches (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

All touches associated with the event.

## Declaration

```swift
var allTouches: Set<UITouch>? { get }
```

<a id="return-value"></a>

## Return Value

A set of [UITouch](../uitouch.md) objects representing all touches associated with the event.

<a id="Discussion"></a>

## Discussion

If the touches of the event originate in different views and windows, the [UITouch](../uitouch.md) objects obtained from this method will be associated with different responder objects.

## See Also

### Getting the touches for an event

- [touches(for:)](touches%28for_%29-9neb4.md): Returns the touch objects from the event that belong to the specified given view.
- [touches(for:)](touches%28for_%29-767rm.md): Returns the touch objects from the event that belong to the specified window.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
- [predictedTouches(for:)](predictedtouches%28for_%29.md): Returns an array of touches that are predicted to occur for the specified touch.

# allTouches (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

All touches associated with the event.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSSet<UITouch *> * allTouches;
```

<a id="return-value"></a>

## Return Value

A set of [UITouch](../uitouch.md) objects representing all touches associated with the event.

<a id="Discussion"></a>

## Discussion

If the touches of the event originate in different views and windows, the [UITouch](../uitouch.md) objects obtained from this method will be associated with different responder objects.

## See Also

### Getting the touches for an event

- [touchesForView:](touches%28for_%29-9neb4.md): Returns the touch objects from the event that belong to the specified given view.
- [touchesForWindow:](touches%28for_%29-767rm.md): Returns the touch objects from the event that belong to the specified window.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
- [predictedTouchesForTouch:](predictedtouches%28for_%29.md): Returns an array of touches that are predicted to occur for the specified touch.
