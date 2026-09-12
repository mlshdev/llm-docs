> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccount/organizationname](https://developer.apple.com/documentation/intents/inpaymentaccount/organizationname)

# organizationName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The name of the organization that supplies the account to the user.

## Declaration

```swift
@NSCopying var organizationName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the name of the bank or company that holds the user’s account. When the organization name is present, use it to look up the account in your app.

## See Also

### Getting the Account Details

- [nickname](nickname.md): A user-defined name that identifies the account.
- [accountType](accounttype.md): The type of the account.
- [INAccountType](../inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [accountNumber](accountnumber.md): A string to help the user differentiate between similar accounts.

# organizationName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The name of the organization that supplies the account to the user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * organizationName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * organizationName;
```

<a id="Discussion"></a>

## Discussion

This property contains the name of the bank or company that holds the user’s account. When the organization name is present, use it to look up the account in your app.

## See Also

### Getting the Account Details

- [nickname](nickname.md): A user-defined name that identifies the account.
- [accountType](accounttype.md): The type of the account.
- [INAccountType](../inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [accountNumber](accountnumber.md): A string to help the user differentiate between similar accounts.
