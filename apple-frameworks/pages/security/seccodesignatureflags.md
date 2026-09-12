> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodesignatureflags](https://developer.apple.com/documentation/security/seccodesignatureflags)

# SecCodeSignatureFlags (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify option flags that can be embedded in a code signature during signing and that govern the use of the signature.

## Declaration

```swift
struct SecCodeSignatureFlags
```

<a id="overview"></a>

## Overview

Some of these flags can be set through the `codesign(1)` command’s `--options` argument and some are set implicitly based on signing circumstances. The flags here appear as the value associated with the [kSecCodeInfoFlags](kseccodeinfoflags.md) key in the signing information dictionary. See [Signing Information Dictionary Keys](signing-information-dictionary-keys.md).

## Topics

### Initializers

- [init(rawValue:)](seccodesignatureflags/init%28rawvalue_%29.md)

### Constants

- [host](seccodesignatureflags/host.md): May host guest code.
- [adhoc](seccodesignatureflags/adhoc.md): Must be used without a signing identity.
- [forceHard](seccodesignatureflags/forcehard.md): Always set the [hard](seccodestatus/hard.md) status flag on launch.
- [forceKill](seccodesignatureflags/forcekill.md): Always set the termination status flag on launch.
- [forceExpiration](seccodesignatureflags/forceexpiration.md): Always set the [considerExpiration](seccsflags/considerexpiration.md) flag when validating the code.
- [enforcement](seccodesignatureflags/enforcement.md): Enforce code signing.
- [libraryValidation](seccodesignatureflags/libraryvalidation.md): Require library validation.
- [restrict](seccodesignatureflags/restrict.md): Restrict dyld loading.
- [runtime](seccodesignatureflags/runtime.md): Apply runtime hardening policies as required by the hardened runtime version.

### Type Properties

- [linkerSigned](seccodesignatureflags/linkersigned.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecCodeSignatureFlags (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify option flags that can be embedded in a code signature during signing and that govern the use of the signature.

## Declaration

```objectivec
enum SecCodeSignatureFlags : uint32_t;
```

<a id="overview"></a>

## Overview

Some of these flags can be set through the `codesign(1)` command’s `--options` argument and some are set implicitly based on signing circumstances. The flags here appear as the value associated with the [kSecCodeInfoFlags](kseccodeinfoflags.md) key in the signing information dictionary. See [Signing Information Dictionary Keys](signing-information-dictionary-keys.md).

## Topics

### Constants

- [kSecCodeSignatureHost](seccodesignatureflags/host.md): May host guest code.
- [kSecCodeSignatureAdhoc](seccodesignatureflags/adhoc.md): Must be used without a signing identity.
- [kSecCodeSignatureForceHard](seccodesignatureflags/forcehard.md): Always set the [kSecCodeStatusHard](seccodestatus/hard.md) status flag on launch.
- [kSecCodeSignatureForceKill](seccodesignatureflags/forcekill.md): Always set the termination status flag on launch.
- [kSecCodeSignatureForceExpiration](seccodesignatureflags/forceexpiration.md): Always set the [kSecCSConsiderExpiration](seccsflags/considerexpiration.md) flag when validating the code.
- [kSecCodeSignatureEnforcement](seccodesignatureflags/enforcement.md): Enforce code signing.
- [kSecCodeSignatureLibraryValidation](seccodesignatureflags/libraryvalidation.md): Require library validation.
- [kSecCodeSignatureRestrict](seccodesignatureflags/restrict.md): Restrict dyld loading.
- [kSecCodeSignatureRuntime](seccodesignatureflags/runtime.md): Apply runtime hardening policies as required by the hardened runtime version.

### Type Properties

- [kSecCodeSignatureLinkerSigned](seccodesignatureflags/linkersigned.md)
