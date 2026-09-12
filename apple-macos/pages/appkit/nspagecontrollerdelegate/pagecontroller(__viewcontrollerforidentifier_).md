> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:viewcontrollerforidentifier:)](https://developer.apple.com/documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:viewcontrollerforidentifier:))

# pageController(\_:viewControllerForIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns a view controller the page controller uses for managing the specified identifier.

## Declaration

```swift
@MainActor optional func pageController(_ pageController: NSPageController, viewControllerForIdentifier identifier: NSPageController.ObjectIdentifier) -> NSViewController
```

## Parameters

- `pageController`: The page controller.
- `identifier`: The identifier for a view controller.

<a id="return-value"></a>

## Return Value

Returns the view controller for the specified identifier.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should return the requested view controller for the identifier or create and return a new view controller.

`NSPageController` will cache as many view controllers and views as necessary to maintain performance. This method is called whenever another instance is required.

The view controller may become the [selectedViewController](../nspagecontroller/selectedviewcontroller.md) after a transition if necessary.

## See Also

### Managing View Controllers

- [pageController(\_:identifierFor:)](pagecontroller%28__identifierfor_%29.md): Return the identifier of the view controller that owns a view to display the object.
- [pageController(\_:prepare:with:)](pagecontroller%28__prepare_with_%29.md): Prepare the view controller and it’s view for drawing.
- [pageController(\_:frameFor:)](pagecontroller%28__framefor_%29.md): Returns the frame appropriate for displaying the specified object.
- [NSPageController.ObjectIdentifier](../nspagecontroller/objectidentifier.md)

# pageController:viewControllerForIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a view controller the page controller uses for managing the specified identifier.

## Declaration

```objectivec
- (NSViewController *) pageController:(NSPageController *) pageController viewControllerForIdentifier:(NSPageControllerObjectIdentifier) identifier;
```

## Parameters

- `pageController`: The page controller.
- `identifier`: The identifier for a view controller.

<a id="return-value"></a>

## Return Value

Returns the view controller for the specified identifier.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should return the requested view controller for the identifier or create and return a new view controller.

`NSPageController` will cache as many view controllers and views as necessary to maintain performance. This method is called whenever another instance is required.

The view controller may become the [selectedViewController](../nspagecontroller/selectedviewcontroller.md) after a transition if necessary.

## See Also

### Managing View Controllers

- [pageController:identifierForObject:](pagecontroller%28__identifierfor_%29.md): Return the identifier of the view controller that owns a view to display the object.
- [pageController:prepareViewController:withObject:](pagecontroller%28__prepare_with_%29.md): Prepare the view controller and it’s view for drawing.
- [pageController:frameForObject:](pagecontroller%28__framefor_%29.md): Returns the frame appropriate for displaying the specified object.
- [NSPageControllerObjectIdentifier](../nspagecontroller/objectidentifier.md)
