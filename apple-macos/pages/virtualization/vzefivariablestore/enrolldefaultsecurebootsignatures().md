> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/enrolldefaultsecurebootsignatures()](https://developer.apple.com/documentation/virtualization/vzefivariablestore/enrolldefaultsecurebootsignatures())

# enrollDefaultSecureBootSignatures() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Enrolls the default signatures to Secure Boot databases.

## Declaration

```swift
func enrollDefaultSecureBootSignatures() throws
```

<a id="discussion"></a>

## Discussion

This operation adds Microsoft Key Exchange Keys, UEFI CA signatures, and the latest UEFI revocation list to the Key Exchange Key (KEK) database, allowed signature database (db), and forbidden signature database (dbx) respectively. You can add these signatures before or after enrolling a Platform Key. The framework preserves the Platform Key, if present.

This allows Microsoft-signed Linux distributions to boot with Secure Boot enabled.

For more information about these signature files, see the [Microsoft Secure Boot Objects repository](https://github.com/microsoft/secureboot_objects).

# enrollDefaultSecureBootSignaturesWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Enrolls the default signatures to Secure Boot databases.

## Declaration

```objectivec
- (BOOL) enrollDefaultSecureBootSignaturesWithError:(NSError **) error;
```

## Parameters

- `error`: If not `nil`, assigned with the error if the operation fails.

<a id="return-value"></a>

## Return Value

`YES` if the framework completed the operation successfully, `NO` otherwise.

<a id="discussion"></a>

## Discussion

This operation adds Microsoft Key Exchange Keys, UEFI CA signatures, and the latest UEFI revocation list to the Key Exchange Key (KEK) database, allowed signature database (db), and forbidden signature database (dbx) respectively. You can add these signatures before or after enrolling a Platform Key. The framework preserves the Platform Key, if present.

This allows Microsoft-signed Linux distributions to boot with Secure Boot enabled.

For more information about these signature files, see the [Microsoft Secure Boot Objects repository](https://github.com/microsoft/secureboot_objects).
