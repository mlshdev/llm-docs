> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/recentstitlemenuitemtag](https://developer.apple.com/documentation/appkit/nssearchfield/recentstitlemenuitemtag)

# recentsTitleMenuItemTag (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The menu item that provides the title of the menu group for recent search strings.

## Declaration

```swift
class var recentsTitleMenuItemTag: Int { get }
```

<a id="Discussion"></a>

## Discussion

This item is hidden if there are no recent strings.

You may use this tagged item for separator characters that also don’t appear if there are no recent strings to display.

## See Also

### Managing Menu Templates

- [searchMenuTemplate](searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.
- [clearRecentsMenuItemTag](clearrecentsmenuitemtag.md): The menu item for clearing the current set of recent string searches in the menu.
- [noRecentsMenuItemTag](norecentsmenuitemtag.md): The menu item that describes a lack of recent search strings.
- [recentsMenuItemTag](recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.

# NSSearchFieldRecentsTitleMenuItemTag (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS

The menu item that provides the title of the menu group for recent search strings.

## Declaration

```objectivec
static const NSInteger NSSearchFieldRecentsTitleMenuItemTag;
```

<a id="Discussion"></a>

## Discussion

This item is hidden if there are no recent strings.

You may use this tagged item for separator characters that also don’t appear if there are no recent strings to display.

## See Also

### Managing Menu Templates

- [searchMenuTemplate](searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.
- [NSSearchFieldClearRecentsMenuItemTag](clearrecentsmenuitemtag.md): The menu item for clearing the current set of recent string searches in the menu.
- [NSSearchFieldNoRecentsMenuItemTag](norecentsmenuitemtag.md): The menu item that describes a lack of recent search strings.
- [NSSearchFieldRecentsMenuItemTag](recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
