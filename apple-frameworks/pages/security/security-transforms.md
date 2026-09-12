> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/security-transforms](https://developer.apple.com/documentation/security/security-transforms)

# Security Transforms (Swift)

**Framework:** Security  
**Kind:** API Collection

Perform cryptographic functions like encoding, encryption, signing, and signature verification.

<a id="overview"></a>

## Overview

You use security transforms to assemble a chain of security-related operations that you apply to a stream of data in macOS.

## Topics

### Transforms

- [SecTransformCreateReadTransformWithReadStream(\_:)](sectransformcreatereadtransformwithreadstream%28__%29.md): Deprecated. Creates a read transform from a read stream reference.
- [SecTransform](sectransform.md): Deprecated. A Core Foundation type that represents a security transform.
- [SecTransformGetTypeID()](sectransformgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a security transform object belongs.

### Encoding

- [SecEncodeTransformCreate(\_:\_:)](secencodetransformcreate%28____%29.md): Deprecated. Creates an encode transform object.
- [SecDecodeTransformCreate(\_:\_:)](secdecodetransformcreate%28____%29.md): Deprecated. Creates a decode transform object.

### Encrypting

- [SecEncryptTransformCreate(\_:\_:)](secencrypttransformcreate%28____%29.md): Deprecated. Creates an encryption transform object.
- [SecDecryptTransformCreate(\_:\_:)](secdecrypttransformcreate%28____%29.md): Deprecated. Creates a decryption transform object.
- [SecEncryptTransformGetTypeID()](secencrypttransformgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which an encryption transform belongs.
- [SecDecryptTransformGetTypeID()](secdecrypttransformgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a decryption transform belongs.

### Signing

- [SecSignTransformCreate(\_:\_:)](secsigntransformcreate%28____%29.md): Deprecated. Creates a signing transform object.
- [SecVerifyTransformCreate(\_:\_:\_:)](secverifytransformcreate%28______%29.md): Deprecated. Creates a verify transform object.
- [SecDigestTransformCreate(\_:\_:\_:)](secdigesttransformcreate%28______%29.md): Deprecated. Creates a digest transform object.
- [SecDigestTransformGetTypeID()](secdigesttransformgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a digest transform belongs.

### Custom Transforms

- [SecTransformCreate(\_:\_:)](sectransformcreate%28____%29.md): Deprecated. Creates a transform computation object.
- [SecTransformRegister(\_:\_:\_:)](sectransformregister%28______%29.md): Deprecated. Registers a custom transform.
- [SecTransformCreateFP](sectransformcreatefp.md): Deprecated. A pointer to a function that creates a new instance of a custom transform.
- [SecTransformInstanceBlock](sectransforminstanceblock.md): A block that you return from a transform creation function.
- [SecTransformImplementationRef](sectransformimplementationref.md): An opaque pointer to a block that implements an instance of a transform.

### Transform Groups

- [SecTransformCreateGroupTransform()](sectransformcreategrouptransform%28%29.md): Deprecated. Creates an object that acts as a container for a set of connected transforms.
- [SecTransformFindByName(\_:\_:)](sectransformfindbyname%28____%29.md): Deprecated. Finds a member of a transform group by its name.
- [SecGroupTransform](secgrouptransform.md): Deprecated. A Core Foundation type that represents a container holding a group of transforms.
- [SecGroupTransformGetTypeID()](secgrouptransformgettypeid%28%29.md): Deprecated. Returns the Core Foundation type ID for a transform group container.

### Transform Characteristics

- [SecTransformSetAttribute(\_:\_:\_:\_:)](sectransformsetattribute%28________%29.md): Deprecated. Sets a static value for an attribute in a transform.
- [SecTransformGetAttribute(\_:\_:)](sectransformgetattribute%28____%29.md): Deprecated. Gets the current value of a transform attribute.
- [SecTransformCustomSetAttribute(\_:\_:\_:\_:)](sectransformcustomsetattribute%28________%29.md): Deprecated. Sets an attribute value on a custom transform.
- [SecTransformCustomGetAttribute(\_:\_:\_:)](sectransformcustomgetattribute%28______%29.md): Deprecated. Gets an attribute value from a custom transform.
- [SecTransformPushbackAttribute(\_:\_:\_:)](sectransformpushbackattribute%28______%29.md): Deprecated. Pushes a single value back for a specific attribute.
- [Transform Attributes](transform-attributes.md): Specify the attributes of a transform.
- [SecTransformAttribute](sectransformattribute.md): Deprecated. A direct reference to a security transform attribute.
- [SecTransformStringOrAttribute](sectransformstringorattribute.md): Deprecated. A type that may be either a string or an attribute reference.
- [SecTransformMetaAttributeType](sectransformmetaattributetype.md): Deprecated. The keys that describe the metadata attributes of transform attributes.

### Actions

- [SecTransformSetDataAction(\_:\_:\_:)](sectransformsetdataaction%28______%29.md): Deprecated. Changes the way a custom transform processes data.
- [SecTransformSetAttributeAction(\_:\_:\_:\_:)](sectransformsetattributeaction%28________%29.md): Deprecated. Requests a callback when an attribute is set.
- [SecTransformSetTransformAction(\_:\_:\_:)](sectransformsettransformaction%28______%29.md): Deprecated. Changes the way that a transform deals with transform lifecycle behaviors.
- [SecTransformActionBlock](sectransformactionblock.md): Deprecated. A block that overrides the default behavior of a custom transform.
- [SecTransformAttributeActionBlock](sectransformattributeactionblock.md): Deprecated. A block used to override the default attribute handling for when an attribute is set.
- [SecTransformDataBlock](sectransformdatablock.md): A block used to override the default data handling for a transform.
- [Actions](actions.md): Use actions to trigger particular behaviors.

### Piping

- [SecTransformConnectTransforms(\_:\_:\_:\_:\_:\_:)](sectransformconnecttransforms%28____________%29.md): Deprecated. Chains transforms together.

### Execution

- [SecTransformExecute(\_:\_:)](sectransformexecute%28____%29.md): Deprecated. Executes a transform or transform group synchronously.
- [SecTransformExecuteAsync(\_:\_:\_:)](sectransformexecuteasync%28______%29.md): Deprecated. Executes transform or transform group asynchronously.
- [SecTransformNoData()](sectransformnodata%28%29.md): Deprecated. Returns an object from inside a ProcessData override that says that although no data is being returned the transform is still active and awaiting data.
- [SecMessageBlock](secmessageblock.md): A block that delivers messages during asynchronous operations.

### Import and Export

- [SecTransformCopyExternalRepresentation(\_:)](sectransformcopyexternalrepresentation%28__%29.md): Deprecated. Creates a dictionary that contains enough information to be able to recreate a transform.
- [SecTransformCreateFromExternalRepresentation(\_:\_:)](sectransformcreatefromexternalrepresentation%28____%29.md): Deprecated. Creates a transform instance from a dictionary of parameters.

### Reporting Errors

- [kSecTransformErrorDomain](ksectransformerrordomain.md): The domain of any error object created by a transform on failure.
- [Security Transform Error Codes](security-transform-error-codes.md): Recognize the error codes used in error objects created by a transform on failure.
- [kSecTransformPreviousErrorKey](ksectransformpreviouserrorkey.md): The key in an error’s `userInfo` dictionary whose value specifies the previous error when multiple errors occur during transform evaluation.
- [kSecTransformAbortOriginatorKey](ksectransformabortoriginatorkey.md): The key in an error’s `userInfo` dictionary whose value indicates the transform that caused the chain to abort.

## See Also

### Related Documentation

- [Security Transforms Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecTransformPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010801)

# Security Transforms (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Perform cryptographic functions like encoding, encryption, signing, and signature verification.

<a id="overview"></a>

## Overview

You use security transforms to assemble a chain of security-related operations that you apply to a stream of data in macOS.

## Topics

### Transforms

- [SecTransformCreateReadTransformWithReadStream](sectransformcreatereadtransformwithreadstream%28__%29.md): Deprecated. Creates a read transform from a read stream reference.
- [SecTransformRef](sectransform.md): Deprecated. A Core Foundation type that represents a security transform.
- [SecTransformGetTypeID](sectransformgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a security transform object belongs.

### Encoding

- [SecEncodeTransformCreate](secencodetransformcreate%28____%29.md): Deprecated. Creates an encode transform object.
- [SecDecodeTransformCreate](secdecodetransformcreate%28____%29.md): Deprecated. Creates a decode transform object.

### Encrypting

- [SecEncryptTransformCreate](secencrypttransformcreate%28____%29.md): Deprecated. Creates an encryption transform object.
- [SecDecryptTransformCreate](secdecrypttransformcreate%28____%29.md): Deprecated. Creates a decryption transform object.
- [SecEncryptTransformGetTypeID](secencrypttransformgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which an encryption transform belongs.
- [SecDecryptTransformGetTypeID](secdecrypttransformgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a decryption transform belongs.

### Signing

- [SecSignTransformCreate](secsigntransformcreate%28____%29.md): Deprecated. Creates a signing transform object.
- [SecVerifyTransformCreate](secverifytransformcreate%28______%29.md): Deprecated. Creates a verify transform object.
- [SecDigestTransformCreate](secdigesttransformcreate%28______%29.md): Deprecated. Creates a digest transform object.
- [SecDigestTransformGetTypeID](secdigesttransformgettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a digest transform belongs.

### Custom Transforms

- [SecTransformCreate](sectransformcreate%28____%29.md): Deprecated. Creates a transform computation object.
- [SecTransformRegister](sectransformregister%28______%29.md): Deprecated. Registers a custom transform.
- [SecTransformCreateFP](sectransformcreatefp.md): Deprecated. A pointer to a function that creates a new instance of a custom transform.
- [SecTransformInstanceBlock](sectransforminstanceblock.md): A block that you return from a transform creation function.
- [SecTransformImplementationRef](sectransformimplementationref.md): An opaque pointer to a block that implements an instance of a transform.

### Transform Groups

- [SecTransformCreateGroupTransform](sectransformcreategrouptransform%28%29.md): Deprecated. Creates an object that acts as a container for a set of connected transforms.
- [SecTransformFindByName](sectransformfindbyname%28____%29.md): Deprecated. Finds a member of a transform group by its name.
- [SecGroupTransformRef](secgrouptransform.md): Deprecated. A Core Foundation type that represents a container holding a group of transforms.
- [SecGroupTransformGetTypeID](secgrouptransformgettypeid%28%29.md): Deprecated. Returns the Core Foundation type ID for a transform group container.

### Transform Characteristics

- [SecTransformSetAttribute](sectransformsetattribute%28________%29.md): Deprecated. Sets a static value for an attribute in a transform.
- [SecTransformGetAttribute](sectransformgetattribute%28____%29.md): Deprecated. Gets the current value of a transform attribute.
- [SecTransformCustomSetAttribute](sectransformcustomsetattribute%28________%29.md): Deprecated. Sets an attribute value on a custom transform.
- [SecTransformCustomGetAttribute](sectransformcustomgetattribute%28______%29.md): Deprecated. Gets an attribute value from a custom transform.
- [SecTranformCustomGetAttribute](sectranformcustomgetattribute.md): Deprecated. Gets an attribute value from a custom transform.
- [SecTransformPushbackAttribute](sectransformpushbackattribute%28______%29.md): Deprecated. Pushes a single value back for a specific attribute.
- [Transform Attributes](transform-attributes.md): Specify the attributes of a transform.
- [SecTransformAttributeRef](sectransformattribute.md): Deprecated. A direct reference to a security transform attribute.
- [SecTransformStringOrAttributeRef](sectransformstringorattribute.md): Deprecated. A type that may be either a string or an attribute reference.
- [SecTransformMetaAttributeType](sectransformmetaattributetype.md): Deprecated. The keys that describe the metadata attributes of transform attributes.

### Actions

- [SecTransformSetDataAction](sectransformsetdataaction%28______%29.md): Deprecated. Changes the way a custom transform processes data.
- [SecTransformSetAttributeAction](sectransformsetattributeaction%28________%29.md): Deprecated. Requests a callback when an attribute is set.
- [SecTransformSetTransformAction](sectransformsettransformaction%28______%29.md): Deprecated. Changes the way that a transform deals with transform lifecycle behaviors.
- [SecTransformActionBlock](sectransformactionblock.md): Deprecated. A block that overrides the default behavior of a custom transform.
- [SecTransformAttributeActionBlock](sectransformattributeactionblock.md): Deprecated. A block used to override the default attribute handling for when an attribute is set.
- [SecTransformDataBlock](sectransformdatablock.md): A block used to override the default data handling for a transform.
- [Actions](actions.md): Use actions to trigger particular behaviors.

### Piping

- [SecTransformConnectTransforms](sectransformconnecttransforms%28____________%29.md): Deprecated. Chains transforms together.

### Execution

- [SecTransformExecute](sectransformexecute%28____%29.md): Deprecated. Executes a transform or transform group synchronously.
- [SecTransformExecuteAsync](sectransformexecuteasync%28______%29.md): Deprecated. Executes transform or transform group asynchronously.
- [SecTransformNoData](sectransformnodata%28%29.md): Deprecated. Returns an object from inside a ProcessData override that says that although no data is being returned the transform is still active and awaiting data.
- [SecMessageBlock](secmessageblock.md): A block that delivers messages during asynchronous operations.

### Import and Export

- [SecTransformCopyExternalRepresentation](sectransformcopyexternalrepresentation%28__%29.md): Deprecated. Creates a dictionary that contains enough information to be able to recreate a transform.
- [SecTransformCreateFromExternalRepresentation](sectransformcreatefromexternalrepresentation%28____%29.md): Deprecated. Creates a transform instance from a dictionary of parameters.

### Reporting Errors

- [kSecTransformErrorDomain](ksectransformerrordomain.md): The domain of any error object created by a transform on failure.
- [Security Transform Error Codes](security-transform-error-codes.md): Recognize the error codes used in error objects created by a transform on failure.
- [kSecTransformPreviousErrorKey](ksectransformpreviouserrorkey.md): The key in an error’s `userInfo` dictionary whose value specifies the previous error when multiple errors occur during transform evaluation.
- [kSecTransformAbortOriginatorKey](ksectransformabortoriginatorkey.md): The key in an error’s `userInfo` dictionary whose value indicates the transform that caused the chain to abort.

## See Also

### Related Documentation

- [Security Transforms Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecTransformPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010801)
