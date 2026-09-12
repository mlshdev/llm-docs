> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfkeychainsavepanel/setpassword(_:)](https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/setpassword(_:))

# setPassword(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Specifies the password for the keychain that will be created.

## Declaration

```swift
func setPassword(_ password: String!)
```

## Parameters

- `password`: The password to be used for the new keychain.

<a id="Discussion"></a>

## Discussion

This method is optional. If you don’t call this method, the keychain save panel displays a password-entry dialog.

## See Also

### Displaying a Sheet or Panel

- [beginSheet(forDirectory:file:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28fordirectory_file_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays a sheet that allows a user to create a new keychain.
- [runModal(forDirectory:file:)](runmodal%28fordirectory_file_%29.md): Displays a panel that allows a user to create a new keychain.

# setPassword: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Specifies the password for the keychain that will be created.

## Declaration

```objectivec
- (void) setPassword:(NSString *) password;
```

## Parameters

- `password`: The password to be used for the new keychain.

<a id="Discussion"></a>

## Discussion

This method is optional. If you don’t call this method, the keychain save panel displays a password-entry dialog.

## See Also

### Displaying a Sheet or Panel

- [beginSheetForDirectory:file:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28fordirectory_file_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays a sheet that allows a user to create a new keychain.
- [runModalForDirectory:file:](runmodal%28fordirectory_file_%29.md): Displays a panel that allows a user to create a new keychain.
