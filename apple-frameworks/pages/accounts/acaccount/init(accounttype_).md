> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccount/init(accounttype:)](https://developer.apple.com/documentation/accounts/acaccount/init(accounttype:))

# init(accountType:) (Swift)

**Framework:** Accounts  
**Kind:** Initializer  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Initializes a new account of the specified type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
init!(accountType type: ACAccountType!)
```

## Parameters

- `type`: The type of this account.

<a id="return-value"></a>

## Return Value

The newly initialized account.

# initWithAccountType: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Initializes a new account of the specified type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (instancetype) initWithAccountType:(ACAccountType *) type;
```

## Parameters

- `type`: The type of this account.

<a id="return-value"></a>

## Return Value

The newly initialized account.
