> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodersetsigneralgorithm(_:_:)](https://developer.apple.com/documentation/security/cmsencodersetsigneralgorithm(_:_:))

# CMSEncoderSetSignerAlgorithm(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.11+

Sets the digest algorithm to use for the signer.

## Declaration

```swift
func CMSEncoderSetSignerAlgorithm(_ cmsEncoder: CMSEncoder, _ digestAlgorithm: CFString) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md) function.
- `digestAlgorithm`: A string representing the digest algorithm to use.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# CMSEncoderSetSignerAlgorithm (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.11+

Sets the digest algorithm to use for the signer.

## Declaration

```objectivec
OSStatus CMSEncoderSetSignerAlgorithm(CMSEncoderRef cmsEncoder, CFStringRef digestAlgorithm);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the [CMSEncoderCreate](cmsencodercreate%28__%29.md) function.
- `digestAlgorithm`: A string representing the digest algorithm to use.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
