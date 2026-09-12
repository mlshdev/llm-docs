> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/parentalcontroldictationandprofanity](https://developer.apple.com/documentation/devicemanagement/parentalcontroldictationandprofanity)

# ParentalControlDictationAndProfanity

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.9+ (deprecated in 10.13)

The payload that configures parental control for dictation and profanity.

## Declaration

```
object ParentalControlDictationAndProfanity
```

## Properties

- `Ironwood Allowed` — `boolean`: If `false`, disables dictation. Use `allowDictation` in Restrictions instead.

  Deprecated: macOS 10.13+  
  **Default:** `true`
- `Profanity Allowed` — `boolean`: If `false`, suppresses profanity. Use `forceAssistantProfanityFilter` in Restrictions instead.

  Deprecated: macOS 10.13+  
  **Default:** `true`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.ironwood.support` as the payload type.

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
- [ShareKit](sharekit.md): Deprecated. The payload that configures ShareKit.
- [SystemPreferences](systempreferences.md): Deprecated. The payload that configures the preference panes.
