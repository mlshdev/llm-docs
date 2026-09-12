> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/setdefaultbuttontitle(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/setdefaultbuttontitle(_:))

# setDefaultButtonTitle(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Customizes the title of the default button.

## Declaration

```swift
func setDefaultButtonTitle(_ title: String!)
```

## Parameters

- `title`: The new title for the default button. The default title for this button is “OK”.

<a id="Discussion"></a>

## Discussion

The default button dismisses the sheet or panel and returns a value of [NSOKButton](../../appkit/nsokbutton.md).

## See Also

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle(\_:)](setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.

# setDefaultButtonTitle: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Customizes the title of the default button.

## Declaration

```objectivec
- (void) setDefaultButtonTitle:(NSString *) title;
```

## Parameters

- `title`: The new title for the default button. The default title for this button is “OK”.

<a id="Discussion"></a>

## Discussion

The default button dismisses the sheet or panel and returns a value of [NSOKButton](../../appkit/nsokbutton.md).

## See Also

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle:](setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setPolicies:](setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.
