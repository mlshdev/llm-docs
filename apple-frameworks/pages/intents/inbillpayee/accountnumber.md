> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayee/accountnumber](https://developer.apple.com/documentation/intents/inbillpayee/accountnumber)

# accountNumber (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A string to help the user differentiate between similar accounts.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var accountNumber: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a string that helps identify the payee to the user. Typically, this property contains a portion of the user’s account number with the payee, often in an obscured format such as `****123`. When resolving a payee requires disambiguation from among several values, you can display this string to the user to help identify each account.

## See Also

### Getting the Payee Details

- [nickname](nickname.md): Deprecated. A user-defined name that identifies a bill-payment account in your app.
- [organizationName](organizationname.md): Deprecated. The name of the company that provides services to the user.

# accountNumber (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A string to help the user differentiate between similar accounts.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * accountNumber;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * accountNumber;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a string that helps identify the payee to the user. Typically, this property contains a portion of the user’s account number with the payee, often in an obscured format such as `****123`. When resolving a payee requires disambiguation from among several values, you can display this string to the user to help identify each account.

## See Also

### Getting the Payee Details

- [nickname](nickname.md): Deprecated. A user-defined name that identifies a bill-payment account in your app.
- [organizationName](organizationname.md): Deprecated. The name of the company that provides services to the user.
