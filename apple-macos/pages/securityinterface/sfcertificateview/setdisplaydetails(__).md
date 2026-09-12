> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/setdisplaydetails(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificateview/setdisplaydetails(_:))

# setDisplayDetails(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies whether the user can see the certificate details.

## Declaration

```swift
func setDisplayDetails(_ display: Bool)
```

## Parameters

- `display`: Pass [true](https://developer.apple.com/documentation/swift/true) to display the certificate details, or [false](https://developer.apple.com/documentation/swift/false) to hide them.

<a id="Discussion"></a>

## Discussion

For behavioral compatibility with macOS 10.3, certificate details are displayed by default. To hide the details of a certificate, you must explicitly set the display value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [detailsDisplayed()](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed(\_:)](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayTrust(\_:)](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust(\_:)](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed(\_:)](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.

# setDisplayDetails: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies whether the user can see the certificate details.

## Declaration

```objectivec
- (void) setDisplayDetails:(BOOL) display;
```

## Parameters

- `display`: Pass [true](https://developer.apple.com/documentation/swift/true) to display the certificate details, or [false](https://developer.apple.com/documentation/swift/false) to hide them.

<a id="Discussion"></a>

## Discussion

For behavioral compatibility with macOS 10.3, certificate details are displayed by default. To hide the details of a certificate, you must explicitly set the display value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [detailsDisplayed](detailsdisplayed%28%29.md): Indicates if the view currently shows the certificate’s details.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed:](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayTrust:](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setEditableTrust:](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
- [setPolicies:](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed:](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.
