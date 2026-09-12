> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/propertiestoupdate](https://developer.apple.com/documentation/appkit/nsmenu/propertiestoupdate)

# propertiesToUpdate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The available properties for the menu.

## Declaration

```swift
var propertiesToUpdate: NSMenu.Properties { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a bitwise-C `OR` set of [NSMenu.Properties](properties.md) values that are applicable to the menu.

This property may be queried from specific callbacks to determine which menu properties are defined, and whether or not they are relevant to changes you need to make to the menu. This property is intended to allow for more efficient updating of the menu in certain circumstances.

For example, if the [propertyItemImage](properties/propertyitemimage.md) property isn’t set, your delegate doesn’t need to spend time updating the images of the menu items, because the images aren’t needed (for example, during key-equivalent matching).

You have to update a menu property only if it has changed since you last set it, even if the corresponding bit is `1`. For example, if the title of a menu item never changes, you have to set it only once.

Accessing this property is optional; it is always acceptable to fully update all properties of the menu.

# propertiesToUpdate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The available properties for the menu.

## Declaration

```objectivec
@property (readonly) NSMenuProperties propertiesToUpdate;
```

<a id="Discussion"></a>

## Discussion

This property contains a bitwise-C `OR` set of [NSMenuProperties](properties.md) values that are applicable to the menu.

This property may be queried from specific callbacks to determine which menu properties are defined, and whether or not they are relevant to changes you need to make to the menu. This property is intended to allow for more efficient updating of the menu in certain circumstances.

For example, if the [NSMenuPropertyItemImage](properties/propertyitemimage.md) property isn’t set, your delegate doesn’t need to spend time updating the images of the menu items, because the images aren’t needed (for example, during key-equivalent matching).

You have to update a menu property only if it has changed since you last set it, even if the corresponding bit is `1`. For example, if the title of a menu item never changes, you have to set it only once.

Accessing this property is optional; it is always acceptable to fully update all properties of the menu.
