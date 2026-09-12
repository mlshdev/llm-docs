> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnerror/code](https://developer.apple.com/documentation/contacts/cnerror/code)

# CNError.Code (Swift)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Error codes that the system may return when you use Contacts framework methods.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [CNError.Code.authorizationDenied](code/authorizationdenied.md): An error that indicates the system denied authorization.
- [CNError.Code.changeHistoryExpired](code/changehistoryexpired.md): An error that indicates the change history expired.
- [CNError.Code.changeHistoryInvalidAnchor](code/changehistoryinvalidanchor.md): An error that indicates a change history anchor is invalid.
- [CNError.Code.changeHistoryInvalidFetchRequest](code/changehistoryinvalidfetchrequest.md): An error that indicates a change history fetch request is invalid.
- [CNError.Code.clientIdentifierCollision](code/clientidentifiercollision.md): An error that indicates a client identifier collision.
- [CNError.Code.clientIdentifierInvalid](code/clientidentifierinvalid.md): An error that indicates the client identifier is invalid.
- [CNError.Code.clientIdentifierDoesNotExist](code/clientidentifierdoesnotexist.md): An error that indicates the client identifier doesn’t exist.
- [CNError.Code.communicationError](code/communicationerror.md): An error that indicates a communication error occurred.
- [CNError.Code.containmentCycle](code/containmentcycle.md): An error with the containment cycle.
- [CNError.Code.containmentScope](code/containmentscope.md): An error with containment scope.
- [CNError.Code.dataAccessError](code/dataaccesserror.md): An error with data access.
- [CNError.Code.featureDisabledByUser](code/featuredisabledbyuser.md): An error that indicates the user disabled the feature.
- [CNError.Code.featureNotAvailable](code/featurenotavailable.md): An error that indicates the feature isn’t available.
- [CNError.Code.insertedRecordAlreadyExists](code/insertedrecordalreadyexists.md): An error that indicates the inserted record already exists.
- [CNError.Code.noAccessableWritableContainers](code/noaccessablewritablecontainers.md): An error that indicates there are no accessible writable containers.
- [CNError.Code.parentContainerNotWritable](code/parentcontainernotwritable.md): An error that indicates the parent container isn’t writable.
- [CNError.Code.parentRecordDoesNotExist](code/parentrecorddoesnotexist.md): An error that indicates the parent record doesn’t exist.
- [CNError.Code.policyViolation](code/policyviolation.md): An error that indicates a policy violation.
- [CNError.Code.predicateInvalid](code/predicateinvalid.md): An error that indicates an invalid predicate.
- [CNError.Code.recordDoesNotExist](code/recorddoesnotexist.md): An error that indicates a record doesn’t exist.
- [CNError.Code.recordIdentifierInvalid](code/recordidentifierinvalid.md): An error that indicates a record identifier is invalid.
- [CNError.Code.recordNotWritable](code/recordnotwritable.md): An error that indicates a record isn’t writable.
- [CNError.Code.unauthorizedKeys](code/unauthorizedkeys.md): An error that indicates unauthorized keys usage.
- [CNError.Code.validationMultipleErrors](code/validationmultipleerrors.md): An error that indicates the system encountered multiple validation errors.
- [CNError.Code.validationTypeMismatch](code/validationtypemismatch.md): A validation error that indicates a type mismatch.
- [CNError.Code.validationConfigurationError](code/validationconfigurationerror.md): An error with validation configuration.
- [CNError.Code.vCardMalformed](code/vcardmalformed.md): An error that indicates a malformed vCard.
- [CNError.Code.vCardSummarizationError](code/vcardsummarizationerror.md): An error that indicates a vCard summarization problem.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error codes

- [CNError](../cnerror.md): Error information that may be returned when using the methods of the Contacts framework.

# CNErrorCode (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Error codes that the system may return when you use Contacts framework methods.

## Declaration

```objectivec
enum CNErrorCode : NSInteger;
```

## Topics

### Errors

- [CNErrorCodeAuthorizationDenied](code/authorizationdenied.md): An error that indicates the system denied authorization.
- [CNErrorCodeChangeHistoryExpired](code/changehistoryexpired.md): An error that indicates the change history expired.
- [CNErrorCodeChangeHistoryInvalidAnchor](code/changehistoryinvalidanchor.md): An error that indicates a change history anchor is invalid.
- [CNErrorCodeChangeHistoryInvalidFetchRequest](code/changehistoryinvalidfetchrequest.md): An error that indicates a change history fetch request is invalid.
- [CNErrorCodeClientIdentifierCollision](code/clientidentifiercollision.md): An error that indicates a client identifier collision.
- [CNErrorCodeClientIdentifierInvalid](code/clientidentifierinvalid.md): An error that indicates the client identifier is invalid.
- [CNErrorCodeClientIdentifierDoesNotExist](code/clientidentifierdoesnotexist.md): An error that indicates the client identifier doesn’t exist.
- [CNErrorCodeCommunicationError](code/communicationerror.md): An error that indicates a communication error occurred.
- [CNErrorCodeContainmentCycle](code/containmentcycle.md): An error with the containment cycle.
- [CNErrorCodeContainmentScope](code/containmentscope.md): An error with containment scope.
- [CNErrorCodeDataAccessError](code/dataaccesserror.md): An error with data access.
- [CNErrorCodeFeatureDisabledByUser](code/featuredisabledbyuser.md): An error that indicates the user disabled the feature.
- [CNErrorCodeFeatureNotAvailable](code/featurenotavailable.md): An error that indicates the feature isn’t available.
- [CNErrorCodeInsertedRecordAlreadyExists](code/insertedrecordalreadyexists.md): An error that indicates the inserted record already exists.
- [CNErrorCodeNoAccessableWritableContainers](code/noaccessablewritablecontainers.md): An error that indicates there are no accessible writable containers.
- [CNErrorCodeParentContainerNotWritable](code/parentcontainernotwritable.md): An error that indicates the parent container isn’t writable.
- [CNErrorCodeParentRecordDoesNotExist](code/parentrecorddoesnotexist.md): An error that indicates the parent record doesn’t exist.
- [CNErrorCodePolicyViolation](code/policyviolation.md): An error that indicates a policy violation.
- [CNErrorCodePredicateInvalid](code/predicateinvalid.md): An error that indicates an invalid predicate.
- [CNErrorCodeRecordDoesNotExist](code/recorddoesnotexist.md): An error that indicates a record doesn’t exist.
- [CNErrorCodeRecordIdentifierInvalid](code/recordidentifierinvalid.md): An error that indicates a record identifier is invalid.
- [CNErrorCodeRecordNotWritable](code/recordnotwritable.md): An error that indicates a record isn’t writable.
- [CNErrorCodeUnauthorizedKeys](code/unauthorizedkeys.md): An error that indicates unauthorized keys usage.
- [CNErrorCodeValidationMultipleErrors](code/validationmultipleerrors.md): An error that indicates the system encountered multiple validation errors.
- [CNErrorCodeValidationTypeMismatch](code/validationtypemismatch.md): A validation error that indicates a type mismatch.
- [CNErrorCodeValidationConfigurationError](code/validationconfigurationerror.md): An error with validation configuration.
- [CNErrorCodeVCardMalformed](code/vcardmalformed.md): An error that indicates a malformed vCard.
- [CNErrorCodeVCardSummarizationError](code/vcardsummarizationerror.md): An error that indicates a vCard summarization problem.
