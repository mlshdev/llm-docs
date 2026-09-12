> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipangesturerecognizer/settranslation(_:in:)](https://developer.apple.com/documentation/uikit/uipangesturerecognizer/settranslation(_:in:))

# setTranslation(\_:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the translation value in the coordinate system of the specified view.

## Declaration

```swift
func setTranslation(_ translation: CGPoint, in view: UIView?)
```

## Parameters

- `translation`: A point that identifies the new translation value.
- `view`: A view in whose coordinate system the translation is to occur.

<a id="Discussion"></a>

## Discussion

Changing the translation value resets the velocity of the pan.

## See Also

### Tracking the location and velocity of the gesture

- [translation(in:)](translation%28in_%29.md): Interprets the pan gesture in the coordinate system of the specified view.
- [velocity(in:)](velocity%28in_%29.md): Interprets the velocity of the pan gesture in the coordinate system of the specified view.

# setTranslation:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the translation value in the coordinate system of the specified view.

## Declaration

```objectivec
- (void) setTranslation:(CGPoint) translation inView:(UIView *) view;
```

## Parameters

- `translation`: A point that identifies the new translation value.
- `view`: A view in whose coordinate system the translation is to occur.

<a id="Discussion"></a>

## Discussion

Changing the translation value resets the velocity of the pan.

## See Also

### Tracking the location and velocity of the gesture

- [translationInView:](translation%28in_%29.md): Interprets the pan gesture in the coordinate system of the specified view.
- [velocityInView:](velocity%28in_%29.md): Interprets the velocity of the pan gesture in the coordinate system of the specified view.
