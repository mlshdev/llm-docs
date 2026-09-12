> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/elapsedtime](https://developer.apple.com/documentation/uikit/uidynamicanimator/elapsedtime)

# elapsedTime (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the time interval since the dynamic animator started running.

## Declaration

```swift
var elapsedTime: TimeInterval { get }
```

<a id="return-value"></a>

## Return Value

The elapsed time since the dynamic animator started running.

## See Also

### Accessing a dynamic animator’s state

- [isRunning](isrunning.md): Returns true if the dynamic animator is running.
- [behaviors](behaviors.md): The dynamic behaviors managed by a dynamic animator.
- [referenceView](referenceview.md): The view that a dynamic animator was initialized with.
- [updateItem(usingCurrentState:)](updateitem%28usingcurrentstate_%29.md): Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.

# elapsedTime (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the time interval since the dynamic animator started running.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval elapsedTime;
```

<a id="return-value"></a>

## Return Value

The elapsed time since the dynamic animator started running.

## See Also

### Accessing a dynamic animator’s state

- [running](isrunning.md): Returns true if the dynamic animator is running.
- [behaviors](behaviors.md): The dynamic behaviors managed by a dynamic animator.
- [referenceView](referenceview.md): The view that a dynamic animator was initialized with.
- [updateItemUsingCurrentState:](updateitem%28usingcurrentstate_%29.md): Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.
