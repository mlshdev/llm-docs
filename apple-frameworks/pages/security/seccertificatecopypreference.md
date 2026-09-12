> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopypreference](https://developer.apple.com/documentation/security/seccertificatecopypreference)

# SecCertificateCopyPreference

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves the preferred certificate for the specified name and key use.

## Declaration

```objectivec
OSStatus SecCertificateCopyPreference(CFStringRef name, uint32 keyUsage, SecCertificateRef*certificate);
```

## Parameters

- `name`: A string containing an email address (RFC822) or other name for which a preferred certificate is requested.
- `keyUsage`: A key use value, as defined in `Security.framework/cssmtype.h`. Pass `0` to ignore this parameter.
- `certificate`: On return, a reference to the preferred certificate, or `NULL` if none was found. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is typically used to obtain the preferred encryption certificate for an email recipient.

<a id="Special-Considerations"></a>

### Special Considerations

Use [SecCertificateCopyPreferred](seccertificatecopypreferred%28____%29.md) for new development instead.
