> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnerror](https://developer.apple.com/documentation/contacts/cnerror)

# CNError

**Framework:** Contacts  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Error information that may be returned when using the methods of the Contacts framework.

## Declaration

```swift
struct CNError
```

## Topics

### Error codes

- [authorizationDenied](cnerror/authorizationdenied.md): An error that indicates the system denied authorization.
- [changeHistoryExpired](cnerror/changehistoryexpired.md): An error that indicates the change history expired.
- [changeHistoryInvalidAnchor](cnerror/changehistoryinvalidanchor.md): An error that indicates a change history anchor is invalid.
- [changeHistoryInvalidFetchRequest](cnerror/changehistoryinvalidfetchrequest.md): An error that indicates a change history fetch request is invalid.
- [clientIdentifierCollision](cnerror/clientidentifiercollision.md): An error that indicates a client identifier collision.
- [clientIdentifierDoesNotExist](cnerror/clientidentifierdoesnotexist.md): An error that indicates the client identifier doesn’t exist.
- [clientIdentifierInvalid](cnerror/clientidentifierinvalid.md): An error that indicates the client identifier is invalid.
- [communicationError](cnerror/communicationerror.md): An error that indicates a communication error occurred.
- [containmentCycle](cnerror/containmentcycle.md): An error with the containment cycle.
- [containmentScope](cnerror/containmentscope.md): An error with containment scope.
- [dataAccessError](cnerror/dataaccesserror.md): An error with data access.
- [featureDisabledByUser](cnerror/featuredisabledbyuser.md): An error that indicates the user disabled the feature.
- [featureNotAvailable](cnerror/featurenotavailable.md): An error that indicates the feature isn’t available.
- [insertedRecordAlreadyExists](cnerror/insertedrecordalreadyexists.md): An error that indicates the inserted record already exists.
- [noAccessableWritableContainers](cnerror/noaccessablewritablecontainers.md): An error that indicates there are no accessible writable containers.
- [parentContainerNotWritable](cnerror/parentcontainernotwritable.md): An error that indicates the parent container isn’t writable.
- [parentRecordDoesNotExist](cnerror/parentrecorddoesnotexist.md): An error that indicates the parent record doesn’t exist.
- [policyViolation](cnerror/policyviolation.md): An error that indicates a policy violation.
- [predicateInvalid](cnerror/predicateinvalid.md): An error that indicates an invalid predicate.
- [recordDoesNotExist](cnerror/recorddoesnotexist.md): An error that indicates a record doesn’t exist.
- [recordIdentifierInvalid](cnerror/recordidentifierinvalid.md): An error that indicates a record identifier is invalid.
- [recordNotWritable](cnerror/recordnotwritable.md): An error that indicates a record isn’t writable.
- [unauthorizedKeys](cnerror/unauthorizedkeys.md): An error that indicates unauthorized keys usage.
- [vCardMalformed](cnerror/vcardmalformed.md): An error that indicates a malformed vCard.
- [vCardSummarizationError](cnerror/vcardsummarizationerror.md): An error that indicates a vCard summarization problem.
- [validationConfigurationError](cnerror/validationconfigurationerror.md): An error with validation configuration.
- [validationMultipleErrors](cnerror/validationmultipleerrors.md): An error that indicates the system encountered multiple validation errors.
- [validationTypeMismatch](cnerror/validationtypemismatch.md): A validation error that indicates a type mismatch.

### Error details

- [affectedRecordIdentifiers](cnerror/affectedrecordidentifiers.md): An array of strings that uniquely identify the records affected by the error.
- [affectedRecords](cnerror/affectedrecords.md): An array of record objects for which the error applies.
- [CNError.Code](cnerror/code.md): Error codes that the system may return when you use Contacts framework methods.
- [keyPaths](cnerror/keypaths.md): An array of key paths associated with the error.

### Type Properties

- [errorDomain](cnerror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error codes

- [CNError.Code](cnerror/code.md): Error codes that the system may return when you use Contacts framework methods.
