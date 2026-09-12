> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarpositioning](https://developer.apple.com/documentation/uikit/uibarpositioning)

# UIBarPositioning (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods for defining the positioning of bars in iOS apps.

## Declaration

```swift
@MainActor protocol UIBarPositioning : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Bars can be positioned at the bottom of their enclosing view, at the top of their enclosing view, or at both the top of their enclosing view and also the top of the screen. In this last case, the bar will abut the status bar displayed by the system. Bars in this position need to have their background extend above their own frame to the top of the screen. This allows the background to show through the status bar.

The classes that implement bars have paired methods to set a background for a given position and set of metrics. These are named similar to the following: [backgroundImage(for:barMetrics:)](uisearchbar/backgroundimage%28for_barmetrics_%29.md) and [setBackgroundImage(\_:for:barMetrics:)](uisearchbar/setbackgroundimage%28__for_barmetrics_%29.md). Use these methods to set an appropriate background image for the different possible bar positions and metrics.

## Topics

### Accessing the bar position

- [barPosition](uibarpositioning/barposition.md): The position of the bar.

### Constants

- [UIBarMetrics](uibarmetrics.md): Constants to specify metrics to use for appearance.
- [UIBarPosition](uibarposition.md): Constants to identify the position of a bar.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UINavigationBar](uinavigationbar.md)
- [UISearchBar](uisearchbar.md)
- [UIToolbar](uitoolbar.md)

## See Also

### Bars

- [UIBarItem](uibaritem.md): An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
- [UIBarButtonItem](uibarbuttonitem.md): A specialized button for placement on a toolbar, navigation bar, or shortcuts bar.
- [UIBarButtonItemGroup](uibarbuttonitemgroup.md): A group of one or more bar button items for placement on a navigation bar or shortcuts bar.
- [UIBarButtonItemVisibilityPriority](uibarbuttonitemvisibilitypriority.md)
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UIToolbar](uitoolbar.md): A control that displays one or more buttons along an edge of your interface.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UIBarPositioningDelegate](uibarpositioningdelegate.md): A set of methods that support the positioning of a bar that conforms to the [UIBarPositioning](uibarpositioning.md) protocol.
- [UIBarMinimization](uibarminimization-swift.struct.md)

# UIBarPositioning (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods for defining the positioning of bars in iOS apps.

## Declaration

```objectivec
@protocol UIBarPositioning <NSObject>
```

<a id="overview"></a>

## Overview

Bars can be positioned at the bottom of their enclosing view, at the top of their enclosing view, or at both the top of their enclosing view and also the top of the screen. In this last case, the bar will abut the status bar displayed by the system. Bars in this position need to have their background extend above their own frame to the top of the screen. This allows the background to show through the status bar.

The classes that implement bars have paired methods to set a background for a given position and set of metrics. These are named similar to the following: [backgroundImageForBarPosition:barMetrics:](uisearchbar/backgroundimage%28for_barmetrics_%29.md) and [setBackgroundImage:forBarPosition:barMetrics:](uisearchbar/setbackgroundimage%28__for_barmetrics_%29.md). Use these methods to set an appropriate background image for the different possible bar positions and metrics.

## Topics

### Accessing the bar position

- [barPosition](uibarpositioning/barposition.md): The position of the bar.

### Constants

- [UIBarMetrics](uibarmetrics.md): Constants to specify metrics to use for appearance.
- [UIBarPosition](uibarposition.md): Constants to identify the position of a bar.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UINavigationBar](uinavigationbar.md)
- [UISearchBar](uisearchbar.md)
- [UIToolbar](uitoolbar.md)

## See Also

### Bars

- [UIBarItem](uibaritem.md): An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
- [UIBarButtonItem](uibarbuttonitem.md): A specialized button for placement on a toolbar, navigation bar, or shortcuts bar.
- [UIBarButtonItemGroup](uibarbuttonitemgroup.md): A group of one or more bar button items for placement on a navigation bar or shortcuts bar.
- [UIBarButtonItemVisibilityPriority](uibarbuttonitemvisibilitypriority.md)
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UIToolbar](uitoolbar.md): A control that displays one or more buttons along an edge of your interface.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UIBarPositioningDelegate](uibarpositioningdelegate.md): A set of methods that support the positioning of a bar that conforms to the [UIBarPositioning](uibarpositioning.md) protocol.
