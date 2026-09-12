> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/ondiskcodesigningflags/valueset](https://developer.apple.com/documentation/lightweightcoderequirements/ondiskcodesigningflags/valueset)

# OnDiskCodeSigningFlags.ValueSet

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Code signing flags that can be set on code on disk.

## Declaration

```swift
struct ValueSet
```

## Topics

### Type Properties

- [isAdhocSigned](valueset/isadhocsigned.md): The code is adhoc signed i.e. it contains a code directory and page hashes but no CMS signature.
- [isCertificateExpirationEnforced](valueset/iscertificateexpirationenforced.md): Flag indicating that the signature on this code should be treated as invalid if the certificate it was signed with expired.
- [isCodeSignatureRequiredForAllExecutableCode](valueset/iscodesignaturerequiredforallexecutablecode.md): Flag indicating that the process should not allow code to execute from memory if that memory is not associated with a code signature.
- [isDynamicLinkerPolicyHardened](valueset/isdynamiclinkerpolicyhardened.md): Flag indicating that the process should get hardened dynamic linker policies.
- [isHardenedRuntimeEnforced](valueset/ishardenedruntimeenforced.md): Flag indicating that the process has enabled the Hardened Runtime
- [isLibraryValidationRequired](valueset/islibraryvalidationrequired.md): Flag indicating that the process should enforce Library Validation.
- [isSignedByLinker](valueset/issignedbylinker.md): Flag indicating that the code was signed by the linker and not an invocation of codesign.
- [signalsBusErrorOnCodeSigningFailure](valueset/signalsbuserroroncodesigningfailure.md): Code signing failures on page-in should be rejected as SIGBUS errors.
- [terminatesOnCodeSigningFailure](valueset/terminatesoncodesigningfailure.md): Code signing failures on page in should cause the process to be terminated.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
