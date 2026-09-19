> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uihingeinteraction/init(updatehandler:)

# init(updateHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a new hinge interaction with the provided update handler.

## Declaration

```swift
init(updateHandler: @escaping (UIHingeInteraction, UIHingeInteraction.Update) -> Void)
```

## Parameters

- `updateHandler`: Called with the initial hinge state and on each subsequent update for the interaction.

<a id="discussion"></a>

## Discussion

The handler is invoked with the initial hinge state, and again whenever there is an update. An update can occur due to the hinge changing, or when the interaction moves between hierarchies. The handler is stored and escapes, so take care to avoid retain cycles.

# initWithUpdateHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a new hinge interaction with the provided update handler.

## Declaration

```objectivec
- (instancetype) initWithUpdateHandler:(void (^)(UIHingeInteraction *, UIHingeInteractionUpdate *)) updateHandler;
```

## Parameters

- `updateHandler`: Called with the initial hinge state and on each subsequent update for the interaction.

<a id="discussion"></a>

## Discussion

The handler is invoked with the initial hinge state, and again whenever there is an update. An update can occur due to the hinge changing, or when the interaction moves between hierarchies. The handler is stored and escapes, so take care to avoid retain cycles.
