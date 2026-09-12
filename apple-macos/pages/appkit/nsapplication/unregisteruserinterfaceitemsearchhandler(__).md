> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/unregisteruserinterfaceitemsearchhandler(_:)](https://developer.apple.com/documentation/appkit/nsapplication/unregisteruserinterfaceitemsearchhandler(_:))

# unregisterUserInterfaceItemSearchHandler(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Unregister an object that provides help data to your app.

## Declaration

```swift
func unregisterUserInterfaceItemSearchHandler(_ handler: any NSUserInterfaceItemSearching)
```

## Parameters

- `handler`: The class instance that conforms to `NSUserInterfaceItemSearching` and provides help content.

<a id="Discussion"></a>

## Discussion

If you unregister the same instance more than once the subsequent invocations are ignored. Unregistering an instance that was never registered is ignored.

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler(\_:)](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString(\_:inUserInterfaceItemString:range:found:)](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [showHelp(\_:)](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode(\_:)](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](helpmenu.md): The help menu used by the app.

# unregisterUserInterfaceItemSearchHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Unregister an object that provides help data to your app.

## Declaration

```objectivec
- (void) unregisterUserInterfaceItemSearchHandler:(id<NSUserInterfaceItemSearching>) handler;
```

## Parameters

- `handler`: The class instance that conforms to `NSUserInterfaceItemSearching` and provides help content.

<a id="Discussion"></a>

## Discussion

If you unregister the same instance more than once the subsequent invocations are ignored. Unregistering an instance that was never registered is ignored.

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler:](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString:inUserInterfaceItemString:searchRange:foundRange:](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [showHelp:](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode:](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](helpmenu.md): The help menu used by the app.
