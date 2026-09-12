> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/setpolicies(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/setpolicies(_:))

# setPolicies(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies one or more policies that apply to the displayed certificates.

## Declaration

```swift
func setPolicies(_ policies: Any!)
```

## Parameters

- `policies`: The policies to use when evaluating the certificates’ status. You can pass either a [SecPolicy](https://developer.apple.com/documentation/security/secpolicy) object or an [NSArray](https://developer.apple.com/documentation/foundation/nsarray) (containing one or more [SecPolicy](https://developer.apple.com/documentation/security/secpolicy) instances) in this parameter. If `policies` is set to `nil`, the Apple X.509 Basic Policy is used.

<a id="Discussion"></a>

## Discussion

Applications typically display a certificate panel in the context of a specific use, such as SSL or S/MIME. You should set only the policy references that apply to your intended use. See [Certificate, Key, and Trust Services](https://developer.apple.com/documentation/security/certificate-key-and-trust-services) for a list of policies and object identifiers provided by the [AppleX509TP Module](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/CDSA/CDSA.html#//apple_ref/doc/uid/TP40011172-CH4-CHDEEDBE).

## See Also

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle(\_:)](setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.

# setPolicies: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies one or more policies that apply to the displayed certificates.

## Declaration

```objectivec
- (void) setPolicies:(id) policies;
```

## Parameters

- `policies`: The policies to use when evaluating the certificates’ status. You can pass either a [SecPolicyRef](https://developer.apple.com/documentation/security/secpolicy) object or an [NSArray](https://developer.apple.com/documentation/foundation/nsarray) (containing one or more [SecPolicyRef](https://developer.apple.com/documentation/security/secpolicy) instances) in this parameter. If `policies` is set to `nil`, the Apple X.509 Basic Policy is used.

<a id="Discussion"></a>

## Discussion

Applications typically display a certificate panel in the context of a specific use, such as SSL or S/MIME. You should set only the policy references that apply to your intended use. See [Certificate, Key, and Trust Services](https://developer.apple.com/documentation/security/certificate-key-and-trust-services) for a list of policies and object identifiers provided by the [AppleX509TP Module](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/CDSA/CDSA.html#//apple_ref/doc/uid/TP40011172-CH4-CHDEEDBE).

## See Also

### Customizing the Appearance of the Sheet or Panel

- [setAlternateButtonTitle:](setalternatebuttontitle%28__%29.md): Customizes the title of the alternate button.
- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Customizes the title of the default button.
- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificates.
