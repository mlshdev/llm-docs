> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skrequestdelegate/request(_:didfailwitherror:)](https://developer.apple.com/documentation/storekit/skrequestdelegate/request(_:didfailwitherror:))

# request(\_:didFailWithError:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the delegate that the request failed to execute.

> No longer supported.

## Declaration

```swift
optional func request(_ request: SKRequest, didFailWithError error: any Error)
```

## Parameters

- `request`: The request that failed.
- `error`: The error that caused the request to fail.

## Mentioned In

- [Handling errors](../handling-errors.md)

<a id="Discussion"></a>

## Discussion

When the request fails, your application should release the request. The [requestDidFinish(\_:)](requestdidfinish%28__%29.md) method is not called after this method is called.

# request:didFailWithError: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the delegate that the request failed to execute.

> No longer supported.

## Declaration

```objectivec
- (void) request:(SKRequest *) request didFailWithError:(NSError *) error;
```

## Parameters

- `request`: The request that failed.
- `error`: The error that caused the request to fail.

## Mentioned In

- [Handling errors](../handling-errors.md)

<a id="Discussion"></a>

## Discussion

When the request fails, your application should release the request. The [requestDidFinish:](requestdidfinish%28__%29.md) method is not called after this method is called.
