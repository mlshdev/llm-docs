> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusaccountlistmailoutgoing](https://developer.apple.com/documentation/devicemanagement/statusaccountlistmailoutgoing)

# StatusAccountListMailOutgoing

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.1+

The status item that lists the devices’s outgoing Mail accounts.

## Declaration

```
object StatusAccountListMailOutgoing
```

## Properties

- `account.list.mail.outgoing` — `[StatusAccountListMailOutgoingAccountObject]` (required): A list of status values for the outgoing Mail accounts.

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
            "mail": {
                "outgoing": [
                    {
                        "identifier": "I4G34521-LI44-0H00-GK73-789012345678",
                        "declaration-identifier": "com.example.mail-account",
                        "visible-name": "Work Mail (SMTP)",
                        "hostname": "smtp.example.com",
                        "port": 587,
                        "username": "user@example.com"
                    }
                ]
            }
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
            "mail": {
                "outgoing": [
                    {
                        "identifier": "I4G34521-LI44-0H00-GK73-789012345678",
                        "_removed": true
                    }
                ]
            }
        }
    }
}
```

## Topics

### Objects

- [StatusAccountListMailOutgoingAccountObject](statusaccountlistmailoutgoingaccountobject.md): An outgoing Mail account.

## See Also

### Account list items

- [StatusAccountListCalDAV](statusaccountlistcaldav.md): The status item that lists the devices’s Calendar accounts.
- [StatusAccountListCardDAV](statusaccountlistcarddav.md): The status item that lists the devices’s Contacts accounts.
- [StatusAccountListExchange](statusaccountlistexchange.md): The status item that lists the devices’s Exchange accounts.
- [StatusAccountListGoogle](statusaccountlistgoogle.md): The status item that lists the client’s Google accounts.
- [StatusAccountListLDAP](statusaccountlistldap.md): The status item that lists the devices’s Lightweight Directory Access Protocol (LDAP) accounts.
- [StatusAccountListMailIncoming](statusaccountlistmailincoming.md): The status item that lists the devices’s incoming Mail accounts.
- [StatusAccountListSubscribedCalendar](statusaccountlistsubscribedcalendar.md): The status item that lists the devices’s subscribed calendars.
