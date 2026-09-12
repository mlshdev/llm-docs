> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestupdate/shippingmethods](https://developer.apple.com/documentation/passkit/pkpaymentrequestupdate/shippingmethods)

# shippingMethods (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The list of shipping methods available for a payment request.

## Declaration

```swift
var shippingMethods: [PKShippingMethod] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is an empty array that indicates there’s no update to the shipping methods.

# shippingMethods (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The list of shipping methods available for a payment request.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<PKShippingMethod *> * shippingMethods;
```

<a id="Discussion"></a>

## Discussion

The default value is an empty array that indicates there’s no update to the shipping methods.
