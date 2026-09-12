> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkshippingcontacteditingmode](https://developer.apple.com/documentation/passkit/pkshippingcontacteditingmode)

# PKShippingContactEditingMode (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.

## Declaration

```swift
enum PKShippingContactEditingMode
```

## Topics

### Reading the editing mode

- [PKShippingContactEditingMode.available](pkshippingcontacteditingmode/available.md): The value that indicates Apple Pay Later is available.
- [PKShippingContactEditingMode.storePickup](pkshippingcontacteditingmode/storepickup.md): The shipping contact on the payment sheet represents a pickup address and isn’t editable by the user.

### Initializers

- [init(rawValue:)](pkshippingcontacteditingmode/init%28rawvalue_%29.md)

### Type Properties

- [enabled](pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.

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
- [PKShippingType](pkshippingtype.md): A complete list of valid shipping types.

# PKShippingContactEditingMode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.

## Declaration

```objectivec
enum PKShippingContactEditingMode : NSUInteger;
```

## Topics

### Reading the editing mode

- [PKShippingContactEditingModeAvailable](pkshippingcontacteditingmode/available.md): The value that indicates Apple Pay Later is available.
- [PKShippingContactEditingModeStorePickup](pkshippingcontacteditingmode/storepickup.md): The shipping contact on the payment sheet represents a pickup address and isn’t editable by the user.

### Enumeration Cases

- [PKShippingContactEditingModeEnabled](pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.

## See Also

### Setting the shipping methods and types

- [Displaying a Read-Only Pickup Address](displaying-a-read-only-pickup-address.md): Configure a payment request to display a read-only pickup address on the payment sheet.
- [shippingMethods](pkpaymentrequest/shippingmethods.md): An array of shipping method objects that describe the supported shipping methods.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](pkpaymentrequest/shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingType](pkshippingtype.md): A complete list of valid shipping types.
