> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/declarations](https://developer.apple.com/documentation/devicemanagement/declarations)

# Declarations

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The payload that applies a set of declarations to the device through the Settings app.

## Declaration

```
object Declarations
```

## Properties

- `Declarations` — `[data]` (required): The set of declarations to apply. The array items are Base64-encoded data representations of the declaration JSON data.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.declarations` as the payload type.

This profile applies a set of declarations to the device. Users use this profile to install declarations without requiring an MDM enrollment. A device management server can’t install a configuration profile containing this payload type. Device management servers need to use declarative device management to install declarations.

> **Important**

>  When a user installs the profile, the device only applies configuration declarations that allow a “local” enrollment. Consult the documentation for each configuration type to see if you can use it.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, tvOS, visionOS, watchOS |
| User channel | macOS |
| Allow manual install | iOS, macOS, tvOS, visionOS, watchOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | N/A |
| Allow multiple payloads | iOS, macOS, tvOS, visionOS, watchOS |

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
            <key>Declarations</key>
            <array>
                <data>
                ewogICJUeXBlIjogImNvbS5hcHBsZS5hY3RpdmF0aW9u
                LnNpbXBsZSIsCiAgIklkZW50aWZpZXIiOiAiMzJGOUVF
                RkMtQzM5QS00QjI5LUJCRjgtNUM5Q0RBQTIyMDU3IiwK
                ICAiU2VydmVyVG9rZW4iOiAiODhFMjUzQjctNzYyNC00
                QUNGLTg1NTEtMzA4RDgyMUM0Njg0IiwKICAiUGF5bG9h
                ZCI6IHsKICAgICJTdGFuZGFyZENvbmZpZ3VyYXRpb25z
                IjogWwogICAgICAiMDdBMUUxNDgtMkM2Ri00Mzk0LTk4
                RTctNzRFMjA1RTAxQjIwIgogICAgXQogIH0KfQo=
                </data>
                <data>
                ewogICJUeXBlIjogImNvbS5hcHBsZS5jb25maWd1cmF0
                aW9uLm1hbmFnZW1lbnQudGVzdCIsCiAgIklkZW50aWZp
                ZXIiOiAiMDdBMUUxNDgtMkM2Ri00Mzk0LTk4RTctNzRF
                MjA1RTAxQjIwIiwKICAiU2VydmVyVG9rZW4iOiAiRUIy
                N0U5RjctRkZGQi00MUJFLTk4MEMtRThBNUZCODAxMzky
                IiwKICAiUGF5bG9hZCI6IHsKICAgICJFY2hvIjogIkVj
                aG8gdGhpcyBtZXNzYWdlIiwKICAgICJSZXR1cm5TdGF0
                dXMiOiAiSW5zdGFsbGVkIgogIH0KfQo=
                </data>
            </array>
            <key>PayloadDescription</key>
            <string>Configures a set of declarations</string>
            <key>PayloadDisplayName</key>
            <string>Declarations profile</string>
            <key>PayloadIdentifier</key>
            <string>com.apple.declarations.2a3f8721-352d-48c0-a83d-737dc64589ad</string>
            <key>PayloadType</key>
            <string>com.apple.declarations</string>
            <key>PayloadUUID</key>
            <string>5edd1fa1-31ce-43ee-a6dc-8e0bed5e9c20</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Test Declaration</string>
    <key>PayloadIdentifier</key>
    <string>declarations-5959abc0-1135-4d22-8ff0-a170bcceb3c8</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>5959abc0-1135-4d22-8ff0-a170bcceb3c8</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### System configuration

- [EnergySaver](energysaver.md): The payload that configures Energy Saver settings.
- [FileProvider](fileprovider.md): The payload that configures file provider settings.
- [Font](font.md): The payload that configures fonts.
- [LockScreenMessage](lockscreenmessage.md): The payload that configures a Lock Screen message.
- [Screensaver](screensaver.md): The payload that configures the screen saver.
- [SystemExtensions](systemextensions.md): The payload that configures system extensions.
- [SystemLogging](systemlogging.md): The payload that configures system logging.
- [TimeServer](timeserver.md): The payload that configures the time server.
