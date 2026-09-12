> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/runmodal(forcertificates:showgroup:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/runmodal(forcertificates:showgroup:))

# runModal(forCertificates:showGroup:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays one or more specified certificates in a modal panel.

## Declaration

```swift
func runModal(forCertificates certificates: [Any]!, showGroup: Bool) -> Int
```

## Parameters

- `certificates`: The certificates to display. Pass an [NSArray](https://developer.apple.com/documentation/foundation/nsarray) containing one or more objects of type [SecCertificate](https://developer.apple.com/documentation/security/seccertificate) in this parameter. The first certificate in the array must be the leaf certificate. The other certificates (if any) can be included in any order.
- `showGroup`: Specifies whether additional certificates (other than the leaf certificate) are displayed. To show only a single certificate, specify only one [SecCertificate](https://developer.apple.com/documentation/security/seccertificate) in the array and set `showGroup` to [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

This method returns the integer constant [NSOKButton](../../appkit/nsokbutton.md) when dismissed.

<a id="Discussion"></a>

## Discussion

The behavior of this method is somewhat different in macOS 10.4 and later versus OS X v10.3. In OS X v10.3, the panel displays whatever certificates you pass in the `certificates` parameter (provided the `showGroup` parameter is set to [true](https://developer.apple.com/documentation/swift/true)). Starting with OS X v10.4, the panel displays the leaf certificate (that is, the first certificate in the array you pass) plus any other certificates in the certificate chain that the Security Server can find. If you include all of the certificates in the chain in the `certificates` parameter, you can ensure that the same certificates are displayed whatever the version of the operating system, and may decrease the time required to find and display the certificates in macOS 10.4 and later.

## See Also

### Displaying a Sheet or Panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:certificates:showGroup:)](beginsheet%28for_modaldelegate_didend_contextinfo_certificates_showgroup_%29.md): Displays one or more certificates in a modal sheet.
- [beginSheet(for:modalDelegate:didEnd:contextInfo:trust:showGroup:)](beginsheet%28for_modaldelegate_didend_contextinfo_trust_showgroup_%29.md): Displays a certificate chain in a modal sheet.
- [certificateView()](certificateview%28%29.md): Returns the certificate view for the modal panel.
- [runModal(for:showGroup:)](runmodal%28for_showgroup_%29.md): Displays a certificate chain in a modal panel.

# runModalForCertificates:showGroup: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays one or more specified certificates in a modal panel.

## Declaration

```objectivec
- (NSInteger) runModalForCertificates:(NSArray *) certificates showGroup:(BOOL) showGroup;
```

## Parameters

- `certificates`: The certificates to display. Pass an [NSArray](https://developer.apple.com/documentation/foundation/nsarray) containing one or more objects of type [SecCertificateRef](https://developer.apple.com/documentation/security/seccertificate) in this parameter. The first certificate in the array must be the leaf certificate. The other certificates (if any) can be included in any order.
- `showGroup`: Specifies whether additional certificates (other than the leaf certificate) are displayed. To show only a single certificate, specify only one [SecCertificateRef](https://developer.apple.com/documentation/security/seccertificate) in the array and set `showGroup` to [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

This method returns the integer constant [NSOKButton](../../appkit/nsokbutton.md) when dismissed.

<a id="Discussion"></a>

## Discussion

The behavior of this method is somewhat different in macOS 10.4 and later versus OS X v10.3. In OS X v10.3, the panel displays whatever certificates you pass in the `certificates` parameter (provided the `showGroup` parameter is set to [true](https://developer.apple.com/documentation/swift/true)). Starting with OS X v10.4, the panel displays the leaf certificate (that is, the first certificate in the array you pass) plus any other certificates in the certificate chain that the Security Server can find. If you include all of the certificates in the chain in the `certificates` parameter, you can ensure that the same certificates are displayed whatever the version of the operating system, and may decrease the time required to find and display the certificates in macOS 10.4 and later.

## See Also

### Displaying a Sheet or Panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:certificates:showGroup:](beginsheet%28for_modaldelegate_didend_contextinfo_certificates_showgroup_%29.md): Displays one or more certificates in a modal sheet.
- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:trust:showGroup:](beginsheet%28for_modaldelegate_didend_contextinfo_trust_showgroup_%29.md): Displays a certificate chain in a modal sheet.
- [certificateView](certificateview%28%29.md): Returns the certificate view for the modal panel.
- [runModalForTrust:showGroup:](runmodal%28for_showgroup_%29.md): Displays a certificate chain in a modal panel.
