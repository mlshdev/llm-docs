> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentcontainer/willtransition(to:with:)](https://developer.apple.com/documentation/uikit/uicontentcontainer/willtransition(to:with:))

# willTransition(to:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the container that its trait collection changed.

## Declaration

```swift
func willTransition(to newCollection: UITraitCollection, with coordinator: any UIViewControllerTransitionCoordinator)
```

## Parameters

- `newCollection`: The traits to be applied to the container.
- `coordinator`: The transition coordinator object managing the trait change. You can use this object to animate any changes or to get information about the transition that is in progress.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before changing the current object’s traits and before calling the [traitCollectionDidChange(\_:)](../uitraitenvironment/traitcollectiondidchange%28__%29.md) method of any affected views and view controllers. Implementors of this method can use it to adapt the interface based on the values in the `newCollection` parameter. A common use of this method is to make changes to the high-level presentation style when the current size class changes. For example, a container view controller that manages multiple child view controllers might change the number of child view controllers it displays onscreen when the size class changes. A standard view controller might use this method to change the constraints on the views it manages. Use the provided `coordinator` object to animate any changes you make.

If you override this method in your own objects, always call `super` at some point in your implementation so that UIKit can forward the trait changes to the associated presentation controller and to any child view controllers. View controllers forward the trait change message to their child view controllers. Presentation controllers forward the trait change to their presented view controller.

## See Also

### Related Documentation

- [traitCollectionDidChange(\_:)](../uitraitenvironment/traitcollectiondidchange%28__%29.md): Deprecated. Reports changes in the iOS interface environment.

### Responding to environment changes

- [viewWillTransition(to:with:)](viewwilltransition%28to_with_%29.md): Notifies the container that the size of its view is about to change.

# willTransitionToTraitCollection:withTransitionCoordinator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the container that its trait collection changed.

## Declaration

```objectivec
- (void) willTransitionToTraitCollection:(UITraitCollection *) newCollection withTransitionCoordinator:(id<UIViewControllerTransitionCoordinator>) coordinator;
```

## Parameters

- `newCollection`: The traits to be applied to the container.
- `coordinator`: The transition coordinator object managing the trait change. You can use this object to animate any changes or to get information about the transition that is in progress.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before changing the current object’s traits and before calling the [traitCollectionDidChange:](../uitraitenvironment/traitcollectiondidchange%28__%29.md) method of any affected views and view controllers. Implementors of this method can use it to adapt the interface based on the values in the `newCollection` parameter. A common use of this method is to make changes to the high-level presentation style when the current size class changes. For example, a container view controller that manages multiple child view controllers might change the number of child view controllers it displays onscreen when the size class changes. A standard view controller might use this method to change the constraints on the views it manages. Use the provided `coordinator` object to animate any changes you make.

If you override this method in your own objects, always call `super` at some point in your implementation so that UIKit can forward the trait changes to the associated presentation controller and to any child view controllers. View controllers forward the trait change message to their child view controllers. Presentation controllers forward the trait change to their presented view controller.

## See Also

### Related Documentation

- [traitCollectionDidChange:](../uitraitenvironment/traitcollectiondidchange%28__%29.md): Deprecated. Reports changes in the iOS interface environment.

### Responding to environment changes

- [viewWillTransitionToSize:withTransitionCoordinator:](viewwilltransition%28to_with_%29.md): Notifies the container that the size of its view is about to change.
