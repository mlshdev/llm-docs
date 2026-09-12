> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusaccountlistcaldav](https://developer.apple.com/documentation/devicemanagement/statusaccountlistcaldav)

# StatusAccountListCalDAV

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.1+

The status item that lists the devices’s Calendar accounts.

## Declaration

```
object StatusAccountListCalDAV
```

## Properties

- `account.list.caldav` — `[StatusAccountListCalDAVAccountObject]` (required): A list of status values for the Calendar accounts.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in device enrollment | iOS, Shared iPad, visionOS |
| Allowed in user enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in local enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in system scope | iOS, visionOS |
| Allowed in user scope | macOS, Shared iPad |

<a id="Status-item-example"></a>

### Status item example

**New or updated account**

Reports a new or updated account.

```json
{
    "account": {
        "list": {
            "caldav": [
                {
                    "identifier": "C8AD8975-FC88-4B44-AE17-123456789012",
                    "declaration-identifier": "com.example.caldav-account",
                    "visible-name": "Work Calendar",
                    "hostname": "caldav.example.com",
                    "port": 443,
                    "username": "user@example.com",
                    "are-calendars-enabled": true,
                    "are-reminders-enabled": true
                }
            ]
        }
    }
}
```

**Removed account**

Reports a removed account.

```json
{
    "account": {
        "list": {
            "caldav": [
                {
                    "identifier": "C8AD8975-FC88-4B44-AE17-123456789012",
                    "_removed": true
                }
            ]
        }
    }
}
```

## Topics

### Objects

- [StatusAccountListCalDAVAccountObject](statusaccountlistcaldavaccountobject.md): A Calendar account.

## See Also

### Account list items

- [StatusAccountListCardDAV](statusaccountlistcarddav.md): The status item that lists the devices’s Contacts accounts.
- [StatusAccountListExchange](statusaccountlistexchange.md): The status item that lists the devices’s Exchange accounts.
- [StatusAccountListGoogle](statusaccountlistgoogle.md): The status item that lists the client’s Google accounts.
- [StatusAccountListLDAP](statusaccountlistldap.md): The status item that lists the devices’s Lightweight Directory Access Protocol (LDAP) accounts.
- [StatusAccountListMailIncoming](statusaccountlistmailincoming.md): The status item that lists the devices’s incoming Mail accounts.
- [StatusAccountListMailOutgoing](statusaccountlistmailoutgoing.md): The status item that lists the devices’s outgoing Mail accounts.
- [StatusAccountListSubscribedCalendar](statusaccountlistsubscribedcalendar.md): The status item that lists the devices’s subscribed calendars.
