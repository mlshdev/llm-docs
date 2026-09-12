> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintent/toaccount](https://developer.apple.com/documentation/intents/intransfermoneyintent/toaccount)

# toAccount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The account receiving the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var toAccount: INPaymentAccount? { get }
```

## See Also

### Getting the Account Information

- [fromAccount](fromaccount.md): Deprecated. The account containing the funds to transfer.

# toAccount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The account receiving the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPaymentAccount * toAccount;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPaymentAccount * toAccount;
```

## See Also

### Getting the Account Information

- [fromAccount](fromaccount.md): Deprecated. The account containing the funds to transfer.
