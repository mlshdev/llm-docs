> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/setdisplaytrust(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificateview/setdisplaytrust(_:))

# setDisplayTrust(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Specifies whether the user can see the certificate’s trust settings.

## Declaration

```swift
func setDisplayTrust(_ display: Bool)
```

## Parameters

- `display`: Pass [true](https://developer.apple.com/documentation/swift/true) to display the trust settings, or [false](https://developer.apple.com/documentation/swift/false) to hide them.

<a id="Discussion"></a>

## Discussion

Certificate trust settings are not displayed by default. To show the certificate’s trust settings, you must explicitly set the display value to [true](https://developer.apple.com/documentation/swift/true). with either this method or the [setEditableTrust(\_:)](seteditabletrust%28__%29.md) method.

## See Also

### Related Documentation

- [isTrustDisplayed()](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed(\_:)](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails(\_:)](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setEditableTrust(\_:)](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed(\_:)](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.

# setDisplayTrust: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Specifies whether the user can see the certificate’s trust settings.

## Declaration

```objectivec
- (void) setDisplayTrust:(BOOL) display;
```

## Parameters

- `display`: Pass [true](https://developer.apple.com/documentation/swift/true) to display the trust settings, or [false](https://developer.apple.com/documentation/swift/false) to hide them.

<a id="Discussion"></a>

## Discussion

Certificate trust settings are not displayed by default. To show the certificate’s trust settings, you must explicitly set the display value to [true](https://developer.apple.com/documentation/swift/true). with either this method or the [setEditableTrust:](seteditabletrust%28__%29.md) method.

## See Also

### Related Documentation

- [isTrustDisplayed](istrustdisplayed%28%29.md): Indicates if the view currently shows the certificate’s trust settings.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed:](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails:](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setEditableTrust:](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies:](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed:](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.
