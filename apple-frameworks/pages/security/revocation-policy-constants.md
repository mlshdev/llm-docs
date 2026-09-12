> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/revocation-policy-constants](https://developer.apple.com/documentation/security/revocation-policy-constants)

# Revocation Policy Constants (Swift)

**Framework:** Security  
**Kind:** API Collection

Use these flags to create a revocation policy object.

<a id="overview"></a>

## Overview

Use these flags with a call to the [SecPolicyCreateRevocation(\_:)](secpolicycreaterevocation%28__%29.md) function to characterize the constructed policy.

## Topics

### Constants

- [kSecRevocationCRLMethod](ksecrevocationcrlmethod.md): Perform revocation checking using the CRL (Certification Revocation List) method.
- [kSecRevocationNetworkAccessDisabled](ksecrevocationnetworkaccessdisabled.md): Consult only locally cached replies; do not use network access.
- [kSecRevocationOCSPMethod](ksecrevocationocspmethod.md): Perform revocation checking using OCSP (Online Certificate Status Protocol).
- [kSecRevocationPreferCRL](ksecrevocationprefercrl.md): Prefer CRL revocation checking over OCSP; by default, OCSP is preferred.
- [kSecRevocationRequirePositiveResponse](ksecrevocationrequirepositiveresponse.md): Require a positive response to pass the policy.
- [kSecRevocationUseAnyAvailableMethod](ksecrevocationuseanyavailablemethod.md): Perform either OCSP or CRL checking.

# Revocation Policy Constants (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Use these flags to create a revocation policy object.

<a id="overview"></a>

## Overview

Use these flags with a call to the [SecPolicyCreateRevocation](secpolicycreaterevocation%28__%29.md) function to characterize the constructed policy.

## Topics

### Constants

- [kSecRevocationCRLMethod](ksecrevocationcrlmethod.md): Perform revocation checking using the CRL (Certification Revocation List) method.
- [kSecRevocationNetworkAccessDisabled](ksecrevocationnetworkaccessdisabled.md): Consult only locally cached replies; do not use network access.
- [kSecRevocationOCSPMethod](ksecrevocationocspmethod.md): Perform revocation checking using OCSP (Online Certificate Status Protocol).
- [kSecRevocationPreferCRL](ksecrevocationprefercrl.md): Prefer CRL revocation checking over OCSP; by default, OCSP is preferred.
- [kSecRevocationRequirePositiveResponse](ksecrevocationrequirepositiveresponse.md): Require a positive response to pass the policy.
- [kSecRevocationUseAnyAvailableMethod](ksecrevocationuseanyavailablemethod.md): Perform either OCSP or CRL checking.
