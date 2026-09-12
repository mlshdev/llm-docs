> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/defaultconfigurationresponse](https://developer.apple.com/documentation/retentionmessaging/defaultconfigurationresponse)

# DefaultConfigurationResponse

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.4+

The response body that contains the default configuration information.

## Declaration

```
object DefaultConfigurationResponse
```

## Properties

- `messageIdentifier` — `messageIdentifier` (required): The message identifier of the retention message you configured as a default.

<a id="Discussion"></a>

## Discussion

This is the response body for the [Get Default Message](get-default-message.md) endpoint.

## See Also

### Default message configuration

- [Configure Default Message](configure-default-message.md): Configures a default message for a specific product in a specific locale.
- [Get Default Message](get-default-message.md): Gets the default message for a specific product in a specific locale, if it’s configured.
- [Delete Default Message](delete-default-message.md): Deletes a default message for a product in a locale.
- [DefaultConfigurationRequest](defaultconfigurationrequest.md): The request body that contains the default configuration information.
