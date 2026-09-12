> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/enablesecureboot(platformkey:)](https://developer.apple.com/documentation/virtualization/vzefivariablestore/enablesecureboot(platformkey:))

# enableSecureBoot(platformKey:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Enables Secure Boot with a custom Platform Key.

## Declaration

```swift
func enableSecureBoot(platformKey: SecCertificate) throws
```

## Parameters

- `platformKey`: A custom Platform Key as an X.509 certificate.

# enableSecureBootWithPlatformKey:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Enables Secure Boot with a custom Platform Key.

## Declaration

```objectivec
- (BOOL) enableSecureBootWithPlatformKey:(SecCertificateRef) platformKey error:(NSError **) error;
```

## Parameters

- `platformKey`: A custom Platform Key as an X.509 certificate.
- `error`: If not `nil`, assigned with the error if the operation fails.

<a id="return-value"></a>

## Return Value

`YES` if the framework enabled Secure Boot successfully, `NO` otherwise.

This operation overwrites the Platform Key (PK) global variable with the given Platform Key, sets the “SetupMode” global variable to `0`, and enables Secure Boot.
