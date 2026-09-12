> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/carddav](https://developer.apple.com/documentation/devicemanagement/carddav)

# CardDAV

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · visionOS 1.1+

The payload that configures a Contacts account.

## Declaration

```
object CardDAV
```

## Properties

- `CardDAVAccountDescription` — `string`: The description of the account.
- `CardDAVHostName` — `string` (required): The server’s address.
- `CardDAVPassword` — `string`: The user’s password. Only use this in encrypted profiles.
- `CardDAVPort` — `integer`: The server’s port.
- `CardDAVPrincipalURL` — `string`: The base URL to the user’s address book.

  Available: iOS 4+ | iPadOS 4+ | visionOS 1.1+
- `CardDAVUsername` — `string`: The user name for logins.
- `CardDAVUseSSL` — `boolean`: If `true`, the system enables SSL.
  **Default:** `true`
- `CommunicationServiceRules` — `CardDAV.CommunicationServiceRules`: An array of communication service rules for this account.

  Available: iOS 10+ | iPadOS 10+ | visionOS 1.1+
- `VPNUUID` — `string`: The VPNUUID of the per-app VPN the account uses for network communication.

  Available: iOS 14+ | iPadOS 14+ | visionOS 1.1+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.carddav.account` as the payload type.

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
            <key>CardDAVAccountDescription</key>
            <string>My CardDAV Account</string>
            <key>CardDAVHostName</key>
            <string>server.example.com</string>
            <key>CardDAVPassword</key>
            <string>Password123</string>
            <key>CardDAVPort</key>
            <integer>443</integer>
            <key>CardDAVUseSSL</key>
            <true/>
            <key>CardDAVUsername</key>
            <string>juanchavez4</string>
            <key>PayloadIdentifier</key>
            <string>com.example.mycardavpayload</string>
            <key>PayloadType</key>
            <string>com.apple.carddav.account</string>
            <key>PayloadUUID</key>
            <string>b23d14e3-2f9d-4087-a819-747903fbb176</string>
            <key>PayloadVersion</key>
            <real>1</real>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>CardDAV</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>4fdb234d-8c58-48de-a76d-9ed9d241d273</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [CardDAV.CommunicationServiceRules](carddav/communicationservicerules-data.dictionary.md): The communication service handler rules for this account.

## See Also

### Accounts

- [Accounts](accounts.md): The payload that configures guest accounts.
- [CalDAV](caldav.md): The payload that configures a Calendar account.
- [GoogleAccount](googleaccount.md): The payload that configures a Google account.
- [LDAP](ldap.md): The payload that configures a Lightweight Directory Access Protocol (LDAP) account.
- [MobileAccounts](mobileaccounts.md): The payload that configures mobile accounts on the device.
- [SubscribedCalendars](subscribedcalendars.md): The payload that configures subscribed calendars.
