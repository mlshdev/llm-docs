> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/trust-result-dictionary-keys](https://developer.apple.com/documentation/security/trust-result-dictionary-keys)

# Trust Result Dictionary Keys (Swift)

**Framework:** Security  
**Kind:** API Collection

Recognize the keys that appear in a dictionary containing information about an evaluated certification chain.

<a id="overview"></a>

## Overview

These keys appear in the dictionary returned from a call to the [SecTrustCopyResult(\_:)](sectrustcopyresult%28__%29.md) function and provide information about the evaluated trust.

## Topics

### Constants

- [kSecTrustCertificateTransparency](ksectrustcertificatetransparency.md): A key whose value is a Boolean used to indicate Certificate Transparency.
- [kSecTrustCertificateTransparencyWhiteList](ksectrustcertificatetransparencywhitelist.md): Deprecated. A key whose value is a Boolean used to indicate the chain satisfies Certificate Transparency by being on the allow list.
- [kSecTrustEvaluationDate](ksectrustevaluationdate.md): A key whose value indicates the time that the trust evaluation took place.
- [kSecTrustExtendedValidation](ksectrustextendedvalidation.md): A key whose value is a Boolean used to indicate Extended Validation.
- [kSecTrustOrganizationName](ksectrustorganizationname.md): A key whose value is the organization name field of the subject of the leaf certificate.
- [kSecTrustResultValue](ksectrustresultvalue.md): A key whose value represents the trust evaluation result.
- [kSecTrustRevocationChecked](ksectrustrevocationchecked.md): A key whose value indicates the outcome of revocation checking during trust evaluation.
- [kSecTrustRevocationValidUntilDate](ksectrustrevocationvaliduntildate.md): A key whose value indicates the earliest date at which revocation information becomes stale.

# Trust Result Dictionary Keys (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Recognize the keys that appear in a dictionary containing information about an evaluated certification chain.

<a id="overview"></a>

## Overview

These keys appear in the dictionary returned from a call to the [SecTrustCopyResult](sectrustcopyresult%28__%29.md) function and provide information about the evaluated trust.

## Topics

### Constants

- [kSecTrustCertificateTransparency](ksectrustcertificatetransparency.md): A key whose value is a Boolean used to indicate Certificate Transparency.
- [kSecTrustCertificateTransparencyWhiteList](ksectrustcertificatetransparencywhitelist.md): Deprecated. A key whose value is a Boolean used to indicate the chain satisfies Certificate Transparency by being on the allow list.
- [kSecTrustEvaluationDate](ksectrustevaluationdate.md): A key whose value indicates the time that the trust evaluation took place.
- [kSecTrustExtendedValidation](ksectrustextendedvalidation.md): A key whose value is a Boolean used to indicate Extended Validation.
- [kSecTrustOrganizationName](ksectrustorganizationname.md): A key whose value is the organization name field of the subject of the leaf certificate.
- [kSecTrustResultValue](ksectrustresultvalue.md): A key whose value represents the trust evaluation result.
- [kSecTrustRevocationChecked](ksectrustrevocationchecked.md): A key whose value indicates the outcome of revocation checking during trust evaluation.
- [kSecTrustRevocationValidUntilDate](ksectrustrevocationvaliduntildate.md): A key whose value indicates the earliest date at which revocation information becomes stale.
