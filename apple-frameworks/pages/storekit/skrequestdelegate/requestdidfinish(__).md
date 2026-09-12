> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skrequestdelegate/requestdidfinish(_:)](https://developer.apple.com/documentation/storekit/skrequestdelegate/requestdidfinish(_:))

# requestDidFinish(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the delegate that the request has completed.

> No longer supported.

## Declaration

```swift
optional func requestDidFinish(_ request: SKRequest)
```

## Parameters

- `request`: The request that completed.

<a id="Discussion"></a>

## Discussion

This method is called after all processing of the request has been completed. Typically, subclasses of [SKRequest](../skrequest.md) require the delegate to implement additional methods to receive the response. When this method is called, your delegate receives no further communication from the request and can release it.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

# requestDidFinish: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the delegate that the request has completed.

> No longer supported.

## Declaration

```objectivec
- (void) requestDidFinish:(SKRequest *) request;
```

## Parameters

- `request`: The request that completed.

<a id="Discussion"></a>

## Discussion

This method is called after all processing of the request has been completed. Typically, subclasses of [SKRequest](../skrequest.md) require the delegate to implement additional methods to receive the response. When this method is called, your delegate receives no further communication from the request and can release it.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)
