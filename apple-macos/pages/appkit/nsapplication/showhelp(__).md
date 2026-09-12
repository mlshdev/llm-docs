> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/showhelp(_:)](https://developer.apple.com/documentation/appkit/nsapplication/showhelp(_:))

# showHelp(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.

## Declaration

```swift
func showHelp(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

For information on how to set up your project to take advantage of having Help Viewer display your help book, see [Specifying the Comprehensive Help File](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/OnlineHelp/Tasks/SpecifyHelpFile.html#//apple_ref/doc/uid/20000020).

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler(\_:)](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString(\_:inUserInterfaceItemString:range:found:)](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler(\_:)](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [activateContextHelpMode(\_:)](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](helpmenu.md): The help menu used by the app.

# showHelp: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.

## Declaration

```objectivec
- (void) showHelp:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

For information on how to set up your project to take advantage of having Help Viewer display your help book, see [Specifying the Comprehensive Help File](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/OnlineHelp/Tasks/SpecifyHelpFile.html#//apple_ref/doc/uid/20000020).

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler:](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString:inUserInterfaceItemString:searchRange:foundRange:](searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler:](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [activateContextHelpMode:](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](helpmenu.md): The help menu used by the app.
