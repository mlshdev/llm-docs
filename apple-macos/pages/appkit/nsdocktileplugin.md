> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocktileplugin](https://developer.apple.com/documentation/appkit/nsdocktileplugin)

# NSDockTilePlugIn (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods implemented by plug-ins that allow an app’s Dock tile to be customized while the app is not running.

## Declaration

```swift
protocol NSDockTilePlugIn : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Customizing an application’s Dock tile when the application itself is not running requires that you write a plug-in. The plug-in’s principal class must implement the [NSDockTilePlugIn](nsdocktileplugin.md) protocol.

The name of the plugin is indicated by a `NSDockTilePlugIn` key in the application’s `Info.plist` file.

The plugin is loaded in a system process at login time or when the application tile is added to the Dock.  When the plugin is loaded, the principal class’ implementation of [setDockTile(\_:)](nsdocktileplugin/setdocktile%28__%29.md) is invoked, passing an [NSDockTile](nsdocktile.md) for the plug-in to customize.  If the principal class implements [dockMenu()](nsdocktileplugin/dockmenu%28%29.md) it is invoked whenever the user causes the application’s dock menu to be shown.  When the dock tile is no longer valid (for example,. the application has been removed from the dock) -[setDockTile(\_:)](nsdocktileplugin/setdocktile%28__%29.md) is invoked with `nil`.

## Topics

### Setting the Dock Tile

- [setDockTile(\_:)](nsdocktileplugin/setdocktile%28__%29.md): Invoked when the plug-in is first loaded and when the application is removed from the Dock.

### Getting the Dock Tile Menu

- [dockMenu()](nsdocktileplugin/dockmenu%28%29.md): Invoked when the user causes the application’s dock menu to be shown.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### The Dock

- [NSDockTile](nsdocktile.md): The visual representation of your app’s miniaturized windows and app icon as they appear in the Dock.

# NSDockTilePlugIn (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods implemented by plug-ins that allow an app’s Dock tile to be customized while the app is not running.

## Declaration

```objectivec
@protocol NSDockTilePlugIn <NSObject>
```

<a id="overview"></a>

## Overview

Customizing an application’s Dock tile when the application itself is not running requires that you write a plug-in. The plug-in’s principal class must implement the [NSDockTilePlugIn](nsdocktileplugin.md) protocol.

The name of the plugin is indicated by a `NSDockTilePlugIn` key in the application’s `Info.plist` file.

The plugin is loaded in a system process at login time or when the application tile is added to the Dock.  When the plugin is loaded, the principal class’ implementation of [setDockTile:](nsdocktileplugin/setdocktile%28__%29.md) is invoked, passing an [NSDockTile](nsdocktile.md) for the plug-in to customize.  If the principal class implements [dockMenu](nsdocktileplugin/dockmenu%28%29.md) it is invoked whenever the user causes the application’s dock menu to be shown.  When the dock tile is no longer valid (for example,. the application has been removed from the dock) -[setDockTile:](nsdocktileplugin/setdocktile%28__%29.md) is invoked with `nil`.

## Topics

### Setting the Dock Tile

- [setDockTile:](nsdocktileplugin/setdocktile%28__%29.md): Invoked when the plug-in is first loaded and when the application is removed from the Dock.

### Getting the Dock Tile Menu

- [dockMenu](nsdocktileplugin/dockmenu%28%29.md): Invoked when the user causes the application’s dock menu to be shown.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### The Dock

- [NSDockTile](nsdocktile.md): The visual representation of your app’s miniaturized windows and app icon as they appear in the Dock.
