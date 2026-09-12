> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemimportexportkeyparameters/alerttitle](https://developer.apple.com/documentation/security/secitemimportexportkeyparameters/alerttitle)

# alertTitle (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The title to display in the secure passphrase alert panel.

## Declaration

```swift
var alertTitle: Unmanaged<CFString>?
```

<a id="Discussion"></a>

## Discussion

When importing or exporting a key, if you set the [securePassphrase](../seckeyimportexportflags/securepassphrase.md) flag bit, you can optionally use this field to specify a string for the password panel’s title bar.

# alertTitle (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The title to display in the secure passphrase alert panel.

## Declaration

```objectivec
CFStringRef alertTitle;
```

<a id="Discussion"></a>

## Discussion

When importing or exporting a key, if you set the [kSecKeySecurePassphrase](../seckeyimportexportflags/securepassphrase.md) flag bit, you can optionally use this field to specify a string for the password panel’s title bar.
