> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocktile](https://developer.apple.com/documentation/appkit/nsdocktile)

# NSDockTile (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The visual representation of your app’s miniaturized windows and app icon as they appear in the Dock.

## Declaration

```swift
class NSDockTile
```

<a id="overview"></a>

## Overview

You do not create Dock tile objects explicitly in your app. Instead, you retrieve the Dock tile for an existing window or for the app by calling that object’s [dockTile](nswindow/docktile.md) method. Also, you do not subclass the [NSDockTile](nsdocktile.md) class; instead, you use the methods of the class to make the following customizations:

- Badge the tile with a custom string.
- Remove or show the application icon badge.
- Draw the tile content yourself.

If you decide to draw the tile content yourself, you must provide a custom content view to handle the drawing.

<a id="Application-Dock-Tiles"></a>

### Application Dock Tiles

An application Dock tile defaults to display the application’s [applicationIconImage](nsapplication/applicationiconimage.md).

The application Dock tile never shows a smaller application icon badge.

Whether using the default or custom view, the application Dock tile may be badged with a short custom string.

<a id="Window-Dock-Tiles"></a>

### Window Dock Tiles

A window Dock tile defaults to display a miniaturized version of the windows contents with a badge derived from the application Dock icon, including any customized application Dock icon. The default window Dock tile image may not be badged with a custom string.

A window Dock tile can use a custom view to draw the Dock icon. If a custom view is used, no application badge will be added, but the text label will be overlaid on top of the icon.

## Topics

### Drawing the Tile’s Content

- [contentView](nsdocktile/contentview.md): The view to use for drawing the dock tile contents.

### Getting the Tile Information

- [size](nsdocktile/size.md): The size of the tile.
- [owner](nsdocktile/owner.md): The object represented by the dock tile.

### Applying Badge Icons to the Tile

- [showsApplicationBadge](nsdocktile/showsapplicationbadge.md): A Boolean showing whether the tile is badged with the application’s icon
- [badgeLabel](nsdocktile/badgelabel.md): The string to be displayed in the tile’s badging area.

### Updating the Dock Tile

- [display()](nsdocktile/display%28%29.md): Redraws the dock tile’s content.

### Constants

- [Dock Tile Plug-In Support Version](dock-tile-plug-in-support-version.md): The version of the AppKit framework containing support for dock tile plug-ins.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### The Dock

- [NSDockTilePlugIn](nsdocktileplugin.md): A set of methods implemented by plug-ins that allow an app’s Dock tile to be customized while the app is not running.

# NSDockTile (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The visual representation of your app’s miniaturized windows and app icon as they appear in the Dock.

## Declaration

```objectivec
@interface NSDockTile : NSObject
```

<a id="overview"></a>

## Overview

You do not create Dock tile objects explicitly in your app. Instead, you retrieve the Dock tile for an existing window or for the app by calling that object’s [dockTile](nswindow/docktile.md) method. Also, you do not subclass the [NSDockTile](nsdocktile.md) class; instead, you use the methods of the class to make the following customizations:

- Badge the tile with a custom string.
- Remove or show the application icon badge.
- Draw the tile content yourself.

If you decide to draw the tile content yourself, you must provide a custom content view to handle the drawing.

<a id="Application-Dock-Tiles"></a>

### Application Dock Tiles

An application Dock tile defaults to display the application’s [applicationIconImage](nsapplication/applicationiconimage.md).

The application Dock tile never shows a smaller application icon badge.

Whether using the default or custom view, the application Dock tile may be badged with a short custom string.

<a id="Window-Dock-Tiles"></a>

### Window Dock Tiles

A window Dock tile defaults to display a miniaturized version of the windows contents with a badge derived from the application Dock icon, including any customized application Dock icon. The default window Dock tile image may not be badged with a custom string.

A window Dock tile can use a custom view to draw the Dock icon. If a custom view is used, no application badge will be added, but the text label will be overlaid on top of the icon.

## Topics

### Drawing the Tile’s Content

- [contentView](nsdocktile/contentview.md): The view to use for drawing the dock tile contents.

### Getting the Tile Information

- [size](nsdocktile/size.md): The size of the tile.
- [owner](nsdocktile/owner.md): The object represented by the dock tile.

### Applying Badge Icons to the Tile

- [showsApplicationBadge](nsdocktile/showsapplicationbadge.md): A Boolean showing whether the tile is badged with the application’s icon
- [badgeLabel](nsdocktile/badgelabel.md): The string to be displayed in the tile’s badging area.

### Updating the Dock Tile

- [display](nsdocktile/display%28%29.md): Redraws the dock tile’s content.

### Constants

- [Dock Tile Plug-In Support Version](dock-tile-plug-in-support-version.md): The version of the AppKit framework containing support for dock tile plug-ins.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### The Dock

- [NSDockTilePlugIn](nsdocktileplugin.md): A set of methods implemented by plug-ins that allow an app’s Dock tile to be customized while the app is not running.
