> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequestconfiguration/requiresfelicasecureelement](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequestconfiguration/requiresfelicasecureelement)

# requiresFelicaSecureElement (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

A Boolean value that indicates whether the payment pass requires the Felica Secure Element.

## Declaration

```swift
var requiresFelicaSecureElement: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property can be used as a filter to determine which cards are shown in the [PKAddPaymentPassViewController](../pkaddpaymentpassviewcontroller.md) class’s intro screen. The property defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Filtering pass libraries

- [paymentNetwork](paymentnetwork.md): The payment network.
- [primaryAccountIdentifier](primaryaccountidentifier.md): A primary account identifier, used to filter out pass libraries.

# requiresFelicaSecureElement (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

A Boolean value that indicates whether the payment pass requires the Felica Secure Element.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL requiresFelicaSecureElement;
```

<a id="Discussion"></a>

## Discussion

This property can be used as a filter to determine which cards are shown in the [PKAddPaymentPassViewController](../pkaddpaymentpassviewcontroller.md) class’s intro screen. The property defaults to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Filtering pass libraries

- [paymentNetwork](paymentnetwork.md): The payment network.
- [primaryAccountIdentifier](primaryaccountidentifier.md): A primary account identifier, used to filter out pass libraries.
