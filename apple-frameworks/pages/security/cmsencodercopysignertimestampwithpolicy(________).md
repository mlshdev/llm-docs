> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodercopysignertimestampwithpolicy(_:_:_:_:)](https://developer.apple.com/documentation/security/cmsencodercopysignertimestampwithpolicy(_:_:_:_:))

# CMSEncoderCopySignerTimestampWithPolicy(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.10+

Returns the timestamp of a signer of a CMS message using a particular policy, if present.

## Declaration

```swift
func CMSEncoderCopySignerTimestampWithPolicy(_ cmsEncoder: CMSEncoder, _ timeStampPolicy: CFTypeRef?, _ signerIndex: Int, _ timestamp: UnsafeMutablePointer<CFAbsoluteTime>) -> OSStatus
```

## Parameters

- `cmsEncoder`: A CMSEncoder reference returned by the [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md) function.
- `timeStampPolicy`: A timestamp policy. Specify `NULL` (or use the [CMSEncoderCopySignerTimestamp(\_:\_:\_:)](cmsencodercopysignertimestamp%28______%29.md) function instead) to get the default, which is a policy using [kSecPolicyAppleTimeStamping](ksecpolicyappletimestamping.md). See [Policies](policies.md) in [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md) for more about policies.
- `signerIndex`: A number indicating which signer to examine. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `timestamp`: The address of an absolute time value where the result should be stored.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# CMSEncoderCopySignerTimestampWithPolicy (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.10+

Returns the timestamp of a signer of a CMS message using a particular policy, if present.

## Declaration

```objectivec
OSStatus CMSEncoderCopySignerTimestampWithPolicy(CMSEncoderRef cmsEncoder, CFTypeRef timeStampPolicy, size_t signerIndex, CFAbsoluteTime *timestamp);
```

## Parameters

- `cmsEncoder`: A CMSEncoder reference returned by the [CMSEncoderCreate](cmsencodercreate%28__%29.md) function.
- `timeStampPolicy`: A timestamp policy. Specify `NULL` (or use the [CMSEncoderCopySignerTimestamp](cmsencodercopysignertimestamp%28______%29.md) function instead) to get the default, which is a policy using [kSecPolicyAppleTimeStamping](ksecpolicyappletimestamping.md). See [Policies](policies.md) in [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md) for more about policies.
- `signerIndex`: A number indicating which signer to examine. Signer index numbers start with 0. Use the [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md) function to determine the total number of signers for a message.
- `timestamp`: The address of an absolute time value where the result should be stored.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
