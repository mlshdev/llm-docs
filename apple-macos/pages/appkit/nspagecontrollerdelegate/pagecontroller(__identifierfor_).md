> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:identifierfor:)](https://developer.apple.com/documentation/appkit/nspagecontrollerdelegate/pagecontroller(_:identifierfor:))

# pageController(\_:identifierFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Return the identifier of the view controller that owns a view to display the object.

## Declaration

```swift
@MainActor optional func pageController(_ pageController: NSPageController, identifierFor object: Any) -> NSPageController.ObjectIdentifier
```

## Parameters

- `pageController`: The page controller.
- `object`: The object to display.

<a id="return-value"></a>

## Return Value

Returns a string identifier for the view controller for the specified object.

<a id="Discussion"></a>

## Discussion

If `pageController` does not have an unused view controller for this identifier, the you will be asked to create one via [pageController(\_:viewControllerForIdentifier:)](pagecontroller%28__viewcontrollerforidentifier_%29.md).

## See Also

### Managing View Controllers

- [pageController(\_:viewControllerForIdentifier:)](pagecontroller%28__viewcontrollerforidentifier_%29.md): Returns a view controller the page controller uses for managing the specified identifier.
- [pageController(\_:prepare:with:)](pagecontroller%28__prepare_with_%29.md): Prepare the view controller and it’s view for drawing.
- [pageController(\_:frameFor:)](pagecontroller%28__framefor_%29.md): Returns the frame appropriate for displaying the specified object.
- [NSPageController.ObjectIdentifier](../nspagecontroller/objectidentifier.md)

# pageController:identifierForObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Return the identifier of the view controller that owns a view to display the object.

## Declaration

```objectivec
- (NSPageControllerObjectIdentifier) pageController:(NSPageController *) pageController identifierForObject:(id) object;
```

## Parameters

- `pageController`: The page controller.
- `object`: The object to display.

<a id="return-value"></a>

## Return Value

Returns a string identifier for the view controller for the specified object.

<a id="Discussion"></a>

## Discussion

If `pageController` does not have an unused view controller for this identifier, the you will be asked to create one via [pageController:viewControllerForIdentifier:](pagecontroller%28__viewcontrollerforidentifier_%29.md).

## See Also

### Managing View Controllers

- [pageController:viewControllerForIdentifier:](pagecontroller%28__viewcontrollerforidentifier_%29.md): Returns a view controller the page controller uses for managing the specified identifier.
- [pageController:prepareViewController:withObject:](pagecontroller%28__prepare_with_%29.md): Prepare the view controller and it’s view for drawing.
- [pageController:frameForObject:](pagecontroller%28__framefor_%29.md): Returns the frame appropriate for displaying the specified object.
- [NSPageControllerObjectIdentifier](../nspagecontroller/objectidentifier.md)
