> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteraction/init(interactionbehavior:interactioneffect:activationhandler:)](https://developer.apple.com/documentation/uikit/uispringloadedinteraction/init(interactionbehavior:interactioneffect:activationhandler:))

# init(interactionBehavior:interactionEffect:activationHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new spring-loaded interaction with a specific behavior, visual effect, and activation handler block.

## Declaration

```swift
init(interactionBehavior: (any UISpringLoadedInteractionBehavior)?, interactionEffect: (any UISpringLoadedInteractionEffect)?, activationHandler handler: @escaping (UISpringLoadedInteraction, any UISpringLoadedInteractionContext) -> Void)
```

## Parameters

- `interactionBehavior`: The interaction behavior object controlling the spring-loaded interaction activation. If the value is `nil`, the default behavior is used.
- `interactionEffect`: The interaction effect object styling the interaction’s view. If the value is `nil`, the default effect is used.
- `handler`: The handler that is invoked when the spring-loaded interaction is activated.

<a id="return-value"></a>

## Return Value

A spring-loaded interaction that has a specific behavior, visual effect, and activation handler block.

## See Also

### Initializing a spring-loaded interaction

- [init(activationHandler:)](init%28activationhandler_%29.md): Initializes a new spring-loaded interaction with a specified activation handler block, employing the default behavior and visual effect.

# initWithInteractionBehavior:interactionEffect:activationHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new spring-loaded interaction with a specific behavior, visual effect, and activation handler block.

## Declaration

```objectivec
- (instancetype) initWithInteractionBehavior:(id<UISpringLoadedInteractionBehavior>) interactionBehavior interactionEffect:(id<UISpringLoadedInteractionEffect>) interactionEffect activationHandler:(void (^)(UISpringLoadedInteraction *interaction, id<UISpringLoadedInteractionContext>context)) handler;
```

## Parameters

- `interactionBehavior`: The interaction behavior object controlling the spring-loaded interaction activation. If the value is `nil`, the default behavior is used.
- `interactionEffect`: The interaction effect object styling the interaction’s view. If the value is `nil`, the default effect is used.
- `handler`: The handler that is invoked when the spring-loaded interaction is activated.

<a id="return-value"></a>

## Return Value

A spring-loaded interaction that has a specific behavior, visual effect, and activation handler block.

## See Also

### Initializing a spring-loaded interaction

- [initWithActivationHandler:](init%28activationhandler_%29.md): Initializes a new spring-loaded interaction with a specified activation handler block, employing the default behavior and visual effect.
