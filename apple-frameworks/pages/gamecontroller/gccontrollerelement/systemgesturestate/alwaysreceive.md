> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/systemgesturestate/alwaysreceive](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/systemgesturestate/alwaysreceive)

# GCControllerElement.SystemGestureState.alwaysReceive (Swift)

**Framework:** Game Controller  
**Kind:** Case  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A state that sends input to your app and a gesture recognizer simultaneously.

## Declaration

```swift
case alwaysReceive
```

<a id="Discussion"></a>

## Discussion

This state removes any delay in your app receiving the input but may trigger a simultaneous system gesture and in-app action.

## See Also

### States

- [GCControllerElement.SystemGestureState.enabled](enabled.md): A state that sends input to your app only after a gesture recognizer doesn’t identify a gesture.
- [GCControllerElement.SystemGestureState.disabled](disabled.md): A state that sends input to your app directly and not to a gesture recognizer.

# GCSystemGestureStateAlwaysReceive (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A state that sends input to your app and a gesture recognizer simultaneously.

## Declaration

```objectivec
GCSystemGestureStateAlwaysReceive
```

<a id="Discussion"></a>

## Discussion

This state removes any delay in your app receiving the input but may trigger a simultaneous system gesture and in-app action.

## See Also

### States

- [GCSystemGestureStateEnabled](enabled.md): A state that sends input to your app only after a gesture recognizer doesn’t identify a gesture.
- [GCSystemGestureStateDisabled](disabled.md): A state that sends input to your app directly and not to a gesture recognizer.
