> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsetuserinteractionallowed(_:)](https://developer.apple.com/documentation/security/seckeychainsetuserinteractionallowed(_:))

# SecKeychainSetUserInteractionAllowed(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Enables or disables the user interface for keychain services functions that automatically display a user interface.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainSetUserInteractionAllowed(_ state: Bool) -> OSStatus
```

## Parameters

- `state`: A flag that indicates whether the keychain services will display a user interface. If you pass [true](https://developer.apple.com/documentation/swift/true), user interaction is allowed. This is the default value. If [false](https://developer.apple.com/documentation/swift/false), keychain services functions that normally display a user interface will instead return an error.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Certain keychain services functions that require the presence of a keychain automatically display a *Keychain Not Found* dialog if there is none. Functions that require the keychain to be unlocked automatically display the *Unlock Keychain* dialog. The [SecKeychainSetUserInteractionAllowed(\_:)](seckeychainsetuserinteractionallowed%28__%29.md) function enables you to control whether these functions display a user interface. By default, user interaction is permitted.

If you are writing an application that must run unattended on a server, you may wish to disable the user interface so that any subsequent keychain calls that normally bring up the unlock UI will instead return immediately with an [errSecInteractionRequired](errsecinteractionrequired.md) result). In this case you must programmatically create a keychain or unlock the keychain when necessary.

<a id="Special-Considerations"></a>

### Special Considerations

If you disable user interaction before calling a Keychain Services function, be sure to reenable it when you are finished. Failure to reenable user interaction will affect other clients of the Keychain Services.

# SecKeychainSetUserInteractionAllowed (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Enables or disables the user interface for keychain services functions that automatically display a user interface.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainSetUserInteractionAllowed(Boolean state);
```

## Parameters

- `state`: A flag that indicates whether the keychain services will display a user interface. If you pass [true](https://developer.apple.com/documentation/swift/true), user interaction is allowed. This is the default value. If [false](https://developer.apple.com/documentation/swift/false), keychain services functions that normally display a user interface will instead return an error.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Certain keychain services functions that require the presence of a keychain automatically display a *Keychain Not Found* dialog if there is none. Functions that require the keychain to be unlocked automatically display the *Unlock Keychain* dialog. The [SecKeychainSetUserInteractionAllowed](seckeychainsetuserinteractionallowed%28__%29.md) function enables you to control whether these functions display a user interface. By default, user interaction is permitted.

If you are writing an application that must run unattended on a server, you may wish to disable the user interface so that any subsequent keychain calls that normally bring up the unlock UI will instead return immediately with an [errSecInteractionRequired](errsecinteractionrequired.md) result). In this case you must programmatically create a keychain or unlock the keychain when necessary.

<a id="Special-Considerations"></a>

### Special Considerations

If you disable user interaction before calling a Keychain Services function, be sure to reenable it when you are finished. Failure to reenable user interaction will affect other clients of the Keychain Services.
