> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/setpolicies(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificateview/setpolicies(_:))

# setPolicies(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies the policies to use when evaluating this certificate’s status.

## Declaration

```swift
func setPolicies(_ policies: Any!)
```

## Parameters

- `policies`: The policy or policies to use. You can pass either a `SecPolicyRef` object or an NSArray (containing one or more objects of type `SecPolicyRef` ) in this parameter. If `policies` is set to nil, the Apple X.509 Basic Policy is used. See [Certificate, Key, and Trust Services](https://developer.apple.com/documentation/security/certificate-key-and-trust-services) for a list of policies and object identifiers provided by the AppleX509TP module.

<a id="Discussion"></a>

## Discussion

Applications typically display a certificate view in the context of a specific use, such as SSL or S/MIME. You should set only the policy references that apply to your intended use.

## See Also

### Related Documentation

- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed(\_:)](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails(\_:)](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust(\_:)](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust(\_:)](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPoliciesDisclosed(\_:)](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.

# setPolicies: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies the policies to use when evaluating this certificate’s status.

## Declaration

```objectivec
- (void) setPolicies:(id) policies;
```

## Parameters

- `policies`: The policy or policies to use. You can pass either a `SecPolicyRef` object or an NSArray (containing one or more objects of type `SecPolicyRef` ) in this parameter. If `policies` is set to nil, the Apple X.509 Basic Policy is used. See [Certificate, Key, and Trust Services](https://developer.apple.com/documentation/security/certificate-key-and-trust-services) for a list of policies and object identifiers provided by the AppleX509TP module.

<a id="Discussion"></a>

## Discussion

Applications typically display a certificate view in the context of a specific use, such as SSL or S/MIME. You should set only the policy references that apply to your intended use.

## See Also

### Related Documentation

- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed:](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails:](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust:](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust:](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPoliciesDisclosed:](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.
