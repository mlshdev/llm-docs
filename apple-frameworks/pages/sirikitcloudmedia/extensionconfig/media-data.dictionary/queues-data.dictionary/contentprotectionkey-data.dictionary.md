> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/contentprotectionkey-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/contentprotectionkey-data.dictionary)

# ExtensionConfig.Media.Queues.ContentProtectionKey

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Configuration details for your service’s content protection key endpoint.

## Declaration

```
object ExtensionConfig.Media.Queues.ContentProtectionKey
```

## Properties

- `cks` — `ExtensionConfig.Media.Queues.ContentProtectionKey.Cks` (required): The configuration details of your service’s content protection system.
- `hdr` — `ExtensionConfig.Media.Queues.ContentProtectionKey.Hdr`: The headers to include with requests to this endpoint.
- `url` — `string` (required): The relative path for the client to access the `contentProtectionKey` endpoint. For more information, see [contentProtectionKey](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/contentprotectionkey-data.dictionarykey).
  **Default:** `/queues/contentProtectionKey`  
  **Minimum length:** `1`  
  **Maximum length:** `4000`

## Topics

### Requiring Headers

- [ExtensionConfig.Media.Queues.ContentProtectionKey.Cks](contentprotectionkey-data.dictionary/cks-data.dictionary.md): Configuration details for your service’s content protection system.
- [ExtensionConfig.Media.Queues.ContentProtectionKey.Hdr](contentprotectionkey-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to the content protection key endpoint.

## See Also

### Requiring Headers and Specifying Paths for Specific Queue Endpoints

- [ExtensionConfig.Media.Queues.PlayMedia](playmedia-data.dictionary.md): Configuration details for your service’s media playback queue.
- [ExtensionConfig.Media.Queues.UpdateActivity](updateactivity-data.dictionary.md): Configuration details for your service’s update activity endpoint.
- [ExtensionConfig.Media.Queues.ContentPlaybackFailure](contentplaybackfailure-data.dictionary.md): Configuration details for your service’s content playback failure endpoint.
