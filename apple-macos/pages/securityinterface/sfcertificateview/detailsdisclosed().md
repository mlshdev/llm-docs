> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/detailsdisclosed()](https://developer.apple.com/documentation/securityinterface/sfcertificateview/detailsdisclosed())

# detailsDisclosed() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns whether the view currently shows the certificate’s details.

## Declaration

```swift
func detailsDisclosed() -> Bool
```

<a id="Discussion"></a>

## Discussion

The certificate details can be shown or hidden depending on whether the user clicks the disclosure triangle. This method returns the state of that disclosure triangle.

## See Also

### Getting Information About the View

- [certificate()](certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisplayed()](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [isTrustDisplayed()](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable()](iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policies()](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed()](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.

# detailsDisclosed (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns whether the view currently shows the certificate’s details.

## Declaration

```objectivec
- (BOOL) detailsDisclosed;
```

<a id="Discussion"></a>

## Discussion

The certificate details can be shown or hidden depending on whether the user clicks the disclosure triangle. This method returns the state of that disclosure triangle.

## See Also

### Getting Information About the View

- [certificate](certificate%28%29.md): Returns the certificate currently displayed in the view.
- [detailsDisplayed](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.
- [isTrustDisplayed](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.
- [isEditable](iseditable%28%29.md): Indicates if the view allows the user to edit the certificate’s trust.
- [policies](policies%28%29.md): Returns an array of policies used to evaluate the status of the displayed certificate.
- [policiesDisclosed](policiesdisclosed%28%29.md): Returns whether the trust policy subview is disclosed.
