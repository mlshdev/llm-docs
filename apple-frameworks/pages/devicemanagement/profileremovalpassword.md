> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/profileremovalpassword](https://developer.apple.com/documentation/devicemanagement/profileremovalpassword)

# ProfileRemovalPassword

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+

The payload that configures profile removal.

## Declaration

```
object ProfileRemovalPassword
```

## Properties

- `RemovalPassword` — `string`: The password to allow removing the profile.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.profileRemovalPassword` as the payload type.

This payload provides a password to allow users to remove a locked configuration profile from the device. If this payload is present and has a password value set, the device asks for the password when the user taps a profile’s Remove button. This system encrypts the payload with the rest of the profile.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, tvOS |
| User channel | macOS |
| Allow manual install | iOS, macOS, tvOS |
| Requires supervision | iOS, tvOS |
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
            <key>RemovalPassword</key>
            <string>Password123</string>
            <key>PayloadIdentifier</key>
            <string>com.example.myprofileremovalpasswordprofile</string>
            <key>PayloadType</key>
            <string>com.apple.profileRemovalPassword</string>
            <key>PayloadUUID</key>
            <string>55f87465-a869-4ab0-9031-11ca1073641b</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Password Removal</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>a42bfe59-7f3a-46a0-9908-4a5095fd2c6d</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
    <key>HasRemovalPasscode</key>
    <true/>
</dict>
</plist>
```

## See Also

### Managed devices

- [EducationConfiguration](educationconfiguration.md): The payload that configures the users, groups, and departments within an educational organization.
- [LightsOutManagementLOM](lightsoutmanagementlom.md): The payload that configures lights-out management (LOM) settings.
- [ManagedPreferences](managedpreferences.md): The payload that configures managed preferences.
- [MDM](mdm.md): The payload that configures mobile device management (MDM) settings.
