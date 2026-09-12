> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusaccountlistgoogle](https://developer.apple.com/documentation/devicemanagement/statusaccountlistgoogle)

# StatusAccountListGoogle

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.1+

The status item that lists the client’s Google accounts.

## Declaration

```
object StatusAccountListGoogle
```

## Properties

- `account.list.google` — `[StatusAccountListGoogleAccountObject]` (required): A list of status values for the Google accounts.

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
            "google": [
                {
                    "identifier": "F1D01298-IF11-7E77-DH40-456789012345",
                    "declaration-identifier": "com.example.google-account",
                    "visible-name": "Work Google",
                    "username": "user@example.com",
                    "is-mail-enabled": true,
                    "are-calendars-enabled": true,
                    "are-contacts-enabled": true,
                    "are-notes-enabled": false
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
            "google": [
                {
                    "identifier": "F1D01298-IF11-7E77-DH40-456789012345",
                    "_removed": true
                }
            ]
        }
    }
}
```

## Topics

### Objects

- [StatusAccountListGoogleAccountObject](statusaccountlistgoogleaccountobject.md): A Google account.

## See Also

### Account list items

- [StatusAccountListCalDAV](statusaccountlistcaldav.md): The status item that lists the devices’s Calendar accounts.
- [StatusAccountListCardDAV](statusaccountlistcarddav.md): The status item that lists the devices’s Contacts accounts.
- [StatusAccountListExchange](statusaccountlistexchange.md): The status item that lists the devices’s Exchange accounts.
- [StatusAccountListLDAP](statusaccountlistldap.md): The status item that lists the devices’s Lightweight Directory Access Protocol (LDAP) accounts.
- [StatusAccountListMailIncoming](statusaccountlistmailincoming.md): The status item that lists the devices’s incoming Mail accounts.
- [StatusAccountListMailOutgoing](statusaccountlistmailoutgoing.md): The status item that lists the devices’s outgoing Mail accounts.
- [StatusAccountListSubscribedCalendar](statusaccountlistsubscribedcalendar.md): The status item that lists the devices’s subscribed calendars.
