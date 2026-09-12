> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkshippingtype](https://developer.apple.com/documentation/passkit/pkshippingtype)

# PKShippingType (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A complete list of valid shipping types.

## Declaration

```swift
enum PKShippingType
```

## Topics

### Constants

- [PKShippingType.shipping](pkshippingtype/shipping.md): Shipping the purchase to the provided address using a third-party shipping company. This is the default shipping type.
- [PKShippingType.delivery](pkshippingtype/delivery.md): Delivering the purchase by the seller (for example, pizza, flower, or furniture delivery).
- [PKShippingType.storePickup](pkshippingtype/storepickup.md): Store pickup of the purchase from the seller’s store.
- [PKShippingType.servicePickup](pkshippingtype/servicepickup.md): Picking up an item from the provided address by the service (for example, transportation or shipping services that provide home pickup).

### Initializers

- [init(rawValue:)](pkshippingtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the shipping methods and types

- [Displaying a Read-Only Pickup Address](displaying-a-read-only-pickup-address.md): Configure a payment request to display a read-only pickup address on the payment sheet.
- [shippingMethods](pkpaymentrequest/shippingmethods.md): An array of shipping method objects that describe the supported shipping methods.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](pkpaymentrequest/shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingContactEditingMode](pkshippingcontacteditingmode.md): Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.

# PKShippingType (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A complete list of valid shipping types.

## Declaration

```objectivec
enum PKShippingType : NSUInteger;
```

## Topics

### Constants

- [PKShippingTypeShipping](pkshippingtype/shipping.md): Shipping the purchase to the provided address using a third-party shipping company. This is the default shipping type.
- [PKShippingTypeDelivery](pkshippingtype/delivery.md): Delivering the purchase by the seller (for example, pizza, flower, or furniture delivery).
- [PKShippingTypeStorePickup](pkshippingtype/storepickup.md): Store pickup of the purchase from the seller’s store.
- [PKShippingTypeServicePickup](pkshippingtype/servicepickup.md): Picking up an item from the provided address by the service (for example, transportation or shipping services that provide home pickup).

## See Also

### Setting the shipping methods and types

- [Displaying a Read-Only Pickup Address](displaying-a-read-only-pickup-address.md): Configure a payment request to display a read-only pickup address on the payment sheet.
- [shippingMethods](pkpaymentrequest/shippingmethods.md): An array of shipping method objects that describe the supported shipping methods.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](pkpaymentrequest/shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingContactEditingMode](pkshippingcontacteditingmode.md): Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.
