> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/backbarbuttonitem](https://developer.apple.com/documentation/uikit/uinavigationitem/backbarbuttonitem)

# backBarButtonItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The bar button item for adding a Back button to the navigation bar.

## Declaration

```swift
var backBarButtonItem: UIBarButtonItem? { get set }
```

<a id="Discussion"></a>

## Discussion

When this navigation item is immediately below the top item in the stack, the navigation controller derives the Back button for the navigation bar from this navigation item. If you want to specify a custom title or image for the Back button, you can assign a custom bar button item (with your custom title or image) to this property. When you configure your bar button item, don’t assign a custom view to it; the navigation item ignores custom views in the [backBarButtonItem](backbarbuttonitem.md).

When this property is `nil`, the navigation item determines the title of its Back button according to its [backButtonDisplayMode](backbuttondisplaymode-swift.property.md). The default value of this property is `nil`.

## See Also

### Related Documentation

- [backItem](../uinavigationbar/backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

### Configuring the Back button

- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [UINavigationItem.BackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [setHidesBackButton(\_:animated:)](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
- [backAction](backaction.md): The back action for the navigation bar.

# backBarButtonItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The bar button item for adding a Back button to the navigation bar.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIBarButtonItem * backBarButtonItem;
```

<a id="Discussion"></a>

## Discussion

When this navigation item is immediately below the top item in the stack, the navigation controller derives the Back button for the navigation bar from this navigation item. If you want to specify a custom title or image for the Back button, you can assign a custom bar button item (with your custom title or image) to this property. When you configure your bar button item, don’t assign a custom view to it; the navigation item ignores custom views in the [backBarButtonItem](backbarbuttonitem.md).

When this property is `nil`, the navigation item determines the title of its Back button according to its [backButtonDisplayMode](backbuttondisplaymode-swift.property.md). The default value of this property is `nil`.

## See Also

### Related Documentation

- [backItem](../uinavigationbar/backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

### Configuring the Back button

- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [UINavigationItemBackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [setHidesBackButton:animated:](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
- [backAction](backaction.md): The back action for the navigation bar.
