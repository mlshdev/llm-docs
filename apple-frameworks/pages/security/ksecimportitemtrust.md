> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecimportitemtrust](https://developer.apple.com/documentation/security/ksecimportitemtrust)

# kSecImportItemTrust (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Trust management object.

## Declaration

```swift
let kSecImportItemTrust: CFString
```

## Mentioned In

- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type `SecTrustRef`. The trust reference returned by the [SecPKCS12Import(\_:\_:\_:)](secpkcs12import%28______%29.md) function has been evaluated against the basic X.509 policy and includes as complete a certificate chain as could be constructed from the certificates in the PKCS #12 blob, certificates on the keychain, and any other certificates available to the system. You can use the [SecTrustEvaluate(\_:\_:)](sectrustevaluate%28____%29.md) function if you want to know whether the certificate chain is complete and valid (according to the basic X.509 policy). There is no guarantee that the evaluation will succeed.

# kSecImportItemTrust (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Trust management object.

## Declaration

```objectivec
extern CFStringRef const kSecImportItemTrust;
```

## Mentioned In

- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type `SecTrustRef`. The trust reference returned by the [SecPKCS12Import](secpkcs12import%28______%29.md) function has been evaluated against the basic X.509 policy and includes as complete a certificate chain as could be constructed from the certificates in the PKCS #12 blob, certificates on the keychain, and any other certificates available to the system. You can use the [SecTrustEvaluate](sectrustevaluate%28____%29.md) function if you want to know whether the certificate chain is complete and valid (according to the basic X.509 policy). There is no guarantee that the evaluation will succeed.
