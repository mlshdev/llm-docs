> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/lapublickey/canencrypt(using:)

# canEncrypt(using:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Checks whether the algorithm you supply is valid for encrypting data with the key.

## Declaration

```swift
func canEncrypt(using algorithm: SecKeyAlgorithm) -> Bool
```

## Parameters

- `algorithm`: A cryptographic algorithm.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the algorithm you supply is valid for encrypting data with the key.

## See Also

### Checking algorithm support

- [canVerify(using:)](canverify%28using_%29.md): Checks whether the algorithm you supply is valid for verifying signatures with the key.

# canEncryptUsingSecKeyAlgorithm: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Checks whether the algorithm you supply is valid for encrypting data with the key.

## Declaration

```objectivec
- (BOOL) canEncryptUsingSecKeyAlgorithm:(SecKeyAlgorithm) algorithm;
```

## Parameters

- `algorithm`: A cryptographic algorithm.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the algorithm you supply is valid for encrypting data with the key.

## See Also

### Checking algorithm support

- [canVerifyUsingSecKeyAlgorithm:](canverify%28using_%29.md): Checks whether the algorithm you supply is valid for verifying signatures with the key.
