> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/userrecordid](https://developer.apple.com/documentation/cloudkit/ckuseridentity/lookupinfo-swift.class/userrecordid)

# userRecordID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The ID of the user record.

## Declaration

```swift
@NSCopying var userRecordID: CKRecord.ID? { get }
```

<a id="discussion"></a>

## Discussion

Use this value to retrieve the user record for the user identity. The user record doesn’t contain any personal information about the user, by default. You can add data to the user record, but you shouldn’t add anything sensitive.

## See Also

### Accessing the Criteria

- [emailAddress](emailaddress.md): The user’s email address.
- [phoneNumber](phonenumber.md): The user’s phone number.

# userRecordID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The ID of the user record.

## Declaration

```objectivec
@property (copy, readonly, nullable) CKRecordID * userRecordID;
```

<a id="discussion"></a>

## Discussion

Use this value to retrieve the user record for the user identity. The user record doesn’t contain any personal information about the user, by default. You can add data to the user record, but you shouldn’t add anything sensitive.

## See Also

### Accessing the Criteria

- [emailAddress](emailaddress.md): The user’s email address.
- [phoneNumber](phonenumber.md): The user’s phone number.
