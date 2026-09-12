> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyimportexportparameters/init(version:flags:passphrase:alerttitle:alertprompt:accessref:keyusage:keyattributes:)](https://developer.apple.com/documentation/security/seckeyimportexportparameters/init(version:flags:passphrase:alerttitle:alertprompt:accessref:keyusage:keyattributes:))

# init(version:flags:passphrase:alertTitle:alertPrompt:accessRef:keyUsage:keyAttributes:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates a new import/export parameter structure.

## Declaration

```swift
init(version: UInt32, flags: SecKeyImportExportFlags, passphrase: Unmanaged<CFTypeRef>?, alertTitle: Unmanaged<CFString>, alertPrompt: Unmanaged<CFString>, accessRef: Unmanaged<SecAccess>?, keyUsage: CSSM_KEYUSE, keyAttributes: CSSM_KEYATTR_FLAGS)
```
