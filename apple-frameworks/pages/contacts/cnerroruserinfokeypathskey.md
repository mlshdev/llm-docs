> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnerroruserinfokeypathskey](https://developer.apple.com/documentation/contacts/cnerroruserinfokeypathskey)

# CNErrorUserInfoKeyPathsKey (Swift)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of key paths associated with a given error.

## Declaration

```swift
let CNErrorUserInfoKeyPathsKey: String
```

<a id="Discussion"></a>

## Discussion

For validation errors, this contains key paths to specific object properties.

## See Also

### Error data keys

- [CNErrorUserInfoAffectedRecordsKey](cnerroruserinfoaffectedrecordskey.md): The contact, group, and container objects for which the error code applies.
- [CNErrorUserInfoAffectedRecordIdentifiersKey](cnerroruserinfoaffectedrecordidentifierskey.md): String objects for which the error code applies.
- [CNErrorUserInfoValidationErrorsKey](cnerroruserinfovalidationerrorskey.md): An array of validation-related error objects.

# CNErrorUserInfoKeyPathsKey (Objective-C)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of key paths associated with a given error.

## Declaration

```objectivec
extern NSString * const CNErrorUserInfoKeyPathsKey;
```

<a id="Discussion"></a>

## Discussion

For validation errors, this contains key paths to specific object properties.

## See Also

### Error data keys

- [CNErrorUserInfoAffectedRecordsKey](cnerroruserinfoaffectedrecordskey.md): The contact, group, and container objects for which the error code applies.
- [CNErrorUserInfoAffectedRecordIdentifiersKey](cnerroruserinfoaffectedrecordidentifierskey.md): String objects for which the error code applies.
- [CNErrorUserInfoValidationErrorsKey](cnerroruserinfovalidationerrorskey.md): An array of validation-related error objects.
