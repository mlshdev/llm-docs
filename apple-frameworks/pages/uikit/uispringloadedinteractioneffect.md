> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractioneffect](https://developer.apple.com/documentation/uikit/uispringloadedinteractioneffect)

# UISpringLoadedInteractionEffect (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for providing visual styling to a spring-loaded interaction based on the interaction state.

## Declaration

```swift
@MainActor protocol UISpringLoadedInteractionEffect : NSObjectProtocol
```

## Topics

### Handling changes

- [interaction(\_:didChangeWith:)](uispringloadedinteractioneffect/interaction%28__didchangewith_%29.md): Called when the spring-loaded interaction state has changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionBehavior](uispringloadedinteractionbehavior.md): The interface for specifying the behavior of a spring-loaded interaction.
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md): The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
- [UISpringLoadedInteraction](uispringloadedinteraction.md): An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
- [UISpringLoadedInteractionContext](uispringloadedinteractioncontext.md): The interface an object implements to provide information about a spring-loaded interaction.

# UISpringLoadedInteractionEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for providing visual styling to a spring-loaded interaction based on the interaction state.

## Declaration

```objectivec
@protocol UISpringLoadedInteractionEffect <NSObject>
```

## Topics

### Handling changes

- [interaction:didChangeWithContext:](uispringloadedinteractioneffect/interaction%28__didchangewith_%29.md): Called when the spring-loaded interaction state has changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Spring-loaded interactions

- [UISpringLoadedInteractionBehavior](uispringloadedinteractionbehavior.md): The interface for specifying the behavior of a spring-loaded interaction.
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md): The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
- [UISpringLoadedInteraction](uispringloadedinteraction.md): An interaction object for configuring and controlling spring-loaded, user-driven navigation during a drag activity.
- [UISpringLoadedInteractionContext](uispringloadedinteractioncontext.md): The interface an object implements to provide information about a spring-loaded interaction.
