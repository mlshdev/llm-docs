> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skrequestdelegate](https://developer.apple.com/documentation/storekit/skrequestdelegate)

# SKRequestDelegate (Swift)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Common methods that are implemented by delegates for any subclass of the `SKRequest` abstract class.

> No longer supported.

## Declaration

```swift
protocol SKRequestDelegate : NSObjectProtocol
```

## Topics

### Completing Requests

- [requestDidFinish(\_:)](skrequestdelegate/requestdidfinish%28__%29.md): Deprecated. Tells the delegate that the request has completed.

### Handling Errors

- [request(\_:didFailWithError:)](skrequestdelegate/request%28__didfailwitherror_%29.md): Deprecated. Tells the delegate that the request failed to execute.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [SKProductsRequestDelegate](skproductsrequestdelegate.md)

## See Also

### Accessing the Delegate

- [delegate](skrequest/delegate.md): Deprecated. The delegate of the request object.

# SKRequestDelegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Common methods that are implemented by delegates for any subclass of the `SKRequest` abstract class.

> No longer supported.

## Declaration

```objectivec
@protocol SKRequestDelegate <NSObject>
```

## Topics

### Completing Requests

- [requestDidFinish:](skrequestdelegate/requestdidfinish%28__%29.md): Deprecated. Tells the delegate that the request has completed.

### Handling Errors

- [request:didFailWithError:](skrequestdelegate/request%28__didfailwitherror_%29.md): Deprecated. Tells the delegate that the request failed to execute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [SKProductsRequestDelegate](skproductsrequestdelegate.md)

## See Also

### Accessing the Delegate

- [delegate](skrequest/delegate.md): Deprecated. The delegate of the request object.
