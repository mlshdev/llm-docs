> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/runmodal(for:showgroup:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/runmodal(for:showgroup:))

# runModal(for:showGroup:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays a certificate chain in a modal panel.

## Declaration

```swift
func runModal(for trust: SecTrust!, showGroup: Bool) -> Int
```

## Parameters

- `trust`: A [SecTrust](https://developer.apple.com/documentation/security/sectrust) object associated with the certificate chain to display.
- `showGroup`: Specifies whether additional certificates (other than the leaf certificate) are displayed. To show only a single certificate, specify only one [SecCertificate](https://developer.apple.com/documentation/security/seccertificate) in the array and set `showGroup` to [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

This method returns the integer constant [NSOKButton](../../appkit/nsokbutton.md) when dismissed.

## See Also

### Displaying a Sheet or Panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:certificates:showGroup:)](beginsheet%28for_modaldelegate_didend_contextinfo_certificates_showgroup_%29.md): Displays one or more certificates in a modal sheet.
- [beginSheet(for:modalDelegate:didEnd:contextInfo:trust:showGroup:)](beginsheet%28for_modaldelegate_didend_contextinfo_trust_showgroup_%29.md): Displays a certificate chain in a modal sheet.
- [certificateView()](certificateview%28%29.md): Returns the certificate view for the modal panel.
- [runModal(forCertificates:showGroup:)](runmodal%28forcertificates_showgroup_%29.md): Displays one or more specified certificates in a modal panel.

# runModalForTrust:showGroup: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays a certificate chain in a modal panel.

## Declaration

```objectivec
- (NSInteger) runModalForTrust:(SecTrustRef) trust showGroup:(BOOL) showGroup;
```

## Parameters

- `trust`: A [SecTrustRef](https://developer.apple.com/documentation/security/sectrust) object associated with the certificate chain to display.
- `showGroup`: Specifies whether additional certificates (other than the leaf certificate) are displayed. To show only a single certificate, specify only one [SecCertificateRef](https://developer.apple.com/documentation/security/seccertificate) in the array and set `showGroup` to [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

This method returns the integer constant [NSOKButton](../../appkit/nsokbutton.md) when dismissed.

## See Also

### Displaying a Sheet or Panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:certificates:showGroup:](beginsheet%28for_modaldelegate_didend_contextinfo_certificates_showgroup_%29.md): Displays one or more certificates in a modal sheet.
- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:trust:showGroup:](beginsheet%28for_modaldelegate_didend_contextinfo_trust_showgroup_%29.md): Displays a certificate chain in a modal sheet.
- [certificateView](certificateview%28%29.md): Returns the certificate view for the modal panel.
- [runModalForCertificates:showGroup:](runmodal%28forcertificates_showgroup_%29.md): Displays one or more specified certificates in a modal panel.
