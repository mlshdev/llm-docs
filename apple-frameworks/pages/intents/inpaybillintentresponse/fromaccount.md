> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponse/fromaccount](https://developer.apple.com/documentation/intents/inpaybillintentresponse/fromaccount)

# fromAccount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user account providing the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var fromAccount: INPaymentAccount? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify information about the user account used to transfer funds. Siri may display the information in this object to the user at appropriate times. It’s your responsibility to handle the transfer of any funds from the specified account.

# fromAccount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user account providing the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INPaymentAccount * fromAccount;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INPaymentAccount * fromAccount;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify information about the user account used to transfer funds. Siri may display the information in this object to the user at appropriate times. It’s your responsibility to handle the transfer of any funds from the specified account.
