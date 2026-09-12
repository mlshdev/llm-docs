> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnerroruserinfoaffectedrecordskey](https://developer.apple.com/documentation/contacts/cnerroruserinfoaffectedrecordskey)

# CNErrorUserInfoAffectedRecordsKey (Swift)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The contact, group, and container objects for which the error code applies.

## Declaration

```swift
let CNErrorUserInfoAffectedRecordsKey: String
```

<a id="Discussion"></a>

## Discussion

An array of one or more [CNContact](cncontact.md), [CNGroup](cngroup.md), or [CNContainer](cncontainer.md) objects for which the error code applies.

## See Also

### Error data keys

- [CNErrorUserInfoAffectedRecordIdentifiersKey](cnerroruserinfoaffectedrecordidentifierskey.md): String objects for which the error code applies.
- [CNErrorUserInfoValidationErrorsKey](cnerroruserinfovalidationerrorskey.md): An array of validation-related error objects.
- [CNErrorUserInfoKeyPathsKey](cnerroruserinfokeypathskey.md): An array of key paths associated with a given error.

# CNErrorUserInfoAffectedRecordsKey (Objective-C)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The contact, group, and container objects for which the error code applies.

## Declaration

```objectivec
extern NSString * const CNErrorUserInfoAffectedRecordsKey;
```

<a id="Discussion"></a>

## Discussion

An array of one or more [CNContact](cncontact.md), [CNGroup](cngroup.md), or [CNContainer](cncontainer.md) objects for which the error code applies.

## See Also

### Error data keys

- [CNErrorUserInfoAffectedRecordIdentifiersKey](cnerroruserinfoaffectedrecordidentifierskey.md): String objects for which the error code applies.
- [CNErrorUserInfoValidationErrorsKey](cnerroruserinfovalidationerrorskey.md): An array of validation-related error objects.
- [CNErrorUserInfoKeyPathsKey](cnerroruserinfokeypathskey.md): An array of key paths associated with a given error.
