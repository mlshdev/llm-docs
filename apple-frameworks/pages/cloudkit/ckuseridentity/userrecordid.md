> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckuseridentity/userrecordid

# userRecordID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The user record ID for the corresponding user record.

## Declaration

```swift
@NSCopying var userRecordID: CKRecord.ID? { get }
```

## See Also

### Accessing User Information

- [contactIdentifiers](contactidentifiers.md): Deprecated. Identifiers that match contacts in the local Contacts database.
- [nameComponents](namecomponents.md): The user’s name.

# userRecordID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The user record ID for the corresponding user record.

## Declaration

```objectivec
@property (copy, readonly, nullable) CKRecordID * userRecordID;
```

## See Also

### Accessing User Information

- [contactIdentifiers](contactidentifiers.md): Deprecated. Identifiers that match contacts in the local Contacts database.
- [nameComponents](namecomponents.md): The user’s name.
