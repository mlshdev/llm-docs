> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/isrunning](https://developer.apple.com/documentation/uikit/uidynamicanimator/isrunning)

# isRunning (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns true if the dynamic animator is running.

## Declaration

```swift
var isRunning: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The views associated with an animator’s behaviors can change position or change transform only when the animator is running. For optimization purposes, iOS can pause and then restart an animator. Use this method if you need to check whether or not your views are currently subject to changes in position or transform.

## See Also

### Accessing a dynamic animator’s state

- [elapsedTime](elapsedtime.md): Returns the time interval since the dynamic animator started running.
- [behaviors](behaviors.md): The dynamic behaviors managed by a dynamic animator.
- [referenceView](referenceview.md): The view that a dynamic animator was initialized with.
- [updateItem(usingCurrentState:)](updateitem%28usingcurrentstate_%29.md): Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.

# running (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns true if the dynamic animator is running.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRunning) BOOL running;
```

<a id="Discussion"></a>

## Discussion

The views associated with an animator’s behaviors can change position or change transform only when the animator is running. For optimization purposes, iOS can pause and then restart an animator. Use this method if you need to check whether or not your views are currently subject to changes in position or transform.

## See Also

### Accessing a dynamic animator’s state

- [elapsedTime](elapsedtime.md): Returns the time interval since the dynamic animator started running.
- [behaviors](behaviors.md): The dynamic behaviors managed by a dynamic animator.
- [referenceView](referenceview.md): The view that a dynamic animator was initialized with.
- [updateItemUsingCurrentState:](updateitem%28usingcurrentstate_%29.md): Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.
