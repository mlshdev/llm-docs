> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/clearrecentsmenuitemtag](https://developer.apple.com/documentation/appkit/nssearchfield/clearrecentsmenuitemtag)

# clearRecentsMenuItemTag (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The menu item for clearing the current set of recent string searches in the menu.

## Declaration

```swift
class var clearRecentsMenuItemTag: Int { get }
```

<a id="Discussion"></a>

## Discussion

This item is hidden if there are no recent strings.

## See Also

### Managing Menu Templates

- [searchMenuTemplate](searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.
- [noRecentsMenuItemTag](norecentsmenuitemtag.md): The menu item that describes a lack of recent search strings.
- [recentsMenuItemTag](recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
- [recentsTitleMenuItemTag](recentstitlemenuitemtag.md): The menu item that provides the title of the menu group for recent search strings.

# NSSearchFieldClearRecentsMenuItemTag (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS

The menu item for clearing the current set of recent string searches in the menu.

## Declaration

```objectivec
static const NSInteger NSSearchFieldClearRecentsMenuItemTag;
```

<a id="Discussion"></a>

## Discussion

This item is hidden if there are no recent strings.

## See Also

### Managing Menu Templates

- [searchMenuTemplate](searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.
- [NSSearchFieldNoRecentsMenuItemTag](norecentsmenuitemtag.md): The menu item that describes a lack of recent search strings.
- [NSSearchFieldRecentsMenuItemTag](recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
- [NSSearchFieldRecentsTitleMenuItemTag](recentstitlemenuitemtag.md): The menu item that provides the title of the menu group for recent search strings.
