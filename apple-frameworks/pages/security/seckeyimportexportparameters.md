> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyimportexportparameters](https://developer.apple.com/documentation/security/seckeyimportexportparameters)

# SecKeyImportExportParameters (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

The legacy import/export parameter structure.

> This structure is passed in the `keyParams` parameter as input to the deprecated [SecKeychainItemExport](seckeychainitemexport.md) and [SecKeychainItemImport](seckeychainitemimport.md) functions. Use [SecItemExport(\_:\_:\_:\_:\_:)](secitemexport%28__________%29.md) and [SecItemImport(\_:\_:\_:\_:\_:\_:\_:\_:)](secitemimport%28________________%29.md) instead. The newer functions rely on the similar but distinct [SecItemImportExportKeyParameters](secitemimportexportkeyparameters.md) structure as input rather than the structure defined here.

## Declaration

```swift
struct SecKeyImportExportParameters
```

<a id="overview"></a>

## Overview

PKCS12 is an abbreviation for Public-Key Cryptography Standard # 12. This standard, by RSA Security, provides a format for external representation of keys and certificates and is described in *PKCS 12 v1.0: Personal Information Exchange Syntax*.

## Topics

### Instance Properties

- [accessRef](seckeyimportexportparameters/accessref.md): Specifies the initial access controls of imported private keys.
- [alertPrompt](seckeyimportexportparameters/alertprompt.md): The prompt to display in the secure passphrase alert panel.
- [alertTitle](seckeyimportexportparameters/alerttitle.md): The title to display in the secure passphrase alert panel.
- [flags](seckeyimportexportparameters/flags.md): The bitwise `OR` of zero or more key import/export flags.
- [keyAttributes](seckeyimportexportparameters/keyattributes.md): A word of bits constituting the low-level attribute flags for imported keys.
- [keyUsage](seckeyimportexportparameters/keyusage.md): A word of bits constituting the low-level use flags for imported keys.
- [passphrase](seckeyimportexportparameters/passphrase.md): The password to use during key import or export.
- [version](seckeyimportexportparameters/version.md): The version of this structure.

### Initializers

- [init(version:flags:passphrase:alertTitle:alertPrompt:accessRef:keyUsage:keyAttributes:)](seckeyimportexportparameters/init%28version_flags_passphrase_alerttitle_alertprompt_accessref_keyusage_keyattributes_%29.md): Creates a new import/export parameter structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# SecKeyImportExportParameters (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

The legacy import/export parameter structure.

> This structure is passed in the `keyParams` parameter as input to the deprecated [SecKeychainItemExport](seckeychainitemexport.md) and [SecKeychainItemImport](seckeychainitemimport.md) functions. Use [SecItemExport](secitemexport%28__________%29.md) and [SecItemImport](secitemimport%28________________%29.md) instead. The newer functions rely on the similar but distinct [SecItemImportExportKeyParameters](secitemimportexportkeyparameters.md) structure as input rather than the structure defined here.

## Declaration

```objectivec
typedef struct { ... } SecKeyImportExportParameters;
```

<a id="overview"></a>

## Overview

PKCS12 is an abbreviation for Public-Key Cryptography Standard # 12. This standard, by RSA Security, provides a format for external representation of keys and certificates and is described in *PKCS 12 v1.0: Personal Information Exchange Syntax*.

## Topics

### Instance Properties

- [accessRef](seckeyimportexportparameters/accessref.md): Specifies the initial access controls of imported private keys.
- [alertPrompt](seckeyimportexportparameters/alertprompt.md): The prompt to display in the secure passphrase alert panel.
- [alertTitle](seckeyimportexportparameters/alerttitle.md): The title to display in the secure passphrase alert panel.
- [flags](seckeyimportexportparameters/flags.md): The bitwise `OR` of zero or more key import/export flags.
- [keyAttributes](seckeyimportexportparameters/keyattributes.md): A word of bits constituting the low-level attribute flags for imported keys.
- [keyUsage](seckeyimportexportparameters/keyusage.md): A word of bits constituting the low-level use flags for imported keys.
- [passphrase](seckeyimportexportparameters/passphrase.md): The password to use during key import or export.
- [version](seckeyimportexportparameters/version.md): The version of this structure.
