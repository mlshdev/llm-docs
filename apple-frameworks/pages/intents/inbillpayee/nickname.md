> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayee/nickname](https://developer.apple.com/documentation/intents/inbillpayee/nickname)

# nickname (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A user-defined name that identifies a bill-payment account in your app.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var nickname: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

You should allow your users to assign custom nicknames to the payees they configure in your app. Nicknames let the user speak more naturally when talking to Siri. For example, the user might assign the nickname “cable” to an account associated with their cable television provider. When the user identifies a bill payee by its nickname, use this value to locate the corresponding account in your app.

> **Note**

>  In your app, don’t let the user include account numbers or other potentially sensitive information in account nicknames.

## See Also

### Getting the Payee Details

- [organizationName](organizationname.md): Deprecated. The name of the company that provides services to the user.
- [accountNumber](accountnumber.md): Deprecated. A string to help the user differentiate between similar accounts.

# nickname (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A user-defined name that identifies a bill-payment account in your app.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * nickname;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * nickname;
```

<a id="Discussion"></a>

## Discussion

You should allow your users to assign custom nicknames to the payees they configure in your app. Nicknames let the user speak more naturally when talking to Siri. For example, the user might assign the nickname “cable” to an account associated with their cable television provider. When the user identifies a bill payee by its nickname, use this value to locate the corresponding account in your app.

> **Note**

>  In your app, don’t let the user include account numbers or other potentially sensitive information in account nicknames.

## See Also

### Getting the Payee Details

- [organizationName](organizationname.md): Deprecated. The name of the company that provides services to the user.
- [accountNumber](accountnumber.md): Deprecated. A string to help the user differentiate between similar accounts.
