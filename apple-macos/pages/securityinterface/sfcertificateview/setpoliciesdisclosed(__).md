> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/setpoliciesdisclosed(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificateview/setpoliciesdisclosed(_:))

# setPoliciesDisclosed(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies whether the trust policy settings subview is disclosed.

## Declaration

```swift
func setPoliciesDisclosed(_ disclosed: Bool)
```

## Parameters

- `disclosed`: Pass [true](https://developer.apple.com/documentation/swift/true) to display the certificate details, or [false](https://developer.apple.com/documentation/swift/false) to hide them.

<a id="Discussion"></a>

## Discussion

The trust policy settings can be shown or hidden depending on whether the user clicks the disclosure triangle. This method sets the state of that disclosure triangle and the visibility of the corresponding view.

## See Also

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed(\_:)](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails(\_:)](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust(\_:)](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust(\_:)](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.

# setPoliciesDisclosed: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies whether the trust policy settings subview is disclosed.

## Declaration

```objectivec
- (void) setPoliciesDisclosed:(BOOL) disclosed;
```

## Parameters

- `disclosed`: Pass [true](https://developer.apple.com/documentation/swift/true) to display the certificate details, or [false](https://developer.apple.com/documentation/swift/false) to hide them.

<a id="Discussion"></a>

## Discussion

The trust policy settings can be shown or hidden depending on whether the user clicks the disclosure triangle. This method sets the state of that disclosure triangle and the visibility of the corresponding view.

## See Also

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed:](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails:](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust:](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust:](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies:](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
