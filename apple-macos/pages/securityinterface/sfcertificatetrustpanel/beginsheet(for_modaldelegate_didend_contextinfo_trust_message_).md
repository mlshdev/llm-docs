> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatetrustpanel/beginsheet(for:modaldelegate:didend:contextinfo:trust:message:)](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/beginsheet(for:modaldelegate:didend:contextinfo:trust:message:))

# beginSheet(for:modalDelegate:didEnd:contextInfo:trust:message:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a modal sheet that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

## Declaration

```swift
func beginSheet(for docWindow: NSWindow!, modalDelegate delegate: Any!, didEnd didEndSelector: Selector!, contextInfo: UnsafeMutableRawPointer!, trust: SecTrust!, message: String!)
```

## Parameters

- `docWindow`: The parent window to which the sheet is attached.
- `delegate`: The delegate object in which the method specified in the `didEndSelector` parameter is implemented.
- `didEndSelector`: A method selector for a delegate method called when the sheet has been dismissed. Implementation of this delegate method is optional.
- `contextInfo`: A pointer to data that is passed to the delegate method. You can use this data pointer for any purpose you wish.
- `trust`: A trust management object. Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](https://developer.apple.com/documentation/security/sectrustcreatewithcertificates%28_:_:_:%29) function (in Security/SecTrust.h) to create the trust management object.
- `message`: A message string to display in the sheet.

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
- **`contextInfo`**: Client-defined contextual data that is passed in the `contextInfo` parameter of the `beginSheetForWindow:...` method.

The delegate method may dismiss the keychain settings sheet itself; if it does not, the sheet is dismissed on return from the `beginSheetForWindow:...` method.

## See Also

### Related Documentation

- [SecTrustCreateWithCertificates(\_:\_:\_:)](https://developer.apple.com/documentation/security/sectrustcreatewithcertificates%28_:_:_:%29): Creates a trust management object based on certificates and policies.
- [runModal(for:message:)](runmodal%28for_message_%29.md): Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

### Displaying a Sheet or Panel

- [runModal(for:message:)](runmodal%28for_message_%29.md): Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

# beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:trust:message: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a modal sheet that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

## Declaration

```objectivec
- (void) beginSheetForWindow:(NSWindow *) docWindow modalDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo trust:(SecTrustRef) trust message:(NSString *) message;
```

## Parameters

- `docWindow`: The parent window to which the sheet is attached.
- `delegate`: The delegate object in which the method specified in the `didEndSelector` parameter is implemented.
- `didEndSelector`: A method selector for a delegate method called when the sheet has been dismissed. Implementation of this delegate method is optional.
- `contextInfo`: A pointer to data that is passed to the delegate method. You can use this data pointer for any purpose you wish.
- `trust`: A trust management object. Use the [SecTrustCreateWithCertificates](https://developer.apple.com/documentation/security/sectrustcreatewithcertificates%28_:_:_:%29) function (in Security/SecTrust.h) to create the trust management object.
- `message`: A message string to display in the sheet.

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
- **`contextInfo`**: Client-defined contextual data that is passed in the `contextInfo` parameter of the `beginSheetForWindow:...` method.

The delegate method may dismiss the keychain settings sheet itself; if it does not, the sheet is dismissed on return from the `beginSheetForWindow:...` method.

## See Also

### Related Documentation

- [SecTrustGetResult](https://developer.apple.com/documentation/security/sectrustgetresult): Deprecated. Retrieves details on the outcome of a call to the function `SecTrustEvaluate`.
- [SecTrustCreateWithCertificates](https://developer.apple.com/documentation/security/sectrustcreatewithcertificates%28_:_:_:%29): Creates a trust management object based on certificates and policies.
- [runModalForTrust:message:](runmodal%28for_message_%29.md): Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

### Displaying a Sheet or Panel

- [runModalForTrust:message:](runmodal%28for_message_%29.md): Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.
