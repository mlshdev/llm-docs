> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccount/accountnumber](https://developer.apple.com/documentation/intents/inpaymentaccount/accountnumber)

# accountNumber (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A string to help the user differentiate between similar accounts.

## Declaration

```swift
var accountNumber: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a string that helps identify the account to the user. Typically, this property contains a portion of the user’s account number, often in an obscured format such as `****1234`. When resolving an account requires disambiguation from among several values, display this string to the user to help identify each account.

## See Also

### Getting the Account Details

- [nickname](nickname.md): A user-defined name that identifies the account.
- [organizationName](organizationname.md): The name of the organization that supplies the account to the user.
- [accountType](accounttype.md): The type of the account.
- [INAccountType](../inaccounttype.md): Constants indicating the type of account involved in a financial transaction.

# accountNumber (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A string to help the user differentiate between similar accounts.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * accountNumber;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * accountNumber;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a string that helps identify the account to the user. Typically, this property contains a portion of the user’s account number, often in an obscured format such as `****1234`. When resolving an account requires disambiguation from among several values, display this string to the user to help identify each account.

## See Also

### Getting the Account Details

- [nickname](nickname.md): A user-defined name that identifies the account.
- [organizationName](organizationname.md): The name of the organization that supplies the account to the user.
- [accountType](accounttype.md): The type of the account.
- [INAccountType](../inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
