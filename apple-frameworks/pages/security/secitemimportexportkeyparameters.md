> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemimportexportkeyparameters](https://developer.apple.com/documentation/security/secitemimportexportkeyparameters)

# SecItemImportExportKeyParameters (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

The import/export parameter structure.

## Declaration

```swift
struct SecItemImportExportKeyParameters
```

<a id="overview"></a>

## Overview

Use this structure as the `keyParams` input parameter to the [SecItemExport(\_:\_:\_:\_:\_:)](secitemexport%28__________%29.md) and the [SecItemImport(\_:\_:\_:\_:\_:\_:\_:\_:)](secitemimport%28________________%29.md) functions.

## Topics

### Instance Properties

- [accessRef](secitemimportexportkeyparameters/accessref.md): Specifies the initial access controls of imported private keys.
- [alertPrompt](secitemimportexportkeyparameters/alertprompt.md): The prompt to display in the secure passphrase alert panel.
- [alertTitle](secitemimportexportkeyparameters/alerttitle.md): The title to display in the secure passphrase alert panel.
- [flags](secitemimportexportkeyparameters/flags.md): The bitwise `OR` of zero or more key import/export flags.
- [keyAttributes](secitemimportexportkeyparameters/keyattributes.md): An array containing zero or more key attributes for an imported key.
- [keyUsage](secitemimportexportkeyparameters/keyusage.md): An array containing usage attributes applied to a key on import.
- [passphrase](secitemimportexportkeyparameters/passphrase.md): The password to use during key import or export.
- [version](secitemimportexportkeyparameters/version.md): The version of this structure.

### Initializers

- [init()](secitemimportexportkeyparameters/init%28%29.md)
- [init(version:flags:passphrase:alertTitle:alertPrompt:accessRef:keyUsage:keyAttributes:)](secitemimportexportkeyparameters/init%28version_flags_passphrase_alerttitle_alertprompt_accessref_keyusage_keyattributes_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# SecItemImportExportKeyParameters (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

The import/export parameter structure.

## Declaration

```objectivec
typedef struct { ... } SecItemImportExportKeyParameters;
```

<a id="overview"></a>

## Overview

Use this structure as the `keyParams` input parameter to the [SecItemExport](secitemexport%28__________%29.md) and the [SecItemImport](secitemimport%28________________%29.md) functions.

## Topics

### Instance Properties

- [accessRef](secitemimportexportkeyparameters/accessref.md): Specifies the initial access controls of imported private keys.
- [alertPrompt](secitemimportexportkeyparameters/alertprompt.md): The prompt to display in the secure passphrase alert panel.
- [alertTitle](secitemimportexportkeyparameters/alerttitle.md): The title to display in the secure passphrase alert panel.
- [flags](secitemimportexportkeyparameters/flags.md): The bitwise `OR` of zero or more key import/export flags.
- [keyAttributes](secitemimportexportkeyparameters/keyattributes.md): An array containing zero or more key attributes for an imported key.
- [keyUsage](secitemimportexportkeyparameters/keyusage.md): An array containing usage attributes applied to a key on import.
- [passphrase](secitemimportexportkeyparameters/passphrase.md): The password to use during key import or export.
- [version](secitemimportexportkeyparameters/version.md): The version of this structure.
