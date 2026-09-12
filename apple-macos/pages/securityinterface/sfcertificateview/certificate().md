> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/certificate()](https://developer.apple.com/documentation/securityinterface/sfcertificateview/certificate())

# certificate() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the certificate currently displayed in the view.

## Declaration

```swift
func certificate() -> Unmanaged<SecCertificate>!
```

## See Also

### Getting Information About the View

- [detailsDisplayed()](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [detailsDisclosed()](detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed()](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable()](iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed()](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.

# certificate (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the certificate currently displayed in the view.

## Declaration

```objectivec
- (SecCertificateRef) certificate;
```

## See Also

### Getting Information About the View

- [detailsDisplayed](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [detailsDisclosed](detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable](iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.
