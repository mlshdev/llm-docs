> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/contactidentifiers](https://developer.apple.com/documentation/cloudkit/ckuseridentity/contactidentifiers)

# contactIdentifiers (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 4.0+ (deprecated in 11.0)

Identifiers that match contacts in the local Contacts database.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
var contactIdentifiers: [String] { get }
```

<a id="discussion"></a>

## Discussion

Identities that CloudKit discovers using [CKDiscoverAllUserIdentitiesOperation](../ckdiscoveralluseridentitiesoperation.md) correspond to entries in the local Contacts database, matching the identifier on [CNContact](../../contacts/cncontact.md).  Use these identifiers with the Contacts database to get additional information about the contacts. Multiple identifiers can exist for a single discovered user because multiple contacts can contain the same email addresses or phone numbers.

To transform these identifiers into an array of unified contact identifiers, create a predicate by calling the [predicateForContacts(withIdentifiers:)](../../contacts/cncontact/predicateforcontacts%28withidentifiers_%29.md) method, and then pass that predicate to the [unifiedContacts(matching:keysToFetch:)](../../contacts/cncontactstore/unifiedcontacts%28matching_keystofetch_%29.md) method.

## See Also

### Accessing User Information

- [userRecordID](userrecordid.md): The user record ID for the corresponding user record.
- [nameComponents](namecomponents.md): The user’s name.

# contactIdentifiers (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 4.0+ (deprecated in 11.0)

Identifiers that match contacts in the local Contacts database.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * contactIdentifiers;
```

<a id="discussion"></a>

## Discussion

Identities that CloudKit discovers using [CKDiscoverAllUserIdentitiesOperation](../ckdiscoveralluseridentitiesoperation.md) correspond to entries in the local Contacts database, matching the identifier on [CNContact](../../contacts/cncontact.md).  Use these identifiers with the Contacts database to get additional information about the contacts. Multiple identifiers can exist for a single discovered user because multiple contacts can contain the same email addresses or phone numbers.

To transform these identifiers into an array of unified contact identifiers, create a predicate by calling the [predicateForContactsWithIdentifiers:](../../contacts/cncontact/predicateforcontacts%28withidentifiers_%29.md) method, and then pass that predicate to the [unifiedContactsMatchingPredicate:keysToFetch:error:](../../contacts/cncontactstore/unifiedcontacts%28matching_keystofetch_%29.md) method.

## See Also

### Accessing User Information

- [userRecordID](userrecordid.md): The user record ID for the corresponding user record.
- [nameComponents](namecomponents.md): The user’s name.
