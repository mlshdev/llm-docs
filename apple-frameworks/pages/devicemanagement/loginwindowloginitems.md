> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/loginwindowloginitems](https://developer.apple.com/documentation/devicemanagement/loginwindowloginitems)

# LoginWindowLoginItems

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures login behavior.

## Declaration

```
object LoginWindowLoginItems
```

## Properties

- `DisableLoginItemsSuppression` — `boolean`: If `true`, the system prevents the user from disabling login item launches by using the Shift key.

  Available: macOS all+  
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `loginwindow` as the payload type.

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
            <key>DisableLoginItemsSuppression</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.myloginwindowloginitemspayload</string>
            <key>PayloadType</key>
            <string>loginwindow</string>
            <key>PayloadUUID</key>
            <string>e032844e-db81-4387-98d9-9ee7c6038275</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Login Window Login Items</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>30724e47-e58e-447d-b21c-a65bbe184f98</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Login

- [LoginItemsManagedItems](loginitemsmanageditems.md): The payload that configures a device’s login items.
- [LoginWindow](loginwindow.md): The payload that configures Login Window behavior.
- [LoginWindowScripts](loginwindowscripts.md): The payload that configures scripts to run at login and logout.
- [ServiceManagementManagedLoginItems](servicemanagementmanagedloginitems.md): This payload that configures managed login items, which auto-enables and auto-allows matched items.
