> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clientconfigrequest](https://developer.apple.com/documentation/devicemanagement/clientconfigrequest)

# ClientConfigRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.0+

The request for the client configuration.

## Declaration

```
object ClientConfigRequest
```

## Properties

- `notificationTypes` — `[string]`: The complete set of notification types to which MDM subscribes.
  **Allowed values:** `TEST_NOTIFICATION`, `ASSET_MANAGEMENT`, `USER_MANAGEMENT`, `USER_ASSOCIATED`, `ASSET_COUNT`, `SUBSCRIPTION_MANAGEMENT`, `SUBSCRIPTION_COUNT`, `UNLIMITED_ASSET`
- `notificationUrl` — `string`: The URL to which subscribed notifications POST. This URL should only include a host and path.
- `mdmInfo` — `MdmInfo`: This value is returned by the server on all subsequent responses, and MDM uses it to ensure that no other MDM manages the same organization.
- `notificationAuthToken` — `string`: The bearer token that the server provides in the Authorization header of notifications. This is a shared secret between you and the server to verify that incoming notifications are from Apple.

## Mentioned In

- [Subscribing to notifications](subscribing-to-notifications.md)
- [Upgrading to the new management API](upgrading-to-the-new-management-api.md)

## Topics

### Objects and Data Types

- [MdmInfo](mdminfo.md): Information about the MDM client.

## See Also

### Request and Response

- [ClientConfigResponse](clientconfigresponse.md): The response that contains the client configuration.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
