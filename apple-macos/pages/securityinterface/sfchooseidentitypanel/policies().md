> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfchooseidentitypanel/policies()](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/policies())

# policies() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns an array of policies used to evaluate the status of the displayed certificates.

## Declaration

```swift
func policies() -> [Any]!
```

<a id="Discussion"></a>

## Discussion

This method returns an autoreleased [NSArray](https://developer.apple.com/documentation/foundation/nsarray) containing one or more objects of type [SecPolicy](https://developer.apple.com/documentation/security/secpolicy) , as set by a previous [setPolicies(\_:)](setpolicies%28__%29.md) call, or the Apple X.509 Basic Policy if [setPolicies(\_:)](setpolicies%28__%29.md) has not been called. See [Certificate, Key, and Trust Services](https://developer.apple.com/documentation/security/certificate-key-and-trust-services) in [Certificate, Key, and Trust Services](https://developer.apple.com/documentation/security/certificate-key-and-trust-services) for a list of policies and object identifiers provided by the [AppleX509TP Module](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/CDSA/CDSA.html#//apple_ref/doc/uid/TP40011172-CH4-CHDEEDBE).

## See Also

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle(\_:)](setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [informativeText()](informativetext%28%29.md): Returns the informative text currently displayed in the panel.
- [setInformativeText(\_:)](setinformativetext%28__%29.md): Sets the optional informative text displayed in the panel.

# policies (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns an array of policies used to evaluate the status of the displayed certificates.

## Declaration

```objectivec
- (NSArray *) policies;
```

<a id="Discussion"></a>

## Discussion

This method returns an autoreleased [NSArray](https://developer.apple.com/documentation/foundation/nsarray) containing one or more objects of type [SecPolicyRef](https://developer.apple.com/documentation/security/secpolicy) , as set by a previous [setPolicies:](setpolicies%28__%29.md) call, or the Apple X.509 Basic Policy if [setPolicies:](setpolicies%28__%29.md) has not been called. See [Certificate, Key, and Trust Services](https://developer.apple.com/documentation/security/certificate-key-and-trust-services) in [Certificate, Key, and Trust Services](https://developer.apple.com/documentation/security/certificate-key-and-trust-services) for a list of policies and object identifiers provided by the [AppleX509TP Module](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/CDSA/CDSA.html#//apple_ref/doc/uid/TP40011172-CH4-CHDEEDBE).

## See Also

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle:](setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [setPolicies:](setpolicies%28__%29.md): Specifies one or more policies that apply to the displayed certificates.
- [informativeText](informativetext%28%29.md): Returns the informative text currently displayed in the panel.
- [setInformativeText:](setinformativetext%28__%29.md): Sets the optional informative text displayed in the panel.
