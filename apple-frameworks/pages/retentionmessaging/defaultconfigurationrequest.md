> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/defaultconfigurationrequest](https://developer.apple.com/documentation/retentionmessaging/defaultconfigurationrequest)

# DefaultConfigurationRequest

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.0+

The request body that contains the default configuration information.

## Declaration

```
object DefaultConfigurationRequest
```

## Properties

- `messageIdentifier` — `messageIdentifier` (required): The message identifier of the message to configure as a default message.

<a id="Discussion"></a>

## Discussion

This is the request body for the [Configure Default Message](configure-default-message.md) endpoint.

## See Also

### Default message configuration

- [Configure Default Message](configure-default-message.md): Configures a default message for a specific product in a specific locale.
- [Get Default Message](get-default-message.md): Gets the default message for a specific product in a specific locale, if it’s configured.
- [Delete Default Message](delete-default-message.md): Deletes a default message for a product in a locale.
- [DefaultConfigurationResponse](defaultconfigurationresponse.md): The response body that contains the default configuration information.
