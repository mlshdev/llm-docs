> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/activatecontexthelpmode(_:)](https://developer.apple.com/documentation/appkit/nsapplication/activatecontexthelpmode(_:))

# activateContextHelpMode(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Places the receiver in context-sensitive help mode.

## Declaration

```swift
func activateContextHelpMode(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

In this mode, the cursor becomes a question mark, and help appears for any user interface item the user clicks.

Most apps don’t use this method. Instead, apps enter context-sensitive mode when the user presses the Help key. Apps exit context-sensitive help mode upon the first event after a help window is displayed.

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler(\_:)](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString(\_:inUserInterfaceItemString:range:found:)](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler(\_:)](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp(\_:)](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [helpMenu](helpmenu.md): The help menu used by the app.

# activateContextHelpMode: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Places the receiver in context-sensitive help mode.

## Declaration

```objectivec
- (void) activateContextHelpMode:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

In this mode, the cursor becomes a question mark, and help appears for any user interface item the user clicks.

Most apps don’t use this method. Instead, apps enter context-sensitive mode when the user presses the Help key. Apps exit context-sensitive help mode upon the first event after a help window is displayed.

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler:](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString:inUserInterfaceItemString:searchRange:foundRange:](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler:](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp:](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [helpMenu](helpmenu.md): The help menu used by the app.
