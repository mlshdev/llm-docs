> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/subscribedcalendars](https://developer.apple.com/documentation/devicemanagement/subscribedcalendars)

# SubscribedCalendars

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.1+

The payload that configures subscribed calendars.

## Declaration

```
object SubscribedCalendars
```

## Properties

- `SubCalAccountDescription` — `string`: The description of the account.
- `SubCalAccountHostName` — `string` (required): The server’s address.
- `SubCalAccountPassword` — `string`: The user’s password.
- `SubCalAccountUsername` — `string`: The user’s user name.
- `SubCalAccountUseSSL` — `boolean`: If `true`, the system enables SSL.
  **Default:** `false`
- `VPNUUID` — `string`: The VPNUUID of the per-app VPN the account uses for network communication.

  Available: iOS 14+ | iPadOS 14+ | visionOS 1.1+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.subscribedcalendar.account` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, visionOS |
| User channel | Shared iPad |
| Allow manual install | iOS, visionOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | iOS, visionOS |
| Allow multiple payloads | iOS, Shared iPad, visionOS |

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
            <key>SubCalAccountDescription</key>
            <string>US Holiday Calendar</string>
            <key>SubCalAccountHostName</key>
            <string>https://holidays.example.com/USHolidays.ics</string>
            <key>SubCalAccountUseSSL</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.mysubscribedcalpayload</string>
            <key>PayloadType</key>
            <string>com.apple.subscribedcalendar.account</string>
            <key>PayloadUUID</key>
            <string>c23dd040-6f68-4af2-b840-62d1943236b5</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Subscribed Calendars</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>c360335c-3cfd-43d5-88c3-7e58e92821a9</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Accounts

- [Accounts](accounts.md): The payload that configures guest accounts.
- [CalDAV](caldav.md): The payload that configures a Calendar account.
- [CardDAV](carddav.md): The payload that configures a Contacts account.
- [GoogleAccount](googleaccount.md): The payload that configures a Google account.
- [LDAP](ldap.md): The payload that configures a Lightweight Directory Access Protocol (LDAP) account.
- [MobileAccounts](mobileaccounts.md): The payload that configures mobile accounts on the device.
