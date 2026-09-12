> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/apn](https://developer.apple.com/documentation/devicemanagement/apn)

# APN

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 4.0+ (deprecated in 7.0)

The payload that configures access point names.

## Declaration

```
object APN
```

## Properties

- `DefaultsData` — `APN.DefaultsData` (required): The list of access point names (APNs).

  Deprecated: iOS 7+ | iPadOS 7+
- `DefaultsDomainName` — `string` (required): The domain name.

  Deprecated: iOS 7+ | iPadOS 7+  
  **Allowed values:** `com.apple.managedCarrier`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.apn.managed` as the payload type.

This profile is deprecated. Use the [Cellular](cellular.md) profile instead.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad |
| User channel | N/A |
| Allow manual install | iOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | N/A |
| Allow multiple payloads | N/A |

## Topics

### Objects

- [APN.DefaultsData](apn/defaultsdata-data.dictionary.md): Deprecated. An array of access point name dictionaries.

## See Also

### Deprecated

- [FDERecoveryKeyRedirection](fderecoverykeyredirection.md): Deprecated. The payload that configures FileVault recovery key redirection.
- [MediaManagementAllowedMedia](mediamanagementallowedmedia.md): Deprecated. The payload that configures media management.
- [ParentalControlDictationAndProfanity](parentalcontroldictationandprofanity.md): Deprecated. The payload that configures parental control for dictation and profanity.
- [ShareKit](sharekit.md): Deprecated. The payload that configures ShareKit.
- [SystemPreferences](systempreferences.md): Deprecated. The payload that configures the preference panes.
