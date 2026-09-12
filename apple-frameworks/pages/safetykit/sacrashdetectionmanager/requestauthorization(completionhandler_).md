> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectionmanager/requestauthorization(completionhandler:)](https://developer.apple.com/documentation/safetykit/sacrashdetectionmanager/requestauthorization(completionhandler:))

# requestAuthorization(completionHandler:) (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Requests permission to access Crash Detection information.

## Declaration

```swift
func requestAuthorization(completionHandler handler: @escaping @Sendable (SAAuthorizationStatus, (any Error)?) -> Void)
```

```swift
func requestAuthorization() async throws -> SAAuthorizationStatus
```

## Parameters

- `handler`: The completion handler invoked with the status of the authorization request.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestAuthorization() async throws -> SAAuthorizationStatus
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method requests a person to authorize your app to receive Crash Detection events. Before requesting authorization, verify that your app already has authorization by verifying that [authorizationStatus](authorizationstatus.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Requesting authorization

- [delegate](delegate.md): The object that receives Crash Detection events.

# requestAuthorizationWithCompletionHandler: (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Requests permission to access Crash Detection information.

## Declaration

```objectivec
- (void) requestAuthorizationWithCompletionHandler:(void (^)(SAAuthorizationStatus status, NSError *error)) handler;
```

## Parameters

- `handler`: The completion handler invoked with the status of the authorization request.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestAuthorization() async throws -> SAAuthorizationStatus
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method requests a person to authorize your app to receive Crash Detection events. Before requesting authorization, verify that your app already has authorization by verifying that [authorizationStatus](authorizationstatus.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Requesting authorization

- [delegate](delegate.md): The object that receives Crash Detection events.
