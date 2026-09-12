> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecord/expirationdate](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecord/expirationdate)

# expirationDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

The date when the card expires.

## Declaration

```swift
var expirationDate: Date? { get }
```

## See Also

### Reading Metadata

- [issuedDate](issueddate.md): The date when the issuer created the card.
- [relevantDate](relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [recordTypes](recordtypes.md): An array of strings representing the types of records contained in the card.
- [sourceType](sourcetype.md): The source for the verifiable clinical record
- [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [itemNames](itemnames.md): A human-readable description of the card’s contents.

# expirationDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

The date when the card expires.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * expirationDate;
```

## See Also

### Reading Metadata

- [issuedDate](issueddate.md): The date when the issuer created the card.
- [relevantDate](relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [recordTypes](recordtypes.md): An array of strings representing the types of records contained in the card.
- [sourceType](sourcetype.md): The source for the verifiable clinical record
- [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [itemNames](itemnames.md): A human-readable description of the card’s contents.
