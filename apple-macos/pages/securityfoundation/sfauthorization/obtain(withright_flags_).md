> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityfoundation/sfauthorization/obtain(withright:flags:)](https://developer.apple.com/documentation/securityfoundation/sfauthorization/obtain(withright:flags:))

# obtain(withRight:flags:) (Swift)

**Framework:** Security Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Authorizes and preauthorizes one specific right.

## Declaration

```swift
func obtain(withRight rightName: AuthorizationString!, flags: AuthorizationFlags) throws
```

## Parameters

- `rightName`: The name of an authorization right.
- `flags`: A bit mask for specifying authorization options. See [obtain(withRights:flags:environment:authorizedRights:)](obtain%28withrights_flags_environment_authorizedrights_%29.md) for details about possible flag values.

<a id="Return-value"></a>

## Return value

[true](https://developer.apple.com/documentation/swift/true) if operation completes successfully.

<a id="Discussion"></a>

## Discussion

Use this method to authorize or preauthorize a single right.

> **Handling Errors in Swift**

> In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Authorizing rights

- [obtain(withRights:flags:environment:authorizedRights:)](obtain%28withrights_flags_environment_authorizedrights_%29.md): Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.

# obtainWithRight:flags:error: (Objective-C)

**Framework:** Security Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Authorizes and preauthorizes one specific right.

## Declaration

```objectivec
- (BOOL) obtainWithRight:(AuthorizationString) rightName flags:(AuthorizationFlags) flags error:(NSError **) error;
```

## Parameters

- `rightName`: The name of an authorization right.
- `flags`: A bit mask for specifying authorization options. See [obtainWithRights:flags:environment:authorizedRights:error:](obtain%28withrights_flags_environment_authorizedrights_%29.md) for details about possible flag values.
- `error`: On completion, the result code returned by the method. See “Result Codes” in [Authorization Services](https://developer.apple.com/documentation/security/authorization-services).

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Return-value"></a>

## Return value

[true](https://developer.apple.com/documentation/swift/true) if operation completes successfully.

<a id="Discussion"></a>

## Discussion

Use this method to authorize or preauthorize a single right.

> **Handling Errors in Swift**

> In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Authorizing rights

- [permitWithRights:flags:environment:authorizedRights:](permitwithrights_flags_environment_authorizedrights_.md): Deprecated. Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.
- [obtainWithRights:flags:environment:authorizedRights:error:](obtain%28withrights_flags_environment_authorizedrights_%29.md): Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.
- [permitWithRight:flags:](permitwithright_flags_.md): Deprecated. Authorizes and preauthorizes one specific right.
