> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:prepare:with:)](https://developer.apple.com/documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:prepare:with:))

# pageController(\_:prepare:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Prepare the view controller and it’s view for drawing.

## Declaration

```swift
@MainActor optional func pageController(_ pageController: NSPageController, prepare viewController: NSViewController, with object: Any?)
```

## Parameters

- `pageController`: The page controller.
- `viewController`: The view controller to prepare for drawing. You should setup the data sources and perform layout.
- `object`: The object to display.

<a id="Discussion"></a>

## Discussion

If this method is not implemented, then `viewController` object’s `representedObject` is set to the object.

> **Note**

>  This method is called on the main thread and should return immediately. The view will be asked to draw on a background thread and must support background drawing.

This method is only useful if [pageController(\_:identifierFor:)](pagecontroller%28__identifierfor_%29.md) and [pageController(\_:prepare:with:)](pagecontroller%28__prepare_with_%29.md) are implemented.

## See Also

### Managing View Controllers

- [pageController(\_:identifierFor:)](pagecontroller%28__identifierfor_%29.md): Return the identifier of the view controller that owns a view to display the object.
- [pageController(\_:viewControllerForIdentifier:)](pagecontroller%28__viewcontrollerforidentifier_%29.md): Returns a view controller the page controller uses for managing the specified identifier.
- [pageController(\_:frameFor:)](pagecontroller%28__framefor_%29.md): Returns the frame appropriate for displaying the specified object.
- [NSPageController.ObjectIdentifier](../nspagecontroller/objectidentifier.md)

# pageController:prepareViewController:withObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prepare the view controller and it’s view for drawing.

## Declaration

```objectivec
- (void) pageController:(NSPageController *) pageController prepareViewController:(NSViewController *) viewController withObject:(id) object;
```

## Parameters

- `pageController`: The page controller.
- `viewController`: The view controller to prepare for drawing. You should setup the data sources and perform layout.
- `object`: The object to display.

<a id="Discussion"></a>

## Discussion

If this method is not implemented, then `viewController` object’s `representedObject` is set to the object.

> **Note**

>  This method is called on the main thread and should return immediately. The view will be asked to draw on a background thread and must support background drawing.

This method is only useful if [pageController:identifierForObject:](pagecontroller%28__identifierfor_%29.md) and [pageController:prepareViewController:withObject:](pagecontroller%28__prepare_with_%29.md) are implemented.

## See Also

### Managing View Controllers

- [pageController:identifierForObject:](pagecontroller%28__identifierfor_%29.md): Return the identifier of the view controller that owns a view to display the object.
- [pageController:viewControllerForIdentifier:](pagecontroller%28__viewcontrollerforidentifier_%29.md): Returns a view controller the page controller uses for managing the specified identifier.
- [pageController:frameForObject:](pagecontroller%28__framefor_%29.md): Returns the frame appropriate for displaying the specified object.
- [NSPageControllerObjectIdentifier](../nspagecontroller/objectidentifier.md)
