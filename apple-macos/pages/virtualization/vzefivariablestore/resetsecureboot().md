> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/resetsecureboot()](https://developer.apple.com/documentation/virtualization/vzefivariablestore/resetsecureboot())

# resetSecureBoot() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Clears any previously applied Secure Boot configuration and disables Secure Boot.

## Declaration

```swift
func resetSecureBoot() throws
```

<a id="discussion"></a>

## Discussion

This operation clears any previously applied Secure Boot configuration, sets the “SetupMode” global variable to `1`, and disables Secure Boot in the variable store.

# resetSecureBootWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Clears any previously applied Secure Boot configuration and disables Secure Boot.

## Declaration

```objectivec
- (BOOL) resetSecureBootWithError:(NSError **) error;
```

## Parameters

- `error`: If not `nil`, assigned with the error if the operation fails.

<a id="return-value"></a>

## Return Value

`YES`  if the existing configuration was cleared successfully, NO otherwise.

<a id="discussion"></a>

## Discussion

This operation clears any previously applied Secure Boot configuration, sets the “SetupMode” global variable to `1`, and disables Secure Boot in the variable store.
