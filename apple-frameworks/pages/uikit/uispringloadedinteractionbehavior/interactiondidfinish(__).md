> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractionbehavior/interactiondidfinish(_:)](https://developer.apple.com/documentation/uikit/uispringloadedinteractionbehavior/interactiondidfinish(_:))

# interactionDidFinish(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the behavior object when the spring-loading interaction is finished, either because it was canceled or because spring loading was activated.

## Declaration

```swift
optional func interactionDidFinish(_ interaction: UISpringLoadedInteraction)
```

## Parameters

- `interaction`: The spring-loaded interaction requesting the information.

# interactionDidFinish: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the behavior object when the spring-loading interaction is finished, either because it was canceled or because spring loading was activated.

## Declaration

```objectivec
- (void) interactionDidFinish:(UISpringLoadedInteraction *) interaction;
```

## Parameters

- `interaction`: The spring-loaded interaction requesting the information.
