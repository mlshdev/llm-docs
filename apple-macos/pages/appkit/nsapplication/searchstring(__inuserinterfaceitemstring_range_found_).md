> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/searchstring(_:inuserinterfaceitemstring:range:found:)](https://developer.apple.com/documentation/appkit/nsapplication/searchstring(_:inuserinterfaceitemstring:range:found:))

# searchString(\_:inUserInterfaceItemString:range:found:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Searches for the string in the user interface.

## Declaration

```swift
func searchString(_ searchString: String, inUserInterfaceItemString stringToSearch: String, range searchRange: NSRange, found foundRange: UnsafeMutablePointer<NSRange>?) -> Bool
```

## Parameters

- `searchString`: The search string.
- `stringToSearch`: The string to search.
- `searchRange`: The subrange of the `stringToSearch` to restrict the search to.
- `foundRange`: Returns, by-reference, the range of the `searchString` within `stringToSearch`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the searchString is matched, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The search uses the default matching rules for Spotlight for Help.

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler(\_:)](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [unregisterUserInterfaceItemSearchHandler(\_:)](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp(\_:)](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode(\_:)](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](helpmenu.md): The help menu used by the app.

# searchString:inUserInterfaceItemString:searchRange:foundRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Searches for the string in the user interface.

## Declaration

```objectivec
- (BOOL) searchString:(NSString *) searchString inUserInterfaceItemString:(NSString *) stringToSearch searchRange:(NSRange) searchRange foundRange:(NSRange *) foundRange;
```

## Parameters

- `searchString`: The search string.
- `stringToSearch`: The string to search.
- `searchRange`: The subrange of the `stringToSearch` to restrict the search to.
- `foundRange`: Returns, by-reference, the range of the `searchString` within `stringToSearch`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the searchString is matched, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The search uses the default matching rules for Spotlight for Help.

## See Also

### Providing help information

- [registerUserInterfaceItemSearchHandler:](registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [unregisterUserInterfaceItemSearchHandler:](unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp:](showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode:](activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](helpmenu.md): The help menu used by the app.
