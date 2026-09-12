> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/gettestdiagnosiskeys(completionhandler:)](https://developer.apple.com/documentation/exposurenotification/enmanager/gettestdiagnosiskeys(completionhandler:))

# getTestDiagnosisKeys(completionHandler:) (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Requests the temporary exposure keys, including the current key, used by this device for testing.

> No longer supported.

## Declaration

```swift
func getTestDiagnosisKeys(completionHandler: @escaping @Sendable ([ENTemporaryExposureKey]?, (any Error)?) -> Void)
```

```swift
func testDiagnosisKeys() async throws -> [ENTemporaryExposureKey]
```

## Parameters

- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func testDiagnosisKeys() async throws -> [ENTemporaryExposureKey]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Every time this method is called, the framework will request the user to authorize the action.

> **Warning**

>  This method is only for developers while testing, and requires a special entitlement that is not allowed in the App Store. It’s only intended for testing without needing to wait 24 hours for a key to be released.

## See Also

### Obtaining Exposure Keys

- [getDiagnosisKeys(completionHandler:)](getdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys from the user’s device to share with a server.
- [ENTemporaryExposureKey](../entemporaryexposurekey.md): Deprecated. The key used to generate rolling proximity identifiers.

# getTestDiagnosisKeysWithCompletionHandler: (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Requests the temporary exposure keys, including the current key, used by this device for testing.

> No longer supported.

## Declaration

```objectivec
- (void) getTestDiagnosisKeysWithCompletionHandler:(ENGetDiagnosisKeysHandler) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func testDiagnosisKeys() async throws -> [ENTemporaryExposureKey]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Every time this method is called, the framework will request the user to authorize the action.

> **Warning**

>  This method is only for developers while testing, and requires a special entitlement that is not allowed in the App Store. It’s only intended for testing without needing to wait 24 hours for a key to be released.

## See Also

### Obtaining Exposure Keys

- [getDiagnosisKeysWithCompletionHandler:](getdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys from the user’s device to share with a server.
- [ENTemporaryExposureKey](../entemporaryexposurekey.md): Deprecated. The key used to generate rolling proximity identifiers.
