> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfkeychainsavepanel/runmodal(fordirectory:file:)](https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/runmodal(fordirectory:file:))

# runModal(forDirectory:file:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a panel that allows a user to create a new keychain.

## Declaration

```swift
func runModal(forDirectory path: String!, file name: String!) -> Int
```

## Parameters

- `path`: The path to the folder where the keychain is created. Specify `nil` for `~/Library/Keychains`.
- `name`: The keychain name to be automatically displayed in the Save As field of the panel.

<a id="Discussion"></a>

## Discussion

This method returns a result code from the [runModalForDirectory:file:types:](../../appkit/nsopenpanel/runmodalfordirectory_file_types_.md) method of the [NSSavePanel](../../appkit/nssavepanel.md) class: [NSFileHandlingPanelOKButton](../../appkit/nsfilehandlingpanelokbutton.md) if the user clicks the OK button or [NSFileHandlingPanelCancelButton](../../appkit/nsfilehandlingpanelcancelbutton.md) if the user clicks the Cancel button.

Use the [keychain()](keychain%28%29.md) method to obtain the keychain created by the user.

## See Also

### Displaying a Sheet or Panel

- [setPassword(\_:)](setpassword%28__%29.md): Specifies the password for the keychain that will be created.
- [beginSheet(forDirectory:file:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28fordirectory_file_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays a sheet that allows a user to create a new keychain.

# runModalForDirectory:file: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a panel that allows a user to create a new keychain.

## Declaration

```objectivec
- (NSInteger) runModalForDirectory:(NSString *) path file:(NSString *) name;
```

## Parameters

- `path`: The path to the folder where the keychain is created. Specify `nil` for `~/Library/Keychains`.
- `name`: The keychain name to be automatically displayed in the Save As field of the panel.

<a id="Discussion"></a>

## Discussion

This method returns a result code from the [runModalForDirectory:file:types:](../../appkit/nsopenpanel/runmodalfordirectory_file_types_.md) method of the [NSSavePanel](../../appkit/nssavepanel.md) class: [NSFileHandlingPanelOKButton](../../appkit/nsfilehandlingpanelokbutton.md) if the user clicks the OK button or [NSFileHandlingPanelCancelButton](../../appkit/nsfilehandlingpanelcancelbutton.md) if the user clicks the Cancel button.

Use the [keychain](keychain%28%29.md) method to obtain the keychain created by the user.

## See Also

### Related Documentation

- [runModalForDirectory:file:types:](../../appkit/nsopenpanel/runmodalfordirectory_file_types_.md): Deprecated. Displays the panel and begins a modal event loop that is terminated when the user clicks either OK or Cancel.

### Displaying a Sheet or Panel

- [setPassword:](setpassword%28__%29.md): Specifies the password for the keychain that will be created.
- [beginSheetForDirectory:file:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28fordirectory_file_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays a sheet that allows a user to create a new keychain.
