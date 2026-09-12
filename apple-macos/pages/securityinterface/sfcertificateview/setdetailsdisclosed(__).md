> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/setdetailsdisclosed(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificateview/setdetailsdisclosed(_:))

# setDetailsDisclosed(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets whether the certificate details subview is disclosed.

## Declaration

```swift
func setDetailsDisclosed(_ disclosed: Bool)
```

## Parameters

- `disclosed`: Pass [true](https://developer.apple.com/documentation/swift/true) to open the disclosure triangle and disclose the view, or [false](https://developer.apple.com/documentation/swift/false) to close it and hide the view.

<a id="Discussion"></a>

## Discussion

The certificate details can be shown or hidden depending on whether the user clicks the disclosure triangle. This method sets the state of that disclosure triangle and the visibility of the corresponding view.

## See Also

### Customizing the Appearance and Behavior of the View

- [setDisplayDetails(\_:)](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust(\_:)](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust(\_:)](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed(\_:)](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.

# setDetailsDisclosed: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets whether the certificate details subview is disclosed.

## Declaration

```objectivec
- (void) setDetailsDisclosed:(BOOL) disclosed;
```

## Parameters

- `disclosed`: Pass [true](https://developer.apple.com/documentation/swift/true) to open the disclosure triangle and disclose the view, or [false](https://developer.apple.com/documentation/swift/false) to close it and hide the view.

<a id="Discussion"></a>

## Discussion

The certificate details can be shown or hidden depending on whether the user clicks the disclosure triangle. This method sets the state of that disclosure triangle and the visibility of the corresponding view.

## See Also

### Customizing the Appearance and Behavior of the View

- [setDisplayDetails:](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust:](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust:](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies:](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed:](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.
