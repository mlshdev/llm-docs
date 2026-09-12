> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/helpmenu](https://developer.apple.com/documentation/appkit/nsapplication/helpmenu)

# helpMenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The help menu used by the app.

## Declaration

```swift
var helpMenu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify your app’s Help menu. When this property contains a valid menu, the system installs its Spotlight-related menu items on that menu. When the value is `nil`, AppKit installs Spotlight menu items on the menu of its choosing. To suppress Spotlight help items altogether, specify a menu that doesn’t appear on the menu bar.

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler(\_:)](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString(\_:inUserInterfaceItemString:range:found:)](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler(\_:)](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp(\_:)](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode(\_:)](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.

# helpMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The help menu used by the app.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * helpMenu;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify your app’s Help menu. When this property contains a valid menu, the system installs its Spotlight-related menu items on that menu. When the value is `nil`, AppKit installs Spotlight menu items on the menu of its choosing. To suppress Spotlight help items altogether, specify a menu that doesn’t appear on the menu bar.

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler:](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString:inUserInterfaceItemString:searchRange:foundRange:](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler:](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp:](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode:](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
