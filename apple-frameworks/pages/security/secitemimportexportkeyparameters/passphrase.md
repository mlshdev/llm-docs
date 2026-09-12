> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemimportexportkeyparameters/passphrase](https://developer.apple.com/documentation/security/secitemimportexportkeyparameters/passphrase)

# passphrase (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The password to use during key import or export.

## Declaration

```swift
var passphrase: Unmanaged<CFTypeRef>?
```

<a id="Discussion"></a>

## Discussion

You may specify either a [CFString](../../corefoundation/cfstring.md) or a [CFData](../../corefoundation/cfdata.md) instance for the passphrase. The PKCS12 format requires passwords in Unicode format, and passing in a [CFString](../../corefoundation/cfstring.md) as the password is the surest way to meet this requirement  (and ensure compatibility with other implementations). If you supply a [CFData](../../corefoundation/cfdata.md) instance as the password for a PKCS12 export operation, the data is assumed to be in UTF8 form and converted as appropriate.

When importing or exporting keys ([SecKey](../seckey.md) objects) in one of the wrapped formats ([SecExternalFormat.formatWrappedOpenSSL](../secexternalformat/formatwrappedopenssl.md), [SecExternalFormat.formatWrappedSSH](../secexternalformat/formatwrappedssh.md), or [SecExternalFormat.formatWrappedPKCS8](../secexternalformat/formatwrappedpkcs8.md)) or in PKCS12 format, you must either explicitly specify the passphrase field or set the [securePassphrase](../seckeyimportexportflags/securepassphrase.md) bit the flags field (to prompt the user to enter the password).

# passphrase (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The password to use during key import or export.

## Declaration

```objectivec
CFTypeRef passphrase;
```

<a id="Discussion"></a>

## Discussion

You may specify either a [CFStringRef](../../corefoundation/cfstring.md) or a [CFDataRef](../../corefoundation/cfdata.md) instance for the passphrase. The PKCS12 format requires passwords in Unicode format, and passing in a [CFStringRef](../../corefoundation/cfstring.md) as the password is the surest way to meet this requirement  (and ensure compatibility with other implementations). If you supply a [CFDataRef](../../corefoundation/cfdata.md) instance as the password for a PKCS12 export operation, the data is assumed to be in UTF8 form and converted as appropriate.

When importing or exporting keys ([SecKeyRef](../seckey.md) objects) in one of the wrapped formats ([kSecFormatWrappedOpenSSL](../secexternalformat/formatwrappedopenssl.md), [kSecFormatWrappedSSH](../secexternalformat/formatwrappedssh.md), or [kSecFormatWrappedPKCS8](../secexternalformat/formatwrappedpkcs8.md)) or in PKCS12 format, you must either explicitly specify the passphrase field or set the [kSecKeySecurePassphrase](../seckeyimportexportflags/securepassphrase.md) bit the flags field (to prompt the user to enter the password).
