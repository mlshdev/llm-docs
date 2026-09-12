> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/presentoptionsmenu(from:animated:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/presentoptionsmenu(from:animated:))

# presentOptionsMenu(from:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays an options menu and anchors it to the specified bar button item.

## Declaration

```swift
func presentOptionsMenu(from item: UIBarButtonItem, animated: Bool) -> Bool
```

## Parameters

- `item`: The bar button item to which to anchor the menu.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the appearance of the menu or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the options menu was displayed or [false](https://developer.apple.com/documentation/swift/false) if it was not. The options menu may not be displayed in cases where there are no appropriate items to include in the menu.

<a id="Discussion"></a>

## Discussion

The contents of the options menu are built dynamically based on three things:

- The type of the document (as specified by the [uti](uti.md) property)
- The set of installed apps that have registered support for opening documents
- The actions that you have indicated as supported in the document interaction controller delegate’s [documentInteractionController(\_:canPerformAction:)](../uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__canperformaction_%29.md) method

Options that cannot be performed on the current document are not included in the menu. For example, if the document cannot be opened by any known apps, the menu does not include options for opening it.

This method displays the options menu asynchronously. The document interaction controller dismisses the menu automatically when the user selects an appropriate option. You can also dismiss it programmatically using the [dismissMenu(animated:)](dismissmenu%28animated_%29.md) method.

To instead present a menu that contains only a list of apps capable of opening the current document, the [presentOpenInMenu(from:animated:)](presentopeninmenu%28from_animated_%29.md) method instead.

## See Also

### Presenting and dismissing menus

- [presentOptionsMenu(from:in:animated:)](presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOpenInMenu(from:in:animated:)](presentopeninmenu%28from_in_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified view.
- [presentOpenInMenu(from:animated:)](presentopeninmenu%28from_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified bar button item.
- [dismissMenu(animated:)](dismissmenu%28animated_%29.md): Dismisses the currently active menu.

# presentOptionsMenuFromBarButtonItem:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays an options menu and anchors it to the specified bar button item.

## Declaration

```objectivec
- (BOOL) presentOptionsMenuFromBarButtonItem:(UIBarButtonItem *) item animated:(BOOL) animated;
```

## Parameters

- `item`: The bar button item to which to anchor the menu.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the appearance of the menu or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the options menu was displayed or [false](https://developer.apple.com/documentation/swift/false) if it was not. The options menu may not be displayed in cases where there are no appropriate items to include in the menu.

<a id="Discussion"></a>

## Discussion

The contents of the options menu are built dynamically based on three things:

- The type of the document (as specified by the [UTI](uti.md) property)
- The set of installed apps that have registered support for opening documents
- The actions that you have indicated as supported in the document interaction controller delegate’s [documentInteractionController:canPerformAction:](../uidocumentinteractioncontrollerdelegate/documentinteractioncontroller%28__canperformaction_%29.md) method

Options that cannot be performed on the current document are not included in the menu. For example, if the document cannot be opened by any known apps, the menu does not include options for opening it.

This method displays the options menu asynchronously. The document interaction controller dismisses the menu automatically when the user selects an appropriate option. You can also dismiss it programmatically using the [dismissMenuAnimated:](dismissmenu%28animated_%29.md) method.

To instead present a menu that contains only a list of apps capable of opening the current document, the [presentOpenInMenuFromBarButtonItem:animated:](presentopeninmenu%28from_animated_%29.md) method instead.

## See Also

### Presenting and dismissing menus

- [presentOptionsMenuFromRect:inView:animated:](presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOpenInMenuFromRect:inView:animated:](presentopeninmenu%28from_in_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified view.
- [presentOpenInMenuFromBarButtonItem:animated:](presentopeninmenu%28from_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified bar button item.
- [dismissMenuAnimated:](dismissmenu%28animated_%29.md): Dismisses the currently active menu.
