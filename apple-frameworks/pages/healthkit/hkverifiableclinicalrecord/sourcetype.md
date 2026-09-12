> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecord/sourcetype](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecord/sourcetype)

# sourceType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

The source for the verifiable clinical record

## Declaration

```swift
var sourceType: HKVerifiableClinicalRecordSourceType? { get }
```

<a id="Discussion"></a>

## Discussion

For a list of valid sources, see [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md).

## See Also

### Reading Metadata

- [issuedDate](issueddate.md): The date when the issuer created the card.
- [relevantDate](relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [expirationDate](expirationdate.md): The date when the card expires.
- [recordTypes](recordtypes.md): An array of strings representing the types of records contained in the card.
- [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [itemNames](itemnames.md): A human-readable description of the card’s contents.

# sourceType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

The source for the verifiable clinical record

## Declaration

```objectivec
@property (copy, readonly, nullable) HKVerifiableClinicalRecordSourceType sourceType;
```

<a id="Discussion"></a>

## Discussion

For a list of valid sources, see [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md).

## See Also

### Reading Metadata

- [issuedDate](issueddate.md): The date when the issuer created the card.
- [relevantDate](relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [expirationDate](expirationdate.md): The date when the card expires.
- [recordTypes](recordtypes.md): An array of strings representing the types of records contained in the card.
- [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [itemNames](itemnames.md): A human-readable description of the card’s contents.
