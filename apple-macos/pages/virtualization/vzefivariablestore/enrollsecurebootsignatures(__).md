> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/enrollsecurebootsignatures(_:)](https://developer.apple.com/documentation/virtualization/vzefivariablestore/enrollsecurebootsignatures(_:))

# enrollSecureBootSignatures(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Enrolls the given signatures to Secure Boot databases.

## Declaration

```swift
func enrollSecureBootSignatures(_ signatures: VZEFISignatureDatabaseConfiguration) throws
```

## Parameters

- `signatures`: Signatures to enroll in the KEK, db, and dbx signature databases.

<a id="discussion"></a>

## Discussion

> **Warning**

> Make sure that the given Secure Boot signatures are valid before enabling Secure Boot, otherwise it may render the guest unbootable.

This operation appends the given signatures to the Key Exchange Key (KEK) database, allowed signature database (db), and forbidden signature database (dbx). The method ignores a signature that already exists in the database. You can add these signatures before or after enrolling a Platform Key. The framework preserves the Platform Key, if present.

Call this method multiple times to incrementally add signatures without replacing existing ones.

# enrollSecureBootSignatures:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Enrolls the given signatures to Secure Boot databases.

## Declaration

```objectivec
- (BOOL) enrollSecureBootSignatures:(VZEFISignatureDatabaseConfiguration *) signatures error:(NSError **) error;
```

## Parameters

- `signatures`: Signatures to enroll in the KEK, db, and dbx signature databases.
- `error`: If not `nil`, assigned with the error if the operation fails.

<a id="return-value"></a>

## Return Value

`YES` if the operation completed successfully, `NO` otherwise.

<a id="discussion"></a>

## Discussion

> **Warning**

> Make sure that the given Secure Boot signatures are valid before enabling Secure Boot, otherwise it may render the guest unbootable.

This operation appends the given signatures to the Key Exchange Key (KEK) database, allowed signature database (db), and forbidden signature database (dbx). The method ignores a signature that already exists in the database. You can add these signatures before or after enrolling a Platform Key. The framework preserves the Platform Key, if present.

Call this method multiple times to incrementally add signatures without replacing existing ones.
