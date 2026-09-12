> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassviewcontroller/init(requestconfiguration:delegate:)](https://developer.apple.com/documentation/passkit/pkaddpaymentpassviewcontroller/init(requestconfiguration:delegate:))

# init(requestConfiguration:delegate:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an initialized add payment view controller object, using the provided configuration and delegate.

## Declaration

```swift
init?(requestConfiguration configuration: PKAddPaymentPassRequestConfiguration, delegate: (any PKAddPaymentPassViewControllerDelegate)?)
```

## Parameters

- `configuration`: A configuration object that defines the view controller’s appearance.
- `delegate`: The add payment view controller’s delegate.

<a id="return-value"></a>

## Return Value

A newly initialized add payment view controller.

<a id="Discussion"></a>

## Discussion

Adding payment passes requires a special entitlement issued by Apple. If your app does not include this entitlement, this method returns `nil`. For more information on requesting this entitlement, see the Card Issuers section on [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Creating an add-payment-pass view controller

- [PKAddPaymentPassRequestConfiguration](../pkaddpaymentpassrequestconfiguration.md): Contains the configuration data for a view controller that lets the user add a payment pass.

# initWithRequestConfiguration:delegate: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an initialized add payment view controller object, using the provided configuration and delegate.

## Declaration

```objectivec
- (instancetype) initWithRequestConfiguration:(PKAddPaymentPassRequestConfiguration *) configuration delegate:(id<PKAddPaymentPassViewControllerDelegate>) delegate;
```

## Parameters

- `configuration`: A configuration object that defines the view controller’s appearance.
- `delegate`: The add payment view controller’s delegate.

<a id="return-value"></a>

## Return Value

A newly initialized add payment view controller.

<a id="Discussion"></a>

## Discussion

Adding payment passes requires a special entitlement issued by Apple. If your app does not include this entitlement, this method returns `nil`. For more information on requesting this entitlement, see the Card Issuers section on [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Creating an add-payment-pass view controller

- [PKAddPaymentPassRequestConfiguration](../pkaddpaymentpassrequestconfiguration.md): Contains the configuration data for a view controller that lets the user add a payment pass.
