> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractioncontext](https://developer.apple.com/documentation/uikit/uispringloadedinteractioncontext)

# UISpringLoadedInteractionContext (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface an object implements to provide information about a spring-loaded interaction.

## Declaration

```swift
@MainActor protocol UISpringLoadedInteractionContext : NSObjectProtocol
```

## Topics

### Managing state

- [state](uispringloadedinteractioncontext/state.md): The current view style for the spring-loaded interaction.
- [targetItem](uispringloadedinteractioncontext/targetitem.md): The specific subview, or associated model object, of the target view to use for the spring-loaded interaction.
- [targetView](uispringloadedinteractioncontext/targetview.md): The view to which the current spring-loaded interaction view style is applied.
- [UISpringLoadedInteractionEffectState](uispringloadedinteractioneffectstate.md): The spring-loaded interaction states that determine the style of the interaction view.

### Getting the drag activity’s location

- [location(in:)](uispringloadedinteractioncontext/location%28in_%29.md): Returns the location of the drag activity within the specified view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionBehavior](uispringloadedinteractionbehavior.md): The interface for specifying the behavior of a spring-loaded interaction.
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md): The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
- [UISpringLoadedInteraction](uispringloadedinteraction.md): An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
- [UISpringLoadedInteractionEffect](uispringloadedinteractioneffect.md): The interface for providing visual styling to a spring-loaded interaction based on the interaction state.

# UISpringLoadedInteractionContext (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface an object implements to provide information about a spring-loaded interaction.

## Declaration

```objectivec
@protocol UISpringLoadedInteractionContext <NSObject>
```

## Topics

### Managing state

- [state](uispringloadedinteractioncontext/state.md): The current view style for the spring-loaded interaction.
- [targetItem](uispringloadedinteractioncontext/targetitem.md): The specific subview, or associated model object, of the target view to use for the spring-loaded interaction.
- [targetView](uispringloadedinteractioncontext/targetview.md): The view to which the current spring-loaded interaction view style is applied.
- [UISpringLoadedInteractionEffectState](uispringloadedinteractioneffectstate.md): The spring-loaded interaction states that determine the style of the interaction view.

### Getting the drag activity’s location

- [locationInView:](uispringloadedinteractioncontext/location%28in_%29.md): Returns the location of the drag activity within the specified view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionBehavior](uispringloadedinteractionbehavior.md): The interface for specifying the behavior of a spring-loaded interaction.
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md): The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
- [UISpringLoadedInteraction](uispringloadedinteraction.md): An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
- [UISpringLoadedInteractionEffect](uispringloadedinteractioneffect.md): The interface for providing visual styling to a spring-loaded interaction based on the interaction state.
