> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatesetpreference](https://developer.apple.com/documentation/security/seccertificatesetpreference)

# SecCertificateSetPreference

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sets the preferred certificate for a specified name, key use, and date.

## Declaration

```objectivec
OSStatus SecCertificateSetPreference(SecCertificateRef certificate, CFStringRef name, uint32 keyUsage, CFDateRef date);
```

## Parameters

- `certificate`: The certificate object identifying the preferred certificate.
- `name`: A string containing an email address (RFC822) or other name with which the preferred certificate is to be associated.
- `keyUsage`: A key use value, as defined in `Security.framework/cssmtype.h`. Pass `0` if you don’t want to specify a particular key use.
- `date`: The date after which this preference is no longer valid. If supplied, the preferred certificate is changed only if this date is later than the currently saved setting. Pass `NULL` if this preference should not be restricted by date.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is typically used to set the preferred encryption certificate for an email recipient, either manually (when encrypting email to a recipient) or automatically upon receipt of encrypted email.

<a id="Special-Considerations"></a>

### Special Considerations

Use [SecCertificateSetPreferred](seccertificatesetpreferred%28______%29.md) for new development instead.

Because this preference is stored in the default keychain, if the keychain is locked, the system asks the user for a password or other token to unlock it. This function can therefore block while waiting for user input.
