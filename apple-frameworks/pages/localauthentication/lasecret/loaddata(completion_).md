> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lasecret/loaddata(completion:)](https://developer.apple.com/documentation/localauthentication/lasecret/loaddata(completion:))

# loadData(completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Retrieves data stored in a secret.

## Declaration

```swift
func loadData(completion handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
var rawData: Data { get async throws }
```

## Parameters

- `handler`: A completion handler that provides the data stored in a secret.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> var rawData: Data { get async throws }
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# loadDataWithCompletion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Retrieves data stored in a secret.

## Declaration

```objectivec
- (void) loadDataWithCompletion:(void (^)(NSData *, NSError *)) handler;
```

## Parameters

- `handler`: A completion handler that provides the data stored in a secret.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> var rawData: Data { get async throws }
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
