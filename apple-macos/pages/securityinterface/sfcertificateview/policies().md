> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/policies()](https://developer.apple.com/documentation/securityinterface/sfcertificateview/policies())

# policies() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns an array of policies used to evaluate the status of the displayed certificate.

## Declaration

```swift
func policies() -> [Any]!
```

<a id="Discussion"></a>

## Discussion

This method returns an autoreleased [NSArray](https://developer.apple.com/documentation/foundation/nsarray) containing one or more instances of [SecPolicy](https://developer.apple.com/documentation/security/secpolicy). The array always contains at least one item (the Apple X.509 Basic policy, if you have never called the [setPolicies(\_:)](setpolicies%28__%29.md) method).

## See Also

### Getting Information About the View

- [certificate()](certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisplayed()](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [detailsDisclosed()](detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed()](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable()](iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policiesDisclosed()](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.

# policies (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns an array of policies used to evaluate the status of the displayed certificate.

## Declaration

```objectivec
- (NSArray *) policies;
```

<a id="Discussion"></a>

## Discussion

This method returns an autoreleased [NSArray](https://developer.apple.com/documentation/foundation/nsarray) containing one or more instances of [SecPolicyRef](https://developer.apple.com/documentation/security/secpolicy). The array always contains at least one item (the Apple X.509 Basic policy, if you have never called the [setPolicies:](setpolicies%28__%29.md) method).

## See Also

### Getting Information About the View

- [certificate](certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisplayed](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [detailsDisclosed](detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable](iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policiesDisclosed](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.
