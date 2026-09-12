> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/sharekit](https://developer.apple.com/documentation/devicemanagement/sharekit)

# ShareKit

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.9+ (deprecated in 10.12)

The payload that configures ShareKit.

## Declaration

```
object ShareKit
```

## Properties

- `SHKAllowedShareServices` — `[string]`: The list of plugin IDs that show up in the user’s Share menu. If this array exists, only these items are permitted.

  Deprecated: macOS 10.12+
- `SHKDeniedShareServices` — `[string]`: The list of plugin IDs that won’t show up in the user’s Share menu. This key is used only if there’s no `SHKAllowedShareServices` key.

  Deprecated: macOS 10.12+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.ShareKitHelper` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | macOS |
| Allow manual install | macOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | N/A |
| Allow multiple payloads | N/A |

## See Also

### Deprecated

- [APN](apn.md): Deprecated. The payload that configures access point names.
- [FDERecoveryKeyRedirection](fderecoverykeyredirection.md): Deprecated. The payload that configures FileVault recovery key redirection.
- [MediaManagementAllowedMedia](mediamanagementallowedmedia.md): Deprecated. The payload that configures media management.
- [ParentalControlDictationAndProfanity](parentalcontroldictationandprofanity.md): Deprecated. The payload that configures parental control for dictation and profanity.
- [SystemPreferences](systempreferences.md): Deprecated. The payload that configures the preference panes.
