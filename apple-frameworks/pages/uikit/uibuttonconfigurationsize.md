> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfigurationsize](https://developer.apple.com/documentation/uikit/uibuttonconfigurationsize)

# UIButtonConfigurationSize

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A predefined size for button elements.

## Declaration

```objectivec
enum UIButtonConfigurationSize : NSInteger;
```

<a id="overview"></a>

## Overview

You can use this enumeration to choose a predefined size for elements in a button. The value you choose for button size can be effectively overridden by explicitly assigning values for configuration elements like padding, corner style, or title and subtitle font sizes.

## Topics

### Button sizes

- [UIButtonConfigurationSizeLarge](uibuttonconfigurationsize/uibuttonconfigurationsizelarge.md): Displays button elements at a large size.
- [UIButtonConfigurationSizeMedium](uibuttonconfigurationsize/uibuttonconfigurationsizemedium.md): Displays button elements at a standard size.
- [UIButtonConfigurationSizeSmall](uibuttonconfigurationsize/uibuttonconfigurationsizesmall.md): Displays button elements at a small size.
- [UIButtonConfigurationSizeMini](uibuttonconfigurationsize/uibuttonconfigurationsizemini.md): Displays button elements at the smallest size.

## See Also

### Configuring layout

- [buttonSize](uibuttonconfiguration/buttonsize.md): A size that requests a preferred size for the button.
- [contentInsets](uibuttonconfiguration/contentinsets.md): The distance from the button’s content area to its bounds.
- [setDefaultContentInsets](uibuttonconfiguration/setdefaultcontentinsets.md): Restores the default content insets.
