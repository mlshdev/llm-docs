> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/accountconfigurationcommand/command-data.dictionary/autosetupadminaccountitem

# AccountConfigurationCommand.Command.AutoSetupAdminAccountItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+

A dictionary that describes the administrator account to create with Setup Assistant, which uses the first element and ignores additional elements.

## Declaration

```
object AccountConfigurationCommand.Command.AutoSetupAdminAccountItem
```

## Properties

- `fullName` — `string`: The full name of the user, which defaults to `shortName` if not specified.
- `hidden` — `boolean`: If `true`, this sets the account attribute to make the account hidden in the Login Window and Users & Groups.
  **Default:** `false`
- `passwordHash` — `data`: Data that contains the pre-created salted PBKDF2 SHA512 [PasswordHash](../../passwordhash.md) for the account.
- `shortName` — `string` (required): The short name of the user.

## Mentioned In

- [Implementing Platform SSO for unattended device enrollment](../../implementing-platform-sso-for-unattended-device-enrollment.md)
