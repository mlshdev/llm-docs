> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/referenceview](https://developer.apple.com/documentation/uikit/uidynamicanimator/referenceview)

# referenceView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that a dynamic animator was initialized with.

## Declaration

```swift
var referenceView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

This property has a value only for a dynamic animator initialized using the [init(referenceView:)](init%28referenceview_%29.md) method.

## See Also

### Accessing a dynamic animator’s state

- [elapsedTime](elapsedtime.md): Returns the time interval since the dynamic animator started running.
- [isRunning](isrunning.md): Returns true if the dynamic animator is running.
- [behaviors](behaviors.md): The dynamic behaviors managed by a dynamic animator.
- [updateItem(usingCurrentState:)](updateitem%28usingcurrentstate_%29.md): Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.

# referenceView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that a dynamic animator was initialized with.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIView * referenceView;
```

<a id="Discussion"></a>

## Discussion

This property has a value only for a dynamic animator initialized using the [initWithReferenceView:](init%28referenceview_%29.md) method.

## See Also

### Accessing a dynamic animator’s state

- [elapsedTime](elapsedtime.md): Returns the time interval since the dynamic animator started running.
- [running](isrunning.md): Returns true if the dynamic animator is running.
- [behaviors](behaviors.md): The dynamic behaviors managed by a dynamic animator.
- [updateItemUsingCurrentState:](updateitem%28usingcurrentstate_%29.md): Asks a dynamic animator to read the current state of a dynamic item, replacing the animator’s internal representation of the item’s state.
