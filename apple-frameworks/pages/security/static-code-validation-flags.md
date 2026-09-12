> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/static-code-validation-flags](https://developer.apple.com/documentation/security/static-code-validation-flags)

# Static Code Validation Flags (Swift)

**Framework:** Security  
**Kind:** API Collection

Use these supplemental flags to test the validity of a static code signature.

<a id="overview"></a>

## Overview

These flags supplement the flags described in [SecCSFlags](seccsflags.md). Use these additional constants with the flags parameter of the [SecStaticCodeCheckValidity(\_:\_:\_:)](secstaticcodecheckvalidity%28______%29.md) and [SecStaticCodeCheckValidityWithErrors(\_:\_:\_:\_:)](secstaticcodecheckvaliditywitherrors%28________%29.md) functions to control the validation of code in the file system.

## Topics

### Constants

- [kSecCSCheckAllArchitectures](kseccscheckallarchitectures.md): For multi-architecture (universal) Mach-O programs, validate all architectures included.
- [kSecCSDoNotValidateExecutable](kseccsdonotvalidateexecutable.md): Do not validate the contents of the main executable.
- [kSecCSDoNotValidateResources](kseccsdonotvalidateresources.md): Do not validate the presence and contents of all bundle resources (if any).
- [kSecCSBasicValidateOnly](kseccsbasicvalidateonly.md): Do not validate either the main executable or the bundle resources, if any.
- [kSecCSCheckNestedCode](kseccschecknestedcode.md): For code in bundle form, locate and recursively check embedded code.
- [kSecCSStrictValidate](kseccsstrictvalidate.md): Perform additional checks to ensure the validity of code in bundle form.
- [kSecCSFullReport](kseccsfullreport.md)
- [kSecCSCheckGatekeeperArchitectures](kseccscheckgatekeeperarchitectures.md)
- [kSecCSRestrictSymlinks](kseccsrestrictsymlinks.md)
- [kSecCSRestrictToAppLike](kseccsrestricttoapplike.md)
- [kSecCSRestrictSidebandData](kseccsrestrictsidebanddata.md)
- [kSecCSUseSoftwareSigningCert](kseccsusesoftwaresigningcert.md)
- [kSecCSValidatePEH](kseccsvalidatepeh.md)
- [kSecCSSingleThreaded](kseccssinglethreaded.md)

# Static Code Validation Flags (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Use these supplemental flags to test the validity of a static code signature.

<a id="overview"></a>

## Overview

These flags supplement the flags described in [SecCSFlags](seccsflags.md). Use these additional constants with the flags parameter of the [SecStaticCodeCheckValidity](secstaticcodecheckvalidity%28______%29.md) and [SecStaticCodeCheckValidityWithErrors](secstaticcodecheckvaliditywitherrors%28________%29.md) functions to control the validation of code in the file system.

## Topics

### Constants

- [kSecCSCheckAllArchitectures](kseccscheckallarchitectures.md): For multi-architecture (universal) Mach-O programs, validate all architectures included.
- [kSecCSDoNotValidateExecutable](kseccsdonotvalidateexecutable.md): Do not validate the contents of the main executable.
- [kSecCSDoNotValidateResources](kseccsdonotvalidateresources.md): Do not validate the presence and contents of all bundle resources (if any).
- [kSecCSBasicValidateOnly](kseccsbasicvalidateonly.md): Do not validate either the main executable or the bundle resources, if any.
- [kSecCSCheckNestedCode](kseccschecknestedcode.md): For code in bundle form, locate and recursively check embedded code.
- [kSecCSStrictValidate](kseccsstrictvalidate.md): Perform additional checks to ensure the validity of code in bundle form.
- [kSecCSFullReport](kseccsfullreport.md)
- [kSecCSCheckGatekeeperArchitectures](kseccscheckgatekeeperarchitectures.md)
- [kSecCSRestrictSymlinks](kseccsrestrictsymlinks.md)
- [kSecCSRestrictToAppLike](kseccsrestricttoapplike.md)
- [kSecCSRestrictSidebandData](kseccsrestrictsidebanddata.md)
- [kSecCSUseSoftwareSigningCert](kseccsusesoftwaresigningcert.md)
- [kSecCSValidatePEH](kseccsvalidatepeh.md)
- [kSecCSSingleThreaded](kseccssinglethreaded.md)
