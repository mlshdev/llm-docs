> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/usage-constraints-dictionary-keys](https://developer.apple.com/documentation/security/usage-constraints-dictionary-keys)

# Usage Constraints Dictionary Keys

**Interface languages:** Swift, Objective-C

**Framework:** Security  
**Kind:** API Collection

Use these trust settings keys in a usage constraints dictionary.

## Topics

### Constants

- [kSecTrustSettingsPolicy](ksectrustsettingspolicy.md): A policy object specifying the certificate verification policy.
- [kSecTrustSettingsApplication](ksectrustsettingsapplication.md): A trusted application reference for the application checking the certificate’s trust settings.
- [kSecTrustSettingsPolicyString](ksectrustsettingspolicystring.md): A string containing policy-specific data.
- [kSecTrustSettingsKeyUsage](ksectrustsettingskeyusage.md): A number specifying the operations for which the encryption key in this certificate can be used.
- [kSecTrustSettingsAllowedError](ksectrustsettingsallowederror.md): A number which, if encountered during certificate verification, is ignored for that certificate.
- [kSecTrustSettingsResult](ksectrustsettingsresult.md): A number indicating the effective trust setting for this usage constraints dictionary.
