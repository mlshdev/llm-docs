> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/transition/zoomoptions/interactioncontext](https://developer.apple.com/documentation/uikit/uiviewcontroller/transition/zoomoptions/interactioncontext)

# UIViewController.Transition.ZoomOptions.InteractionContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Data you can use to determine whether an interactive dismissal can begin.

## Declaration

```swift
class InteractionContext
```

## Topics

### Accessing the context

- [location](interactioncontext/location.md): The touch’s location.
- [velocity](interactioncontext/velocity.md): The touch’s velocity.
- [willBegin](interactioncontext/willbegin.md): A Boolean value that indicates whether the transition is beginning.

## Relationships

### Inherits From

- [NSObject](../../../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../../../objectivec/nsobjectprotocol.md)

## See Also

### Accessing the animation state

- [interactiveDismissShouldBegin](interactivedismissshouldbegin.md): A closure that determines whether an interactive dismissal can begin.

# UIZoomTransitionInteractionContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Data you can use to determine whether an interactive dismissal can begin.

## Declaration

```objectivec
@interface UIZoomTransitionInteractionContext : NSObject
```

## Topics

### Accessing the context

- [location](interactioncontext/location.md): The touch’s location.
- [velocity](interactioncontext/velocity.md): The touch’s velocity.
- [willBegin](interactioncontext/willbegin.md): A Boolean value that indicates whether the transition is beginning.

## Relationships

### Inherits From

- [NSObject](../../../../objectivec/nsobject-swift.class.md)

## See Also

### Accessing the animation state

- [interactiveDismissShouldBegin](interactivedismissshouldbegin.md): A closure that determines whether an interactive dismissal can begin.
