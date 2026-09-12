> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkshippingmethod/identifier](https://developer.apple.com/documentation/passkit/pkshippingmethod/identifier)

# identifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A unique identifier for the shipping method, used by the app.

## Declaration

```swift
var identifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property isn’t user visible.

Use this property of the shipping method passed to your delegate in the [paymentAuthorizationViewController(\_:didSelect:completion:)](../pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_completion_%29-9otrj.md) method to identify the chosen shipping method.

## See Also

### Working with shipping methods

- [detail](detail.md): A user-readable description of the shipping method.
- [dateComponentsRange](datecomponentsrange.md): An expected range of delivery or shipping dates for a package, or the time range when an item is available for pickup.
- [PKDateComponentsRange](../pkdatecomponentsrange.md): An object that specifies the start and end dates for a range of time.

# identifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A unique identifier for the shipping method, used by the app.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

This property isn’t user visible.

Use this property of the shipping method passed to your delegate in the [paymentAuthorizationViewController:didSelectShippingMethod:completion:](../pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller%28__didselect_completion_%29-9otrj.md) method to identify the chosen shipping method.

## See Also

### Working with shipping methods

- [detail](detail.md): A user-readable description of the shipping method.
- [dateComponentsRange](datecomponentsrange.md): An expected range of delivery or shipping dates for a package, or the time range when an item is available for pickup.
- [PKDateComponentsRange](../pkdatecomponentsrange.md): An object that specifies the start and end dates for a range of time.
