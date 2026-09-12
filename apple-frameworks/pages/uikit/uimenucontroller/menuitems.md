> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenucontroller/menuitems](https://developer.apple.com/documentation/uikit/uimenucontroller/menuitems)

# menuItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The custom menu items for the editing menu.

## Declaration

```swift
var menuItems: [UIMenuItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil` (no custom menu items). Each menu item is an instance of the UIMenuItem class. You may create your own menu items, each with its own title and action selector, and add them to the editing menu through this property. Custom items appear in the menu after any system menu items.

# menuItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The custom menu items for the editing menu.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<UIMenuItem *> * menuItems;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil` (no custom menu items). Each menu item is an instance of the UIMenuItem class. You may create your own menu items, each with its own title and action selector, and add them to the editing menu through this property. Custom items appear in the menu after any system menu items.
