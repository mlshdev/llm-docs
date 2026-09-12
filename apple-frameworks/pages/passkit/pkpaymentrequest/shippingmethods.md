> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/shippingmethods](https://developer.apple.com/documentation/passkit/pkpaymentrequest/shippingmethods)

# shippingMethods (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An array of shipping method objects that describe the supported shipping methods.

## Declaration

```swift
var shippingMethods: [PKShippingMethod]? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. See the following example.

Setting the shipping methods:

```objc
NSDecimalNumber *freeAmount = [NSDecimalNumber decimalNumberWithString:@"0.00"];
PKShippingMethod *freeShipping = [PKShippingMethod summaryItemWithLabel:@"Free Shipping" amount:freeAmount];
freeShipping.detail = @"Arrives by July 2";
freeShipping.identifier = @"free";
 
NSDecimalNumber *standardAmount = [NSDecimalNumber decimalNumberWithString:@"3.21"];
PKShippingMethod *standardShipping = [PKShippingMethod summaryItemWithLabel:@"Standard Shipping" amount:standardAmount];
standardShipping.detail = @"Arrives by June 29";
standardShipping.identifier = @"standard";
 
NSDecimalNumber *expressAmount = [NSDecimalNumber decimalNumberWithString:@"24.63"];
PKShippingMethod *expressShipping = [PKShippingMethod summaryItemWithLabel:@"Express Shipping" amount:expressAmount];
expressShipping.detail = @"Ships within 24 hours";
expressShipping.identifier = @"express";
 
paymentRequest.shippingMethods = @[freeShipping, standardShipping, expressShipping];
```

## See Also

### Setting the shipping methods and types

- [Displaying a Read-Only Pickup Address](../displaying-a-read-only-pickup-address.md): Configure a payment request to display a read-only pickup address on the payment sheet.
- [PKShippingMethod](../pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingType](../pkshippingtype.md): A complete list of valid shipping types.
- [PKShippingContactEditingMode](../pkshippingcontacteditingmode.md): Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.

# shippingMethods (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An array of shipping method objects that describe the supported shipping methods.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<PKShippingMethod *> * shippingMethods;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. See the following example.

Setting the shipping methods:

```objc
NSDecimalNumber *freeAmount = [NSDecimalNumber decimalNumberWithString:@"0.00"];
PKShippingMethod *freeShipping = [PKShippingMethod summaryItemWithLabel:@"Free Shipping" amount:freeAmount];
freeShipping.detail = @"Arrives by July 2";
freeShipping.identifier = @"free";
 
NSDecimalNumber *standardAmount = [NSDecimalNumber decimalNumberWithString:@"3.21"];
PKShippingMethod *standardShipping = [PKShippingMethod summaryItemWithLabel:@"Standard Shipping" amount:standardAmount];
standardShipping.detail = @"Arrives by June 29";
standardShipping.identifier = @"standard";
 
NSDecimalNumber *expressAmount = [NSDecimalNumber decimalNumberWithString:@"24.63"];
PKShippingMethod *expressShipping = [PKShippingMethod summaryItemWithLabel:@"Express Shipping" amount:expressAmount];
expressShipping.detail = @"Ships within 24 hours";
expressShipping.identifier = @"express";
 
paymentRequest.shippingMethods = @[freeShipping, standardShipping, expressShipping];
```

## See Also

### Setting the shipping methods and types

- [Displaying a Read-Only Pickup Address](../displaying-a-read-only-pickup-address.md): Configure a payment request to display a read-only pickup address on the payment sheet.
- [PKShippingMethod](../pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingType](../pkshippingtype.md): A complete list of valid shipping types.
- [PKShippingContactEditingMode](../pkshippingcontacteditingmode.md): Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.
