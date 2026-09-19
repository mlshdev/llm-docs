> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inpaymentaccount/accounttype

# accountType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The type of the account.

## Declaration

```swift
var accountType: INAccountType { get }
```

<a id="Discussion"></a>

## Discussion

Use this property as needed to determine the type of the account. For example, you might need to handle transactions differently based on their type.

## See Also

### Getting the Account Details

- [nickname](nickname.md): A user-defined name that identifies the account.
- [organizationName](organizationname.md): The name of the organization that supplies the account to the user.
- [INAccountType](../inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [accountNumber](accountnumber.md): A string to help the user differentiate between similar accounts.

# accountType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The type of the account.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INAccountType accountType;
```

```objectivec
@property (atomic, assign, readonly) INAccountType accountType;
```

<a id="Discussion"></a>

## Discussion

Use this property as needed to determine the type of the account. For example, you might need to handle transactions differently based on their type.

## See Also

### Getting the Account Details

- [nickname](nickname.md): A user-defined name that identifies the account.
- [organizationName](organizationname.md): The name of the organization that supplies the account to the user.
- [INAccountType](../inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [accountNumber](accountnumber.md): A string to help the user differentiate between similar accounts.
