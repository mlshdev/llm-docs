> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/backaction](https://developer.apple.com/documentation/uikit/uinavigationitem/backaction)

# backAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The back action for the navigation bar.

## Declaration

```swift
@NSCopying var backAction: UIAction? { get set }
```

<a id="Discussion"></a>

## Discussion

If a back button already appears in the navigation bar, setting this property replaces its action without modifying its appearance. Otherwise, setting this property generates a back button with the image or title from the action you specify, unless you use the [UINavigationItem.ItemStyle.editor](itemstyle/editor.md) navigation style.

## See Also

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [UINavigationItem.BackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [setHidesBackButton(\_:animated:)](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.

# backAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The back action for the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIAction * backAction;
```

<a id="Discussion"></a>

## Discussion

If a back button already appears in the navigation bar, setting this property replaces its action without modifying its appearance. Otherwise, setting this property generates a back button with the image or title from the action you specify, unless you use the [UINavigationItemStyleEditor](itemstyle/editor.md) navigation style.

## See Also

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [UINavigationItemBackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [setHidesBackButton:animated:](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
