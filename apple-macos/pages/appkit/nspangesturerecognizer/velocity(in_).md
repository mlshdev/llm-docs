> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspangesturerecognizer/velocity(in:)](https://developer.apple.com/documentation/appkit/nspangesturerecognizer/velocity(in:))

# velocity(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

The velocity of the pan, measured in points per second.

## Declaration

```swift
func velocity(in view: NSView?) -> NSPoint
```

## Parameters

- `view`: The view that provides the coordinate system for computing the velocity value. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

The horizontal and vertical velocity of the pan gesture. These values are relative to the specified view.

## See Also

### Tracking the location and velocity of the gesture

- [translation(in:)](translation%28in_%29.md): The distance traveled by the mouse during the gesture.
- [setTranslation(\_:in:)](settranslation%28__in_%29.md): Changes the current translation value of the gesture recognizer.

# velocityInView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

The velocity of the pan, measured in points per second.

## Declaration

```objectivec
- (NSPoint) velocityInView:(NSView *) view;
```

## Parameters

- `view`: The view that provides the coordinate system for computing the velocity value. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

The horizontal and vertical velocity of the pan gesture. These values are relative to the specified view.

## See Also

### Tracking the location and velocity of the gesture

- [translationInView:](translation%28in_%29.md): The distance traveled by the mouse during the gesture.
- [setTranslation:inView:](settranslation%28__in_%29.md): Changes the current translation value of the gesture recognizer.
