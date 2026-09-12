> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollerinteractivepresentationgesturedidend(_:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollerinteractivepresentationgesturedidend(_:))

# splitViewControllerInteractivePresentationGestureDidEnd(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when the interactive presentation gesture ends.

## Declaration

```swift
optional func splitViewControllerInteractivePresentationGestureDidEnd(_ svc: UISplitViewController)
```

## Parameters

- `svc`: The split view controller responding to the interactive presentation gesture.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the interactive presentation gesture ends. Use this method for performance optimizations related to drawing the column content or other work related to handling the interactive gesture.

## See Also

### Handling the presentation gesture

- [splitViewControllerInteractivePresentationGestureWillBegin(\_:)](splitviewcontrollerinteractivepresentationgesturewillbegin%28__%29.md): Tells the delegate that the interactive presentation gesture is about to begin.

# splitViewControllerInteractivePresentationGestureDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when the interactive presentation gesture ends.

## Declaration

```objectivec
- (void) splitViewControllerInteractivePresentationGestureDidEnd:(UISplitViewController *) svc;
```

## Parameters

- `svc`: The split view controller responding to the interactive presentation gesture.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the interactive presentation gesture ends. Use this method for performance optimizations related to drawing the column content or other work related to handling the interactive gesture.

## See Also

### Handling the presentation gesture

- [splitViewControllerInteractivePresentationGestureWillBegin:](splitviewcontrollerinteractivepresentationgesturewillbegin%28__%29.md): Tells the delegate that the interactive presentation gesture is about to begin.
