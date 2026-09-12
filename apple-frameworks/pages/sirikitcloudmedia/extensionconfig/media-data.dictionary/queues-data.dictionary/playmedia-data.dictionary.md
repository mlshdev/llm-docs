> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/playmedia-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/playmedia-data.dictionary)

# ExtensionConfig.Media.Queues.PlayMedia

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Configuration details for your service’s media playback queue.

## Declaration

```
object ExtensionConfig.Media.Queues.PlayMedia
```

## Properties

- `url` — `string`: The relative path for the client to access [Get a Media Queue](../../../playmedia-1onzj.md).
  **Default:** `/queues/playMedia`  
  **Minimum length:** `1`  
  **Maximum length:** `4000`
- `hdr` — `ExtensionConfig.Media.Queues.PlayMedia.Hdr`: Headers to include with requests to this endpoint.

## Topics

### Requiring Headers

- [ExtensionConfig.Media.Queues.PlayMedia.Hdr](playmedia-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to media endpoints.

## See Also

### Requiring Headers and Specifying Paths for Specific Queue Endpoints

- [ExtensionConfig.Media.Queues.UpdateActivity](updateactivity-data.dictionary.md): Configuration details for your service’s update activity endpoint.
- [ExtensionConfig.Media.Queues.ContentPlaybackFailure](contentplaybackfailure-data.dictionary.md): Configuration details for your service’s content playback failure endpoint.
- [ExtensionConfig.Media.Queues.ContentProtectionKey](contentprotectionkey-data.dictionary.md): Configuration details for your service’s content protection key endpoint.
