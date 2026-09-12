> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmscertificatechainmode](https://developer.apple.com/documentation/security/cmscertificatechainmode)

# CMSCertificateChainMode (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Constants that can be set to specify what certificates to include in a signed message.

## Declaration

```swift
enum CMSCertificateChainMode
```

<a id="overview"></a>

## Overview

Use these with the [CMSEncoderSetCertificateChainMode(\_:\_:)](cmsencodersetcertificatechainmode%28____%29.md) function.

## Topics

### Constants

- [CMSCertificateChainMode.none](cmscertificatechainmode/none.md): Don’t include any certificates.
- [CMSCertificateChainMode.signerOnly](cmscertificatechainmode/signeronly.md): Only include signer certificates.
- [CMSCertificateChainMode.chain](cmscertificatechainmode/chain.md): Include the signer certificate chain up to but not including the root certificate.
- [CMSCertificateChainMode.chainWithRoot](cmscertificatechainmode/chainwithroot.md): Include the entire signer certificate chain, including the root certificate.

### Enumeration Cases

- [CMSCertificateChainMode.chainWithRootOrFail](cmscertificatechainmode/chainwithrootorfail.md)

### Initializers

- [init(rawValue:)](cmscertificatechainmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CMSCertificateChainMode (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Constants that can be set to specify what certificates to include in a signed message.

## Declaration

```objectivec
enum CMSCertificateChainMode : uint32_t;
```

<a id="overview"></a>

## Overview

Use these with the [CMSEncoderSetCertificateChainMode](cmsencodersetcertificatechainmode%28____%29.md) function.

## Topics

### Constants

- [kCMSCertificateNone](cmscertificatechainmode/none.md): Don’t include any certificates.
- [kCMSCertificateSignerOnly](cmscertificatechainmode/signeronly.md): Only include signer certificates.
- [kCMSCertificateChain](cmscertificatechainmode/chain.md): Include the signer certificate chain up to but not including the root certificate.
- [kCMSCertificateChainWithRoot](cmscertificatechainmode/chainwithroot.md): Include the entire signer certificate chain, including the root certificate.

### Enumeration Cases

- [kCMSCertificateChainWithRootOrFail](cmscertificatechainmode/chainwithrootorfail.md)
