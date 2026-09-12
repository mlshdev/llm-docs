> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccounttype/accessgranted](https://developer.apple.com/documentation/accounts/acaccounttype/accessgranted)

# accessGranted (Swift)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

A Boolean value indicating whether the user granted the application access to accounts of this type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
var accessGranted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the application has access to accounts of this type; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Properties

- [accountTypeDescription](accounttypedescription.md): Deprecated. A human-readable description of the account type.
- [identifier](identifier.md): Deprecated. The unique identifier for the account type.

# accessGranted (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

A Boolean value indicating whether the user granted the application access to accounts of this type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL accessGranted;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the application has access to accounts of this type; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Properties

- [accountTypeDescription](accounttypedescription.md): Deprecated. A human-readable description of the account type.
- [identifier](identifier.md): Deprecated. The unique identifier for the account type.
