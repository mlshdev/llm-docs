> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/applicationdata](https://developer.apple.com/documentation/passkit/pkpaymentrequest/applicationdata)

# applicationData (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Application-specific data or state.

## Declaration

```swift
var applicationData: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property for additional data as may be appropriate for your app—for example, a shopping cart identifier or an order number.

A hash of this data is included in the signed payment data (the [paymentData](../pkpaymenttoken/paymentdata.md) property of [PKPaymentToken](../pkpaymenttoken.md)). You are responsible for sending the full application data to your server, if needed.

# applicationData (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Application-specific data or state.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * applicationData;
```

<a id="Discussion"></a>

## Discussion

Use this property for additional data as may be appropriate for your app—for example, a shopping cart identifier or an order number.

A hash of this data is included in the signed payment data (the [paymentData](../pkpaymenttoken/paymentdata.md) property of [PKPaymentToken](../pkpaymenttoken.md)). You are responsible for sending the full application data to your server, if needed.
