> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemvalidation](https://developer.apple.com/documentation/appkit/nstoolbaritemvalidation)

# NSToolbarItemValidation (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

Validation of a toolbar item.

## Declaration

```swift
protocol NSToolbarItemValidation : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A toolbar item with a valid target and action is enabled by default. To allow a toolbar item to be disabled in certain situations, a toolbar item’s target can implement the [validateToolbarItem(\_:)](nstoolbaritemvalidation/validatetoolbaritem%28__%29.md) method.

> **Note**

>  The [NSToolbarItem](nstoolbaritem.md) [validate()](nstoolbaritem/validate%28%29.md) method is called only if the item’s target has a valid action defined on its target and if the item isn’t a custom view item. If you want to validate a custom view item, then you have to subclass [NSToolbarItem](nstoolbaritem.md) and override [validate()](nstoolbaritem/validate%28%29.md).

## Topics

### Enabling and disabling toolbar items

- [validateToolbarItem(\_:)](nstoolbaritemvalidation/validatetoolbaritem%28__%29.md): Determines whether to enable or disable the toolbar item.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### View

- [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.
- [NSToolbar](nstoolbar.md): An object that manages the space above your app’s custom content and either below or integrated with the window’s title bar.

# NSToolbarItemValidation (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

Validation of a toolbar item.

## Declaration

```objectivec
@protocol NSToolbarItemValidation <NSObject>
```

<a id="overview"></a>

## Overview

A toolbar item with a valid target and action is enabled by default. To allow a toolbar item to be disabled in certain situations, a toolbar item’s target can implement the [validateToolbarItem:](nstoolbaritemvalidation/validatetoolbaritem%28__%29.md) method.

> **Note**

>  The [NSToolbarItem](nstoolbaritem.md) [validate](nstoolbaritem/validate%28%29.md) method is called only if the item’s target has a valid action defined on its target and if the item isn’t a custom view item. If you want to validate a custom view item, then you have to subclass [NSToolbarItem](nstoolbaritem.md) and override [validate](nstoolbaritem/validate%28%29.md).

## Topics

### Enabling and disabling toolbar items

- [validateToolbarItem:](nstoolbaritemvalidation/validatetoolbaritem%28__%29.md): Determines whether to enable or disable the toolbar item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### View

- [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.
- [NSToolbar](nstoolbar.md): An object that manages the space above your app’s custom content and either below or integrated with the window’s title bar.
