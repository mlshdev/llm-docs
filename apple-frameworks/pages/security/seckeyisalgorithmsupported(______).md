> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyisalgorithmsupported(_:_:_:)](https://developer.apple.com/documentation/security/seckeyisalgorithmsupported(_:_:_:))

# SecKeyIsAlgorithmSupported(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean indicating whether a key is suitable for an operation using a certain algorithm.

## Declaration

```swift
func SecKeyIsAlgorithmSupported(_ key: SecKey, _ operation: SecKeyOperationType, _ algorithm: SecKeyAlgorithm) -> Bool
```

## Parameters

- `key`: The key whose suitability you want to test.
- `operation`: The operation that you want to perform with the key. Use one of the values from [SecKeyOperationType](seckeyoperationtype.md).
- `algorithm`: The algorithm that you want to perform with the key. Use one of the values from [SecKeyAlgorithm](seckeyalgorithm.md).

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the key can be used for the given operation and algorithm.

## Mentioned In

- [Signing and Verifying](signing-and-verifying.md)
- [Using Keys for Encryption](using-keys-for-encryption.md)

# SecKeyIsAlgorithmSupported (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean indicating whether a key is suitable for an operation using a certain algorithm.

## Declaration

```objectivec
Boolean SecKeyIsAlgorithmSupported(SecKeyRef key, SecKeyOperationType operation, SecKeyAlgorithm algorithm);
```

## Parameters

- `key`: The key whose suitability you want to test.
- `operation`: The operation that you want to perform with the key. Use one of the values from [SecKeyOperationType](seckeyoperationtype.md).
- `algorithm`: The algorithm that you want to perform with the key. Use one of the values from [SecKeyAlgorithm](seckeyalgorithm.md).

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the key can be used for the given operation and algorithm.

## Mentioned In

- [Signing and Verifying](signing-and-verifying.md)
- [Using Keys for Encryption](using-keys-for-encryption.md)
