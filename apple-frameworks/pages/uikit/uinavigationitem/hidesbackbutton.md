> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/hidesbackbutton](https://developer.apple.com/documentation/uikit/uinavigationitem/hidesbackbutton)

# hidesBackButton (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the navigation item hides the Back button.

## Declaration

```swift
var hidesBackButton: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the Back button is hidden when this navigation item is the top item. This is true regardless of the value in the [leftItemsSupplementBackButton](leftitemssupplementbackbutton.md) property. When set to [false](https://developer.apple.com/documentation/swift/false), the Back button is shown if it’s still present. (It can be replaced by values in either the [leftBarButtonItem](leftbarbuttonitem.md) or [leftBarButtonItems](leftbarbuttonitems.md) properties.) The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [backItem](../uinavigationbar/backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [UINavigationItem.BackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [setHidesBackButton(\_:animated:)](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
- [backAction](backaction.md): The back action for the navigation bar.

# hidesBackButton (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the navigation item hides the Back button.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL hidesBackButton;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the Back button is hidden when this navigation item is the top item. This is true regardless of the value in the [leftItemsSupplementBackButton](leftitemssupplementbackbutton.md) property. When set to [false](https://developer.apple.com/documentation/swift/false), the Back button is shown if it’s still present. (It can be replaced by values in either the [leftBarButtonItem](leftbarbuttonitem.md) or [leftBarButtonItems](leftbarbuttonitems.md) properties.) The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [backItem](../uinavigationbar/backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [UINavigationItemBackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [setHidesBackButton:animated:](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
- [backAction](backaction.md): The back action for the navigation bar.
