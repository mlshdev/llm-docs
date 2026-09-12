> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/setalternatebuttontitle(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/setalternatebuttontitle(_:))

# setAlternateButtonTitle(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Customizes the title of the alternate button.

## Declaration

```swift
func setAlternateButtonTitle(_ title: String!)
```

## Parameters

- `title`: The new title for the alternate button. If this method is not called, or if `title` is set to `nil`, the button is not shown.

<a id="Discussion"></a>

## Discussion

The alternate button is typically labelled “Cancel”. The alternate button dismisses the sheet or panel and returns a value of [NSCancelButton](../../appkit/nscancelbutton.md).

## See Also

### Related Documentation

- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [runModal(for:message:)](../sfcertificatetrustpanel/runmodal%28for_message_%29.md): Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

### Customizing the Appearance of the Sheet or Panel

- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.

# setAlternateButtonTitle: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Customizes the title of the alternate button.

## Declaration

```objectivec
- (void) setAlternateButtonTitle:(NSString *) title;
```

## Parameters

- `title`: The new title for the alternate button. If this method is not called, or if `title` is set to `nil`, the button is not shown.

<a id="Discussion"></a>

## Discussion

The alternate button is typically labelled “Cancel”. The alternate button dismisses the sheet or panel and returns a value of [NSCancelButton](../../appkit/nscancelbutton.md).

## See Also

### Related Documentation

- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [runModalForTrust:message:](../sfcertificatetrustpanel/runmodal%28for_message_%29.md): Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

### Customizing the Appearance of the Sheet or Panel

- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies:](setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.
