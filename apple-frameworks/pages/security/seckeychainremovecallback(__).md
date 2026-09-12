> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainremovecallback(_:)](https://developer.apple.com/documentation/security/seckeychainremovecallback(_:))

# SecKeychainRemoveCallback(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Unregisters your keychain event callback function.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainRemoveCallback(_ callbackFunction: SecKeychainCallback) -> OSStatus
```

## Parameters

- `callbackFunction`: The callback function pointer to remove.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Once removed, keychain events are not sent to the owner of the callback.

# SecKeychainRemoveCallback (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Unregisters your keychain event callback function.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainRemoveCallback(SecKeychainCallback callbackFunction);
```

## Parameters

- `callbackFunction`: The callback function pointer to remove.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Once removed, keychain events are not sent to the owner of the callback.
