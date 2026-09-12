> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/systemgesturestate/enabled](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/systemgesturestate/enabled)

# GCControllerElement.SystemGestureState.enabled (Swift)

**Framework:** Game Controller  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state that sends input to your app only after a gesture recognizer doesn’t identify a gesture.

## Declaration

```swift
case enabled
```

<a id="Discussion"></a>

## Discussion

If you enable system gestures, the system sends the input to the gesture recognizer and only sends it to your app if it doesn’t recognize a gesture. If it does recognize a gesture, it doesn’t send any input to your app.

## See Also

### States

- [GCControllerElement.SystemGestureState.alwaysReceive](alwaysreceive.md): Deprecated. A state that sends input to your app and a gesture recognizer simultaneously.
- [GCControllerElement.SystemGestureState.disabled](disabled.md): A state that sends input to your app directly and not to a gesture recognizer.

# GCSystemGestureStateEnabled (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state that sends input to your app only after a gesture recognizer doesn’t identify a gesture.

## Declaration

```objectivec
GCSystemGestureStateEnabled
```

<a id="Discussion"></a>

## Discussion

If you enable system gestures, the system sends the input to the gesture recognizer and only sends it to your app if it doesn’t recognize a gesture. If it does recognize a gesture, it doesn’t send any input to your app.

## See Also

### States

- [GCSystemGestureStateAlwaysReceive](alwaysreceive.md): Deprecated. A state that sends input to your app and a gesture recognizer simultaneously.
- [GCSystemGestureStateDisabled](disabled.md): A state that sends input to your app directly and not to a gesture recognizer.
