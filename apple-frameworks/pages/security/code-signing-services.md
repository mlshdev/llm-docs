> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/code-signing-services](https://developer.apple.com/documentation/security/code-signing-services)

# Code Signing Services (Swift)

**Framework:** Security  
**Kind:** API Collection

Examine and validate signed code running on the system.

<a id="Overview"></a>

## Overview

Code signing is a macOS security technology that you use to certify that an app was created by you. Once an app is signed, the system can detect any change to the app—whether the change is introduced accidentally or by malicious code. You can control how your signed code loads signed plug-ins and other signed code without invalidating the signatures of the host code or of the guest (dynamically loaded) code.

You work with code objects that represent uniquely identified elements of running code in the system. In addition to UNIX processes, these elements can include scripts, applets, widgets, and so forth. You also work with *static* code objects that represent code in the file system. Static code includes applications, tools, frameworks, plug-ins, scripts, and so on. Generally, a code object has a specific static code object from which it originates and that holds its static signing data. The reverse, however, is not true—given a static code object, it is not possible to find, enumerate, or control any code object that originated from it.

## Topics

### Code Objects

Work with signed code loaded into memory.

- [SecCode](seccode.md): A code object representing signed code running on the system.
- [SecCodeCopySelf(\_:\_:)](seccodecopyself%28____%29.md): Retrieves the code object for the code making the call.
- [SecCSFlags](seccsflags.md): Values that can be used in the `flags` parameter to most code signing functions.
- [SecCodeGetTypeID()](seccodegettypeid%28%29.md): Returns the unique identifier of the opaque type to which a code object belongs.

### Static Code

Work with signed code on disk.

- [SecStaticCode](secstaticcode.md): A static code object representing signed code on disk.
- [SecStaticCodeCreateWithPath(\_:\_:\_:)](secstaticcodecreatewithpath%28______%29.md): Creates a static code object representing the code at a specified file system path.
- [SecStaticCodeCreateWithPathAndAttributes(\_:\_:\_:\_:)](secstaticcodecreatewithpathandattributes%28________%29.md): Creates a static code object representing the code at a specified file system path using an attributes dictionary.
- [Code Attributes](code-attributes.md): Specify these keys from the attribute dictionary when you create a static code instance.
- [SecStaticCodeGetTypeID()](secstaticcodegettypeid%28%29.md): Returns the unique identifier of the opaque type to which a static code object belongs.

### Working with Code Objects

- [SecCodeCopyPath(\_:\_:\_:)](seccodecopypath%28______%29.md): Retrieves the location on disk of signed code, given a code or static code object.
- [SecCodeCopyStaticCode(\_:\_:\_:)](seccodecopystaticcode%28______%29.md): Returns a static code object representing the on-disk version of the given running code.
- [Code Signing Architecture Flags](code-signing-architecture-flags.md): Use these supplemental flags to get static code.

### Code Signatures

- [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md): Retrieves various pieces of information from a code signature.
- [Code Signing Information Flags](code-signing-information-flags.md): Use these supplemental flags to retrieve signing information.
- [Signing Information Dictionary Keys](signing-information-dictionary-keys.md): Use these keys from the information dictionary when you retrieve information from a code signature.
- [SecCodeSignatureFlags](seccodesignatureflags.md): Specify option flags that can be embedded in a code signature during signing and that govern the use of the signature.
- [SecCSDigestAlgorithm](seccsdigestalgorithm.md): The list of digest algorithms available for code signatures.

### Code Requirements

- [Applying Code Requirements](applying-code-requirements.md): Manage the code requirements that apply to your signed code.
- [SecCodeCopyDesignatedRequirement(\_:\_:\_:)](seccodecopydesignatedrequirement%28______%29.md): Retrieves the designated code requirement of signed code.
- [SecRequirement](secrequirement.md): A code requirement object.
- [SecRequirementGetTypeID()](secrequirementgettypeid%28%29.md): Returns the unique identifier of the opaque type to which a code requirement object belongs.
- [SecRequirementType](secrequirementtype.md): An enumeration indicating different types of internal requirements for code.

### Code Requirements as Data

- [SecRequirementCopyData(\_:\_:\_:)](secrequirementcopydata%28______%29.md): Extracts a binary form of a code requirement from a code requirement object.
- [SecRequirementCreateWithData(\_:\_:\_:)](secrequirementcreatewithdata%28______%29.md): Creates a code requirement object from the binary form of a code requirement.

### Code Requirements as Text

- [SecRequirementCopyString(\_:\_:\_:)](secrequirementcopystring%28______%29.md): Converts a code requirement object into text form.
- [SecRequirementCreateWithString(\_:\_:\_:)](secrequirementcreatewithstring%28______%29.md): Creates a code requirement object by compiling a valid text representation of a code requirement.
- [SecRequirementCreateWithStringAndErrors(\_:\_:\_:\_:)](secrequirementcreatewithstringanderrors%28________%29.md): Creates a code requirement object by compiling a valid text representation of a code requirement and returns detailed error information in the case of failure.

### Guest Code

- [Hosting Guest Code](hosting-guest-code.md): Securely launch and manage plug-ins and other executable entities, known as guest code, from within your app acting as a host.
- [SecCodeCopyGuestWithAttributes(\_:\_:\_:\_:)](seccodecopyguestwithattributes%28________%29.md): Asks a code host to identify one of its guests given the type and value of specific attributes of the guest code.
- [Null Guest Handle](null-guest-handle.md): Use this special value to stand in for a null guest object.
- [SecCodeStatus](seccodestatus.md): Operational flags attached by code signing services to running code.
- [Guest Creation Flags](guest-creation-flags.md): Use these supplemental flags to create a guest object.
- [Guest Attribute Dictionary Keys](guest-attribute-dictionary-keys.md): Specify attributes of guest code.
- [SecGuestRef](secguestref.md): A reference to a guest object, which identifies a particular block of guest code in the context of its code signing host.

### Guest Management

- [SecCodeCopyHost(\_:\_:\_:)](seccodecopyhost%28______%29.md): Retrieves the code object for the host of specified guest code.
- [SecCodeMapMemory(\_:\_:)](seccodemapmemory%28____%29.md): Asks the kernel to accept the signing information currently attached to a code object and uses it to validate memory page-ins.

### Tasks

- [SecTaskCreateFromSelf(\_:)](sectaskcreatefromself%28__%29.md): Creates a task object for the current task.
- [SecTaskCreateWithAuditToken(\_:\_:)](sectaskcreatewithaudittoken%28____%29.md): Creates a task object for the task that sent the Mach message represented by the audit token.
- [SecTask](sectask.md): The Core Foundation type representing a task.
- [SecTaskGetTypeID()](sectaskgettypeid%28%29.md): Returns the unique identifier of the opaque type to which a task object belongs.
- [SecTaskCopySigningIdentifier(\_:\_:)](sectaskcopysigningidentifier%28____%29.md): Returns the value of the code signing identifier.
- [SecTaskCopyValueForEntitlement(\_:\_:\_:)](sectaskcopyvalueforentitlement%28______%29.md): Returns the value of a single entitlement for the represented task.
- [SecTaskCopyValuesForEntitlements(\_:\_:\_:)](sectaskcopyvaluesforentitlements%28______%29.md): Returns the values of multiple entitlements for the represented task.

### Code Signature Validity

- [SecCodeCheckValidity(\_:\_:\_:)](seccodecheckvalidity%28______%29.md): Performs dynamic validation of signed code.
- [SecCodeCheckValidityWithErrors(\_:\_:\_:\_:)](seccodecheckvaliditywitherrors%28________%29.md): Performs dynamic validation of signed code and returns detailed error information in the case of failure.
- [SecStaticCodeCheckValidity(\_:\_:\_:)](secstaticcodecheckvalidity%28______%29.md): Validates a static code object.
- [SecStaticCodeCheckValidityWithErrors(\_:\_:\_:\_:)](secstaticcodecheckvaliditywitherrors%28________%29.md): Performs static validation of static signed code and returns detailed error information in the case of failure.
- [Static Code Validation Flags](static-code-validation-flags.md): Use these supplemental flags to test the validity of a static code signature.

### Result Codes

- [Code Signing Services Result Codes](code-signing-services-result-codes.md): Recognize result codes specific to the code signing services API.
- [User Info Dictionary Error Keys](user-info-dictionary-error-keys.md): Recognize the keys of the user info dictionary provided by functions that return error objects.

## See Also

### Related Documentation

- [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005929)

# Code Signing Services (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Examine and validate signed code running on the system.

<a id="Overview"></a>

## Overview

Code signing is a macOS security technology that you use to certify that an app was created by you. Once an app is signed, the system can detect any change to the app—whether the change is introduced accidentally or by malicious code. You can control how your signed code loads signed plug-ins and other signed code without invalidating the signatures of the host code or of the guest (dynamically loaded) code.

You work with code objects that represent uniquely identified elements of running code in the system. In addition to UNIX processes, these elements can include scripts, applets, widgets, and so forth. You also work with *static* code objects that represent code in the file system. Static code includes applications, tools, frameworks, plug-ins, scripts, and so on. Generally, a code object has a specific static code object from which it originates and that holds its static signing data. The reverse, however, is not true—given a static code object, it is not possible to find, enumerate, or control any code object that originated from it.

## Topics

### Code Objects

Work with signed code loaded into memory.

- [SecCodeRef](seccode.md): A code object representing signed code running on the system.
- [SecCodeCopySelf](seccodecopyself%28____%29.md): Retrieves the code object for the code making the call.
- [SecCSFlags](seccsflags.md): Values that can be used in the `flags` parameter to most code signing functions.
- [SecCodeGetTypeID](seccodegettypeid%28%29.md): Returns the unique identifier of the opaque type to which a code object belongs.

### Static Code

Work with signed code on disk.

- [SecStaticCodeRef](secstaticcode.md): A static code object representing signed code on disk.
- [SecStaticCodeCreateWithPath](secstaticcodecreatewithpath%28______%29.md): Creates a static code object representing the code at a specified file system path.
- [SecStaticCodeCreateWithPathAndAttributes](secstaticcodecreatewithpathandattributes%28________%29.md): Creates a static code object representing the code at a specified file system path using an attributes dictionary.
- [Code Attributes](code-attributes.md): Specify these keys from the attribute dictionary when you create a static code instance.
- [SecStaticCodeGetTypeID](secstaticcodegettypeid%28%29.md): Returns the unique identifier of the opaque type to which a static code object belongs.

### Working with Code Objects

- [SecCodeCopyPath](seccodecopypath%28______%29.md): Retrieves the location on disk of signed code, given a code or static code object.
- [SecCodeCopyStaticCode](seccodecopystaticcode%28______%29.md): Returns a static code object representing the on-disk version of the given running code.
- [Code Signing Architecture Flags](code-signing-architecture-flags.md): Use these supplemental flags to get static code.

### Code Signatures

- [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md): Retrieves various pieces of information from a code signature.
- [Code Signing Information Flags](code-signing-information-flags.md): Use these supplemental flags to retrieve signing information.
- [Signing Information Dictionary Keys](signing-information-dictionary-keys.md): Use these keys from the information dictionary when you retrieve information from a code signature.
- [SecCodeSignatureFlags](seccodesignatureflags.md): Specify option flags that can be embedded in a code signature during signing and that govern the use of the signature.
- [SecCSDigestAlgorithm](seccsdigestalgorithm.md): The list of digest algorithms available for code signatures.

### Code Requirements

- [Applying Code Requirements](applying-code-requirements.md): Manage the code requirements that apply to your signed code.
- [SecCodeCopyDesignatedRequirement](seccodecopydesignatedrequirement%28______%29.md): Retrieves the designated code requirement of signed code.
- [SecRequirementRef](secrequirement.md): A code requirement object.
- [SecRequirementGetTypeID](secrequirementgettypeid%28%29.md): Returns the unique identifier of the opaque type to which a code requirement object belongs.
- [SecRequirementType](secrequirementtype.md): An enumeration indicating different types of internal requirements for code.

### Code Requirements as Data

- [SecRequirementCopyData](secrequirementcopydata%28______%29.md): Extracts a binary form of a code requirement from a code requirement object.
- [SecRequirementCreateWithData](secrequirementcreatewithdata%28______%29.md): Creates a code requirement object from the binary form of a code requirement.

### Code Requirements as Text

- [SecRequirementCopyString](secrequirementcopystring%28______%29.md): Converts a code requirement object into text form.
- [SecRequirementCreateWithString](secrequirementcreatewithstring%28______%29.md): Creates a code requirement object by compiling a valid text representation of a code requirement.
- [SecRequirementCreateWithStringAndErrors](secrequirementcreatewithstringanderrors%28________%29.md): Creates a code requirement object by compiling a valid text representation of a code requirement and returns detailed error information in the case of failure.

### Guest Code

- [Hosting Guest Code](hosting-guest-code.md): Securely launch and manage plug-ins and other executable entities, known as guest code, from within your app acting as a host.
- [SecHostCreateGuest](sechostcreateguest.md): Deprecated. Creates a new guest and describes its initial properties.
- [SecHostSetGuestStatus](sechostsetgueststatus.md): Deprecated. Updates the status and attributes of a particular guest.
- [SecCodeCopyGuestWithAttributes](seccodecopyguestwithattributes%28________%29.md): Asks a code host to identify one of its guests given the type and value of specific attributes of the guest code.
- [Null Guest Handle](null-guest-handle.md): Use this special value to stand in for a null guest object.
- [SecCodeStatus](seccodestatus.md): Operational flags attached by code signing services to running code.
- [Guest Creation Flags](guest-creation-flags.md): Use these supplemental flags to create a guest object.
- [Guest Attribute Dictionary Keys](guest-attribute-dictionary-keys.md): Specify attributes of guest code.
- [SecGuestRef](secguestref.md): A reference to a guest object, which identifies a particular block of guest code in the context of its code signing host.

### Guest Management

- [SecCodeCopyHost](seccodecopyhost%28______%29.md): Retrieves the code object for the host of specified guest code.
- [SecHostRemoveGuest](sechostremoveguest.md): Deprecated. Removes a guest from a host.
- [SecHostSelectGuest](sechostselectguest.md): Deprecated. Makes the calling thread the proxy for a specified guest.
- [SecHostSelectedGuest](sechostselectedguest.md): Deprecated. Retrieves the handle for the guest currently selected for the calling thread.
- [SecHostSetHostingPort](sechostsethostingport.md): Deprecated. Tells code signing services that the calling code will directly respond to hosting inquiries over the given port.
- [SecCodeMapMemory](seccodemapmemory%28____%29.md): Asks the kernel to accept the signing information currently attached to a code object and uses it to validate memory page-ins.

### Tasks

- [SecTaskCreateFromSelf](sectaskcreatefromself%28__%29.md): Creates a task object for the current task.
- [SecTaskCreateWithAuditToken](sectaskcreatewithaudittoken%28____%29.md): Creates a task object for the task that sent the Mach message represented by the audit token.
- [SecTaskRef](sectask.md): The Core Foundation type representing a task.
- [SecTaskGetTypeID](sectaskgettypeid%28%29.md): Returns the unique identifier of the opaque type to which a task object belongs.
- [SecTaskCopySigningIdentifier](sectaskcopysigningidentifier%28____%29.md): Returns the value of the code signing identifier.
- [SecTaskCopyValueForEntitlement](sectaskcopyvalueforentitlement%28______%29.md): Returns the value of a single entitlement for the represented task.
- [SecTaskCopyValuesForEntitlements](sectaskcopyvaluesforentitlements%28______%29.md): Returns the values of multiple entitlements for the represented task.

### Code Signature Validity

- [SecCodeCheckValidity](seccodecheckvalidity%28______%29.md): Performs dynamic validation of signed code.
- [SecCodeCheckValidityWithErrors](seccodecheckvaliditywitherrors%28________%29.md): Performs dynamic validation of signed code and returns detailed error information in the case of failure.
- [SecStaticCodeCheckValidity](secstaticcodecheckvalidity%28______%29.md): Validates a static code object.
- [SecStaticCodeCheckValidityWithErrors](secstaticcodecheckvaliditywitherrors%28________%29.md): Performs static validation of static signed code and returns detailed error information in the case of failure.
- [Static Code Validation Flags](static-code-validation-flags.md): Use these supplemental flags to test the validity of a static code signature.

### Result Codes

- [Code Signing Services Result Codes](code-signing-services-result-codes.md): Recognize result codes specific to the code signing services API.
- [User Info Dictionary Error Keys](user-info-dictionary-error-keys.md): Recognize the keys of the user info dictionary provided by functions that return error objects.

## See Also

### Related Documentation

- [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005929)
