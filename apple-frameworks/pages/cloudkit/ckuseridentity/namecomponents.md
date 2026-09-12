> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckuseridentity/namecomponents](https://developer.apple.com/documentation/cloudkit/ckuseridentity/namecomponents)

# nameComponents (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The user’s name.

## Declaration

```swift
var nameComponents: PersonNameComponents? { get }
```

<a id="discussion"></a>

## Discussion

You can use this property to construct the user’s name for display. Use the components with an instance of [PersonNameComponentsFormatter](../../foundation/personnamecomponentsformatter.md) to create a string representation for the current locale.

## See Also

### Accessing User Information

- [userRecordID](userrecordid.md): The user record ID for the corresponding user record.
- [contactIdentifiers](contactidentifiers.md): Deprecated. Identifiers that match contacts in the local Contacts database.

# nameComponents (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The user’s name.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSPersonNameComponents * nameComponents;
```

<a id="discussion"></a>

## Discussion

You can use this property to construct the user’s name for display. Use the components with an instance of [NSPersonNameComponentsFormatter](../../foundation/personnamecomponentsformatter.md) to create a string representation for the current locale.

## See Also

### Accessing User Information

- [userRecordID](userrecordid.md): The user record ID for the corresponding user record.
- [contactIdentifiers](contactidentifiers.md): Deprecated. Identifiers that match contacts in the local Contacts database.
