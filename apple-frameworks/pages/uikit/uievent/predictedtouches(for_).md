> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/predictedtouches(for:)](https://developer.apple.com/documentation/uikit/uievent/predictedtouches(for:))

# predictedTouches(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns an array of touches that are predicted to occur for the specified touch.

## Declaration

```swift
func predictedTouches(for touch: UITouch) -> [UITouch]?
```

## Parameters

- `touch`: A main touch object that was reported with the event. The touch object you specify is used to determine which sequence of additional touches is returned.

<a id="return-value"></a>

## Return Value

An array of [UITouch](../uitouch.md) objects representing the set of touches that the system predicts will occur next. The order of the objects in the array matches the order in which the touches are expected to be delivered to your app. This array does not include the original touch you specified in the *touch* parameter. The return value is `nil` if the object in the *touch* parameter is not associated with the current event.

<a id="Discussion"></a>

## Discussion

Use this method to minimize the apparent latency between the user’s touch input and the rendering of your onscreen content. Processing touch input from the user and translating that information into drawing commands takes time, and turning those drawing commands into rendered content takes additional time. If the user’s finger or Apple Pencil is moving fast enough, these delays can result in a noticeable gap between the current touch location and the rendered content. To minimize the perceived lag, use the predicted touches of this method as additional, temporary input to your content.

The touches returned by this method represent the system’s estimation of where the user’s touch input will be, based on the user’s past input. Append these touches only temporarily to the structures you use for drawing or updating your content, and discard them as soon as you receive a new event with fresh touches. When used in conjunction with coalesced touches and efficient drawing code, you can create the perception that the user’s input is being handled immediately, with little or no lag. That perception improves the user experience of drawing apps or of any app that let users manipulate objects directly onscreen.

## See Also

### Getting the touches for an event

- [allTouches](alltouches.md): All touches associated with the event.
- [touches(for:)](touches%28for_%29-9neb4.md): Returns the touch objects from the event that belong to the specified given view.
- [touches(for:)](touches%28for_%29-767rm.md): Returns the touch objects from the event that belong to the specified window.
- [coalescedTouches(for:)](coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.

# predictedTouchesForTouch: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns an array of touches that are predicted to occur for the specified touch.

## Declaration

```objectivec
- (NSArray<UITouch *> *) predictedTouchesForTouch:(UITouch *) touch;
```

## Parameters

- `touch`: A main touch object that was reported with the event. The touch object you specify is used to determine which sequence of additional touches is returned.

<a id="return-value"></a>

## Return Value

An array of [UITouch](../uitouch.md) objects representing the set of touches that the system predicts will occur next. The order of the objects in the array matches the order in which the touches are expected to be delivered to your app. This array does not include the original touch you specified in the *touch* parameter. The return value is `nil` if the object in the *touch* parameter is not associated with the current event.

<a id="Discussion"></a>

## Discussion

Use this method to minimize the apparent latency between the user’s touch input and the rendering of your onscreen content. Processing touch input from the user and translating that information into drawing commands takes time, and turning those drawing commands into rendered content takes additional time. If the user’s finger or Apple Pencil is moving fast enough, these delays can result in a noticeable gap between the current touch location and the rendered content. To minimize the perceived lag, use the predicted touches of this method as additional, temporary input to your content.

The touches returned by this method represent the system’s estimation of where the user’s touch input will be, based on the user’s past input. Append these touches only temporarily to the structures you use for drawing or updating your content, and discard them as soon as you receive a new event with fresh touches. When used in conjunction with coalesced touches and efficient drawing code, you can create the perception that the user’s input is being handled immediately, with little or no lag. That perception improves the user experience of drawing apps or of any app that let users manipulate objects directly onscreen.

## See Also

### Getting the touches for an event

- [allTouches](alltouches.md): All touches associated with the event.
- [touchesForView:](touches%28for_%29-9neb4.md): Returns the touch objects from the event that belong to the specified given view.
- [touchesForWindow:](touches%28for_%29-767rm.md): Returns the touch objects from the event that belong to the specified window.
- [coalescedTouchesForTouch:](coalescedtouches%28for_%29.md): Returns all of the touches associated with the specified main touch.
