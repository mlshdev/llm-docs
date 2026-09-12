> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapublickey/exportbytes(completion:)](https://developer.apple.com/documentation/localauthentication/lapublickey/exportbytes(completion:))

# exportBytes(completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Exports the data that represents a public key.

## Declaration

```swift
func exportBytes(completion handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
var bytes: Data { get async throws }
```

## Parameters

- `handler`: A completion handler to call when the export operation completes.

  - **`data`**: The data that represents the public key.
  - **`error`**: An error object that indicates why the export operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> var bytes: Data { get async throws }
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [encrypt(\_:algorithm:completion:)](encrypt%28__algorithm_completion_%29.md): Encrypts the data you supply with a given algorithm.
- [verify(\_:signature:algorithm:completion:)](verify%28__signature_algorithm_completion_%29.md): Verifies a digital signature for the data you supply.

# exportBytesWithCompletion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Exports the data that represents a public key.

## Declaration

```objectivec
- (void) exportBytesWithCompletion:(void (^)(NSData *, NSError *)) handler;
```

## Parameters

- `handler`: A completion handler to call when the export operation completes.

  - **`data`**: The data that represents the public key.
  - **`error`**: An error object that indicates why the export operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> var bytes: Data { get async throws }
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Performing cryptographic operations

- [encryptData:secKeyAlgorithm:completion:](encrypt%28__algorithm_completion_%29.md): Encrypts the data you supply with a given algorithm.
- [verifyData:signature:secKeyAlgorithm:completion:](verify%28__signature_algorithm_completion_%29.md): Verifies a digital signature for the data you supply.
