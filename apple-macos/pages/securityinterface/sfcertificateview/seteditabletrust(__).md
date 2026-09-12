> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/seteditabletrust(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificateview/seteditabletrust(_:))

# setEditableTrust(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Specifies whether the user can edit the certificate’s trust settings.

## Declaration

```swift
func setEditableTrust(_ editable: Bool)
```

## Parameters

- `editable`: Pass [true](https://developer.apple.com/documentation/swift/true) if the trust settings should be editable.

<a id="Discussion"></a>

## Discussion

For behavioral compatibility with macOS 10.3, this method causes the certificate trust settings to be displayed if they are not currently visible (that is, if [setDisplayTrust(\_:)](setdisplaytrust%28__%29.md) is set to [false](https://developer.apple.com/documentation/swift/false)).

## See Also

### Related Documentation

- [setDisplayTrust(\_:)](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed(\_:)](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails(\_:)](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust(\_:)](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setPolicies(\_:)](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed(\_:)](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.

# setEditableTrust: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Specifies whether the user can edit the certificate’s trust settings.

## Declaration

```objectivec
- (void) setEditableTrust:(BOOL) editable;
```

## Parameters

- `editable`: Pass [true](https://developer.apple.com/documentation/swift/true) if the trust settings should be editable.

<a id="Discussion"></a>

## Discussion

For behavioral compatibility with macOS 10.3, this method causes the certificate trust settings to be displayed if they are not currently visible (that is, if [setDisplayTrust:](setdisplaytrust%28__%29.md) is set to [false](https://developer.apple.com/documentation/swift/false)).

## See Also

### Related Documentation

- [setDisplayTrust:](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.

### Customizing the Appearance and Behavior of the View

- [setDetailsDisclosed:](setdetailsdisclosed%28__%29.md): Sets whether the certificate details subview is disclosed.
- [setDisplayDetails:](setdisplaydetails%28__%29.md): Specifies whether the user can see the certificate details.
- [setDisplayTrust:](setdisplaytrust%28__%29.md): Specifies whether the user can see the certificate’s trust settings.
- [setPolicies:](setpolicies%28__%29.md): Specifies the policies to use when evaluating this certificate’s status.
- [setPoliciesDisclosed:](setpoliciesdisclosed%28__%29.md): Specifies whether the trust policy settings subview is disclosed.
