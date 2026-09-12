> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapublickey/canverify(using:)](https://developer.apple.com/documentation/localauthentication/lapublickey/canverify(using:))

# canVerify(using:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Checks whether the algorithm you supply is valid for verifying signatures with the key.

## Declaration

```swift
func canVerify(using algorithm: SecKeyAlgorithm) -> Bool
```

## Parameters

- `algorithm`: A cryptographic algorithm.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the algorithm you supply is valid for verifying signatures with the key.

## See Also

### Checking algorithm support

- [canEncrypt(using:)](canencrypt%28using_%29.md): Checks whether the algorithm you supply is valid for encrypting data with the key.

# canVerifyUsingSecKeyAlgorithm: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Checks whether the algorithm you supply is valid for verifying signatures with the key.

## Declaration

```objectivec
- (BOOL) canVerifyUsingSecKeyAlgorithm:(SecKeyAlgorithm) algorithm;
```

## Parameters

- `algorithm`: A cryptographic algorithm.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the algorithm you supply is valid for verifying signatures with the key.

## See Also

### Checking algorithm support

- [canEncryptUsingSecKeyAlgorithm:](canencrypt%28using_%29.md): Checks whether the algorithm you supply is valid for encrypting data with the key.
