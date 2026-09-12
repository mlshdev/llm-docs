> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintentresponse/toaccount](https://developer.apple.com/documentation/intents/intransfermoneyintentresponse/toaccount)

# toAccount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The user account receiving the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var toAccount: INPaymentAccount? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details about the account to transfer funds to. Siri may display the information in this object to the user at appropriate times.

## See Also

### Providing the Account Information

- [fromAccount](fromaccount.md): Deprecated. The user account providing the funds.

# toAccount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The user account receiving the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INPaymentAccount * toAccount;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INPaymentAccount * toAccount;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details about the account to transfer funds to. Siri may display the information in this object to the user at appropriate times.

## See Also

### Providing the Account Information

- [fromAccount](fromaccount.md): Deprecated. The user account providing the funds.
