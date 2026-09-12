> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/accounttype(withaccounttypeidentifier:)](https://developer.apple.com/documentation/accounts/acaccountstore/accounttype(withaccounttypeidentifier:))

# accountType(withAccountTypeIdentifier:) (Swift)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Returns an account type that matches the specified identifier.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
func accountType(withAccountTypeIdentifier typeIdentifier: String!) -> ACAccountType!
```

## Parameters

- `typeIdentifier`: The account type identifier.

<a id="return-value"></a>

## Return Value

An account type that matches `typeIdentifier`.

# accountTypeWithAccountTypeIdentifier: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Returns an account type that matches the specified identifier.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (ACAccountType *) accountTypeWithAccountTypeIdentifier:(NSString *) typeIdentifier;
```

## Parameters

- `typeIdentifier`: The account type identifier.

<a id="return-value"></a>

## Return Value

An account type that matches `typeIdentifier`.
