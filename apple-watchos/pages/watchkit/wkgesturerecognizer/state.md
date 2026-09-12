> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkgesturerecognizer/state](https://developer.apple.com/documentation/watchkit/wkgesturerecognizer/state)

# state (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The current state of the gesture recognizer.

## Declaration

```swift
var state: WKGestureRecognizerState { get }
```

<a id="Discussion"></a>

## Discussion

As the gesture recognizer processes touch events, it updates the value of this property. Some states apply only to gestures that comprise a continuous sequences of touch events that must be tracked over time, such as pan gestures.

## See Also

### Getting the Gesture Recognizer’s State

- [isEnabled](isenabled.md): A Boolean value indicating whether the gesture recognizer is enabled.

# state (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The current state of the gesture recognizer.

## Declaration

```objectivec
@property (nonatomic, readonly) WKGestureRecognizerState state;
```

<a id="Discussion"></a>

## Discussion

As the gesture recognizer processes touch events, it updates the value of this property. Some states apply only to gestures that comprise a continuous sequences of touch events that must be tracked over time, such as pan gestures.

## See Also

### Getting the Gesture Recognizer’s State

- [enabled](isenabled.md): A Boolean value indicating whether the gesture recognizer is enabled.
