> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfkeychainsavepanel/beginsheet(fordirectory:file:modalfor:modaldelegate:didend:contextinfo:)](https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/beginsheet(fordirectory:file:modalfor:modaldelegate:didend:contextinfo:))

# beginSheet(forDirectory:file:modalFor:modalDelegate:didEnd:contextInfo:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a sheet that allows a user to create a new keychain.

## Declaration

```swift
func beginSheet(forDirectory path: String!, file name: String!, modalFor docWindow: NSWindow!, modalDelegate delegate: Any!, didEnd didEndSelector: Selector!, contextInfo: UnsafeMutableRawPointer!)
```

## Parameters

- `path`: The path to the folder where the keychain is created. Specify `nil` for `~/Library/Keychains`.
- `name`: The keychain name to be automatically displayed in the Save As field of the sheet.
- `docWindow`: The parent window to which the sheet is attached. If this parameter is `nil`, the behavior defaults to a standalone modal window.
- `delegate`: The delegate object in which the method specified in the `didEndSelector` parameter is implemented.
- `didEndSelector`: A method selector for a delegate method called after the modal session has ended, but before the sheet has been dismissed. Implementation of this delegate method is optional.
- `contextInfo`: A pointer to data that is passed to the delegate method. You can use this data pointer for any purpose you wish.

<a id="Discussion"></a>

## Discussion

The delegate method has the following signature:

```objc
- (void)createPanelDidEnd:(NSWindow *)sheet
        returnCode:(int)returnCode
        contextInfo:(void *)contextInfo
```

The parameters for the delegate method are:

- **`sheet`**: The window to which the sheet was attached.
- **`returnCode`**: The result code indicating which button the user clicked: either [NSFileHandlingPanelOKButton](../../appkit/nsfilehandlingpanelokbutton.md) or [NSFileHandlingPanelCancelButton](../../appkit/nsfilehandlingpanelcancelbutton.md).
- **`contextInfo`**: Client-defined contextual data that is passed in the `contextInfo` parameter of the [beginSheet(forDirectory:file:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28fordirectory_file_modalfor_modaldelegate_didend_contextinfo_%29.md) method.

The delegate method may dismiss the keychain settings sheet itself; if it does not, the sheet is dismissed on return from the `beginSheetForDirectory:...` method.

Use the [keychain()](keychain%28%29.md) method to obtain the keychain created by the user.

## See Also

### Related Documentation

- [keychain()](keychain%28%29.md): Returns the keychain created by the keychain save panel.
- [runModal(forDirectory:file:)](runmodal%28fordirectory_file_%29.md): Displays a panel that allows a user to create a new keychain.

### Displaying a Sheet or Panel

- [setPassword(\_:)](setpassword%28__%29.md): Specifies the password for the keychain that will be created.
- [runModal(forDirectory:file:)](runmodal%28fordirectory_file_%29.md): Displays a panel that allows a user to create a new keychain.

# beginSheetForDirectory:file:modalForWindow:modalDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a sheet that allows a user to create a new keychain.

## Declaration

```objectivec
- (void) beginSheetForDirectory:(NSString *) path file:(NSString *) name modalForWindow:(NSWindow *) docWindow modalDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `path`: The path to the folder where the keychain is created. Specify `nil` for `~/Library/Keychains`.
- `name`: The keychain name to be automatically displayed in the Save As field of the sheet.
- `docWindow`: The parent window to which the sheet is attached. If this parameter is `nil`, the behavior defaults to a standalone modal window.
- `delegate`: The delegate object in which the method specified in the `didEndSelector` parameter is implemented.
- `didEndSelector`: A method selector for a delegate method called after the modal session has ended, but before the sheet has been dismissed. Implementation of this delegate method is optional.
- `contextInfo`: A pointer to data that is passed to the delegate method. You can use this data pointer for any purpose you wish.

<a id="Discussion"></a>

## Discussion

The delegate method has the following signature:

```objc
- (void)createPanelDidEnd:(NSWindow *)sheet
        returnCode:(int)returnCode
        contextInfo:(void *)contextInfo
```

The parameters for the delegate method are:

- **`sheet`**: The window to which the sheet was attached.
- **`returnCode`**: The result code indicating which button the user clicked: either [NSFileHandlingPanelOKButton](../../appkit/nsfilehandlingpanelokbutton.md) or [NSFileHandlingPanelCancelButton](../../appkit/nsfilehandlingpanelcancelbutton.md).
- **`contextInfo`**: Client-defined contextual data that is passed in the `contextInfo` parameter of the [beginSheetForDirectory:file:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28fordirectory_file_modalfor_modaldelegate_didend_contextinfo_%29.md) method.

The delegate method may dismiss the keychain settings sheet itself; if it does not, the sheet is dismissed on return from the `beginSheetForDirectory:...` method.

Use the [keychain](keychain%28%29.md) method to obtain the keychain created by the user.

## See Also

### Related Documentation

- [keychain](keychain%28%29.md): Returns the keychain created by the keychain save panel.
- [runModalForDirectory:file:](runmodal%28fordirectory_file_%29.md): Displays a panel that allows a user to create a new keychain.

### Displaying a Sheet or Panel

- [setPassword:](setpassword%28__%29.md): Specifies the password for the keychain that will be created.
- [runModalForDirectory:file:](runmodal%28fordirectory_file_%29.md): Displays a panel that allows a user to create a new keychain.
