> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccount/nickname](https://developer.apple.com/documentation/intents/inpaymentaccount/nickname)

# nickname (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A user-defined name that identifies the account.

## Declaration

```swift
@NSCopying var nickname: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

A nickname is any string used to identify the account uniquely in your app. Ideally, your app should let users specify custom nicknames for their accounts. For example, the user might assign the nickname “business credit card” to the card they use to pay business-related expenses. When a nickname is present, use it to look up the account in your app.

## See Also

### Getting the Account Details

- [organizationName](organizationname.md): The name of the organization that supplies the account to the user.
- [accountType](accounttype.md): The type of the account.
- [INAccountType](../inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [accountNumber](accountnumber.md): A string to help the user differentiate between similar accounts.

# nickname (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A user-defined name that identifies the account.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * nickname;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * nickname;
```

<a id="Discussion"></a>

## Discussion

A nickname is any string used to identify the account uniquely in your app. Ideally, your app should let users specify custom nicknames for their accounts. For example, the user might assign the nickname “business credit card” to the card they use to pay business-related expenses. When a nickname is present, use it to look up the account in your app.

## See Also

### Getting the Account Details

- [organizationName](organizationname.md): The name of the organization that supplies the account to the user.
- [accountType](accounttype.md): The type of the account.
- [INAccountType](../inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [accountNumber](accountnumber.md): A string to help the user differentiate between similar accounts.
