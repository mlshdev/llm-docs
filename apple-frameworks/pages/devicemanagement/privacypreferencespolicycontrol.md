> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/privacypreferencespolicycontrol](https://developer.apple.com/documentation/devicemanagement/privacypreferencespolicycontrol)

# PrivacyPreferencesPolicyControl

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.14+

The payload that configures privacy preferences.

## Declaration

```
object PrivacyPreferencesPolicyControl
```

## Properties

- `Services` — `PrivacyPreferencesPolicyControl.Services` (required): A dictionary whose keys are limited to the privacy policy control services.  In the case of conflicting specifications, the most restrictive setting (deny) is used.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.TCC.configuration-profile-policy` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | N/A |
| Allow manual install | N/A |
| Requires supervision | N/A |
| Requires user-approved MDM | macOS |
| Allowed in user enrollment | N/A |
| Allow multiple payloads | macOS |

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
            <key>Services</key>
            <dict>
                <key>PostEvent</key>
                <array>
                    <dict>
                        <key>Allowed</key>
                        <true/>
                        <key>CodeRequirement</key>
                        <string>identifier com.apple.screensharing.agent</string>
                        <key>Comment</key>
                        <string>Allow PostEvent control for ScreensharingAgent</string>
                        <key>Identifier</key>
                        <string>com.apple.screensharing.agent</string>
                        <key>IdentifierType</key>
                        <string>bundleID</string>
                    </dict>
                </array>
            </dict>
            <key>PayloadIdentifier</key>
            <string>com.example.mytccpayload</string>
            <key>PayloadType</key>
            <string>com.apple.TCC.configuration-profile-policy</string>
            <key>PayloadUUID</key>
            <string>5AAF51E3-D21F-4CE6-B0AA-074D75916F68</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Privacy Preferences Policy Control</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>221000F0-D07A-11E8-811E-D0817ADA38E4</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [PrivacyPreferencesPolicyControl.Services](privacypreferencespolicycontrol/services-data.dictionary.md): The privacy policy control services dictionary that controls access on a per app basis.
