> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequestconfiguration/primaryaccountidentifier](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequestconfiguration/primaryaccountidentifier)

# primaryAccountIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

A primary account identifier, used to filter out pass libraries.

## Declaration

```swift
var primaryAccountIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Users may have different passes installed on different paired devices (for example, on an iPhone and an Apple Watch). This property lets you filter out the devices that already contain a matching pass.

## See Also

### Filtering pass libraries

- [paymentNetwork](paymentnetwork.md): The payment network.
- [requiresFelicaSecureElement](requiresfelicasecureelement.md): A Boolean value that indicates whether the payment pass requires the Felica Secure Element.

# primaryAccountIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

A primary account identifier, used to filter out pass libraries.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * primaryAccountIdentifier;
```

<a id="Discussion"></a>

## Discussion

Users may have different passes installed on different paired devices (for example, on an iPhone and an Apple Watch). This property lets you filter out the devices that already contain a matching pass.

## See Also

### Filtering pass libraries

- [paymentNetwork](paymentnetwork.md): The payment network.
- [requiresFelicaSecureElement](requiresfelicasecureelement.md): A Boolean value that indicates whether the payment pass requires the Felica Secure Element.
