> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionendpointconfig](https://developer.apple.com/documentation/sirikitcloudmedia/extensionendpointconfig)

# ExtensionEndpointConfig

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Instructions for accessing an intent endpoint.

## Declaration

```
object ExtensionEndpointConfig
```

## Properties

- `hdr` — `ExtensionEndpointConfig.Hdr`: Headers the client must include in requests to this endpoint.
- `url` — `string`: The path to access this endpoint. The path may be an absolute URL, or relative to the resolved [Configure Your Service Endpoints](configuration-resource.md) URL. Provide an empty string if your service doesn’t support this endpoint.
  **Minimum length:** `0`  
  **Maximum length:** `2000`

## Topics

### Requiring Headers for All Endpoints

- [ExtensionEndpointConfig.Hdr](extensionendpointconfig/hdr-data.dictionary.md): Headers to include with requests to intent endpoints.

## Relationships

### Inherited By

- [ExtensionConfig.Intent.AddMedia](extensionconfig/intent-data.dictionary/addmedia-data.dictionary.md)
- [ExtensionConfig.Intent.PlayMedia](extensionconfig/intent-data.dictionary/playmedia-data.dictionary.md)
- [ExtensionConfig.Intent.UpdateMediaAffinity](extensionconfig/intent-data.dictionary/updatemediaaffinity-data.dictionary.md)

## See Also

### Describing Supported Intent Endpoints

- [ExtensionConfig.Intent](extensionconfig/intent-data.dictionary.md): Instructions for accessing your media service’s intent endpoints.
