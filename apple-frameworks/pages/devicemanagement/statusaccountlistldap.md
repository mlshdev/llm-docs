> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusaccountlistldap](https://developer.apple.com/documentation/devicemanagement/statusaccountlistldap)

# StatusAccountListLDAP

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.1+

The status item that lists the devices’s Lightweight Directory Access Protocol (LDAP) accounts.

## Declaration

```
object StatusAccountListLDAP
```

## Properties

- `account.list.ldap` — `[StatusAccountListLDAPAccountObject]` (required): A list of status values for the LDAP accounts.

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
            "ldap": [
                {
                    "identifier": "G2E12309-JG22-8F88-EI51-567890123456",
                    "declaration-identifier": "com.example.ldap-account",
                    "visible-name": "Corporate Directory",
                    "hostname": "ldap.example.com",
                    "port": 636,
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
            "ldap": [
                {
                    "identifier": "G2E12309-JG22-8F88-EI51-567890123456",
                    "_removed": true
                }
            ]
        }
    }
}
```

## Topics

### Objects

- [StatusAccountListLDAPAccountObject](statusaccountlistldapaccountobject.md): An LDAP account.

## See Also

### Account list items

- [StatusAccountListCalDAV](statusaccountlistcaldav.md): The status item that lists the devices’s Calendar accounts.
- [StatusAccountListCardDAV](statusaccountlistcarddav.md): The status item that lists the devices’s Contacts accounts.
- [StatusAccountListExchange](statusaccountlistexchange.md): The status item that lists the devices’s Exchange accounts.
- [StatusAccountListGoogle](statusaccountlistgoogle.md): The status item that lists the client’s Google accounts.
- [StatusAccountListMailIncoming](statusaccountlistmailincoming.md): The status item that lists the devices’s incoming Mail accounts.
- [StatusAccountListMailOutgoing](statusaccountlistmailoutgoing.md): The status item that lists the devices’s outgoing Mail accounts.
- [StatusAccountListSubscribedCalendar](statusaccountlistsubscribedcalendar.md): The status item that lists the devices’s subscribed calendars.
