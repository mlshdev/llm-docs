> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/backbuttondisplaymode-swift.property](https://developer.apple.com/documentation/uikit/uinavigationitem/backbuttondisplaymode-swift.property)

# backButtonDisplayMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The display mode of the Back button.

## Declaration

```swift
var backButtonDisplayMode: UINavigationItem.BackButtonDisplayMode { get set }
```

<a id="Discussion"></a>

## Discussion

When the `backBarButtonItem` property is `nil`, the navigation item uses this display mode to determine the title of its Back button. The default value of this property is [UINavigationItem.BackButtonDisplayMode.default](backbuttondisplaymode-swift.enum/default.md).

## See Also

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [UINavigationItem.BackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [setHidesBackButton(\_:animated:)](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
- [backAction](backaction.md): The back action for the navigation bar.

# backButtonDisplayMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The display mode of the Back button.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UINavigationItemBackButtonDisplayMode backButtonDisplayMode;
```

<a id="Discussion"></a>

## Discussion

When the `backBarButtonItem` property is `nil`, the navigation item uses this display mode to determine the title of its Back button. The default value of this property is [UINavigationItemBackButtonDisplayModeDefault](backbuttondisplaymode-swift.enum/default.md).

## See Also

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [UINavigationItemBackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [setHidesBackButton:animated:](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
- [backAction](backaction.md): The back action for the navigation bar.
