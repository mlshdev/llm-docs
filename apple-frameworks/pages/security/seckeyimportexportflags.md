> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyimportexportflags](https://developer.apple.com/documentation/security/seckeyimportexportflags)

# SecKeyImportExportFlags (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

The import/export parameter structure flags.

## Declaration

```swift
struct SecKeyImportExportFlags
```

<a id="overview"></a>

## Overview

Use an instance of this structure to set the [flags](secitemimportexportkeyparameters/flags.md) property in the [SecItemImportExportKeyParameters](secitemimportexportkeyparameters.md) import/export structure.

## Topics

### Initializers

- [init(rawValue:)](seckeyimportexportflags/init%28rawvalue_%29.md): Initialize a key import/export flag structure.

### Constants

- [importOnlyOne](seckeyimportexportflags/importonlyone.md): A flag that you set to prevent importing more than one private key.
- [securePassphrase](seckeyimportexportflags/securepassphrase.md): A flag that indicates the user should be prompted for a passphrase on import or export.
- [noAccessControl](seckeyimportexportflags/noaccesscontrol.md): A flag that indicates imported private keys have no access object attached to them.

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

# SecKeyImportExportFlags (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The import/export parameter structure flags.

## Declaration

```objectivec
enum SecKeyImportExportFlags : uint32_t;
```

<a id="overview"></a>

## Overview

Use an instance of this structure to set the [flags](secitemimportexportkeyparameters/flags.md) property in the [SecItemImportExportKeyParameters](secitemimportexportkeyparameters.md) import/export structure.

## Topics

### Constants

- [kSecKeyImportOnlyOne](seckeyimportexportflags/importonlyone.md): A flag that you set to prevent importing more than one private key.
- [kSecKeySecurePassphrase](seckeyimportexportflags/securepassphrase.md): A flag that indicates the user should be prompted for a passphrase on import or export.
- [kSecKeyNoAccessControl](seckeyimportexportflags/noaccesscontrol.md): A flag that indicates imported private keys have no access object attached to them.
