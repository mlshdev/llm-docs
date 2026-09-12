> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laprivatekey/decrypt(_:algorithm:completion:)](https://developer.apple.com/documentation/localauthentication/laprivatekey/decrypt(_:algorithm:completion:))

# decrypt(\_:algorithm:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Decrypts the data you supply with a given algorithm.

## Declaration

```swift
func decrypt(_ data: Data, algorithm: SecKeyAlgorithm, completion handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func decrypt(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
```

## Parameters

- `data`: The data to decrypt.
- `algorithm`: The algorithm to use to decrypt the data.
- `handler`: A completion handler to call when the decryption operation completes.

  - **`data`**: The decrypted data.
  - **`error`**: An error object that indicates why the decryption failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func decrypt(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [exchangeKeys(publicKey:algorithm:parameters:completion:)](exchangekeys%28publickey_algorithm_parameters_completion_%29.md): Performs a Diffie-Hellman style key exchange operation.
- [sign(\_:algorithm:completion:)](sign%28__algorithm_completion_%29.md): Generates a digital signature for the data you supply.

# decryptData:secKeyAlgorithm:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Decrypts the data you supply with a given algorithm.

## Declaration

```objectivec
- (void) decryptData:(NSData *) data secKeyAlgorithm:(SecKeyAlgorithm) algorithm completion:(void (^)(NSData *, NSError *)) handler;
```

## Parameters

- `data`: The data to decrypt.
- `algorithm`: The algorithm to use to decrypt the data.
- `handler`: A completion handler to call when the decryption operation completes.

  - **`data`**: The decrypted data.
  - **`error`**: An error object that indicates why the decryption failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func decrypt(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [exchangeKeysWithPublicKey:secKeyAlgorithm:secKeyParameters:completion:](exchangekeys%28publickey_algorithm_parameters_completion_%29.md): Performs a Diffie-Hellman style key exchange operation.
- [signData:secKeyAlgorithm:completion:](sign%28__algorithm_completion_%29.md): Generates a digital signature for the data you supply.
