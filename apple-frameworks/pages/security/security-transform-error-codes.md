> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/security-transform-error-codes](https://developer.apple.com/documentation/security/security-transform-error-codes)

# Security Transform Error Codes

**Interface languages:** Swift, Objective-C

**Framework:** Security  
**Kind:** API Collection

Recognize the error codes used in error objects created by a transform on failure.

## Topics

### Constants

- [kSecTransformErrorAttributeNotFound](ksectransformerrorattributenotfound.md): Deprecated. The attribute was not found.
- [kSecTransformErrorInvalidOperation](ksectransformerrorinvalidoperation.md): Deprecated. An invalid operation was attempted.
- [kSecTransformErrorNotInitializedCorrectly](ksectransformerrornotinitializedcorrectly.md): Deprecated. A required initialization is missing: It is most likely a missing required attribute.
- [kSecTransformErrorMoreThanOneOutput](ksectransformerrormorethanoneoutput.md): Deprecated. A transform has an internal routing error that has caused multiple outputs instead of a single discrete output.
- [kSecTransformErrorInvalidInputDictionary](ksectransformerrorinvalidinputdictionary.md): Deprecated. A dictionary used to import a transform has invalid data.
- [kSecTransformErrorInvalidAlgorithm](ksectransformerrorinvalidalgorithm.md): Deprecated. A transform that needs an algorithm as an attribute received an invalid algorithm.
- [kSecTransformErrorInvalidLength](ksectransformerrorinvalidlength.md): Deprecated. A transform that needs a length such as a digest transform has been given an invalid length.
- [kSecTransformErrorInvalidType](ksectransformerrorinvalidtype.md): Deprecated. An invalid type has been set on an attribute.
- [kSecTransformErrorInvalidInput](ksectransformerrorinvalidinput.md): Deprecated. The input set on a transform is invalid.
- [kSecTransformErrorNameAlreadyRegistered](ksectransformerrornamealreadyregistered.md): Deprecated. A custom transform of a particular name has already been registered.
- [kSecTransformErrorUnsupportedAttribute](ksectransformerrorunsupportedattribute.md): Deprecated. An illegal action such as setting a read-only attribute has occurred.
- [kSecTransformOperationNotSupportedOnGroup](ksectransformoperationnotsupportedongroup.md): Deprecated. An illegal action on a group transform has occurred.
- [kSecTransformErrorMissingParameter](ksectransformerrormissingparameter.md): Deprecated. A transform is missing a required attribute.
- [kSecTransformErrorInvalidConnection](ksectransformerrorinvalidconnection.md): Deprecated. A connection between transforms in different groups was attempted.
- [kSecTransformTransformIsExecuting](ksectransformtransformisexecuting.md): Deprecated. An illegal operation was called on a Transform while it was executing.
- [kSecTransformInvalidOverride](ksectransforminvalidoverride.md): Deprecated. An illegal override was given to a custom transform.
- [kSecTransformTransformIsNotRegistered](ksectransformtransformisnotregistered.md): Deprecated. A custom transform was asked to be created but the transform has not been registered.
- [kSecTransformErrorAbortInProgress](ksectransformerrorabortinprogress.md): Deprecated. The abort attribute has been set and the transform is in the process of shutting down.
- [kSecTransformErrorAborted](ksectransformerroraborted.md): Deprecated. The transform was aborted.
- [kSecTransformInvalidArgument](ksectransforminvalidargument.md): Deprecated. An invalid argument was given to a Transform API.
