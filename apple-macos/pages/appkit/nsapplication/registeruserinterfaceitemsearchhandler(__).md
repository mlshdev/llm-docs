> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/registeruserinterfaceitemsearchhandler(_:)](https://developer.apple.com/documentation/appkit/nsapplication/registeruserinterfaceitemsearchhandler(_:))

# registerUserInterfaceItemSearchHandler(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Register an object that provides help data to your app.

## Declaration

```swift
func registerUserInterfaceItemSearchHandler(_ handler: any NSUserInterfaceItemSearching)
```

## Parameters

- `handler`: The class instance that conforms to `NSUserInterfaceItemSearching` and provides help content.

<a id="Discussion"></a>

## Discussion

You can register as many search handlers as you like. If you register the same instance more than once the subsequent registrations are ignored.

## See Also

### Providing help information

- [searchString(\_:inUserInterfaceItemString:range:found:)](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler(\_:)](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp(\_:)](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode(\_:)](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](helpmenu.md): The help menu used by the app.

# registerUserInterfaceItemSearchHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Register an object that provides help data to your app.

## Declaration

```objectivec
- (void) registerUserInterfaceItemSearchHandler:(id<NSUserInterfaceItemSearching>) handler;
```

## Parameters

- `handler`: The class instance that conforms to `NSUserInterfaceItemSearching` and provides help content.

<a id="Discussion"></a>

## Discussion

You can register as many search handlers as you like. If you register the same instance more than once the subsequent registrations are ignored.

## See Also

### Providing help information

- [searchString:inUserInterfaceItemString:searchRange:foundRange:](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler:](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp:](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode:](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](helpmenu.md): The help menu used by the app.
