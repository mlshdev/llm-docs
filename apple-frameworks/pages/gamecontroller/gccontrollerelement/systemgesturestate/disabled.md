> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/systemgesturestate/disabled](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/systemgesturestate/disabled)

# GCControllerElement.SystemGestureState.disabled (Swift)

**Framework:** Game Controller  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state that sends input to your app directly and not to a gesture recognizer.

## Declaration

```swift
case disabled
```

<a id="Discussion"></a>

## Discussion

This state gives your app full control of the input for this element.

## See Also

### States

- [GCControllerElement.SystemGestureState.enabled](enabled.md): A state that sends input to your app only after a gesture recognizer doesn’t identify a gesture.
- [GCControllerElement.SystemGestureState.alwaysReceive](alwaysreceive.md): Deprecated. A state that sends input to your app and a gesture recognizer simultaneously.

# GCSystemGestureStateDisabled (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state that sends input to your app directly and not to a gesture recognizer.

## Declaration

```objectivec
GCSystemGestureStateDisabled
```

<a id="Discussion"></a>

## Discussion

This state gives your app full control of the input for this element.

## See Also

### States

- [GCSystemGestureStateEnabled](enabled.md): A state that sends input to your app only after a gesture recognizer doesn’t identify a gesture.
- [GCSystemGestureStateAlwaysReceive](alwaysreceive.md): Deprecated. A state that sends input to your app and a gesture recognizer simultaneously.
