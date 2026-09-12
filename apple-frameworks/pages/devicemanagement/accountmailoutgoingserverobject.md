> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/accountmailoutgoingserverobject](https://developer.apple.com/documentation/devicemanagement/accountmailoutgoingserverobject)

# AccountMailOutgoingServerObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.1+

The settings for the outgoing mail server for this account.

## Declaration

```
object AccountMailOutgoingServerObject
```

## Properties

- `AuthenticationCredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials for this account to authenticate with an outgoing mail server. The corresponding asset must be of type `CredentialUserNameAndPassword`.

  If the `AuthenticationMethod` is `None`, this field must be blank. Otherwise, the declaration must contain this field.
- `AuthenticationMethod` — `string` (required): The authentication method for the outgoing mail server.
  **Allowed values:** `None`, `Password`, `CRAMMD5`, `NTLM`, `HTTPMD5`
- `HostName` — `string` (required): The host name for the outgoing mail server.
- `Port` — `integer`: The port number for the outgoing mail server.

## See Also

### Objects

- [AccountMailIncomingServerObject](accountmailincomingserverobject.md): The settings for the incoming mail server for this account.
- [AccountMailSMIMEObject](accountmailsmimeobject.md): Settings for S/MIME.
