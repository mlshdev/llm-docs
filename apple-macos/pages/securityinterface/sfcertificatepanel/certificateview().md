> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/certificateview()](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/certificateview())

# certificateView() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the certificate view for the modal panel.

## Declaration

```swift
func certificateView() -> SFCertificateView!
```

## See Also

### Displaying a Sheet or Panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:certificates:showGroup:)](beginsheet%28for_modaldelegate_didend_contextinfo_certificates_showgroup_%29.md): Displays one or more certificates in a modal sheet.
- [beginSheet(for:modalDelegate:didEnd:contextInfo:trust:showGroup:)](beginsheet%28for_modaldelegate_didend_contextinfo_trust_showgroup_%29.md): Displays a certificate chain in a modal sheet.
- [runModal(for:showGroup:)](runmodal%28for_showgroup_%29.md): Displays a certificate chain in a modal panel.
- [runModal(forCertificates:showGroup:)](runmodal%28forcertificates_showgroup_%29.md): Displays one or more specified certificates in a modal panel.

# certificateView (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the certificate view for the modal panel.

## Declaration

```objectivec
- (SFCertificateView *) certificateView;
```

## See Also

### Displaying a Sheet or Panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:certificates:showGroup:](beginsheet%28for_modaldelegate_didend_contextinfo_certificates_showgroup_%29.md): Displays one or more certificates in a modal sheet.
- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:trust:showGroup:](beginsheet%28for_modaldelegate_didend_contextinfo_trust_showgroup_%29.md): Displays a certificate chain in a modal sheet.
- [runModalForTrust:showGroup:](runmodal%28for_showgroup_%29.md): Displays a certificate chain in a modal panel.
- [runModalForCertificates:showGroup:](runmodal%28forcertificates_showgroup_%29.md): Displays one or more specified certificates in a modal panel.
