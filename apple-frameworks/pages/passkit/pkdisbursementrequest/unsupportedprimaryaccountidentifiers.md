> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/unsupportedprimaryaccountidentifiers](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/unsupportedprimaryaccountidentifiers)

# unsupportedPrimaryAccountIdentifiers (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An array of Apple Pay cards to exclude from payment.

## Declaration

```swift
var unsupportedPrimaryAccountIdentifiers: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to exclude Apple Pay cards you’ve issued from being used as a payment option by adding the [primaryAccountIdentifier](../pksecureelementpass/primaryaccountidentifier.md) of the cards you want disallowed. For example, if a person is topping up a stored value card, you can exclude the Apple Pay card being topped up from the payment options.

# unsupportedPrimaryAccountIdentifiers (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An array of Apple Pay cards to exclude from payment.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * unsupportedPrimaryAccountIdentifiers;
```

<a id="Discussion"></a>

## Discussion

Use this property to exclude Apple Pay cards you’ve issued from being used as a payment option by adding the [primaryAccountIdentifier](../pksecureelementpass/primaryaccountidentifier.md) of the cards you want disallowed. For example, if a person is topping up a stored value card, you can exclude the Apple Pay card being topped up from the payment options.
