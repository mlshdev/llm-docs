> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/systemgesturestate](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/systemgesturestate)

# GCControllerElement.SystemGestureState (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state for handling input when an element is part of a system gesture.

## Declaration

```swift
enum SystemGestureState
```

## Topics

### States

- [GCControllerElement.SystemGestureState.enabled](systemgesturestate/enabled.md): A state that sends input to your app only after a gesture recognizer doesn’t identify a gesture.
- [GCControllerElement.SystemGestureState.alwaysReceive](systemgesturestate/alwaysreceive.md): Deprecated. A state that sends input to your app and a gesture recognizer simultaneously.
- [GCControllerElement.SystemGestureState.disabled](systemgesturestate/disabled.md): A state that sends input to your app directly and not to a gesture recognizer.

### Initializers

- [init(rawValue:)](systemgesturestate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling system gesture input

- [isBoundToSystemGesture](isboundtosystemgesture.md): A Boolean value that indicates whether the user binds the element to a system gesture.
- [preferredSystemGestureState](preferredsystemgesturestate.md): The preferred state for handling input when the user binds the element to a system gesture.

# GCSystemGestureState (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state for handling input when an element is part of a system gesture.

## Declaration

```objectivec
enum GCSystemGestureState : NSInteger;
```

## Topics

### States

- [GCSystemGestureStateEnabled](systemgesturestate/enabled.md): A state that sends input to your app only after a gesture recognizer doesn’t identify a gesture.
- [GCSystemGestureStateAlwaysReceive](systemgesturestate/alwaysreceive.md): Deprecated. A state that sends input to your app and a gesture recognizer simultaneously.
- [GCSystemGestureStateDisabled](systemgesturestate/disabled.md): A state that sends input to your app directly and not to a gesture recognizer.

## See Also

### Handling system gesture input

- [boundToSystemGesture](isboundtosystemgesture.md): A Boolean value that indicates whether the user binds the element to a system gesture.
- [preferredSystemGestureState](preferredsystemgesturestate.md): The preferred state for handling input when the user binds the element to a system gesture.
