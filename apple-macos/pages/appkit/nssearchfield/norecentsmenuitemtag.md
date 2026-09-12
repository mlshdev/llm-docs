> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/norecentsmenuitemtag](https://developer.apple.com/documentation/appkit/nssearchfield/norecentsmenuitemtag)

# noRecentsMenuItemTag (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The menu item that describes a lack of recent search strings.

## Declaration

```swift
class var noRecentsMenuItemTag: Int { get }
```

<a id="Discussion"></a>

## Discussion

This item is hidden if there have been recent searches.

## See Also

### Managing Menu Templates

- [searchMenuTemplate](searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.
- [clearRecentsMenuItemTag](clearrecentsmenuitemtag.md): The menu item for clearing the current set of recent string searches in the menu.
- [recentsMenuItemTag](recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
- [recentsTitleMenuItemTag](recentstitlemenuitemtag.md): The menu item that provides the title of the menu group for recent search strings.

# NSSearchFieldNoRecentsMenuItemTag (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS

The menu item that describes a lack of recent search strings.

## Declaration

```objectivec
static const NSInteger NSSearchFieldNoRecentsMenuItemTag;
```

<a id="Discussion"></a>

## Discussion

This item is hidden if there have been recent searches.

## See Also

### Managing Menu Templates

- [searchMenuTemplate](searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.
- [NSSearchFieldClearRecentsMenuItemTag](clearrecentsmenuitemtag.md): The menu item for clearing the current set of recent string searches in the menu.
- [NSSearchFieldRecentsMenuItemTag](recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
- [NSSearchFieldRecentsTitleMenuItemTag](recentstitlemenuitemtag.md): The menu item that provides the title of the menu group for recent search strings.
