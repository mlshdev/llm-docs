> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintentresponse/paymentrecord](https://developer.apple.com/documentation/intents/insendpaymentintentresponse/paymentrecord)

# paymentRecord (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The details of the payment transaction.

## Declaration

```swift
@NSCopying var paymentRecord: INPaymentRecord? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an object to this property that contains the details of the financial transaction. Include as much information as possible in the payment record.

The default value of this property is `nil`.

# paymentRecord (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The details of the payment transaction.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INPaymentRecord * paymentRecord;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INPaymentRecord * paymentRecord;
```

<a id="Discussion"></a>

## Discussion

Assign an object to this property that contains the details of the financial transaction. Include as much information as possible in the payment record.

The default value of this property is `nil`.
