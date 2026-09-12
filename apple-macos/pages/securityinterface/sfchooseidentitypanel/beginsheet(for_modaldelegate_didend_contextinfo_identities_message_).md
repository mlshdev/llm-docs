> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfchooseidentitypanel/beginsheet(for:modaldelegate:didend:contextinfo:identities:message:)](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/beginsheet(for:modaldelegate:didend:contextinfo:identities:message:))

# beginSheet(for:modalDelegate:didEnd:contextInfo:identities:message:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a list of identities in a modal sheet from which the user can select an identity.

## Declaration

```swift
func beginSheet(for docWindow: NSWindow!, modalDelegate delegate: Any!, didEnd didEndSelector: Selector!, contextInfo: UnsafeMutableRawPointer!, identities: [Any]!, message: String!)
```

## Parameters

- `docWindow`: The parent window to which the sheet is attached.
- `delegate`: The delegate object in which the method specified in the `didEndSelector` parameter is implemented.
- `didEndSelector`: A method selector for a delegate method called when the sheet has been dismissed. Implementation of this delegate method is optional.
- `contextInfo`: A pointer to data that is passed to the delegate method. You can use this data pointer for any purpose you wish.
- `identities`: An array of identity objects (objects of type [SecIdentity](https://developer.apple.com/documentation/security/secidentity)). Use the [SecIdentitySearchCopyNext](https://developer.apple.com/documentation/security/secidentitysearchcopynext) function (in Security/SecIdentitySearch.h) to find identity objects.
- `message`: A message string to display in the sheet.

<a id="Discussion"></a>

## Discussion

Use the `identity` method to obtain the identity chosen by the user.

The delegate method has the following signature:

```objc
- (void)createPanelDidEnd:(NSWindow *)sheet
        returnCode:(int)returnCode
        contextInfo:(void *)contextInfo
```

The parameters for the delegate method are:

- **`sheet`**: The window to which the sheet was attached.
- **`returnCode`**: The result code indicating which button the user clicked: either [NSFileHandlingPanelOKButton](../../appkit/nsfilehandlingpanelokbutton.md) or [NSFileHandlingPanelCancelButton](../../appkit/nsfilehandlingpanelcancelbutton.md).
- **`contextInfo`**: Client-defined contextual data that is passed in the `contextInfo` parameter of the `beginSheetForWindow:...` method.

The sheet is dismissed on return from the `beginSheetForWindow:...` method.

## See Also

### Related Documentation

- [runModal(forIdentities:message:)](runmodal%28foridentities_message_%29.md): Displays a list of identities in a modal panel.
- [identity()](identity%28%29.md): Returns the identity that the user chose in the panel or sheet.

### Displaying a Sheet or Panel

- [runModal(forIdentities:message:)](runmodal%28foridentities_message_%29.md): Displays a list of identities in a modal panel.

# beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:identities:message: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a list of identities in a modal sheet from which the user can select an identity.

## Declaration

```objectivec
- (void) beginSheetForWindow:(NSWindow *) docWindow modalDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo identities:(NSArray *) identities message:(NSString *) message;
```

## Parameters

- `docWindow`: The parent window to which the sheet is attached.
- `delegate`: The delegate object in which the method specified in the `didEndSelector` parameter is implemented.
- `didEndSelector`: A method selector for a delegate method called when the sheet has been dismissed. Implementation of this delegate method is optional.
- `contextInfo`: A pointer to data that is passed to the delegate method. You can use this data pointer for any purpose you wish.
- `identities`: An array of identity objects (objects of type [SecIdentityRef](https://developer.apple.com/documentation/security/secidentity)). Use the [SecIdentitySearchCopyNext](https://developer.apple.com/documentation/security/secidentitysearchcopynext) function (in Security/SecIdentitySearch.h) to find identity objects.
- `message`: A message string to display in the sheet.

<a id="Discussion"></a>

## Discussion

Use the `identity` method to obtain the identity chosen by the user.

The delegate method has the following signature:

```objc
- (void)createPanelDidEnd:(NSWindow *)sheet
        returnCode:(int)returnCode
        contextInfo:(void *)contextInfo
```

The parameters for the delegate method are:

- **`sheet`**: The window to which the sheet was attached.
- **`returnCode`**: The result code indicating which button the user clicked: either [NSFileHandlingPanelOKButton](../../appkit/nsfilehandlingpanelokbutton.md) or [NSFileHandlingPanelCancelButton](../../appkit/nsfilehandlingpanelcancelbutton.md).
- **`contextInfo`**: Client-defined contextual data that is passed in the `contextInfo` parameter of the `beginSheetForWindow:...` method.

The sheet is dismissed on return from the `beginSheetForWindow:...` method.

## See Also

### Related Documentation

- [SecIdentitySearchCopyNext](https://developer.apple.com/documentation/security/secidentitysearchcopynext): Deprecated. Finds the next identity matching specified search criteria
- [runModalForIdentities:message:](runmodal%28foridentities_message_%29.md): Displays a list of identities in a modal panel.
- [identity](identity%28%29.md): Returns the identity that the user chose in the panel or sheet.

### Displaying a Sheet or Panel

- [runModalForIdentities:message:](runmodal%28foridentities_message_%29.md): Displays a list of identities in a modal panel.
