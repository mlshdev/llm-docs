> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fdefilevaultoptions](https://developer.apple.com/documentation/devicemanagement/fdefilevaultoptions)

# FDEFileVaultOptions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures FileVault options.

## Declaration

```
object FDEFileVaultOptions
```

## Properties

- `DestroyFVKeyOnStandby` — `boolean`: If `true`, the system won’t store th FileVault key across restarts.

  Available: macOS 10.10+  
  **Default:** `false`
- `dontAllowFDEDisable` — `boolean`: If `true`, the system won’t disable FileVault.
  **Default:** `false`
- `dontAllowFDEEnable` — `boolean`: If `true`, the system won’t enable FileVault.
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.MCX` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | N/A |
| Allow manual install | macOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | N/A |
| Allow multiple payloads | N/A |

<a id="Profile-example"></a>

### Profile example

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>dontAllowFDEDisable</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.myfdefvoptionspayload</string>
            <key>PayloadType</key>
            <string>com.apple.MCX</string>
            <key>PayloadUUID</key>
            <string>0a8f4102-0fbf-4d8c-b1e1-3d916f89d927</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>FileVault 2 Options</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>92821df0-7c04-4366-b805-eb51ed87541b</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### FileVault

- [FDEFileVault](fdefilevault.md): The payload that configures FileVault.
- [FDERecoveryKeyEscrow](fderecoverykeyescrow.md): The payload that configures FileVault recovery key escrow.
