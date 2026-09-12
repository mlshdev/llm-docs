> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laprivatekey/cansign(using:)](https://developer.apple.com/documentation/localauthentication/laprivatekey/cansign(using:))

# canSign(using:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Checks whether the algorithm you supply is valid for signing data with the key.

## Declaration

```swift
func canSign(using algorithm: SecKeyAlgorithm) -> Bool
```

## Parameters

- `algorithm`: A cryptographic algorithm.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the algorithm you supply is valid for signing data with the key.

## See Also

### Checking algorithm support

- [canDecrypt(using:)](candecrypt%28using_%29.md): Checks whether the algorithm you supply is valid for decrypting data with the key.
- [canExchangeKeys(using:)](canexchangekeys%28using_%29.md): Checks whether the algorithm you supply is valid for performing key exchanges.

# canSignUsingSecKeyAlgorithm: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Checks whether the algorithm you supply is valid for signing data with the key.

## Declaration

```objectivec
- (BOOL) canSignUsingSecKeyAlgorithm:(SecKeyAlgorithm) algorithm;
```

## Parameters

- `algorithm`: A cryptographic algorithm.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the algorithm you supply is valid for signing data with the key.

## See Also

### Checking algorithm support

- [canDecryptUsingSecKeyAlgorithm:](candecrypt%28using_%29.md): Checks whether the algorithm you supply is valid for decrypting data with the key.
- [canExchangeKeysUsingSecKeyAlgorithm:](canexchangekeys%28using_%29.md): Checks whether the algorithm you supply is valid for performing key exchanges.
