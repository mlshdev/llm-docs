> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemimportexportkeyparameters/init(version:flags:passphrase:alerttitle:alertprompt:accessref:keyusage:keyattributes:)

# init(version:flags:passphrase:alertTitle:alertPrompt:accessRef:keyUsage:keyAttributes:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** macOS 10.0+

## Declaration

```swift
init(version: UInt32, flags: SecKeyImportExportFlags, passphrase: Unmanaged<CFTypeRef>?, alertTitle: Unmanaged<CFString>?, alertPrompt: Unmanaged<CFString>?, accessRef: Unmanaged<SecAccess>?, keyUsage: Unmanaged<CFArray>?, keyAttributes: Unmanaged<CFArray>?)
```
