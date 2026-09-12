> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractionbehavior](https://developer.apple.com/documentation/uikit/uispringloadedinteractionbehavior)

# UISpringLoadedInteractionBehavior (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for specifying the behavior of a spring-loaded interaction.

## Declaration

```swift
@MainActor protocol UISpringLoadedInteractionBehavior : NSObjectProtocol
```

## Topics

### Managing spring-loaded interactions

- [shouldAllow(\_:with:)](uispringloadedinteractionbehavior/shouldallow%28__with_%29.md): Returns a Boolean value that determines whether spring-loaded interaction should begin or should continue for the specified context.

### Handling spring-loaded interaction notifications

- [interactionDidFinish(\_:)](uispringloadedinteractionbehavior/interactiondidfinish%28__%29.md): Tells the behavior object when the spring-loading interaction is finished, either because it was canceled or because spring loading was activated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md): The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
- [UISpringLoadedInteraction](uispringloadedinteraction.md): An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
- [UISpringLoadedInteractionContext](uispringloadedinteractioncontext.md): The interface an object implements to provide information about a spring-loaded interaction.
- [UISpringLoadedInteractionEffect](uispringloadedinteractioneffect.md): The interface for providing visual styling to a spring-loaded interaction based on the interaction state.

# UISpringLoadedInteractionBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for specifying the behavior of a spring-loaded interaction.

## Declaration

```objectivec
@protocol UISpringLoadedInteractionBehavior <NSObject>
```

## Topics

### Managing spring-loaded interactions

- [shouldAllowInteraction:withContext:](uispringloadedinteractionbehavior/shouldallow%28__with_%29.md): Returns a Boolean value that determines whether spring-loaded interaction should begin or should continue for the specified context.

### Handling spring-loaded interaction notifications

- [interactionDidFinish:](uispringloadedinteractionbehavior/interactiondidfinish%28__%29.md): Tells the behavior object when the spring-loading interaction is finished, either because it was canceled or because spring loading was activated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md): The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
- [UISpringLoadedInteraction](uispringloadedinteraction.md): An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
- [UISpringLoadedInteractionContext](uispringloadedinteractioncontext.md): The interface an object implements to provide information about a spring-loaded interaction.
- [UISpringLoadedInteractionEffect](uispringloadedinteractioneffect.md): The interface for providing visual styling to a spring-loaded interaction based on the interaction state.
