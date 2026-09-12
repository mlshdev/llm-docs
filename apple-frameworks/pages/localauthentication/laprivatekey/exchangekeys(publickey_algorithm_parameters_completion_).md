> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laprivatekey/exchangekeys(publickey:algorithm:parameters:completion:)](https://developer.apple.com/documentation/localauthentication/laprivatekey/exchangekeys(publickey:algorithm:parameters:completion:))

# exchangeKeys(publicKey:algorithm:parameters:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Performs a Diffie-Hellman style key exchange operation.

## Declaration

```swift
func exchangeKeys(publicKey: Data, algorithm: SecKeyAlgorithm, parameters: [AnyHashable : Any], completion handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func exchangeKeys(publicKey: Data, algorithm: SecKeyAlgorithm, parameters: [AnyHashable : Any]) async throws -> Data
```

## Parameters

- `publicKey`: The remote party’s public key.
- `algorithm`: An algorithm suitable for performing this key exchange. For example, `ecdhKeyExchangeCofactorX963SHA256`.
- `parameters`: A dictionary with parameters for this key exchange.
- `handler`: A completion handler to call when the key exchange operation completes.

  - **data**: The result of the key exchange operation.
  - **error**: An error object that indicates why the key exchange failed, or `nil` if the exchange succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func exchangeKeys(publicKey: Data, algorithm: SecKeyAlgorithm, parameters: [AnyHashable : Any]) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The algorithm you use determines the parameters in the dictionary that are required or optional. For more information, see [SecKeyKeyExchangeParameter](../../security/seckeykeyexchangeparameter.md).

## See Also

### Performing cryptographic operations

- [decrypt(\_:algorithm:completion:)](decrypt%28__algorithm_completion_%29.md): Decrypts the data you supply with a given algorithm.
- [sign(\_:algorithm:completion:)](sign%28__algorithm_completion_%29.md): Generates a digital signature for the data you supply.

# exchangeKeysWithPublicKey:secKeyAlgorithm:secKeyParameters:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Performs a Diffie-Hellman style key exchange operation.

## Declaration

```objectivec
- (void) exchangeKeysWithPublicKey:(NSData *) publicKey secKeyAlgorithm:(SecKeyAlgorithm) algorithm secKeyParameters:(NSDictionary *) parameters completion:(void (^)(NSData *, NSError *)) handler;
```

## Parameters

- `publicKey`: The remote party’s public key.
- `algorithm`: An algorithm suitable for performing this key exchange. For example, `ecdhKeyExchangeCofactorX963SHA256`.
- `parameters`: A dictionary with parameters for this key exchange.
- `handler`: A completion handler to call when the key exchange operation completes.

  - **data**: The result of the key exchange operation.
  - **error**: An error object that indicates why the key exchange failed, or `nil` if the exchange succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func exchangeKeys(publicKey: Data, algorithm: SecKeyAlgorithm, parameters: [AnyHashable : Any]) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The algorithm you use determines the parameters in the dictionary that are required or optional. For more information, see [SecKeyKeyExchangeParameter](../../security/seckeykeyexchangeparameter.md).

## See Also

### Performing cryptographic operations

- [decryptData:secKeyAlgorithm:completion:](decrypt%28__algorithm_completion_%29.md): Decrypts the data you supply with a given algorithm.
- [signData:secKeyAlgorithm:completion:](sign%28__algorithm_completion_%29.md): Generates a digital signature for the data you supply.
