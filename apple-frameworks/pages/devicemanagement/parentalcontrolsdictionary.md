> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/parentalcontrolsdictionary](https://developer.apple.com/documentation/devicemanagement/parentalcontrolsdictionary)

# ParentalControlsDictionary

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures parental control dictionary restrictions.

## Declaration

```
object ParentalControlsDictionary
```

## Properties

- `parentalControl` — `boolean` (required): If `true`, enables parental controls dictionary restrictions.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.Dictionary` as the payload type.

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
            <key>parentalControl</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.mydictionarypayload</string>
            <key>PayloadType</key>
            <string>com.apple.Dictionary</string>
            <key>PayloadUUID</key>
            <string>0158853b-e3d5-41d6-b4d2-ada868a36042</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Parental Controls Dictionary</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>9b0ea70d-b1b1-4a96-81e7-3b33bfd563d5</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Parental controls

- [ParentalControlsApplicationRestrictions](parentalcontrolsapplicationrestrictions.md): Deprecated. The payload that configures parental controls for apps.
- [ParentalControlsContentFilter](parentalcontrolscontentfilter.md): The payload that configures the parental control web content filters.
- [ParentalControlsGameCenter](parentalcontrolsgamecenter.md): The payload that configures Game Center parental controls.
- [ParentalControlsTimeLimits](parentalcontrolstimelimits.md): The payload that configures parental control time limits.
