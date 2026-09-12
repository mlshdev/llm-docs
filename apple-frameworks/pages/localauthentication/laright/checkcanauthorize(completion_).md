> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laright/checkcanauthorize(completion:)](https://developer.apple.com/documentation/localauthentication/laright/checkcanauthorize(completion:))

# checkCanAuthorize(completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Checks whether the right has permission to perform authorization.

## Declaration

```swift
func checkCanAuthorize(completion handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func checkCanAuthorize() async throws
```

## Parameters

- `handler`: A completion handler called when the authorization check finishes.

  - **`error`**: If `nil`, the right can be authorized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func checkCanAuthorize() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Monitoring authorization status

- [state](state-swift.property.md): The current authorization state for a right.
- [LARight.State](state-swift.enum.md): The possible states for a right during authorization.

# checkCanAuthorizeWithCompletion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Checks whether the right has permission to perform authorization.

## Declaration

```objectivec
- (void) checkCanAuthorizeWithCompletion:(void (^)(NSError *error)) handler;
```

## Parameters

- `handler`: A completion handler called when the authorization check finishes.

  - **`error`**: If `nil`, the right can be authorized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func checkCanAuthorize() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Monitoring authorization status

- [state](state-swift.property.md): The current authorization state for a right.
- [LARightState](state-swift.enum.md): The possible states for a right during authorization.
