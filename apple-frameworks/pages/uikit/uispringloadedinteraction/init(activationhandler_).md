> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteraction/init(activationhandler:)](https://developer.apple.com/documentation/uikit/uispringloadedinteraction/init(activationhandler:))

# init(activationHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new spring-loaded interaction with a specified activation handler block, employing the default behavior and visual effect.

## Declaration

```swift
convenience init(activationHandler handler: @escaping (UISpringLoadedInteraction, any UISpringLoadedInteractionContext) -> Void)
```

## Parameters

- `handler`: The handler that is invoked when the spring-loaded interaction is activated.

<a id="return-value"></a>

## Return Value

A spring-loaded interaction that has a specific activation handler block and a default behavior and visual effect.

## See Also

### Initializing a spring-loaded interaction

- [init(interactionBehavior:interactionEffect:activationHandler:)](init%28interactionbehavior_interactioneffect_activationhandler_%29.md): Initializes a new spring-loaded interaction with a specific behavior, visual effect, and activation handler block.

# initWithActivationHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new spring-loaded interaction with a specified activation handler block, employing the default behavior and visual effect.

## Declaration

```objectivec
- (instancetype) initWithActivationHandler:(void (^)(UISpringLoadedInteraction *interaction, id<UISpringLoadedInteractionContext>context)) handler;
```

## Parameters

- `handler`: The handler that is invoked when the spring-loaded interaction is activated.

<a id="return-value"></a>

## Return Value

A spring-loaded interaction that has a specific activation handler block and a default behavior and visual effect.

## See Also

### Initializing a spring-loaded interaction

- [initWithInteractionBehavior:interactionEffect:activationHandler:](init%28interactionbehavior_interactioneffect_activationhandler_%29.md): Initializes a new spring-loaded interaction with a specific behavior, visual effect, and activation handler block.
