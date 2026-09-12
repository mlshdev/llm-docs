> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/standard-policies-for-specific-certificate-types](https://developer.apple.com/documentation/security/standard-policies-for-specific-certificate-types)

# Standard Policies for Specific Certificate Types (Swift)

**Framework:** Security  
**Kind:** API Collection

Use special OIDs to cause a certificate to be evaluated based on security policies specific to a given type of certificate.

## Topics

### Constants

- [kSecPolicyAppleX509Basic](ksecpolicyapplex509basic.md): Basic X509-style certificate evaluation.
- [kSecPolicyAppleSSL](ksecpolicyapplessl.md): Basic X509 plus host name verification per RFC 2818.
- [kSecPolicyAppleSMIME](ksecpolicyapplesmime.md): Basic X509 plus email address verification and `KeyUsage` enforcement per RFC 2632.
- [kSecPolicyAppleEAP](ksecpolicyappleeap.md): Extensible Authentication Protocol. Functionally identical to SSL policy. A separate OID is provided to facilitate per-policy, per-certificate trust settings using the `SecTrust` mechanism.
- [kSecPolicyAppleIPsec](ksecpolicyappleipsec.md): Policy for use in IPsec communication. Functionally identical to SSL policy. A separate OID is provided to facilitate per-policy, per-certificate trust settings using the `SecTrust` mechanism.
- [kSecPolicyApplePKINITClient](ksecpolicyapplepkinitclient.md): Kerberos Pkinit client certificate validation.
- [kSecPolicyApplePKINITServer](ksecpolicyapplepkinitserver.md): Kerberos Pkinit server certificate validation.
- [kSecPolicyAppleCodeSigning](ksecpolicyapplecodesigning.md): Policy for use in evaluating Apple code signing certificates.
- [kSecPolicyMacAppStoreReceipt](ksecpolicymacappstorereceipt.md): Policy for use in evaluating Mac App Store receipts.
- [kSecPolicyAppleIDValidation](ksecpolicyappleidvalidation.md): Policy for use in evaluating Apple ID certificates.
- [kSecPolicyAppleTimeStamping](ksecpolicyappletimestamping.md): Policy that causes evaluation of the validity of the time stamp on a signature. This can be used to allow verification that a certificate was valid at the time that something was signed with that certificate even if the certificate is no longer valid.
- [kSecPolicyApplePassbookSigning](ksecpolicyapplepassbooksigning.md)
- [kSecPolicyApplePayIssuerEncryption](ksecpolicyapplepayissuerencryption.md)
- [kSecPolicyAppleRevocation](ksecpolicyapplerevocation.md)

# Standard Policies for Specific Certificate Types (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Use special OIDs to cause a certificate to be evaluated based on security policies specific to a given type of certificate.

## Topics

### Constants

- [kSecPolicyAppleX509Basic](ksecpolicyapplex509basic.md): Basic X509-style certificate evaluation.
- [kSecPolicyAppleSSL](ksecpolicyapplessl.md): Basic X509 plus host name verification per RFC 2818.
- [kSecPolicyAppleSMIME](ksecpolicyapplesmime.md): Basic X509 plus email address verification and `KeyUsage` enforcement per RFC 2632.
- [kSecPolicyAppleEAP](ksecpolicyappleeap.md): Extensible Authentication Protocol. Functionally identical to SSL policy. A separate OID is provided to facilitate per-policy, per-certificate trust settings using the `SecTrust` mechanism.
- [kSecPolicyAppleIPsec](ksecpolicyappleipsec.md): Policy for use in IPsec communication. Functionally identical to SSL policy. A separate OID is provided to facilitate per-policy, per-certificate trust settings using the `SecTrust` mechanism.
- [kSecPolicyAppleiChat](ksecpolicyappleichat.md): Deprecated. Policy for use in iChat.
- [kSecPolicyApplePKINITClient](ksecpolicyapplepkinitclient.md): Kerberos Pkinit client certificate validation.
- [kSecPolicyApplePKINITServer](ksecpolicyapplepkinitserver.md): Kerberos Pkinit server certificate validation.
- [kSecPolicyAppleCodeSigning](ksecpolicyapplecodesigning.md): Policy for use in evaluating Apple code signing certificates.
- [kSecPolicyMacAppStoreReceipt](ksecpolicymacappstorereceipt.md): Policy for use in evaluating Mac App Store receipts.
- [kSecPolicyAppleIDValidation](ksecpolicyappleidvalidation.md): Policy for use in evaluating Apple ID certificates.
- [kSecPolicyAppleTimeStamping](ksecpolicyappletimestamping.md): Policy that causes evaluation of the validity of the time stamp on a signature. This can be used to allow verification that a certificate was valid at the time that something was signed with that certificate even if the certificate is no longer valid.
- [kSecPolicyApplePassbookSigning](ksecpolicyapplepassbooksigning.md)
- [kSecPolicyApplePayIssuerEncryption](ksecpolicyapplepayissuerencryption.md)
- [kSecPolicyAppleRevocation](ksecpolicyapplerevocation.md)
