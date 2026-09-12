> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/menuitems(for:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/menuitems(for:))

# menuItems(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Retrieves the menu items for a given tab.

## Declaration

```swift
func menuItems(for tab: any WKWebExtensionTab) -> [UIMenuElement]
```

```swift
func menuItems(for tab: any WKWebExtensionTab) -> [NSMenuItem]
```

## Parameters

- `tab`: The tab for which to retrieve the menu items.

<a id="discussion"></a>

## Discussion

Returns menu items provided by the extension, allowing the user to perform extension-defined actions on the tab.

The app is responsible for displaying these menu items, typically in a context menu or a long-press menu on the tab.

> **Note**

> The properties of the menu items, including the items themselves, can change dynamically. Therefore, the app should fetch the menu items immediately before showing them, to ensure that the most current and relevant items are presented.

# menuItemsForTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Retrieves the menu items for a given tab.

## Declaration

```objectivec
- (NSArray<UIMenuElement *> *) menuItemsForTab:(id<WKWebExtensionTab>) tab;
```

```objectivec
- (NSArray<NSMenuItem *> *) menuItemsForTab:(id<WKWebExtensionTab>) tab;
```

## Parameters

- `tab`: The tab for which to retrieve the menu items.

<a id="discussion"></a>

## Discussion

Returns menu items provided by the extension, allowing the user to perform extension-defined actions on the tab.

The app is responsible for displaying these menu items, typically in a context menu or a long-press menu on the tab.

> **Note**

> The properties of the menu items, including the items themselves, can change dynamically. Therefore, the app should fetch the menu items immediately before showing them, to ensure that the most current and relevant items are presented.
