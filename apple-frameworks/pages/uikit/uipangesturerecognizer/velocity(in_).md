> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipangesturerecognizer/velocity(in:)](https://developer.apple.com/documentation/uikit/uipangesturerecognizer/velocity(in:))

# velocity(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Interprets the velocity of the pan gesture in the coordinate system of the specified view.

## Declaration

```swift
func velocity(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view in whose coordinate system the velocity of the pan gesture is computed.

<a id="return-value"></a>

## Return Value

The velocity of the pan gesture, which is expressed in points per second. The velocity is broken into horizontal and vertical components.

## See Also

### Tracking the location and velocity of the gesture

- [translation(in:)](translation%28in_%29.md): Interprets the pan gesture in the coordinate system of the specified view.
- [setTranslation(\_:in:)](settranslation%28__in_%29.md): Sets the translation value in the coordinate system of the specified view.

# velocityInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Interprets the velocity of the pan gesture in the coordinate system of the specified view.

## Declaration

```objectivec
- (CGPoint) velocityInView:(UIView *) view;
```

## Parameters

- `view`: The view in whose coordinate system the velocity of the pan gesture is computed.

<a id="return-value"></a>

## Return Value

The velocity of the pan gesture, which is expressed in points per second. The velocity is broken into horizontal and vertical components.

## See Also

### Tracking the location and velocity of the gesture

- [translationInView:](translation%28in_%29.md): Interprets the pan gesture in the coordinate system of the specified view.
- [setTranslation:inView:](settranslation%28__in_%29.md): Sets the translation value in the coordinate system of the specified view.
