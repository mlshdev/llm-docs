> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/identification/payloadidentification-data.dictionary](https://developer.apple.com/documentation/devicemanagement/identification/payloadidentification-data.dictionary)

# Identification.PayloadIdentification

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+ (deprecated in 15.4)

The dictionary containing details about the user.

## Declaration

```
object Identification.PayloadIdentification
```

## Properties

- `AuthMethod` — `string` (required): The authorization method. Either the profile contains the password or the user provides it.

  Deprecated: macOS 15.4+  
  **Allowed values:** `Password`, `UserEnteredPassword`
- `EmailAddress` — `string` (required): The address for the account.

  Deprecated: macOS 15.4+
- `FullName` — `string` (required): The full name of the account.

  Deprecated: macOS 15.4+
- `Password` — `string` (required): The password for the account. Required when the `AuthMethod` is `Password`.

  Deprecated: macOS 15.4+
- `Prompt` — `string`: The custom instructions for the user, if needed.

  Deprecated: macOS 15.4+
- `PromptMessage` — `string`: The additional descriptive text for the user prompt.

  Deprecated: macOS 15.4+
- `UserName` — `string` (required): The UNIX user name for the accounts.

  Deprecated: macOS 15.4+
