> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/behaviors](https://developer.apple.com/documentation/uikit/uidynamicanimator/behaviors)

# behaviors (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The dynamic behaviors managed by a dynamic animator.

## Declaration

```swift
var behaviors: [UIDynamicBehavior] { get }
```

## See Also

### Accessing a dynamic animator’s state

- [elapsedTime](elapsedtime.md): Returns the time interval since the dynamic animator started running.
- [isRunning](isrunning.md): Returns true if the dynamic animator is running.
- [referenceView](referenceview.md): The view that a dynamic animator was initialized with.
- [updateItem(usingCurrentState:)](updateitem%28usingcurrentstate_%29.md): Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.

# behaviors (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The dynamic behaviors managed by a dynamic animator.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<__kindof UIDynamicBehavior *> * behaviors;
```

## See Also

### Accessing a dynamic animator’s state

- [elapsedTime](elapsedtime.md): Returns the time interval since the dynamic animator started running.
- [running](isrunning.md): Returns true if the dynamic animator is running.
- [referenceView](referenceview.md): The view that a dynamic animator was initialized with.
- [updateItemUsingCurrentState:](updateitem%28usingcurrentstate_%29.md): Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.
