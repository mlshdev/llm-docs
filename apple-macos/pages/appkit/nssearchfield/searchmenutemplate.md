> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/searchmenutemplate](https://developer.apple.com/documentation/appkit/nssearchfield/searchmenutemplate)

# searchMenuTemplate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The menu object used to dynamically construct the search field’s pop-up icon menu.

## Declaration

```swift
var searchMenuTemplate: NSMenu? { get set }
```

## See Also

### Related Documentation

- [Search Fields](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SearchFields/SearchFields.html#//apple_ref/doc/uid/10000168i)

### Managing Menu Templates

- [clearRecentsMenuItemTag](clearrecentsmenuitemtag.md): The menu item for clearing the current set of recent string searches in the menu.
- [noRecentsMenuItemTag](norecentsmenuitemtag.md): The menu item that describes a lack of recent search strings.
- [recentsMenuItemTag](recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
- [recentsTitleMenuItemTag](recentstitlemenuitemtag.md): The menu item that provides the title of the menu group for recent search strings.

# searchMenuTemplate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The menu object used to dynamically construct the search field’s pop-up icon menu.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * searchMenuTemplate;
```

## See Also

### Related Documentation

- [Search Fields](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SearchFields/SearchFields.html#//apple_ref/doc/uid/10000168i)

### Managing Menu Templates

- [NSSearchFieldClearRecentsMenuItemTag](clearrecentsmenuitemtag.md): The menu item for clearing the current set of recent string searches in the menu.
- [NSSearchFieldNoRecentsMenuItemTag](norecentsmenuitemtag.md): The menu item that describes a lack of recent search strings.
- [NSSearchFieldRecentsMenuItemTag](recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
- [NSSearchFieldRecentsTitleMenuItemTag](recentstitlemenuitemtag.md): The menu item that provides the title of the menu group for recent search strings.
