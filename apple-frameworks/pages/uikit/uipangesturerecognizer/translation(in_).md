> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipangesturerecognizer/translation(in:)](https://developer.apple.com/documentation/uikit/uipangesturerecognizer/translation(in:))

# translation(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Interprets the pan gesture in the coordinate system of the specified view.

## Declaration

```swift
func translation(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view in whose coordinate system the translation of the pan gesture should be computed. If you want to adjust a view’s location to keep it under the user’s finger, request the translation in that view’s superview’s coordinate system.

<a id="return-value"></a>

## Return Value

A point identifying the new location of a view in the coordinate system of its designated superview.

## Mentioned In

- [Handling pan gestures](../handling-pan-gestures.md)

<a id="Discussion"></a>

## Discussion

The x and y values report the total translation over time. They aren’t delta values from the last time that the translation was reported. Apply the translation value to the state of the view when the gesture is first recognized — don’t concatenate the value each time the handler is called.

## See Also

### Tracking the location and velocity of the gesture

- [setTranslation(\_:in:)](settranslation%28__in_%29.md): Sets the translation value in the coordinate system of the specified view.
- [velocity(in:)](velocity%28in_%29.md): Interprets the velocity of the pan gesture in the coordinate system of the specified view.

# translationInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Interprets the pan gesture in the coordinate system of the specified view.

## Declaration

```objectivec
- (CGPoint) translationInView:(UIView *) view;
```

## Parameters

- `view`: The view in whose coordinate system the translation of the pan gesture should be computed. If you want to adjust a view’s location to keep it under the user’s finger, request the translation in that view’s superview’s coordinate system.

<a id="return-value"></a>

## Return Value

A point identifying the new location of a view in the coordinate system of its designated superview.

## Mentioned In

- [Handling pan gestures](../handling-pan-gestures.md)

<a id="Discussion"></a>

## Discussion

The x and y values report the total translation over time. They aren’t delta values from the last time that the translation was reported. Apply the translation value to the state of the view when the gesture is first recognized — don’t concatenate the value each time the handler is called.

## See Also

### Tracking the location and velocity of the gesture

- [setTranslation:inView:](settranslation%28__in_%29.md): Sets the translation value in the coordinate system of the specified view.
- [velocityInView:](velocity%28in_%29.md): Interprets the velocity of the pan gesture in the coordinate system of the specified view.
