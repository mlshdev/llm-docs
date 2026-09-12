> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/preferredsystemgesturestate](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/preferredsystemgesturestate)

# preferredSystemGestureState (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The preferred state for handling input when the user binds the element to a system gesture.

## Declaration

```swift
var preferredSystemGestureState: GCControllerElement.SystemGestureState { get set }
```

<a id="Discussion"></a>

## Discussion

In rare situations, you may use this property to disable system gestures. However, the system isn’t guaranteed to respect this property. The default value for this property is [GCControllerElement.SystemGestureState.enabled](systemgesturestate/enabled.md).

## See Also

### Handling system gesture input

- [isBoundToSystemGesture](isboundtosystemgesture.md): A Boolean value that indicates whether the user binds the element to a system gesture.
- [GCControllerElement.SystemGestureState](systemgesturestate.md): A state for handling input when an element is part of a system gesture.

# preferredSystemGestureState (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The preferred state for handling input when the user binds the element to a system gesture.

## Declaration

```objectivec
@property (nonatomic, readwrite) GCSystemGestureState preferredSystemGestureState;
```

<a id="Discussion"></a>

## Discussion

In rare situations, you may use this property to disable system gestures. However, the system isn’t guaranteed to respect this property. The default value for this property is [GCSystemGestureStateEnabled](systemgesturestate/enabled.md).

## See Also

### Handling system gesture input

- [boundToSystemGesture](isboundtosystemgesture.md): A Boolean value that indicates whether the user binds the element to a system gesture.
- [GCSystemGestureState](systemgesturestate.md): A state for handling input when an element is part of a system gesture.
