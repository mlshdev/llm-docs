> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/getenrolledsecurebootsignatureswitherror:](https://developer.apple.com/documentation/virtualization/vzefivariablestore/getenrolledsecurebootsignatureswitherror:)

# getEnrolledSecureBootSignaturesWithError:

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns the currently enrolled Secure Boot signatures in the Key Exchange Key (KEK), allowed signature (db), and forbidden signature (dbx) databases.

## Declaration

```objectivec
- (VZEFISignatureDatabaseConfiguration *) getEnrolledSecureBootSignaturesWithError:(NSError **) error;
```

## Parameters

- `error`: If not `nil`, assigned with the error if the operation fails.

<a id="return-value"></a>

## Return Value

A `VZEFISignatureDatabaseConfiguration` object containing the enrolled signatures, or `nil` if an error occurred.
