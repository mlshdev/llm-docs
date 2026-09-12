> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccounttype/identifier](https://developer.apple.com/documentation/accounts/acaccounttype/identifier)

# identifier (Swift)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The unique identifier for the account type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
var identifier: String! { get }
```

<a id="Discussion"></a>

## Discussion

Possible values are described in `Account Type Identifiers`.

## See Also

### Accessing Properties

- [accessGranted](accessgranted.md): Deprecated. A Boolean value indicating whether the user granted the application access to accounts of this type.
- [accountTypeDescription](accounttypedescription.md): Deprecated. A human-readable description of the account type.

# identifier (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The unique identifier for the account type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Possible values are described in `Account Type Identifiers`.

## See Also

### Accessing Properties

- [accessGranted](accessgranted.md): Deprecated. A Boolean value indicating whether the user granted the application access to accounts of this type.
- [accountTypeDescription](accounttypedescription.md): Deprecated. A human-readable description of the account type.
