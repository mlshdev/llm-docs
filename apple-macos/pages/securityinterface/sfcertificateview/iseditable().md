> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/iseditable()](https://developer.apple.com/documentation/securityinterface/sfcertificateview/iseditable())

# isEditable() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Indicates if the view allows the user to edit the certificate’s trust.

## Declaration

```swift
func isEditable() -> Bool
```

## See Also

### Related Documentation

- [setEditableTrust(\_:)](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.

### Getting Information About the View

- [certificate()](certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisplayed()](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [detailsDisclosed()](detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed()](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed()](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.

# isEditable (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Indicates if the view allows the user to edit the certificate’s trust.

## Declaration

```objectivec
- (BOOL) isEditable;
```

## See Also

### Related Documentation

- [setEditableTrust:](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.

### Getting Information About the View

- [certificate](certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisplayed](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [detailsDisclosed](detailsdisclosed%28%29.md): Returns whether the view currently shows the certificate’s details.
- [isTrustDisplayed](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.
