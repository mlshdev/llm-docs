> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/parentalcontrolstimelimits](https://developer.apple.com/documentation/devicemanagement/parentalcontrolstimelimits)

# ParentalControlsTimeLimits

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures parental control time limits.

## Declaration

```
object ParentalControlsTimeLimits
```

## Properties

- `familyControlsEnabled` — `boolean` (required): If `true`, enables time limits.
- `time-limits` — `ParentalControlsTimeLimits.Time-limits`: The time limits to enforce if `familyControlsEnabled` is enabled.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.familycontrols.timelimits.v2` as the payload type.

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
            <key>familyControlsEnabled</key>
            <true/>
            <key>limits-list</key>
            <array>
                <dict>
                    <key>allowancesActive</key>
                    <true/>
                    <key>groupID</key>
                    <string>__COMPUTER__</string>
                    <key>itemType</key>
                    <string>com.apple.familycontrols.timelimits.computer</string>
                    <key>name</key>
                    <string>Computer</string>
                    <key>allowances</key>
                    <array>
                        <dict>
                            <key>fromDay</key>
                            <integer>0</integer>
                            <key>span</key>
                            <integer>0</integer>
                            <key>toDay</key>
                            <integer>4</integer>
                            <key>timeLimitSeconds</key>
                            <integer>1800</integer>
                        </dict>
                        <dict>
                            <key>fromDay</key>
                            <integer>5</integer>
                            <key>span</key>
                            <integer>0</integer>
                            <key>toDay</key>
                            <integer>6</integer>
                            <key>timeLimitSeconds</key>
                            <integer>1800</integer>
                        </dict>
                    </array>
                </dict>
            </array>
            <key>PayloadIdentifier</key>
            <string>com.example.mytimelimitspayload</string>
            <key>PayloadType</key>
            <string>com.apple.familycontrols.timelimits.v2</string>
            <key>PayloadUUID</key>
            <string>0b17c132-352d-4a3a-9f76-b016f7f0ad6c</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Parental Controls Time Limits</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>5c7a4e4b-1a9e-4586-9f31-b04e818a84b2</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [ParentalControlsTimeLimits.Time-limits](parentalcontrolstimelimits/time-limits-data.dictionary.md): The time limits dictionary.

## See Also

### Parental controls

- [ParentalControlsApplicationRestrictions](parentalcontrolsapplicationrestrictions.md): Deprecated. The payload that configures parental controls for apps.
- [ParentalControlsContentFilter](parentalcontrolscontentfilter.md): The payload that configures the parental control web content filters.
- [ParentalControlsDictionary](parentalcontrolsdictionary.md): The payload that configures parental control dictionary restrictions.
- [ParentalControlsGameCenter](parentalcontrolsgamecenter.md): The payload that configures Game Center parental controls.
