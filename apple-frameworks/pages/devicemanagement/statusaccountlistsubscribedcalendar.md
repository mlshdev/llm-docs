> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusaccountlistsubscribedcalendar](https://developer.apple.com/documentation/devicemanagement/statusaccountlistsubscribedcalendar)

# StatusAccountListSubscribedCalendar

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 14.0+ · visionOS 1.1+

The status item that lists the devices’s subscribed calendars.

## Declaration

```
object StatusAccountListSubscribedCalendar
```

## Properties

- `account.list.subscribed-calendar` — `[StatusAccountListSubscribedCalendarAccountObject]` (required): A list of status values for the subscribed calendars.

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
            "subscribed-calendar": [
                {
                    "identifier": "J5H45632-MJ55-1I11-HL84-890123456789",
                    "declaration-identifier": "com.example.subscribed-calendar",
                    "visible-name": "Company Holidays",
                    "calendar-url": "https://calendar.example.com/holidays.ics",
                    "username": "user@example.com",
                    "is-enabled": true
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
            "subscribed-calendar": [
                {
                    "identifier": "J5H45632-MJ55-1I11-HL84-890123456789",
                    "_removed": true
                }
            ]
        }
    }
}
```

## Topics

### Objects

- [StatusAccountListSubscribedCalendarAccountObject](statusaccountlistsubscribedcalendaraccountobject.md): A subscribed calendar.

## See Also

### Account list items

- [StatusAccountListCalDAV](statusaccountlistcaldav.md): The status item that lists the devices’s Calendar accounts.
- [StatusAccountListCardDAV](statusaccountlistcarddav.md): The status item that lists the devices’s Contacts accounts.
- [StatusAccountListExchange](statusaccountlistexchange.md): The status item that lists the devices’s Exchange accounts.
- [StatusAccountListGoogle](statusaccountlistgoogle.md): The status item that lists the client’s Google accounts.
- [StatusAccountListLDAP](statusaccountlistldap.md): The status item that lists the devices’s Lightweight Directory Access Protocol (LDAP) accounts.
- [StatusAccountListMailIncoming](statusaccountlistmailincoming.md): The status item that lists the devices’s incoming Mail accounts.
- [StatusAccountListMailOutgoing](statusaccountlistmailoutgoing.md): The status item that lists the devices’s outgoing Mail accounts.
