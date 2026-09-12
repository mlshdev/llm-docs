> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatetrustpanel/runmodal(for:message:)](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/runmodal(for:message:))

# runModal(for:message:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

## Declaration

```swift
func runModal(for trust: SecTrust!, message: String!) -> Int
```

## Parameters

- `trust`: A trust management object. Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](https://developer.apple.com/documentation/security/sectrustcreatewithcertificates%28_:_:_:%29) function (in Security/SecTrust.h) to create the trust management object.
- `message`: A message string to display in the panel.

<a id="Discussion"></a>

## Discussion

This method returns [NSOKButton](../../appkit/nsokbutton.md) if the default button is clicked, or [NSCancelButton](../../appkit/nscancelbutton.md) if the alternate button is clicked.

The user can use this panel to edit trust decisions for the specified certificate or for any of the certificates in the certificate chain. The trust settings are saved when the user clicks the default button. Call `SecTrustGetUserTrust` to obtain the user’s trust settings.

Note that changing the user trust settings does not affect the results of a trust evaluation. Therefore, the trust evaluation shown in the panel (such as “This certificate is not yet valid”) does not change, nor does the result of a call to [SecTrustGetResult](https://developer.apple.com/documentation/security/sectrustgetresult). It is up to your application to determine how to handle the user’s trust decision.

## See Also

### Related Documentation

- [SecTrustCreateWithCertificates(\_:\_:\_:)](https://developer.apple.com/documentation/security/sectrustcreatewithcertificates%28_:_:_:%29): Creates a trust management object based on certificates and policies.

### Displaying a Sheet or Panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:trust:message:)](beginsheet%28for_modaldelegate_didend_contextinfo_trust_message_%29.md): Displays a modal sheet that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

# runModalForTrust:message: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a modal panel that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.

## Declaration

```objectivec
- (NSInteger) runModalForTrust:(SecTrustRef) trust message:(NSString *) message;
```

## Parameters

- `trust`: A trust management object. Use the [SecTrustCreateWithCertificates](https://developer.apple.com/documentation/security/sectrustcreatewithcertificates%28_:_:_:%29) function (in Security/SecTrust.h) to create the trust management object.
- `message`: A message string to display in the panel.

<a id="Discussion"></a>

## Discussion

This method returns [NSOKButton](../../appkit/nsokbutton.md) if the default button is clicked, or [NSCancelButton](../../appkit/nscancelbutton.md) if the alternate button is clicked.

The user can use this panel to edit trust decisions for the specified certificate or for any of the certificates in the certificate chain. The trust settings are saved when the user clicks the default button. Call `SecTrustGetUserTrust` to obtain the user’s trust settings.

Note that changing the user trust settings does not affect the results of a trust evaluation. Therefore, the trust evaluation shown in the panel (such as “This certificate is not yet valid”) does not change, nor does the result of a call to [SecTrustGetResult](https://developer.apple.com/documentation/security/sectrustgetresult). It is up to your application to determine how to handle the user’s trust decision.

## See Also

### Related Documentation

- [SecTrustGetResult](https://developer.apple.com/documentation/security/sectrustgetresult): Deprecated. Retrieves details on the outcome of a call to the function `SecTrustEvaluate`.
- [SecTrustCreateWithCertificates](https://developer.apple.com/documentation/security/sectrustcreatewithcertificates%28_:_:_:%29): Creates a trust management object based on certificates and policies.

### Displaying a Sheet or Panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:trust:message:](beginsheet%28for_modaldelegate_didend_contextinfo_trust_message_%29.md): Displays a modal sheet that shows the results of a certificate trust evaluation and that allows the user to edit trust settings.
