> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/backbuttondisplaymode-swift.enum/generic](https://developer.apple.com/documentation/uikit/uinavigationitem/backbuttondisplaymode-swift.enum/generic)

# UINavigationItem.BackButtonDisplayMode.generic (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The navigation item attempts to display a generic title or no title for the Back button, depending on the space available.

## Declaration

```swift
case generic
```

<a id="Discussion"></a>

## Discussion

When you set the [backButtonDisplayMode](../backbuttondisplaymode-swift.property.md) property to this value, the navigation item attempts to display these titles for its Back button in the following order:

- A generic title, such as *Back*
- No title

The navigation item selects the most appropriate title for the Back button according to the available space. This display mode ignores the values of the [title](../title.md) and [backButtonTitle](../backbuttontitle.md) properties.

## See Also

### Constants

- [UINavigationItem.BackButtonDisplayMode.default](default.md): The navigation item attempts to display a specific title, a generic title, or no title for the Back button, depending on the space available.
- [UINavigationItem.BackButtonDisplayMode.minimal](minimal.md): The navigation item displays the Back button indicator instead of a title.

# UINavigationItemBackButtonDisplayModeGeneric (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The navigation item attempts to display a generic title or no title for the Back button, depending on the space available.

## Declaration

```objectivec
UINavigationItemBackButtonDisplayModeGeneric
```

<a id="Discussion"></a>

## Discussion

When you set the [backButtonDisplayMode](../backbuttondisplaymode-swift.property.md) property to this value, the navigation item attempts to display these titles for its Back button in the following order:

- A generic title, such as *Back*
- No title

The navigation item selects the most appropriate title for the Back button according to the available space. This display mode ignores the values of the [title](../title.md) and [backButtonTitle](../backbuttontitle.md) properties.

## See Also

### Constants

- [UINavigationItemBackButtonDisplayModeDefault](default.md): The navigation item attempts to display a specific title, a generic title, or no title for the Back button, depending on the space available.
- [UINavigationItemBackButtonDisplayModeMinimal](minimal.md): The navigation item displays the Back button indicator instead of a title.
