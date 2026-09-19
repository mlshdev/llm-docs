> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecord/recordtypes

# recordTypes (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

An array of strings representing the types of records contained in the card.

## Declaration

```swift
var recordTypes: [String] { get }
```

## See Also

### Reading Metadata

- [issuedDate](issueddate.md): The date when the issuer created the card.
- [relevantDate](relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [expirationDate](expirationdate.md): The date when the card expires.
- [sourceType](sourcetype.md): The source for the verifiable clinical record
- [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [itemNames](itemnames.md): A human-readable description of the card’s contents.

# recordTypes (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

An array of strings representing the types of records contained in the card.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * recordTypes;
```

## See Also

### Reading Metadata

- [issuedDate](issueddate.md): The date when the issuer created the card.
- [relevantDate](relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [expirationDate](expirationdate.md): The date when the card expires.
- [sourceType](sourcetype.md): The source for the verifiable clinical record
- [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [itemNames](itemnames.md): A human-readable description of the card’s contents.
