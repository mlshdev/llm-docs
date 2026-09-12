> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapublickey/encrypt(_:algorithm:completion:)](https://developer.apple.com/documentation/localauthentication/lapublickey/encrypt(_:algorithm:completion:))

# encrypt(\_:algorithm:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Encrypts the data you supply with a given algorithm.

## Declaration

```swift
func encrypt(_ data: Data, algorithm: SecKeyAlgorithm, completion handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func encrypt(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
```

## Parameters

- `data`: The data to encrypt.
- `algorithm`: The algorithm to use to encrypt the data.
- `handler`: A completion handler to call when the encryption operation completes.

  - **`data`**: The encrypted data.
  - **`error`**: An error object that indicates why the encryption failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func encrypt(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [exportBytes(completion:)](exportbytes%28completion_%29.md): Exports the data that represents a public key.
- [verify(\_:signature:algorithm:completion:)](verify%28__signature_algorithm_completion_%29.md): Verifies a digital signature for the data you supply.

# encryptData:secKeyAlgorithm:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Encrypts the data you supply with a given algorithm.

## Declaration

```objectivec
- (void) encryptData:(NSData *) data secKeyAlgorithm:(SecKeyAlgorithm) algorithm completion:(void (^)(NSData *, NSError *)) handler;
```

## Parameters

- `data`: The data to encrypt.
- `algorithm`: The algorithm to use to encrypt the data.
- `handler`: A completion handler to call when the encryption operation completes.

  - **`data`**: The encrypted data.
  - **`error`**: An error object that indicates why the encryption failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func encrypt(_ data: Data, algorithm: SecKeyAlgorithm) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [exportBytesWithCompletion:](exportbytes%28completion_%29.md): Exports the data that represents a public key.
- [verifyData:signature:secKeyAlgorithm:completion:](verify%28__signature_algorithm_completion_%29.md): Verifies a digital signature for the data you supply.
