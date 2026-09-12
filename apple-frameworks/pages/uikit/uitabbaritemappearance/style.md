> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritemappearance/style](https://developer.apple.com/documentation/uikit/uitabbaritemappearance/style)

# UITabBarItemAppearance.Style (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants indicating the layout of a tab bar item’s content.

## Declaration

```swift
enum Style
```

<a id="overview"></a>

## Overview

A tab bar adjusts the layout of each item’s icon and title string based on the current trait environment and other factors.

## Topics

### Item layout

- [UITabBarItemAppearance.Style.stacked](style/stacked.md): A vertically stacked icon and title.
- [UITabBarItemAppearance.Style.inline](style/inline.md): A side-by-side layout of the icon and title, suitable for use in regular-width environments.
- [UITabBarItemAppearance.Style.compactInline](style/compactinline.md): A side-by-side layout of the icon and title, suitable for use in compact-width environments.

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Resetting the appearance properties

- [configureWithDefault(for:)](configurewithdefault%28for_%29.md): Configures the tab bar item appearance object with appropriate values for the specified style.

# UITabBarItemAppearanceStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants indicating the layout of a tab bar item’s content.

## Declaration

```objectivec
enum UITabBarItemAppearanceStyle : NSInteger;
```

<a id="overview"></a>

## Overview

A tab bar adjusts the layout of each item’s icon and title string based on the current trait environment and other factors.

## Topics

### Item layout

- [UITabBarItemAppearanceStyleStacked](style/stacked.md): A vertically stacked icon and title.
- [UITabBarItemAppearanceStyleInline](style/inline.md): A side-by-side layout of the icon and title, suitable for use in regular-width environments.
- [UITabBarItemAppearanceStyleCompactInline](style/compactinline.md): A side-by-side layout of the icon and title, suitable for use in compact-width environments.

## See Also

### Resetting the appearance properties

- [configureWithDefaultForStyle:](configurewithdefault%28for_%29.md): Configures the tab bar item appearance object with appropriate values for the specified style.
