> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action/menuitems](https://developer.apple.com/documentation/webkit/wkwebextension/action/menuitems)

# menuItems (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The menu items provided by the extension for this action.

## Declaration

```swift
var menuItems: [UIMenuElement] { get }
```

```swift
var menuItems: [NSMenuItem] { get }
```

<a id="discussion"></a>

## Discussion

Provides menu items supplied by the extension, allowing the user to perform extension-defined actions.

The app is responsible for displaying these menu items, typically in a context menu or a long-press menu on the action in action sheets or toolbars.

> **Note**

> The properties of the menu items, including the items themselves, can change dynamically. Therefore, the app should fetch the menu items on demand immediately before showing them, to ensure that the most current and relevant items are presented.

# menuItems (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The menu items provided by the extension for this action.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UIMenuElement *> * menuItems;
```

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSMenuItem *> * menuItems;
```

<a id="discussion"></a>

## Discussion

Provides menu items supplied by the extension, allowing the user to perform extension-defined actions.

The app is responsible for displaying these menu items, typically in a context menu or a long-press menu on the action in action sheets or toolbars.

> **Note**

> The properties of the menu items, including the items themselves, can change dynamically. Therefore, the app should fetch the menu items on demand immediately before showing them, to ensure that the most current and relevant items are presented.
