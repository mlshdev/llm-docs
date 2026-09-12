> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/updateitem(usingcurrentstate:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/updateitem(usingcurrentstate:))

# updateItem(usingCurrentState:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.

## Declaration

```swift
func updateItem(usingCurrentState item: any UIDynamicItem)
```

## Parameters

- `item`: The dynamic item whose state was changed by your app.

<a id="Discussion"></a>

## Discussion

A dynamic animator automatically reads the initial state (position and rotation) of each dynamic item you add to it, and then takes responsibility for updating the item’s state. If you actively change the state of a dynamic item *after* you’ve added it to a dynamic animator, call this method to ask the animator to read and incorporate the new state.

## See Also

### Accessing a dynamic animator’s state

- [elapsedTime](elapsedtime.md): Returns the time interval since the dynamic animator started running.
- [isRunning](isrunning.md): Returns true if the dynamic animator is running.
- [behaviors](behaviors.md): The dynamic behaviors managed by a dynamic animator.
- [referenceView](referenceview.md): The view that a dynamic animator was initialized with.

# updateItemUsingCurrentState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.

## Declaration

```objectivec
- (void) updateItemUsingCurrentState:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item whose state was changed by your app.

<a id="Discussion"></a>

## Discussion

A dynamic animator automatically reads the initial state (position and rotation) of each dynamic item you add to it, and then takes responsibility for updating the item’s state. If you actively change the state of a dynamic item *after* you’ve added it to a dynamic animator, call this method to ask the animator to read and incorporate the new state.

## See Also

### Accessing a dynamic animator’s state

- [elapsedTime](elapsedtime.md): Returns the time interval since the dynamic animator started running.
- [running](isrunning.md): Returns true if the dynamic animator is running.
- [behaviors](behaviors.md): The dynamic behaviors managed by a dynamic animator.
- [referenceView](referenceview.md): The view that a dynamic animator was initialized with.
