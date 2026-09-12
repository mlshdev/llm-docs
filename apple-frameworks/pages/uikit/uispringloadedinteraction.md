> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteraction](https://developer.apple.com/documentation/uikit/uispringloadedinteraction)

# UISpringLoadedInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.

## Declaration

```swift
@MainActor class UISpringLoadedInteraction
```

## Topics

### Initializing a spring-loaded interaction

- [init(interactionBehavior:interactionEffect:activationHandler:)](uispringloadedinteraction/init%28interactionbehavior_interactioneffect_activationhandler_%29.md): Initializes a new spring-loaded interaction with a specific behavior, visual effect, and activation handler block.
- [init(activationHandler:)](uispringloadedinteraction/init%28activationhandler_%29.md): Initializes a new spring-loaded interaction with a specified activation handler block, employing the default behavior and visual effect.

### Getting information about the spring-loaded interaction

- [interactionBehavior](uispringloadedinteraction/interactionbehavior.md): The behavior for the spring-loaded interaction.
- [interactionEffect](uispringloadedinteraction/interactioneffect.md): The visual effect for the spring-loaded interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionBehavior](uispringloadedinteractionbehavior.md): The interface for specifying the behavior of a spring-loaded interaction.
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md): The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
- [UISpringLoadedInteractionContext](uispringloadedinteractioncontext.md): The interface an object implements to provide information about a spring-loaded interaction.
- [UISpringLoadedInteractionEffect](uispringloadedinteractioneffect.md): The interface for providing visual styling to a spring-loaded interaction based on the interaction state.

# UISpringLoadedInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.

## Declaration

```objectivec
@interface UISpringLoadedInteraction : NSObject
```

## Topics

### Initializing a spring-loaded interaction

- [initWithInteractionBehavior:interactionEffect:activationHandler:](uispringloadedinteraction/init%28interactionbehavior_interactioneffect_activationhandler_%29.md): Initializes a new spring-loaded interaction with a specific behavior, visual effect, and activation handler block.
- [initWithActivationHandler:](uispringloadedinteraction/init%28activationhandler_%29.md): Initializes a new spring-loaded interaction with a specified activation handler block, employing the default behavior and visual effect.

### Getting information about the spring-loaded interaction

- [interactionBehavior](uispringloadedinteraction/interactionbehavior.md): The behavior for the spring-loaded interaction.
- [interactionEffect](uispringloadedinteraction/interactioneffect.md): The visual effect for the spring-loaded interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionBehavior](uispringloadedinteractionbehavior.md): The interface for specifying the behavior of a spring-loaded interaction.
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md): The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
- [UISpringLoadedInteractionContext](uispringloadedinteractioncontext.md): The interface an object implements to provide information about a spring-loaded interaction.
- [UISpringLoadedInteractionEffect](uispringloadedinteractioneffect.md): The interface for providing visual styling to a spring-loaded interaction based on the interaction state.
