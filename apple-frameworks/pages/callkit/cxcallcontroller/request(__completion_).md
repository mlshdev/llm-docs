> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallcontroller/request(_:completion:)](https://developer.apple.com/documentation/callkit/cxcallcontroller/request(_:completion:))

# request(\_:completion:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Requests that the actions in the specified transaction be asynchronously performed by the telephony provider.

## Declaration

```swift
func request(_ transaction: CXTransaction, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func request(_ transaction: CXTransaction) async throws
```

## Parameters

- `transaction`: A transaction that contains actions to be performed.
- `completion`: Code to be executed after the transaction is completed. The callback is executed on the queue specified when the call controller was initialized.

  - **error**: If an error occurred, an error object indicating how the transaction failed, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func request(_ transaction: CXTransaction) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Requesting Transactions

- [requestTransaction(with:completion:)](requesttransaction%28with_completion_%29-ffme.md): Requests that the transaction that contains the specified action be asynchronously performed by the telephony provider.
- [requestTransaction(with:completion:)](requesttransaction%28with_completion_%29-4o1m4.md): Requests that the transaction that contains the specified actions be asynchronously performed by the telephony provider.

# requestTransaction:completion: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Requests that the actions in the specified transaction be asynchronously performed by the telephony provider.

## Declaration

```objectivec
- (void) requestTransaction:(CXTransaction *) transaction completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `transaction`: A transaction that contains actions to be performed.
- `completion`: Code to be executed after the transaction is completed. The callback is executed on the queue specified when the call controller was initialized.

  - **error**: If an error occurred, an error object indicating how the transaction failed, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func request(_ transaction: CXTransaction) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Requesting Transactions

- [requestTransactionWithAction:completion:](requesttransaction%28with_completion_%29-ffme.md): Requests that the transaction that contains the specified action be asynchronously performed by the telephony provider.
- [requestTransactionWithActions:completion:](requesttransaction%28with_completion_%29-4o1m4.md): Requests that the transaction that contains the specified actions be asynchronously performed by the telephony provider.
