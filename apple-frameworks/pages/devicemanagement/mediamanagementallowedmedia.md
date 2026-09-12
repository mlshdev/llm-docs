> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/mediamanagementallowedmedia](https://developer.apple.com/documentation/devicemanagement/mediamanagementallowedmedia)

# MediaManagementAllowedMedia

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+ (deprecated in 11.0)

The payload that configures media management.

## Declaration

```
object MediaManagementAllowedMedia
```

## Properties

- `logout-eject` — `MediaManagementAllowedMedia.Logout-eject`: The media type dictionary that defines volumes to eject when the user logs out.

  Deprecated: macOS 11+
- `mount-controls` — `MediaManagementAllowedMedia.Mount-controls`: The media type dictionary that controls volume mounting.

  Deprecated: macOS 11+
- `unmount-controls` — `MediaManagementAllowedMedia.Unmount-controls`: The media type dictionary that controls volume unmounting.

  Deprecated: macOS 11+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.systemuiserver` as the payload type.

This payload is deprecated as of macOS 11.

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

## Topics

### Objects

- [MediaManagementAllowedMedia.Logout-eject](mediamanagementallowedmedia/logout-eject-data.dictionary.md): Deprecated. A dictionary of volumes to eject when the user logs out.
- [MediaManagementAllowedMedia.Mount-controls](mediamanagementallowedmedia/mount-controls-data.dictionary.md): Deprecated. A dictionary of volumes to control volume mounting.
- [MediaManagementAllowedMedia.Unmount-controls](mediamanagementallowedmedia/unmount-controls-data.dictionary.md): Deprecated. A dictionary to control volume unmounting.

## See Also

### Deprecated

- [APN](apn.md): Deprecated. The payload that configures access point names.
- [FDERecoveryKeyRedirection](fderecoverykeyredirection.md): Deprecated. The payload that configures FileVault recovery key redirection.
- [ParentalControlDictationAndProfanity](parentalcontroldictationandprofanity.md): Deprecated. The payload that configures parental control for dictation and profanity.
- [ShareKit](sharekit.md): Deprecated. The payload that configures ShareKit.
- [SystemPreferences](systempreferences.md): Deprecated. The payload that configures the preference panes.
