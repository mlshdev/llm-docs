> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/enablesecurebootusingdefaultplatformkey()](https://developer.apple.com/documentation/virtualization/vzefivariablestore/enablesecurebootusingdefaultplatformkey())

# enableSecureBootUsingDefaultPlatformKey() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Enables Secure Boot with an Apple-managed Platform Key.

## Declaration

```swift
func enableSecureBootUsingDefaultPlatformKey() throws
```

<a id="discussion"></a>

## Discussion

This operation overwrites the Platform Key (PK) global variable with an Apple-managed Platform Key, sets the “SetupMode” global variable to `0`, and enables Secure Boot.

# enableSecureBootUsingDefaultPlatformKeyWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Enables Secure Boot with an Apple-managed Platform Key.

## Declaration

```objectivec
- (BOOL) enableSecureBootUsingDefaultPlatformKeyWithError:(NSError **) error;
```

## Parameters

- `error`: If not nil, assigned with the error if the operation fails.

<a id="return-value"></a>

## Return Value

`YES` if the framework enables Secure Boot successfully, `NO` otherwise.

<a id="discussion"></a>

## Discussion

This operation overwrites the Platform Key (PK) global variable with an Apple-managed Platform Key, sets the “SetupMode” global variable to `0`, and enables Secure Boot.
