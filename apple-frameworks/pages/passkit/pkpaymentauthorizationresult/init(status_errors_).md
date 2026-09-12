> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationresult/init(status:errors:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationresult/init(status:errors:))

# init(status:errors:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes the result with the status code and list of errors.

## Declaration

```swift
init(status: PKPaymentAuthorizationStatus, errors: [any Error]?)
```

## Parameters

- `status`: The status of the payment.
- `errors`: Any errors returned from the authorization status.

# initWithStatus:errors: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes the result with the status code and list of errors.

## Declaration

```objectivec
- (instancetype) initWithStatus:(PKPaymentAuthorizationStatus) status errors:(NSArray<NSError *> *) errors;
```

## Parameters

- `status`: The status of the payment.
- `errors`: Any errors returned from the authorization status.
