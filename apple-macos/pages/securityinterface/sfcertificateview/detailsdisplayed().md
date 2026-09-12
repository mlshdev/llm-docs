> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/detailsdisplayed()](https://developer.apple.com/documentation/securityinterface/sfcertificateview/detailsdisplayed())

# detailsDisplayed() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Indicates if the view currently shows the certificate’s details.

## Declaration

```swift
func detailsDisplayed() -> Bool
```

## See Also

### Getting Information About the View

- [certificate()](certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisclosed()](detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed()](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable()](iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed()](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.

# detailsDisplayed (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Indicates if the view currently shows the certificate’s details.

## Declaration

```objectivec
- (BOOL) detailsDisplayed;
```

## See Also

### Getting Information About the View

- [certificate](certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisclosed](detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable](iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.
