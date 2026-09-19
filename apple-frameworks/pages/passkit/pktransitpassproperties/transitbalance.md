> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pktransitpassproperties/transitbalance

# transitBalance (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ (deprecated in 15.0) · iPadOS 11.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.3+ (deprecated in 8.0)

The current usable stored value on the transit card.

## Declaration

```swift
@NSCopying var transitBalance: NSDecimalNumber { get }
```

## See Also

### Getting balance information

- [transitBalanceCurrencyCode](transitbalancecurrencycode.md): Deprecated. The currency code associated with the balance on the pass.

# transitBalance (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ (deprecated in 15.0) · iPadOS 11.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.3+ (deprecated in 8.0)

The current usable stored value on the transit card.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDecimalNumber * transitBalance;
```

## See Also

### Getting balance information

- [transitBalanceCurrencyCode](transitbalancecurrencycode.md): Deprecated. The currency code associated with the balance on the pass.
