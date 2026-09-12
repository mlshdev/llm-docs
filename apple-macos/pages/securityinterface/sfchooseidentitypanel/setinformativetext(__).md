> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfchooseidentitypanel/setinformativetext(_:)](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/setinformativetext(_:))

# setInformativeText(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the optional informative text displayed in the panel.

## Declaration

```swift
func setInformativeText(_ informativeText: String!)
```

## Parameters

- `informativeText`: A string containing a hostname, RFC 822 name (email address), URL, or similar identifier.

## See Also

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle(\_:)](setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.
- [informativeText()](informativetext%28%29.md): Returns the informative text currently displayed in the panel.

# setInformativeText: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the optional informative text displayed in the panel.

## Declaration

```objectivec
- (void) setInformativeText:(NSString *) informativeText;
```

## Parameters

- `informativeText`: A string containing a hostname, RFC 822 name (email address), URL, or similar identifier.

## See Also

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle:](setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies:](setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.
- [informativeText](informativetext%28%29.md): Returns the informative text currently displayed in the panel.
