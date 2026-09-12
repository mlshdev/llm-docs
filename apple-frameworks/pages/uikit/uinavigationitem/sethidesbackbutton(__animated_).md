> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/sethidesbackbutton(_:animated:)](https://developer.apple.com/documentation/uikit/uinavigationitem/sethidesbackbutton(_:animated:))

# setHidesBackButton(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Hides or shows the Back button, optionally animating the transition.

## Declaration

```swift
func setHidesBackButton(_ hidesBackButton: Bool, animated: Bool)
```

## Parameters

- `hidesBackButton`: Specify [true](https://developer.apple.com/documentation/swift/true) if the Back button should be hidden when this navigation item is the top item. Specify [false](https://developer.apple.com/documentation/swift/false) if the Back button should be visible, assuming it hasn’t been replaced by a custom item.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [backItem](../uinavigationbar/backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [UINavigationItem.BackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [backAction](backaction.md): The back action for the navigation bar.

# setHidesBackButton:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Hides or shows the Back button, optionally animating the transition.

## Declaration

```objectivec
- (void) setHidesBackButton:(BOOL) hidesBackButton animated:(BOOL) animated;
```

## Parameters

- `hidesBackButton`: Specify [true](https://developer.apple.com/documentation/swift/true) if the Back button should be hidden when this navigation item is the top item. Specify [false](https://developer.apple.com/documentation/swift/false) if the Back button should be visible, assuming it hasn’t been replaced by a custom item.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [backItem](../uinavigationbar/backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [UINavigationItemBackButtonDisplayMode](backbuttondisplaymode-swift.enum.md): Constants that describe the display modes of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [backAction](backaction.md): The back action for the navigation bar.
