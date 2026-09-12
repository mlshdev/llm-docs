> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/default()](https://developer.apple.com/documentation/storekit/skpaymentqueue/default())

# default() (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Returns the default payment queue instance.

> No longer supported.

## Declaration

```swift
class func `default`() -> Self
```

<a id="return-value"></a>

## Return Value

The default payment queue.

<a id="Discussion"></a>

## Discussion

Apps do not create a payment queue. Instead, they retrieve the  queue by calling this class method.

<a id="Special-Considerations"></a>

### Special Considerations

The payment queue is not available in Simulator. Attempting to retrieve the payment queue logs a warning.

# defaultQueue (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Returns the default payment queue instance.

> No longer supported.

## Declaration

```objectivec
+ (instancetype) defaultQueue;
```

<a id="return-value"></a>

## Return Value

The default payment queue.

<a id="Discussion"></a>

## Discussion

Apps do not create a payment queue. Instead, they retrieve the  queue by calling this class method.

<a id="Special-Considerations"></a>

### Special Considerations

The payment queue is not available in Simulator. Attempting to retrieve the payment queue logs a warning.
