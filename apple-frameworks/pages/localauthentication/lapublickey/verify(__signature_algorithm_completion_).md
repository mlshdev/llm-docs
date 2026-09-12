> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapublickey/verify(_:signature:algorithm:completion:)](https://developer.apple.com/documentation/localauthentication/lapublickey/verify(_:signature:algorithm:completion:))

# verify(\_:signature:algorithm:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Verifies a digital signature for the data you supply.

## Declaration

```swift
func verify(_ signedData: Data, signature: Data, algorithm: SecKeyAlgorithm, completion handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func verify(_ signedData: Data, signature: Data, algorithm: SecKeyAlgorithm) async throws
```

## Parameters

- `signedData`: The signed data.
- `signature`: The signature of the data.
- `algorithm`: An algorithm suitable for verifying signatures with this public key.
- `handler`: A completion handler to call when the verification operation completes.

  - **`error`**: An error object that indicates why the verification operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func verify(_ signedData: Data, signature: Data, algorithm: SecKeyAlgorithm) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [encrypt(\_:algorithm:completion:)](encrypt%28__algorithm_completion_%29.md): Encrypts the data you supply with a given algorithm.
- [exportBytes(completion:)](exportbytes%28completion_%29.md): Exports the data that represents a public key.

# verifyData:signature:secKeyAlgorithm:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Verifies a digital signature for the data you supply.

## Declaration

```objectivec
- (void) verifyData:(NSData *) signedData signature:(NSData *) signature secKeyAlgorithm:(SecKeyAlgorithm) algorithm completion:(void (^)(NSError *)) handler;
```

## Parameters

- `signedData`: The signed data.
- `signature`: The signature of the data.
- `algorithm`: An algorithm suitable for verifying signatures with this public key.
- `handler`: A completion handler to call when the verification operation completes.

  - **`error`**: An error object that indicates why the verification operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func verify(_ signedData: Data, signature: Data, algorithm: SecKeyAlgorithm) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [encryptData:secKeyAlgorithm:completion:](encrypt%28__algorithm_completion_%29.md): Encrypts the data you supply with a given algorithm.
- [exportBytesWithCompletion:](exportbytes%28completion_%29.md): Exports the data that represents a public key.
