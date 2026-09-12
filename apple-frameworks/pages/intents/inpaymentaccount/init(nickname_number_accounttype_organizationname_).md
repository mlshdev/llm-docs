> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccount/init(nickname:number:accounttype:organizationname:)](https://developer.apple.com/documentation/intents/inpaymentaccount/init(nickname:number:accounttype:organizationname:))

# init(nickname:number:accountType:organizationName:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ (deprecated in 11.0) · iPadOS 10.3+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Initializes a payment account object with the specified account information.

> Use [init(nickname:number:accountType:organizationName:balance:secondaryBalance:)](init%28nickname_number_accounttype_organizationname_balance_secondarybalance_%29.md) instead.

## Declaration

```swift
convenience init?(nickname: INSpeakableString, number: String?, accountType: INAccountType, organizationName: INSpeakableString?)
```

## Parameters

- `nickname`: A user-defined name that identifies the account in your app. Never include account numbers or other potentially sensitive user information in this parameter.
- `number`: A string to help the user differentiate between similar accounts. Typically, you use this parameter to specify only the last few digits of the user’s account. Never specify the user’s full account number.
- `accountType`: The type of the account. Typical account types include checking accounts, savings accounts, credit accounts, and many others. For a complete list, see [INAccountType](../inaccounttype.md).
- `organizationName`: The organization that provides the account for the user. For example, this parameter might contain the name of the user’s bank. Never include account numbers or other potentially sensitive user information in this parameter.

<a id="return-value"></a>

## Return Value

An initialized [INPaymentAccount](../inpaymentaccount.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create payment accounts associated with the user.

## See Also

### Initializing the Payment Account

- [init(nickname:number:accountType:organizationName:balance:secondaryBalance:)](init%28nickname_number_accounttype_organizationname_balance_secondarybalance_%29.md): Initializes a payment account object with the specified account information.

# initWithNickname:number:accountType:organizationName: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 11.0) · iPadOS 10.3+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Initializes a payment account object with the specified account information.

> Use [initWithNickname:number:accountType:organizationName:balance:secondaryBalance:](init%28nickname_number_accounttype_organizationname_balance_secondarybalance_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithNickname:(INSpeakableString *) nickname number:(NSString *) number accountType:(INAccountType) accountType organizationName:(INSpeakableString *) organizationName;
```

## Parameters

- `nickname`: A user-defined name that identifies the account in your app. Never include account numbers or other potentially sensitive user information in this parameter.
- `number`: A string to help the user differentiate between similar accounts. Typically, you use this parameter to specify only the last few digits of the user’s account. Never specify the user’s full account number.
- `accountType`: The type of the account. Typical account types include checking accounts, savings accounts, credit accounts, and many others. For a complete list, see [INAccountType](../inaccounttype.md).
- `organizationName`: The organization that provides the account for the user. For example, this parameter might contain the name of the user’s bank. Never include account numbers or other potentially sensitive user information in this parameter.

<a id="return-value"></a>

## Return Value

An initialized [INPaymentAccount](../inpaymentaccount.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create payment accounts associated with the user.

## See Also

### Initializing the Payment Account

- [initWithNickname:number:accountType:organizationName:balance:secondaryBalance:](init%28nickname_number_accounttype_organizationname_balance_secondarybalance_%29.md): Initializes a payment account object with the specified account information.
