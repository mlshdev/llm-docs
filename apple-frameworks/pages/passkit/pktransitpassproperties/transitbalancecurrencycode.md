> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pktransitpassproperties/transitbalancecurrencycode](https://developer.apple.com/documentation/passkit/pktransitpassproperties/transitbalancecurrencycode)

# transitBalanceCurrencyCode (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ (deprecated in 15.0) · iPadOS 11.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.3+ (deprecated in 8.0)

The currency code associated with the balance on the pass.

## Declaration

```swift
var transitBalanceCurrencyCode: String { get }
```

<a id="Discussion"></a>

## Discussion

Represent the currency code associated with [transitBalance](transitbalance.md) as a three-letter ISO 4217 alphabetic code. For example, US Dollars is `USD` and Japanese Yen is `JPY`.

## See Also

### Getting balance information

- [transitBalance](transitbalance.md): Deprecated. The current usable stored value on the transit card.

# transitBalanceCurrencyCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ (deprecated in 15.0) · iPadOS 11.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.3+ (deprecated in 8.0)

The currency code associated with the balance on the pass.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * transitBalanceCurrencyCode;
```

<a id="Discussion"></a>

## Discussion

Represent the currency code associated with [transitBalance](transitbalance.md) as a three-letter ISO 4217 alphabetic code. For example, US Dollars is `USD` and Japanese Yen is `JPY`.

## See Also

### Getting balance information

- [transitBalance](transitbalance.md): Deprecated. The current usable stored value on the transit card.
