> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspangesturerecognizer/settranslation(_:in:)](https://developer.apple.com/documentation/appkit/nspangesturerecognizer/settranslation(_:in:))

# setTranslation(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Changes the current translation value of the gesture recognizer.

## Declaration

```swift
func setTranslation(_ translation: NSPoint, in view: NSView?)
```

## Parameters

- `translation`: The new translation values to use in the gesture recognizer.
- `view`: The view in whose coordinate system you specified the new translation value. Specifying `nil` resets the previous translation value.

<a id="Discussion"></a>

## Discussion

This method changes the current translation value of the gesture recognizer. Changing the value resets the velocity of the pan. You might call this method at mouse-down time to adjust the translation value and make it relative to some specific point in your view.

## See Also

### Tracking the location and velocity of the gesture

- [translation(in:)](translation%28in_%29.md): The distance traveled by the mouse during the gesture.
- [velocity(in:)](velocity%28in_%29.md): The velocity of the pan, measured in points per second.

# setTranslation:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Changes the current translation value of the gesture recognizer.

## Declaration

```objectivec
- (void) setTranslation:(NSPoint) translation inView:(NSView *) view;
```

## Parameters

- `translation`: The new translation values to use in the gesture recognizer.
- `view`: The view in whose coordinate system you specified the new translation value. Specifying `nil` resets the previous translation value.

<a id="Discussion"></a>

## Discussion

This method changes the current translation value of the gesture recognizer. Changing the value resets the velocity of the pan. You might call this method at mouse-down time to adjust the translation value and make it relative to some specific point in your view.

## See Also

### Tracking the location and velocity of the gesture

- [translationInView:](translation%28in_%29.md): The distance traveled by the mouse during the gesture.
- [velocityInView:](velocity%28in_%29.md): The velocity of the pan, measured in points per second.
