> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/backbuttondisplaymode-swift.enum](https://developer.apple.com/documentation/uikit/uinavigationitem/backbuttondisplaymode-swift.enum)

# UINavigationItem.BackButtonDisplayMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that describe the display modes of the Back button.

## Declaration

```swift
enum BackButtonDisplayMode
```

## Topics

### Constants

- [UINavigationItem.BackButtonDisplayMode.default](backbuttondisplaymode-swift.enum/default.md): The navigation item attempts to display a specific title, a generic title, or no title for the Back button, depending on the space available.
- [UINavigationItem.BackButtonDisplayMode.generic](backbuttondisplaymode-swift.enum/generic.md): The navigation item attempts to display a generic title or no title for the Back button, depending on the space available.
- [UINavigationItem.BackButtonDisplayMode.minimal](backbuttondisplaymode-swift.enum/minimal.md): The navigation item displays the Back button indicator instead of a title.

### Initializers

- [init(rawValue:)](backbuttondisplaymode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [setHidesBackButton(\_:animated:)](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
- [backAction](backaction.md): The back action for the navigation bar.

# UINavigationItemBackButtonDisplayMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that describe the display modes of the Back button.

## Declaration

```objectivec
enum UINavigationItemBackButtonDisplayMode : NSInteger;
```

## Topics

### Constants

- [UINavigationItemBackButtonDisplayModeDefault](backbuttondisplaymode-swift.enum/default.md): The navigation item attempts to display a specific title, a generic title, or no title for the Back button, depending on the space available.
- [UINavigationItemBackButtonDisplayModeGeneric](backbuttondisplaymode-swift.enum/generic.md): The navigation item attempts to display a generic title or no title for the Back button, depending on the space available.
- [UINavigationItemBackButtonDisplayModeMinimal](backbuttondisplaymode-swift.enum/minimal.md): The navigation item displays the Back button indicator instead of a title.

## See Also

### Configuring the Back button

- [backBarButtonItem](backbarbuttonitem.md): The bar button item for adding a Back button to the navigation bar.
- [backButtonTitle](backbuttontitle.md): The custom title of the Back button.
- [backButtonDisplayMode](backbuttondisplaymode-swift.property.md): The display mode of the Back button.
- [hidesBackButton](hidesbackbutton.md): A Boolean value that determines whether the navigation item hides the Back button.
- [setHidesBackButton:animated:](sethidesbackbutton%28__animated_%29.md): Hides or shows the Back button, optionally animating the transition.
- [backAction](backaction.md): The back action for the navigation bar.
