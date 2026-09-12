> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractioneffect/interaction(_:didchangewith:)](https://developer.apple.com/documentation/uikit/uispringloadedinteractioneffect/interaction(_:didchangewith:))

# interaction(\_:didChangeWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when the spring-loaded interaction state has changed.

## Declaration

```swift
func interaction(_ interaction: UISpringLoadedInteraction, didChangeWith context: any UISpringLoadedInteractionContext)
```

## Parameters

- `interaction`: The spring-loaded interaction providing the state change information.
- `context`: An object that provides information about the current spring-loaded state.

# interaction:didChangeWithContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when the spring-loaded interaction state has changed.

## Declaration

```objectivec
- (void) interaction:(UISpringLoadedInteraction *) interaction didChangeWithContext:(id<UISpringLoadedInteractionContext>) context;
```

## Parameters

- `interaction`: The spring-loaded interaction providing the state change information.
- `context`: An object that provides information about the current spring-loaded state.
