> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/preauthorizediagnosiskeys(completionhandler:)](https://developer.apple.com/documentation/exposurenotification/enmanager/preauthorizediagnosiskeys(completionhandler:))

# preAuthorizeDiagnosisKeys(completionHandler:) (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 14.4+ (deprecated in 27.0) · iPadOS 14.4+ (deprecated in 27.0) · Mac Catalyst 14.4+ (deprecated in 27.0)

Allows users to authorize a one-time release of diagnosis keys within five days of the authorization.

> No longer supported.

## Declaration

```swift
func preAuthorizeDiagnosisKeys(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func preAuthorizeDiagnosisKeys() async throws
```

## Parameters

- `completionHandler`: The completion handler the framework calls when the method completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func preAuthorizeDiagnosisKeys() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  Before requesting authorization, ensure the application is in the foreground.

This method prompts the user when getting tested to share their diagnosis keys if they receive a positive test result. An app should only call this method if it has a way to determine that the user is about to take a COVID test, such as apps that allow users to schedule testing appointments, and that can also determine if the result is positive.

The authorization duration is five days.

## See Also

### Preauthorizing Exposure Keys

- [requestPreAuthorizedDiagnosisKeys(completionHandler:)](requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests diagnosis keys after the user authorizes sharing them.
- [ENDiagnosisKeysAvailableHandler](../endiagnosiskeysavailablehandler.md): Deprecated. The handler the system invokes after requesting diagnosis keys.
- [diagnosisKeysAvailableHandler](diagnosiskeysavailablehandler.md): Deprecated. The handler that receives available diagnosis keys after a successful preauthorization.

# preAuthorizeDiagnosisKeysWithCompletionHandler: (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 14.4+ (deprecated in 27.0) · iPadOS 14.4+ (deprecated in 27.0) · Mac Catalyst 14.4+ (deprecated in 27.0)

Allows users to authorize a one-time release of diagnosis keys within five days of the authorization.

> No longer supported.

## Declaration

```objectivec
- (void) preAuthorizeDiagnosisKeysWithCompletionHandler:(ENErrorHandler) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler the framework calls when the method completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func preAuthorizeDiagnosisKeys() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  Before requesting authorization, ensure the application is in the foreground.

This method prompts the user when getting tested to share their diagnosis keys if they receive a positive test result. An app should only call this method if it has a way to determine that the user is about to take a COVID test, such as apps that allow users to schedule testing appointments, and that can also determine if the result is positive.

The authorization duration is five days.

## See Also

### Preauthorizing Exposure Keys

- [requestPreAuthorizedDiagnosisKeysWithCompletionHandler:](requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests diagnosis keys after the user authorizes sharing them.
- [ENDiagnosisKeysAvailableHandler](../endiagnosiskeysavailablehandler.md): Deprecated. The handler the system invokes after requesting diagnosis keys.
- [diagnosisKeysAvailableHandler](diagnosiskeysavailablehandler.md): Deprecated. The handler that receives available diagnosis keys after a successful preauthorization.
