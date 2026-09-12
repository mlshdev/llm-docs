> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/availablenetworks()](https://developer.apple.com/documentation/passkit/pkpaymentrequest/availablenetworks())

# availableNetworks() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the list of available payment methods that Apple Pay supports.

## Declaration

```swift
class func availableNetworks() -> [PKPaymentNetwork]
```

<a id="return-value"></a>

## Return Value

An array of strings representing the available payment networks. For a list of possible networks, see [PKPaymentNetwork](../pkpaymentnetwork.md).

<a id="Discussion"></a>

## Discussion

To dynamically select the payment networks at runtime, use this method to get the complete list of currently supported networks. You can then filter this list, as needed, and assign the results to the payment request’s [supportedNetworks](supportednetworks.md) property.

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

### Selecting the payment networks

- [supportedNetworks](supportednetworks.md): The payment methods that you support.
- [PKPaymentNetwork](../pkpaymentnetwork.md): A type that represents a payment method.

# availableNetworks (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the list of available payment methods that Apple Pay supports.

## Declaration

```objectivec
+ (NSArray<NSString *> *) availableNetworks;
```

<a id="return-value"></a>

## Return Value

An array of strings representing the available payment networks. For a list of possible networks, see [PKPaymentNetwork](../pkpaymentnetwork.md).

<a id="Discussion"></a>

## Discussion

To dynamically select the payment networks at runtime, use this method to get the complete list of currently supported networks. You can then filter this list, as needed, and assign the results to the payment request’s [supportedNetworks](supportednetworks.md) property.

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

### Selecting the payment networks

- [supportedNetworks](supportednetworks.md): The payment methods that you support.
- [PKPaymentNetwork](../pkpaymentnetwork.md): A type that represents a payment method.
