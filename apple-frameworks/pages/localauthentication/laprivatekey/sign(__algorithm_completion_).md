> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laprivatekey/sign(_:algorithm:completion:)](https://developer.apple.com/documentation/localauthentication/laprivatekey/sign(_:algorithm:completion:))

# sign(\_:algorithm:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Generates a digital signature for the data you supply.

## Declaration

```swift
func sign(_ data: Data, algorithm: SecKeyAlgorithm, completion handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func sign(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
```

## Parameters

- `data`: The data to sign. The data is usually the digest of applying a cryptographic hash function to some actual data.
- `algorithm`: An algorithm suitable for this data signing operation. For example, `ecdsaSignatureMessageX962SHA256`.
- `handler`: A completion handler to call when the signing operation completes.

  - **data**: The signature of the data you supply.
  - **error**: An error object that indicates why the signing operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func sign(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [decrypt(\_:algorithm:completion:)](decrypt%28__algorithm_completion_%29.md): Decrypts the data you supply with a given algorithm.
- [exchangeKeys(publicKey:algorithm:parameters:completion:)](exchangekeys%28publickey_algorithm_parameters_completion_%29.md): Performs a Diffie-Hellman style key exchange operation.

# signData:secKeyAlgorithm:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Generates a digital signature for the data you supply.

## Declaration

```objectivec
- (void) signData:(NSData *) data secKeyAlgorithm:(SecKeyAlgorithm) algorithm completion:(void (^)(NSData *, NSError *)) handler;
```

## Parameters

- `data`: The data to sign. The data is usually the digest of applying a cryptographic hash function to some actual data.
- `algorithm`: An algorithm suitable for this data signing operation. For example, `ecdsaSignatureMessageX962SHA256`.
- `handler`: A completion handler to call when the signing operation completes.

  - **data**: The signature of the data you supply.
  - **error**: An error object that indicates why the signing operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func sign(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [decryptData:secKeyAlgorithm:completion:](decrypt%28__algorithm_completion_%29.md): Decrypts the data you supply with a given algorithm.
- [exchangeKeysWithPublicKey:secKeyAlgorithm:secKeyParameters:completion:](exchangekeys%28publickey_algorithm_parameters_completion_%29.md): Performs a Diffie-Hellman style key exchange operation.
