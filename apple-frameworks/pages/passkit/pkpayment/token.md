> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpayment/token](https://developer.apple.com/documentation/passkit/pkpayment/token)

# token (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The encrypted payment information.

## Declaration

```swift
var token: PKPaymentToken { get }
```

<a id="Discussion"></a>

## Discussion

For more information about the payment data structure, see [Payment token format reference](../payment-token-format-reference.md).

## See Also

### Working with the payment token

- [PKPaymentToken](../pkpaymenttoken.md): Contains the user’s payment credentials.

# token (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The encrypted payment information.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) PKPaymentToken * token;
```

<a id="Discussion"></a>

## Discussion

For more information about the payment data structure, see [Payment token format reference](../payment-token-format-reference.md).

## See Also

### Working with the payment token

- [PKPaymentToken](../pkpaymenttoken.md): Contains the user’s payment credentials.
