> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeyimportexportparameters/alertprompt

# alertPrompt (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The prompt to display in the secure passphrase alert panel.

## Declaration

```swift
var alertPrompt: Unmanaged<CFString>
```

<a id="Discussion"></a>

## Discussion

When importing or exporting a key, if you set the [securePassphrase](../seckeyimportexportflags/securepassphrase.md) flag bit, you can optionally use this field to specify a string for the prompt that appears in the password panel.

# alertPrompt (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The prompt to display in the secure passphrase alert panel.

## Declaration

```objectivec
CFStringRef alertPrompt;
```

<a id="Discussion"></a>

## Discussion

When importing or exporting a key, if you set the [kSecKeySecurePassphrase](../seckeyimportexportflags/securepassphrase.md) flag bit, you can optionally use this field to specify a string for the prompt that appears in the password panel.
