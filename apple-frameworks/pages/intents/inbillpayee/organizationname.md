> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayee/organizationname](https://developer.apple.com/documentation/intents/inbillpayee/organizationname)

# organizationName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The name of the company that provides services to the user.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var organizationName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the actual name of the organization that provides services to the user and supports bill payment through your app. The organization name might refer to the name of a specific company or group that provides services. When the user specifies the organization name, instead of the account nickname, use this value to locate the corresponding account in your app.

> **Note**

>  In your app, don’t include account numbers or other potentially sensitive user information in organization names.

## See Also

### Getting the Payee Details

- [nickname](nickname.md): Deprecated. A user-defined name that identifies a bill-payment account in your app.
- [accountNumber](accountnumber.md): Deprecated. A string to help the user differentiate between similar accounts.

# organizationName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The name of the company that provides services to the user.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * organizationName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * organizationName;
```

<a id="Discussion"></a>

## Discussion

This property represents the actual name of the organization that provides services to the user and supports bill payment through your app. The organization name might refer to the name of a specific company or group that provides services. When the user specifies the organization name, instead of the account nickname, use this value to locate the corresponding account in your app.

> **Note**

>  In your app, don’t include account numbers or other potentially sensitive user information in organization names.

## See Also

### Getting the Payee Details

- [nickname](nickname.md): Deprecated. A user-defined name that identifies a bill-payment account in your app.
- [accountNumber](accountnumber.md): Deprecated. A string to help the user differentiate between similar accounts.
