> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentcontainer/viewwilltransition(to:with:)](https://developer.apple.com/documentation/uikit/uicontentcontainer/viewwilltransition(to:with:))

# viewWillTransition(to:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the container that the size of its view is about to change.

## Declaration

```swift
func viewWillTransition(to size: CGSize, with coordinator: any UIViewControllerTransitionCoordinator)
```

## Parameters

- `size`: The new size for the container’s view.
- `coordinator`: The transition coordinator object managing the size change. You can use this object to animate your changes or get information about the transition that is in progress.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before changing the size of a presented view controller’s view. You can override this method in your own objects and use it to perform additional tasks related to the size change. For example, a container view controller might use this method to override the traits of its embedded child view controllers. Use the provided `coordinator` object to animate any changes you make.

If you override this method in your custom view controllers, always call `super` at some point in your implementation so that UIKit can forward the size change message appropriately. View controllers forward the size change message to their views and child view controllers. Presentation controllers forward the size change to their presented view controller.

## See Also

### Related Documentation

- [size(forChildContentContainer:withParentContainerSize:)](size%28forchildcontentcontainer_withparentcontainersize_%29.md): Returns the size of the specified child view controller’s content.

### Responding to environment changes

- [willTransition(to:with:)](willtransition%28to_with_%29.md): Notifies the container that its trait collection changed.

# viewWillTransitionToSize:withTransitionCoordinator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the container that the size of its view is about to change.

## Declaration

```objectivec
- (void) viewWillTransitionToSize:(CGSize) size withTransitionCoordinator:(id<UIViewControllerTransitionCoordinator>) coordinator;
```

## Parameters

- `size`: The new size for the container’s view.
- `coordinator`: The transition coordinator object managing the size change. You can use this object to animate your changes or get information about the transition that is in progress.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before changing the size of a presented view controller’s view. You can override this method in your own objects and use it to perform additional tasks related to the size change. For example, a container view controller might use this method to override the traits of its embedded child view controllers. Use the provided `coordinator` object to animate any changes you make.

If you override this method in your custom view controllers, always call `super` at some point in your implementation so that UIKit can forward the size change message appropriately. View controllers forward the size change message to their views and child view controllers. Presentation controllers forward the size change to their presented view controller.

## See Also

### Related Documentation

- [sizeForChildContentContainer:withParentContainerSize:](size%28forchildcontentcontainer_withparentcontainersize_%29.md): Returns the size of the specified child view controller’s content.

### Responding to environment changes

- [willTransitionToTraitCollection:withTransitionCoordinator:](willtransition%28to_with_%29.md): Notifies the container that its trait collection changed.
