> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/accounts](https://developer.apple.com/documentation/devicemanagement/accounts)

# Accounts

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures guest accounts.

## Declaration

```
object Accounts
```

## Properties

- `DisableGuestAccount` — `boolean`: If `true`, the system disables the guest account. This property has no effect if `EnableGuestAccount` is `true`.
  **Default:** `false`
- `EnableGuestAccount` — `boolean`: If `true`, the system enables the guest account.
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.MCX` as the payload type.

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
            <key>EnableGuestAccount</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.myaccountpayload</string>
            <key>PayloadType</key>
            <string>com.apple.MCX</string>
            <key>PayloadUUID</key>
            <string>5d4e377c-108c-44af-a46e-97a5aac1e270</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Accounts</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>8cd28a9d-625e-4056-bbd0-43617bb8efb7</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Accounts

- [CalDAV](caldav.md): The payload that configures a Calendar account.
- [CardDAV](carddav.md): The payload that configures a Contacts account.
- [GoogleAccount](googleaccount.md): The payload that configures a Google account.
- [LDAP](ldap.md): The payload that configures a Lightweight Directory Access Protocol (LDAP) account.
- [MobileAccounts](mobileaccounts.md): The payload that configures mobile accounts on the device.
- [SubscribedCalendars](subscribedcalendars.md): The payload that configures subscribed calendars.
