> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquery/recordtypes

# recordTypes (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The type of records that this query returns.

## Declaration

```swift
var recordTypes: [String] { get }
```

<a id="Discussion"></a>

## Discussion

For a list of the most common record types, see [HKVerifiableClinicalRecordCredentialType](../hkverifiableclinicalrecordcredentialtype.md).

## See Also

### Accessing the Metadata

- [sourceTypes](sourcetypes.md): The format of the verifiable clinical record.

# recordTypes (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

The type of records that this query returns.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * recordTypes;
```

<a id="Discussion"></a>

## Discussion

For a list of the most common record types, see [HKVerifiableClinicalRecordCredentialType](../hkverifiableclinicalrecordcredentialtype.md).

## See Also

### Accessing the Metadata

- [sourceTypes](sourcetypes.md): The format of the verifiable clinical record.
