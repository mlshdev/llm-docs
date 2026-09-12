> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/view](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view to which the gesture recognizer is attached.

## Declaration

```swift
var view: NSView? { get }
```

<a id="Discussion"></a>

## Discussion

To attach a gesture recognizer to a view, call the [addGestureRecognizer(\_:)](../nsview/addgesturerecognizer%28__%29.md) method of the view. If the gesture recognizer is not attached to a view, the value in this property is `nil`.

## See Also

### Related Documentation

- [location(in:)](location%28in_%29.md): Returns the point computed as the location of the gesture.

### Accessing the Recognizer’s State

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [isEnabled](isenabled.md): A Boolean value indicating whether the gesture recognizer is able to handle events.

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view to which the gesture recognizer is attached.

## Declaration

```objectivec
@property (readonly, nullable) NSView * view;
```

<a id="Discussion"></a>

## Discussion

To attach a gesture recognizer to a view, call the [addGestureRecognizer:](../nsview/addgesturerecognizer%28__%29.md) method of the view. If the gesture recognizer is not attached to a view, the value in this property is `nil`.

## See Also

### Related Documentation

- [locationInView:](location%28in_%29.md): Returns the point computed as the location of the gesture.

### Accessing the Recognizer’s State

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [enabled](isenabled.md): A Boolean value indicating whether the gesture recognizer is able to handle events.
