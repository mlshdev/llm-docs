> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfig/intent-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/intent-data.dictionary)

# ExtensionConfig.Intent

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Instructions for accessing your media service’s intent endpoints.

## Declaration

```
object ExtensionConfig.Intent
```

## Properties

- `hdr` — `ExtensionConfig.Intent.Hdr`: Headers to include with requests to intent endpoints.
- `addMedia` — `ExtensionConfig.Intent.AddMedia`: Details specific to [Process an Add Media Intent](../addmedia.md).
- `playMedia` — `ExtensionConfig.Intent.PlayMedia` (required): Details specific to [Process a Play Media Intent](../playmedia-1g2o9.md).
- `updateMediaAffinity` — `ExtensionConfig.Intent.UpdateMediaAffinity`: Details specific to [updateMediaAffinity](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/intent-data.dictionary/updatemediaaffinity-data.dictionarykey).

## Topics

### Requiring Headers for All Intent Requests

- [ExtensionConfig.Intent.Hdr](intent-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to intent endpoints.

### Specifying Required Headers and Supported Processing for Each Intent

- [ExtensionConfig.Intent.AddMedia](intent-data.dictionary/addmedia-data.dictionary.md): Configuration details for your service’s add media intent.
- [ExtensionConfig.Intent.PlayMedia](intent-data.dictionary/playmedia-data.dictionary.md): Configuration details for your service’s play media intent.
- [ExtensionConfig.Intent.UpdateMediaAffinity](intent-data.dictionary/updatemediaaffinity-data.dictionary.md): Configuration details for your service’s update media affinity intent.

## See Also

### Describing Supported Intent Endpoints

- [ExtensionEndpointConfig](../extensionendpointconfig.md): Instructions for accessing an intent endpoint.
