> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintent/paymentmethod](https://developer.apple.com/documentation/intents/inrequestrideintent/paymentmethod)

# paymentMethod (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s requested payment method.

## Declaration

```swift
@NSCopying var paymentMethod: INPaymentMethod? { get }
```

<a id="Discussion"></a>

## Discussion

If the user requests a specific payment method, this property contains that method. When processing payments later, you use the requested payment method to determine how to apply charges for the ride. You are responsible for handling and settling all financial transactions between your service and the user.

# paymentMethod (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s requested payment method.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPaymentMethod * paymentMethod;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPaymentMethod * paymentMethod;
```

<a id="Discussion"></a>

## Discussion

If the user requests a specific payment method, this property contains that method. When processing payments later, you use the requested payment method to determine how to apply charges for the ride. You are responsible for handling and settling all financial transactions between your service and the user.
