> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/systemmigration](https://developer.apple.com/documentation/devicemanagement/systemmigration)

# SystemMigration

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12.4+

The payload that configures system migration.

## Declaration

```
object SystemMigration
```

## Properties

- `CustomBehavior` — `[SystemMigration.CustomBehaviorItem]`: The list of custom behavior dictionaries.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.systemmigration` as the payload type.

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
            <key>CustomBehavior</key>
            <array>
                <dict>
                    <key>Context</key>
                    <string>Windows</string>
                    <key>Paths</key>
                    <array>
                        <dict>
                            <key>SourcePath</key>
                            <string>C:/Users/Documents</string>
                            <key>TargetPath</key>
                            <string>~/Users/Documents</string>
                            <key>SourcePathInUserHome</key>
                            <true/>
                            <key>TargetPathInUserHome</key>
                            <true/>
                        </dict>
                    </array>
                </dict>
            </array>
            <key>PayloadIdentifier</key>
            <string>com.example.mysystemmigrationpayload</string>
            <key>PayloadType</key>
            <string>com.apple.systemmigration</string>
            <key>PayloadUUID</key>
            <string>553d6db9-2704-4127-8384-003926e5b813</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>System Migration</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>75157e67-d7ff-44ec-9ccf-8496be33864a</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [SystemMigration.CustomBehaviorItem](systemmigration/custombehavioritem.md): The custom behavior dictionary.
