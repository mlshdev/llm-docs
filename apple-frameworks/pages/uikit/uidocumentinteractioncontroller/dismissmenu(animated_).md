> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/dismissmenu(animated:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/dismissmenu(animated:))

# dismissMenu(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Dismisses the currently active menu.

## Declaration

```swift
func dismissMenu(animated: Bool)
```

## Parameters

- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the currently active menu or [false](https://developer.apple.com/documentation/swift/false) to dismiss it immediately.

<a id="Discussion"></a>

## Discussion

Use this method to dismiss a menu programmatically. The document interaction controller can also dismiss the menu automatically in response to user actions.

## See Also

### Presenting and dismissing menus

- [presentOptionsMenu(from:in:animated:)](presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOptionsMenu(from:animated:)](presentoptionsmenu%28from_animated_%29.md): Displays an options menu and anchors it to the specified bar button item.
- [presentOpenInMenu(from:in:animated:)](presentopeninmenu%28from_in_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified view.
- [presentOpenInMenu(from:animated:)](presentopeninmenu%28from_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified bar button item.

# dismissMenuAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Dismisses the currently active menu.

## Declaration

```objectivec
- (void) dismissMenuAnimated:(BOOL) animated;
```

## Parameters

- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the currently active menu or [false](https://developer.apple.com/documentation/swift/false) to dismiss it immediately.

<a id="Discussion"></a>

## Discussion

Use this method to dismiss a menu programmatically. The document interaction controller can also dismiss the menu automatically in response to user actions.

## See Also

### Presenting and dismissing menus

- [presentOptionsMenuFromRect:inView:animated:](presentoptionsmenu%28from_in_animated_%29.md): Displays an options menu and anchors it to the specified location in the view.
- [presentOptionsMenuFromBarButtonItem:animated:](presentoptionsmenu%28from_animated_%29.md): Displays an options menu and anchors it to the specified bar button item.
- [presentOpenInMenuFromRect:inView:animated:](presentopeninmenu%28from_in_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified view.
- [presentOpenInMenuFromBarButtonItem:animated:](presentopeninmenu%28from_animated_%29.md): Displays a menu for opening the document and anchors that menu to the specified bar button item.
