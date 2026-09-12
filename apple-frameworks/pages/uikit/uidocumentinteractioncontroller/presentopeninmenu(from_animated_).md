> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/presentopeninmenu(from:animated:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/presentopeninmenu(from:animated:))

# presentOpenInMenu(from:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays a menu for opening the document and anchors that menu to the specified bar button item.

## Declaration

```swift
func presentOpenInMenu(from item: UIBarButtonItem, animated: Bool) -> Bool
```

## Parameters

- `item`: The bar button item to which to anchor the menu.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the appearance of the menu or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method was able to display the menu or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

This method is similar to the [presentOptionsMenu(from:animated:)](presentoptionsmenu%28from_animated_%29.md) method, but presents a menu restricted to a list of apps capable of opening the current document. This determination is made based on the document type (as indicated by the [uti](uti.md) property) and on the document types supported by the installed apps. To support one or more document types, an app must register those types in its `Info.plist` file using the `CFBundleDocumentTypes` key.

If there are no registered apps that support opening the document, the document interaction controller does not display a menu.

This method displays the menu asynchronously. The document interaction controller dismisses the menu automatically when the user selects an appropriate app. You can also dismiss it programmatically using the [dismissMenu(animated:)](dismissmenu%28animated_%29.md) method.

## See Also

### Presenting and dismissing menus

- [presentOptionsMenu(from:in:animated:)](presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOptionsMenu(from:animated:)](presentoptionsmenu%28from_animated_%29.md): Displays an options menu and anchors it to the specified bar button item.
- [presentOpenInMenu(from:in:animated:)](presentopeninmenu%28from_in_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified view.
- [dismissMenu(animated:)](dismissmenu%28animated_%29.md): Dismisses the currently active menu.

# presentOpenInMenuFromBarButtonItem:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays a menu for opening the document and anchors that menu to the specified bar button item.

## Declaration

```objectivec
- (BOOL) presentOpenInMenuFromBarButtonItem:(UIBarButtonItem *) item animated:(BOOL) animated;
```

## Parameters

- `item`: The bar button item to which to anchor the menu.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the appearance of the menu or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method was able to display the menu or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

This method is similar to the [presentOptionsMenuFromBarButtonItem:animated:](presentoptionsmenu%28from_animated_%29.md) method, but presents a menu restricted to a list of apps capable of opening the current document. This determination is made based on the document type (as indicated by the [UTI](uti.md) property) and on the document types supported by the installed apps. To support one or more document types, an app must register those types in its `Info.plist` file using the `CFBundleDocumentTypes` key.

If there are no registered apps that support opening the document, the document interaction controller does not display a menu.

This method displays the menu asynchronously. The document interaction controller dismisses the menu automatically when the user selects an appropriate app. You can also dismiss it programmatically using the [dismissMenuAnimated:](dismissmenu%28animated_%29.md) method.

## See Also

### Presenting and dismissing menus

- [presentOptionsMenuFromRect:inView:animated:](presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOptionsMenuFromBarButtonItem:animated:](presentoptionsmenu%28from_animated_%29.md): Displays an options menu and anchors it to the specified bar button item.
- [presentOpenInMenuFromRect:inView:animated:](presentopeninmenu%28from_in_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified view.
- [dismissMenuAnimated:](dismissmenu%28animated_%29.md): Dismisses the currently active menu.
