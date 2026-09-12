> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/trust](https://developer.apple.com/documentation/security/trust)

# Trust (Swift)

**Framework:** Security  
**Kind:** API Collection

Evaluate trust based on a given policy.

<a id="overview"></a>

## Overview

Before using a certificate, you evaluate its trustworthiness for a particular purpose.

If you know that a certificate comes unaltered from its sender, you can be confident that its embedded public key does as well. You can also take at face value claims made by the certificate about when and for what purpose the public key may be used. You can securely engage in the operations described in [Using Keys for Encryption](using-keys-for-encryption.md) and [Signing and Verifying](signing-and-verifying.md) without prior arrangement between sender and receiver.

## Topics

### Essentials

- [Creating a Trust Object](creating-a-trust-object.md): Construct a trust object from a certificate and a policy.
- [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md): Creates a trust management object based on certificates and policies.
- [SecTrust](sectrust.md): An object used to evaluate trust.
- [SecTrustGetTypeID()](sectrustgettypeid%28%29.md): Returns the unique identifier of the opaque type to which a trust object belongs.

### Trust Evaluation

- [Evaluating a Trust and Parsing the Result](evaluating-a-trust-and-parsing-the-result.md): Learn what to expect when evaluating a trust object.
- [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md): Evaluates trust for the specified certificate and policies.
- [SecTrustEvaluateAsyncWithError(\_:\_:\_:)](sectrustevaluateasyncwitherror%28______%29.md): Evaluates a trust object asynchronously on the specified dispatch queue.
- [SecTrustWithErrorCallback](sectrustwitherrorcallback.md): A block called with the results of an asynchronous trust evaluation.

### Trust Evaluation Result

- [Discovering Why a Trust Evaluation Failed](discovering-why-a-trust-evaluation-failed.md): Determine whether you can recover from a failed trust evaluation.
- [SecTrustGetTrustResult(\_:\_:)](sectrustgettrustresult%28____%29.md): Returns the result code from the most recent trust evaluation.
- [SecTrustResultType](sectrustresulttype.md): Trust evaluation result codes.
- [SecTrustCopyResult(\_:)](sectrustcopyresult%28__%29.md): Returns a dictionary containing information about an evaluated trust.
- [Trust Result Dictionary Keys](trust-result-dictionary-keys.md): Recognize the keys that appear in a dictionary containing information about an evaluated certification chain.

### Trust Components

- [SecTrustCopyPublicKey(\_:)](sectrustcopypublickey%28__%29.md): Deprecated. Returns the public key for a leaf certificate after it has been evaluated.
- [SecTrustGetCertificateCount(\_:)](sectrustgetcertificatecount%28__%29.md): Returns the number of certificates in an evaluated certificate chain.
- [SecTrustGetCertificateAtIndex(\_:\_:)](sectrustgetcertificateatindex%28____%29.md): Deprecated. Returns a specific certificate from the certificate chain used to evaluate trust.
- [SecTrustGetVerifyTime(\_:)](sectrustgetverifytime%28__%29.md): Gets the absolute time against which the certificates in a trust management object are verified.
- [SecTrustCopyAnchorCertificates(\_:)](sectrustcopyanchorcertificates%28__%29.md): Retrieves the anchor (root) certificates stored by macOS.
- [SecTrustCopyCustomAnchorCertificates(\_:\_:)](sectrustcopycustomanchorcertificates%28____%29.md): Retrieves the custom anchor certificates, if any, used by a given trust.
- [SecTrustCopyExceptions(\_:)](sectrustcopyexceptions%28__%29.md): Returns an opaque cookie containing exceptions to trust policies that will allow future evaluations of the current certificate to succeed.
- [SecTrustCopyPolicies(\_:\_:)](sectrustcopypolicies%28____%29.md): Retrieves the policies used by a given trust management object.
- [SecTrustCopyProperties(\_:)](sectrustcopyproperties%28__%29.md): Deprecated. Returns an array containing the properties of a trust object.

### Advanced Trust Configuation

- [Configuring a Trust](configuring-a-trust.md): Work around a recoverable trust failure.
- [SecTrustSetVerifyDate(\_:\_:)](sectrustsetverifydate%28____%29.md): Sets the date and time against which the certificates in a trust management object are verified.
- [SecTrustSetAnchorCertificates(\_:\_:)](sectrustsetanchorcertificates%28____%29.md): Sets the anchor certificates used when evaluating a trust management object.
- [SecTrustSetAnchorCertificatesOnly(\_:\_:)](sectrustsetanchorcertificatesonly%28____%29.md): Reenables trusting built-in anchor certificates.
- [SecTrustSetExceptions(\_:\_:)](sectrustsetexceptions%28____%29.md): Sets a list of exceptions that should be ignored when the certificate is evaluated.
- [SecTrustSetPolicies(\_:\_:)](sectrustsetpolicies%28____%29.md): Sets the policies to use in an evaluation.
- [SecTrustSetOptions(\_:\_:)](sectrustsetoptions%28____%29.md): Sets option flags for customizing evaluation of a trust object.
- [SecTrustOptionFlags](sectrustoptionflags.md): The option flags used to condition a trust evaluation.
- [SecTrustGetNetworkFetchAllowed(\_:\_:)](sectrustgetnetworkfetchallowed%28____%29.md): Indicates whether a trust evaluation is permitted to fetch missing intermediate certificates from the network.
- [SecTrustSetNetworkFetchAllowed(\_:\_:)](sectrustsetnetworkfetchallowed%28____%29.md): Specifies whether a trust evaluation is permitted to fetch missing intermediate certificates from the network.
- [SecTrustSetOCSPResponse(\_:\_:)](sectrustsetocspresponse%28____%29.md): Attaches Online Certificate Status Protocol (OSCP) response data to a trust object.
- [SecTrustSetSignedCertificateTimestamps(\_:\_:)](sectrustsetsignedcertificatetimestamps%28____%29.md): Attaches signed certificate timestamp data to a trust object.

### Trust Settings

- [SecTrustSettingsCopyCertificates(\_:\_:)](sectrustsettingscopycertificates%28____%29.md): Obtains an array of all certificates that have trust settings in a specific trust settings domain.
- [SecTrustSettingsCopyModificationDate(\_:\_:\_:)](sectrustsettingscopymodificationdate%28______%29.md): Obtains the date and time at which a certificate’s trust settings were last modified.
- [Usage Constraints Dictionary Keys](usage-constraints-dictionary-keys.md): Use these trust settings keys in a usage constraints dictionary.
- [SecTrustSettingsCopyTrustSettings(\_:\_:\_:)](sectrustsettingscopytrustsettings%28______%29.md): Obtains the trust settings for a certificate.
- [SecTrustSettingsCreateExternalRepresentation(\_:\_:)](sectrustsettingscreateexternalrepresentation%28____%29.md): Obtains an external, portable representation of the specified domain’s trust settings.
- [SecTrustSettingsImportExternalRepresentation(\_:\_:)](sectrustsettingsimportexternalrepresentation%28____%29.md): Imports trust settings into a trust domain.
- [SecTrustSettingsRemoveTrustSettings(\_:\_:)](sectrustsettingsremovetrustsettings%28____%29.md): Deletes the trust settings for a certificate.
- [SecTrustSettingsSetTrustSettings(\_:\_:\_:)](sectrustsettingssettrustsettings%28______%29.md): Specifies trust settings for a certificate.
- [SecTrustSettingsKeyUsage](sectrustsettingskeyusage.md): Allowed uses for the encryption key in a certificate.
- [SecTrustSettingsResult](sectrustsettingsresult.md): Trust settings returned in usage constraints dictionaries.
- [SecTrustSettingsDomain](sectrustsettingsdomain.md): The trust settings domains.

### Legacy Symbols

- [SecTrustEvaluate(\_:\_:)](sectrustevaluate%28____%29.md): Deprecated. Evaluates trust for the specified certificate and policies.
- [SecTrustEvaluateAsync(\_:\_:\_:)](sectrustevaluateasync%28______%29.md): Deprecated. Evaluates a trust object asynchronously on the specified dispatch queue.
- [SecTrustCallback](sectrustcallback.md): A block called with the results of an asynchronous trust evaluation.
- [SecTrustSetKeychains(\_:\_:)](sectrustsetkeychains%28____%29.md): Deprecated. Sets the keychains searched for intermediate certificates when evaluating a trust management object.

# Trust (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Evaluate trust based on a given policy.

<a id="overview"></a>

## Overview

Before using a certificate, you evaluate its trustworthiness for a particular purpose.

If you know that a certificate comes unaltered from its sender, you can be confident that its embedded public key does as well. You can also take at face value claims made by the certificate about when and for what purpose the public key may be used. You can securely engage in the operations described in [Using Keys for Encryption](using-keys-for-encryption.md) and [Signing and Verifying](signing-and-verifying.md) without prior arrangement between sender and receiver.

## Topics

### Essentials

- [Creating a Trust Object](creating-a-trust-object.md): Construct a trust object from a certificate and a policy.
- [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md): Creates a trust management object based on certificates and policies.
- [SecTrustRef](sectrust.md): An object used to evaluate trust.
- [SecTrustGetTypeID](sectrustgettypeid%28%29.md): Returns the unique identifier of the opaque type to which a trust object belongs.

### Trust Evaluation

- [Evaluating a Trust and Parsing the Result](evaluating-a-trust-and-parsing-the-result.md): Learn what to expect when evaluating a trust object.
- [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md): Evaluates trust for the specified certificate and policies.
- [SecTrustEvaluateAsyncWithError](sectrustevaluateasyncwitherror%28______%29.md): Evaluates a trust object asynchronously on the specified dispatch queue.
- [SecTrustWithErrorCallback](sectrustwitherrorcallback.md): A block called with the results of an asynchronous trust evaluation.

### Trust Evaluation Result

- [Discovering Why a Trust Evaluation Failed](discovering-why-a-trust-evaluation-failed.md): Determine whether you can recover from a failed trust evaluation.
- [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md): Returns the result code from the most recent trust evaluation.
- [SecTrustResultType](sectrustresulttype.md): Trust evaluation result codes.
- [SecTrustCopyResult](sectrustcopyresult%28__%29.md): Returns a dictionary containing information about an evaluated trust.
- [Trust Result Dictionary Keys](trust-result-dictionary-keys.md): Recognize the keys that appear in a dictionary containing information about an evaluated certification chain.

### Trust Components

- [SecTrustCopyPublicKey](sectrustcopypublickey%28__%29.md): Deprecated. Returns the public key for a leaf certificate after it has been evaluated.
- [SecTrustGetCertificateCount](sectrustgetcertificatecount%28__%29.md): Returns the number of certificates in an evaluated certificate chain.
- [SecTrustGetCertificateAtIndex](sectrustgetcertificateatindex%28____%29.md): Deprecated. Returns a specific certificate from the certificate chain used to evaluate trust.
- [SecTrustGetVerifyTime](sectrustgetverifytime%28__%29.md): Gets the absolute time against which the certificates in a trust management object are verified.
- [SecTrustCopyAnchorCertificates](sectrustcopyanchorcertificates%28__%29.md): Retrieves the anchor (root) certificates stored by macOS.
- [SecTrustCopyCustomAnchorCertificates](sectrustcopycustomanchorcertificates%28____%29.md): Retrieves the custom anchor certificates, if any, used by a given trust.
- [SecTrustCopyExceptions](sectrustcopyexceptions%28__%29.md): Returns an opaque cookie containing exceptions to trust policies that will allow future evaluations of the current certificate to succeed.
- [SecTrustCopyPolicies](sectrustcopypolicies%28____%29.md): Retrieves the policies used by a given trust management object.
- [SecTrustCopyProperties](sectrustcopyproperties%28__%29.md): Deprecated. Returns an array containing the properties of a trust object.

### Advanced Trust Configuation

- [Configuring a Trust](configuring-a-trust.md): Work around a recoverable trust failure.
- [SecTrustSetVerifyDate](sectrustsetverifydate%28____%29.md): Sets the date and time against which the certificates in a trust management object are verified.
- [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md): Sets the anchor certificates used when evaluating a trust management object.
- [SecTrustSetAnchorCertificatesOnly](sectrustsetanchorcertificatesonly%28____%29.md): Reenables trusting built-in anchor certificates.
- [SecTrustSetExceptions](sectrustsetexceptions%28____%29.md): Sets a list of exceptions that should be ignored when the certificate is evaluated.
- [SecTrustSetPolicies](sectrustsetpolicies%28____%29.md): Sets the policies to use in an evaluation.
- [SecTrustSetOptions](sectrustsetoptions%28____%29.md): Sets option flags for customizing evaluation of a trust object.
- [SecTrustOptionFlags](sectrustoptionflags.md): The option flags used to condition a trust evaluation.
- [SecTrustGetNetworkFetchAllowed](sectrustgetnetworkfetchallowed%28____%29.md): Indicates whether a trust evaluation is permitted to fetch missing intermediate certificates from the network.
- [SecTrustSetNetworkFetchAllowed](sectrustsetnetworkfetchallowed%28____%29.md): Specifies whether a trust evaluation is permitted to fetch missing intermediate certificates from the network.
- [SecTrustSetOCSPResponse](sectrustsetocspresponse%28____%29.md): Attaches Online Certificate Status Protocol (OSCP) response data to a trust object.
- [SecTrustSetSignedCertificateTimestamps](sectrustsetsignedcertificatetimestamps%28____%29.md): Attaches signed certificate timestamp data to a trust object.

### Trust Settings

- [SecTrustSettingsCopyCertificates](sectrustsettingscopycertificates%28____%29.md): Obtains an array of all certificates that have trust settings in a specific trust settings domain.
- [SecTrustSettingsCopyModificationDate](sectrustsettingscopymodificationdate%28______%29.md): Obtains the date and time at which a certificate’s trust settings were last modified.
- [Usage Constraints Dictionary Keys](usage-constraints-dictionary-keys.md): Use these trust settings keys in a usage constraints dictionary.
- [SecTrustSettingsCopyTrustSettings](sectrustsettingscopytrustsettings%28______%29.md): Obtains the trust settings for a certificate.
- [SecTrustSettingsCreateExternalRepresentation](sectrustsettingscreateexternalrepresentation%28____%29.md): Obtains an external, portable representation of the specified domain’s trust settings.
- [SecTrustSettingsImportExternalRepresentation](sectrustsettingsimportexternalrepresentation%28____%29.md): Imports trust settings into a trust domain.
- [SecTrustSettingsRemoveTrustSettings](sectrustsettingsremovetrustsettings%28____%29.md): Deletes the trust settings for a certificate.
- [SecTrustSettingsSetTrustSettings](sectrustsettingssettrustsettings%28______%29.md): Specifies trust settings for a certificate.
- [kSecTrustSettingsDefaultRootCertSetting](ksectrustsettingsdefaultrootcertsetting.md): A value indicating the default root certificate trust settings when used as a certificate object in a trust settings API function.
- [SecTrustSettingsKeyUsage](sectrustsettingskeyusage.md): Allowed uses for the encryption key in a certificate.
- [SecTrustSettingsResult](sectrustsettingsresult.md): Trust settings returned in usage constraints dictionaries.
- [SecTrustSettingsDomain](sectrustsettingsdomain.md): The trust settings domains.

### Legacy Symbols

- [SecTrustEvaluate](sectrustevaluate%28____%29.md): Deprecated. Evaluates trust for the specified certificate and policies.
- [SecTrustEvaluateAsync](sectrustevaluateasync%28______%29.md): Deprecated. Evaluates a trust object asynchronously on the specified dispatch queue.
- [SecTrustCallback](sectrustcallback.md): A block called with the results of an asynchronous trust evaluation.
- [SecTrustUserSetting](sectrustusersetting.md): Deprecated. Represents user-specified trust settings.
- [SecTrustSetParameters](sectrustsetparameters.md): Deprecated. Sets the action and action data for a trust management object.
- [SecTrustSetKeychains](sectrustsetkeychains%28____%29.md): Deprecated. Sets the keychains searched for intermediate certificates when evaluating a trust management object.
- [SecTrustGetCssmResult](sectrustgetcssmresult.md): Deprecated. Retrieves the CSSM trust result.
- [SecTrustGetCssmResultCode](sectrustgetcssmresultcode.md): Deprecated. Retrieves the CSSM result code from the most recent trust evaluation for a trust management object.
- [SecTrustGetTPHandle](sectrustgettphandle.md): Deprecated. Retrieves the trust policy handle.
- [SecTrustGetResult](sectrustgetresult.md): Deprecated. Retrieves details on the outcome of a call to the function `SecTrustEvaluate`.
