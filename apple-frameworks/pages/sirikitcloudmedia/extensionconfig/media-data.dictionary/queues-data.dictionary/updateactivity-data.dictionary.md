> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/updateactivity-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/updateactivity-data.dictionary)

# ExtensionConfig.Media.Queues.UpdateActivity

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Configuration details for your service’s update activity endpoint.

## Declaration

```
object ExtensionConfig.Media.Queues.UpdateActivity
```

## Properties

- `url` — `string`: The relative path for the client to access [updateActivity](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/updateactivity-data.dictionarykey).
  **Default:** `/queues/updateActivity`  
  **Minimum length:** `1`  
  **Maximum length:** `4000`
- `hdr` — `ExtensionConfig.Media.Queues.UpdateActivity.Hdr`: Headers to include with requests to this endpoint.

## Topics

### Requiring Headers

- [ExtensionConfig.Media.Queues.UpdateActivity.Hdr](updateactivity-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to the update activity endpoint.

## See Also

### Requiring Headers and Specifying Paths for Specific Queue Endpoints

- [ExtensionConfig.Media.Queues.PlayMedia](playmedia-data.dictionary.md): Configuration details for your service’s media playback queue.
- [ExtensionConfig.Media.Queues.ContentPlaybackFailure](contentplaybackfailure-data.dictionary.md): Configuration details for your service’s content playback failure endpoint.
- [ExtensionConfig.Media.Queues.ContentProtectionKey](contentprotectionkey-data.dictionary.md): Configuration details for your service’s content protection key endpoint.
