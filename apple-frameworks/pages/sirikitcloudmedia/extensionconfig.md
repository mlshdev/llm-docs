> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfig](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig)

# ExtensionConfig

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Instructions for accessing your media service’s endpoints.

## Declaration

```
object ExtensionConfig
```

## Properties

- `version` — `string` (required): The version of this API your service supports.
  **Allowed values:** `/([0-9]+[.]){2}[0-9]+/`
- `url` — `string`: The fully qualified base URL for the endpoints your service supports.
  **Minimum length:** `1`  
  **Maximum length:** `2000`
- `hdr` — `ExtensionConfig.Hdr`: A dictionary of header names and values for the client to include in requests to any intent endpoint.
- `intent` — `ExtensionConfig.Intent` (required): The intent endpoints your service supports.
- `media` — `ExtensionConfig.Media` (required): The media endpoints your service supports.

## Topics

### Specifying Request Headers

- [ExtensionConfig.Hdr](extensionconfig/hdr-data.dictionary.md): Headers to include with all requests to the media service.
- [ExtensionEndpointConfig.Hdr](extensionendpointconfig/hdr-data.dictionary.md): Headers to include with requests to intent endpoints.
- [ExtensionConfig.Intent.Hdr](extensionconfig/intent-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to intent endpoints.
- [ExtensionConfig.Media.Queues.Hdr](extensionconfig/media-data.dictionary/queues-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to media endpoints.
- [ExtensionConfig.Media.Queues.PlayMedia.Hdr](extensionconfig/media-data.dictionary/queues-data.dictionary/playmedia-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to media endpoints.
- [ExtensionConfig.Media.Queues.UpdateActivity.Hdr](extensionconfig/media-data.dictionary/queues-data.dictionary/updateactivity-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to the update activity endpoint.

### Describing Supported Intent Endpoints

- [ExtensionEndpointConfig](extensionendpointconfig.md): Instructions for accessing an intent endpoint.
- [ExtensionConfig.Intent](extensionconfig/intent-data.dictionary.md): Instructions for accessing your media service’s intent endpoints.

### Describing Supported Media Endpoints

- [ExtensionConfig.Media](extensionconfig/media-data.dictionary.md): Instructions for accessing your service’s media endpoints.

## See Also

### Device Configuration

- [Configure Your Service Endpoints](configuration-resource.md): Provide configuration details for your media server’s endpoints to a HomePod speaker or an Apple TV.
- [ExtensionConfigTag](extensionconfigtag.md): A unique identifier for a specific media service configuration.
- [PlayMediaControlActivity](playmediacontrolactivity.md): Options for reporting playback progress.
