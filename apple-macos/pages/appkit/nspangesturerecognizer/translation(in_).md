> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspangesturerecognizer/translation(in:)](https://developer.apple.com/documentation/appkit/nspangesturerecognizer/translation(in:))

# translation(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

The distance traveled by the mouse during the gesture.

## Declaration

```swift
func translation(in view: NSView?) -> NSPoint
```

## Parameters

- `view`: The view in whose coordinate system the translation of the pan gesture should be computed. The view’s transform is applied to the distance values.

<a id="return-value"></a>

## Return Value

A point whose x and y values correspond to the total distance travelled since the beginning of the gesture.

<a id="Discussion"></a>

## Discussion

The x and y values of the returned point report the total translation over time. They are not delta values from the last time that the translation was reported. To determine the starting point of the gesture, subtract the current translation values from the current location of the mouse in the same view.

## See Also

### Related Documentation

- [location(in:)](../nsgesturerecognizer/location%28in_%29.md): Returns the point computed as the location of the gesture.

### Tracking the location and velocity of the gesture

- [setTranslation(\_:in:)](settranslation%28__in_%29.md): Changes the current translation value of the gesture recognizer.
- [velocity(in:)](velocity%28in_%29.md): The velocity of the pan, measured in points per second.

# translationInView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

The distance traveled by the mouse during the gesture.

## Declaration

```objectivec
- (NSPoint) translationInView:(NSView *) view;
```

## Parameters

- `view`: The view in whose coordinate system the translation of the pan gesture should be computed. The view’s transform is applied to the distance values.

<a id="return-value"></a>

## Return Value

A point whose x and y values correspond to the total distance travelled since the beginning of the gesture.

<a id="Discussion"></a>

## Discussion

The x and y values of the returned point report the total translation over time. They are not delta values from the last time that the translation was reported. To determine the starting point of the gesture, subtract the current translation values from the current location of the mouse in the same view.

## See Also

### Related Documentation

- [locationInView:](../nsgesturerecognizer/location%28in_%29.md): Returns the point computed as the location of the gesture.

### Tracking the location and velocity of the gesture

- [setTranslation:inView:](settranslation%28__in_%29.md): Changes the current translation value of the gesture recognizer.
- [velocityInView:](velocity%28in_%29.md): The velocity of the pan, measured in points per second.
