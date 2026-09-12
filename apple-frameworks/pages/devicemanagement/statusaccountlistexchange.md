> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusaccountlistexchange](https://developer.apple.com/documentation/devicemanagement/statusaccountlistexchange)

# StatusAccountListExchange

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.1+

The status item that lists the devices’s Exchange accounts.

## Declaration

```
object StatusAccountListExchange
```

## Properties

- `account.list.exchange` — `[StatusAccountListExchangeAccountObject]` (required): A list of status values for the Exchange accounts.

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
            "exchange": [
                {
                    "identifier": "E0CF0187-HE00-6D66-CG39-345678901234",
                    "declaration-identifier": "com.example.exchange-account",
                    "visible-name": "Work Exchange",
                    "hostname": "mail.example.com",
                    "port": 443,
                    "username": "user@example.com",
                    "is-mail-enabled": true,
                    "are-calendars-enabled": true,
                    "are-contacts-enabled": true,
                    "are-notes-enabled": true,
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
            "exchange": [
                {
                    "identifier": "E0CF0187-HE00-6D66-CG39-345678901234",
                    "_removed": true
                }
            ]
        }
    }
}
```

## Topics

### Objects

- [StatusAccountListExchangeAccountObject](statusaccountlistexchangeaccountobject.md): An Exchange account.

## See Also

### Account list items

- [StatusAccountListCalDAV](statusaccountlistcaldav.md): The status item that lists the devices’s Calendar accounts.
- [StatusAccountListCardDAV](statusaccountlistcarddav.md): The status item that lists the devices’s Contacts accounts.
- [StatusAccountListGoogle](statusaccountlistgoogle.md): The status item that lists the client’s Google accounts.
- [StatusAccountListLDAP](statusaccountlistldap.md): The status item that lists the devices’s Lightweight Directory Access Protocol (LDAP) accounts.
- [StatusAccountListMailIncoming](statusaccountlistmailincoming.md): The status item that lists the devices’s incoming Mail accounts.
- [StatusAccountListMailOutgoing](statusaccountlistmailoutgoing.md): The status item that lists the devices’s outgoing Mail accounts.
- [StatusAccountListSubscribedCalendar](statusaccountlistsubscribedcalendar.md): The status item that lists the devices’s subscribed calendars.
