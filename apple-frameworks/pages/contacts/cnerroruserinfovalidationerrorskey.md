> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnerroruserinfovalidationerrorskey](https://developer.apple.com/documentation/contacts/cnerroruserinfovalidationerrorskey)

# CNErrorUserInfoValidationErrorsKey (Swift)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of validation-related error objects.

## Declaration

```swift
let CNErrorUserInfoValidationErrorsKey: String
```

<a id="Discussion"></a>

## Discussion

An array of [NSError](../foundation/nserror.md) objects for [CNError.Code.validationMultipleErrors](cnerror/code/validationmultipleerrors.md).

## See Also

### Error data keys

- [CNErrorUserInfoAffectedRecordsKey](cnerroruserinfoaffectedrecordskey.md): The contact, group, and container objects for which the error code applies.
- [CNErrorUserInfoAffectedRecordIdentifiersKey](cnerroruserinfoaffectedrecordidentifierskey.md): String objects for which the error code applies.
- [CNErrorUserInfoKeyPathsKey](cnerroruserinfokeypathskey.md): An array of key paths associated with a given error.

# CNErrorUserInfoValidationErrorsKey (Objective-C)

**Framework:** Contacts  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of validation-related error objects.

## Declaration

```objectivec
extern NSString * const CNErrorUserInfoValidationErrorsKey;
```

<a id="Discussion"></a>

## Discussion

An array of [NSError](../foundation/nserror.md) objects for [CNErrorCodeValidationMultipleErrors](cnerror/code/validationmultipleerrors.md).

## See Also

### Error data keys

- [CNErrorUserInfoAffectedRecordsKey](cnerroruserinfoaffectedrecordskey.md): The contact, group, and container objects for which the error code applies.
- [CNErrorUserInfoAffectedRecordIdentifiersKey](cnerroruserinfoaffectedrecordidentifierskey.md): String objects for which the error code applies.
- [CNErrorUserInfoKeyPathsKey](cnerroruserinfokeypathskey.md): An array of key paths associated with a given error.
