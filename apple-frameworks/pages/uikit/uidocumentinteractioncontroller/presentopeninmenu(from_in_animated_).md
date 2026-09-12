> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/presentopeninmenu(from:in:animated:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/presentopeninmenu(from:in:animated:))

# presentOpenInMenu(from:in:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays a menu for opening the document and anchors that menu to the specified view.

## Declaration

```swift
func presentOpenInMenu(from rect: CGRect, in view: UIView, animated: Bool) -> Bool
```

## Parameters

- `rect`: The location (in the coordinate system of `view`) at which to anchor the menu.
- `view`: The view from which to display the menu.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the appearance of the menu or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method was able to display the menu or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

This method is similar to the [presentOptionsMenu(from:in:animated:)](presentoptionsmenu%28from_in_animated_%29.md) method, but presents a menu restricted to a list of apps capable of opening the current document. This determination is made based on the document type (as indicated by the [uti](uti.md) property) and on the document types supported by the installed apps. To support one or more document types, an app must register those types in its `Info.plist` file using the `CFBundleDocumentTypes` key.

If there are no registered apps that support opening the document, the document interaction controller does not display a menu.

This method displays the options menu asynchronously. The document interaction controller dismisses the menu automatically when the user selects an appropriate option. You can also dismiss it programmatically using the [dismissMenu(animated:)](dismissmenu%28animated_%29.md) method.

## See Also

### Presenting and dismissing menus

- [presentOptionsMenu(from:in:animated:)](presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOptionsMenu(from:animated:)](presentoptionsmenu%28from_animated_%29.md): Displays an options menu and anchors it to the specified bar button item.
- [presentOpenInMenu(from:animated:)](presentopeninmenu%28from_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified bar button item.
- [dismissMenu(animated:)](dismissmenu%28animated_%29.md): Dismisses the currently active menu.

# presentOpenInMenuFromRect:inView:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays a menu for opening the document and anchors that menu to the specified view.

## Declaration

```objectivec
- (BOOL) presentOpenInMenuFromRect:(CGRect) rect inView:(UIView *) view animated:(BOOL) animated;
```

## Parameters

- `rect`: The location (in the coordinate system of `view`) at which to anchor the menu.
- `view`: The view from which to display the menu.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the appearance of the menu or [false](https://developer.apple.com/documentation/swift/false) to display it immediately.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method was able to display the menu or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

This method is similar to the [presentOptionsMenuFromRect:inView:animated:](presentoptionsmenu%28from_in_animated_%29.md) method, but presents a menu restricted to a list of apps capable of opening the current document. This determination is made based on the document type (as indicated by the [UTI](uti.md) property) and on the document types supported by the installed apps. To support one or more document types, an app must register those types in its `Info.plist` file using the `CFBundleDocumentTypes` key.

If there are no registered apps that support opening the document, the document interaction controller does not display a menu.

This method displays the options menu asynchronously. The document interaction controller dismisses the menu automatically when the user selects an appropriate option. You can also dismiss it programmatically using the [dismissMenuAnimated:](dismissmenu%28animated_%29.md) method.

## See Also

### Presenting and dismissing menus

- [presentOptionsMenuFromRect:inView:animated:](presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOptionsMenuFromBarButtonItem:animated:](presentoptionsmenu%28from_animated_%29.md): Displays an options menu and anchors it to the specified bar button item.
- [presentOpenInMenuFromBarButtonItem:animated:](presentopeninmenu%28from_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified bar button item.
- [dismissMenuAnimated:](dismissmenu%28animated_%29.md): Dismisses the currently active menu.
