> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecord/itemnames](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecord/itemnames)

# itemNames (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

A human-readable description of the card’s contents.

## Declaration

```swift
var itemNames: [String] { get }
```

## See Also

### Reading Metadata

- [issuedDate](issueddate.md): The date when the issuer created the card.
- [relevantDate](relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [expirationDate](expirationdate.md): The date when the card expires.
- [recordTypes](recordtypes.md): An array of strings representing the types of records contained in the card.
- [sourceType](sourcetype.md): The source for the verifiable clinical record
- [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.

# itemNames (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

A human-readable description of the card’s contents.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * itemNames;
```

## See Also

### Reading Metadata

- [issuedDate](issueddate.md): The date when the issuer created the card.
- [relevantDate](relevantdate.md): A date relevant to this record, such as when the issuer administered a vaccine or performed a test.
- [expirationDate](expirationdate.md): The date when the card expires.
- [recordTypes](recordtypes.md): An array of strings representing the types of records contained in the card.
- [sourceType](sourcetype.md): The source for the verifiable clinical record
- [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
