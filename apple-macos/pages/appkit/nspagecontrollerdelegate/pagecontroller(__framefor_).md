> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:framefor:)](https://developer.apple.com/documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:framefor:))

# pageController(\_:frameFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns the frame appropriate for displaying the specified object.

## Declaration

```swift
@MainActor optional func pageController(_ pageController: NSPageController, frameFor object: Any?) -> NSRect
```

## Parameters

- `pageController`: The page controller.
- `object`: The object to display.

<a id="return-value"></a>

## Return Value

The frame appropriate for displaying `object`.

<a id="Discussion"></a>

## Discussion

You only need to implement this if the view frame can differ between the page controller’s [arrangedObjects](../nspagecontroller/arrangedobjects.md).

This method must return immediately. Avoid file, network or any potentially blocking or lengthy work to provide an answer.

If this method is not implemented, all [arrangedObjects](../nspagecontroller/arrangedobjects.md) are assumed to have the same frame as the `pageController` object’s current [selectedViewController](../nspagecontroller/selectedviewcontroller.md) instance’s `view` or the bounds of `view` when [selectedViewController](../nspagecontroller/selectedviewcontroller.md) is `nil`.

This method is only useful if [pageController(\_:identifierFor:)](pagecontroller%28__identifierfor_%29.md) and [pageController(\_:viewControllerForIdentifier:)](pagecontroller%28__viewcontrollerforidentifier_%29.md) are implemented.

## See Also

### Managing View Controllers

- [pageController(\_:identifierFor:)](pagecontroller%28__identifierfor_%29.md): Return the identifier of the view controller that owns a view to display the object.
- [pageController(\_:viewControllerForIdentifier:)](pagecontroller%28__viewcontrollerforidentifier_%29.md): Returns a view controller the page controller uses for managing the specified identifier.
- [pageController(\_:prepare:with:)](pagecontroller%28__prepare_with_%29.md): Prepare the view controller and it’s view for drawing.
- [NSPageController.ObjectIdentifier](../nspagecontroller/objectidentifier.md)

# pageController:frameForObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the frame appropriate for displaying the specified object.

## Declaration

```objectivec
- (NSRect) pageController:(NSPageController *) pageController frameForObject:(id) object;
```

## Parameters

- `pageController`: The page controller.
- `object`: The object to display.

<a id="return-value"></a>

## Return Value

The frame appropriate for displaying `object`.

<a id="Discussion"></a>

## Discussion

You only need to implement this if the view frame can differ between the page controller’s [arrangedObjects](../nspagecontroller/arrangedobjects.md).

This method must return immediately. Avoid file, network or any potentially blocking or lengthy work to provide an answer.

If this method is not implemented, all [arrangedObjects](../nspagecontroller/arrangedobjects.md) are assumed to have the same frame as the `pageController` object’s current [selectedViewController](../nspagecontroller/selectedviewcontroller.md) instance’s `view` or the bounds of `view` when [selectedViewController](../nspagecontroller/selectedviewcontroller.md) is `nil`.

This method is only useful if [pageController:identifierForObject:](pagecontroller%28__identifierfor_%29.md) and [pageController:viewControllerForIdentifier:](pagecontroller%28__viewcontrollerforidentifier_%29.md) are implemented.

## See Also

### Managing View Controllers

- [pageController:identifierForObject:](pagecontroller%28__identifierfor_%29.md): Return the identifier of the view controller that owns a view to display the object.
- [pageController:viewControllerForIdentifier:](pagecontroller%28__viewcontrollerforidentifier_%29.md): Returns a view controller the page controller uses for managing the specified identifier.
- [pageController:prepareViewController:withObject:](pagecontroller%28__prepare_with_%29.md): Prepare the view controller and it’s view for drawing.
- [NSPageControllerObjectIdentifier](../nspagecontroller/objectidentifier.md)
