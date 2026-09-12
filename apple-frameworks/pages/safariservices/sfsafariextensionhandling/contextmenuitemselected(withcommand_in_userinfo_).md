> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/contextmenuitemselected(withcommand:in:userinfo:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/contextmenuitemselected(withcommand:in:userinfo:))

# contextMenuItemSelected(withCommand:in:userInfo:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

A method the system calls when a user selects one of the app extension’s context menu items.

## Declaration

```swift
optional func contextMenuItemSelected(withCommand command: String, in page: SFSafariPage, userInfo: [String : Any]? = nil)
```

## Parameters

- `command`: The command that is associated with the selected context menu item specified in `Info.plist`.
- `page`: The page where the context menu item was selected.
- `userInfo`: Optional message content. If specified, the dictionary’s value objects conform to the W3C standard for safe passing of structured data, such as Boolean objects, numeric values, strings, and arrays.

## Mentioned In

- [Adjusting settings for contextual menu items](../adjusting-settings-for-contextual-menu-items.md)

## See Also

### Responding to Context Menu Selections

- [validateContextMenuItem(withCommand:in:userInfo:validationHandler:)](validatecontextmenuitem%28withcommand_in_userinfo_validationhandler_%29.md): Validates whether a particular contextual menu item should be displayed.

# contextMenuItemSelectedWithCommand:inPage:userInfo: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

A method the system calls when a user selects one of the app extension’s context menu items.

## Declaration

```objectivec
- (void) contextMenuItemSelectedWithCommand:(NSString *) command inPage:(SFSafariPage *) page userInfo:(NSDictionary<NSString *,id> *) userInfo;
```

## Parameters

- `command`: The command that is associated with the selected context menu item specified in `Info.plist`.
- `page`: The page where the context menu item was selected.
- `userInfo`: Optional message content. If specified, the dictionary’s value objects conform to the W3C standard for safe passing of structured data, such as Boolean objects, numeric values, strings, and arrays.

## Mentioned In

- [Adjusting settings for contextual menu items](../adjusting-settings-for-contextual-menu-items.md)

## See Also

### Responding to Context Menu Selections

- [validateContextMenuItemWithCommand:inPage:userInfo:validationHandler:](validatecontextmenuitem%28withcommand_in_userinfo_validationhandler_%29.md): Validates whether a particular contextual menu item should be displayed.
