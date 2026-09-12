> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/contentplaybackfailure-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/contentplaybackfailure-data.dictionary)

# ExtensionConfig.Media.Queues.ContentPlaybackFailure

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Configuration details for your service’s content playback failure endpoint.

## Declaration

```
object ExtensionConfig.Media.Queues.ContentPlaybackFailure
```

## Properties

- `url` — `string` (required): The relative path for the client to access the `contentPlaybackFailure` endpoint. For more information, see [contentPlaybackFailure](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/contentplaybackfailure-data.dictionarykey).
  **Default:** `/queues/contentPlaybackFailure`  
  **Minimum length:** `1`  
  **Maximum length:** `4000`

## See Also

### Requiring Headers and Specifying Paths for Specific Queue Endpoints

- [ExtensionConfig.Media.Queues.PlayMedia](playmedia-data.dictionary.md): Configuration details for your service’s media playback queue.
- [ExtensionConfig.Media.Queues.UpdateActivity](updateactivity-data.dictionary.md): Configuration details for your service’s update activity endpoint.
- [ExtensionConfig.Media.Queues.ContentProtectionKey](contentprotectionkey-data.dictionary.md): Configuration details for your service’s content protection key endpoint.
