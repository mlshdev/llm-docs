> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/isbeingpresented](https://developer.apple.com/documentation/uikit/uiviewcontroller/isbeingpresented)

# isBeingPresented (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.

## Declaration

```swift
var isBeingPresented: Bool { get }
```

## See Also

### Responding to view-related events

- [viewWillAppear(\_:)](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewIsAppearing(\_:)](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewDidAppear(\_:)](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewWillDisappear(\_:)](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [isBeingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [isMovingFromParent](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [isMovingToParent](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.

# beingPresented (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the view controller in the process of being presented by one of its ancestors.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBeingPresented) BOOL beingPresented;
```

## See Also

### Responding to view-related events

- [viewWillAppear:](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewIsAppearing:](viewisappearing%28__%29.md): Notifies the view controller that the system is adding the view controller’s view to a view hierarchy.
- [viewDidAppear:](viewdidappear%28__%29.md): Notifies the view controller that its view was added to a view hierarchy.
- [viewWillDisappear:](viewwilldisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewDidDisappear:](viewdiddisappear%28__%29.md): Notifies the view controller that its view was removed from a view hierarchy.
- [beingDismissed](isbeingdismissed.md): A Boolean value indicating whether the view controller is in the process of being dismissed by one of its ancestors.
- [movingFromParentViewController](ismovingfromparent.md): A Boolean value indicating whether the view controller is moving from a parent view controller.
- [movingToParentViewController](ismovingtoparent.md): A Boolean value indicating whether the view controller is moving to a parent view controller.
