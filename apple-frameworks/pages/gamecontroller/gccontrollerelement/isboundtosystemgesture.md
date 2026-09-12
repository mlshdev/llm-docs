> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/isboundtosystemgesture](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/isboundtosystemgesture)

# isBoundToSystemGesture (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the user binds the element to a system gesture.

## Declaration

```swift
var isBoundToSystemGesture: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the user binds this element to a gesture; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Handling system gesture input

- [preferredSystemGestureState](preferredsystemgesturestate.md): The preferred state for handling input when the user binds the element to a system gesture.
- [GCControllerElement.SystemGestureState](systemgesturestate.md): A state for handling input when an element is part of a system gesture.

# boundToSystemGesture (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the user binds the element to a system gesture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBoundToSystemGesture) BOOL boundToSystemGesture;
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the user binds this element to a gesture; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Handling system gesture input

- [preferredSystemGestureState](preferredsystemgesturestate.md): The preferred state for handling input when the user binds the element to a system gesture.
- [GCSystemGestureState](systemgesturestate.md): A state for handling input when an element is part of a system gesture.
