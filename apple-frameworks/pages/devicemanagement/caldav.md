> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/caldav](https://developer.apple.com/documentation/devicemanagement/caldav)

# CalDAV

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · visionOS 1.1+

The payload that configures a Calendar account.

## Declaration

```
object CalDAV
```

## Properties

- `CalDAVAccountDescription` — `string`: The description of the account.
- `CalDAVHostName` — `string` (required): The server’s address.
- `CalDAVPassword` — `string`: The user’s password. Only use this in encrypted profiles.
- `CalDAVPort` — `integer`: The server’s port.
- `CalDAVPrincipalURL` — `string`: The base URL to the user’s calendar.
- `CalDAVUsername` — `string`: The user name for logins. If this profile is part of a non-interactive install, the system requires this field.
- `CalDAVUseSSL` — `boolean`: If `true`, the system enables SSL.
  **Default:** `true`
- `VPNUUID` — `string`: The VPNUUID of the per-app VPN the account uses for network communication.

  Available: iOS 14+ | iPadOS 14+ | visionOS 1.1+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.caldav.account` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, visionOS |
| User channel | macOS, Shared iPad |
| Allow manual install | iOS, macOS, visionOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | iOS, macOS, visionOS |
| Allow multiple payloads | iOS, macOS, Shared iPad, visionOS |

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
            <key>CalDAVAccountDescription</key>
            <string>My CalDAV Account</string>
            <key>CalDAVHostName</key>
            <string>server.example.com</string>
            <key>CalDAVPassword</key>
            <string>Password123</string>
            <key>CalDAVPort</key>
            <integer>443</integer>
            <key>CalDAVUseSSL</key>
            <true/>
            <key>CalDAVUsername</key>
            <string>juanchavez4@example.com</string>
            <key>PayloadIdentifier</key>
            <string>com.example.mycaldavpayload</string>
            <key>PayloadType</key>
            <string>com.apple.caldav.account</string>
            <key>PayloadUUID</key>
            <string>603409f1-b611-459d-9584-0ed12bc25b5b</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>CalDAV</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>5c8bb406-a74c-4338-93c6-b403a040cc91</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Accounts

- [Accounts](accounts.md): The payload that configures guest accounts.
- [CardDAV](carddav.md): The payload that configures a Contacts account.
- [GoogleAccount](googleaccount.md): The payload that configures a Google account.
- [LDAP](ldap.md): The payload that configures a Lightweight Directory Access Protocol (LDAP) account.
- [MobileAccounts](mobileaccounts.md): The payload that configures mobile accounts on the device.
- [SubscribedCalendars](subscribedcalendars.md): The payload that configures subscribed calendars.
