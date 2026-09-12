> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary)

# ExtensionConfig.Media.Queues

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Configuration details for your service’s media queue.

## Declaration

```
object ExtensionConfig.Media.Queues
```

## Properties

- `hdr` — `ExtensionConfig.Media.Queues.Hdr`: Headers to include with requests to queue endpoints.
- `playMedia` — `ExtensionConfig.Media.Queues.PlayMedia`: Details specific to your media playback queue.
- `updateActivity` — `ExtensionConfig.Media.Queues.UpdateActivity`: Details specific to your update activity endpoint.
- `contentPlaybackFailure` — `ExtensionConfig.Media.Queues.ContentPlaybackFailure`: Details specific to your content playback failure endpoint.
- `contentProtectionKey` — `ExtensionConfig.Media.Queues.ContentProtectionKey`: Details specific to your content protection key endpoint.

## Topics

### Requiring Headers for all Queue Requests

- [ExtensionConfig.Media.Queues.Hdr](queues-data.dictionary/hdr-data.dictionary.md): Headers to include with requests to media endpoints.

### Requiring Headers and Specifying Paths for Specific Queue Endpoints

- [ExtensionConfig.Media.Queues.PlayMedia](queues-data.dictionary/playmedia-data.dictionary.md): Configuration details for your service’s media playback queue.
- [ExtensionConfig.Media.Queues.UpdateActivity](queues-data.dictionary/updateactivity-data.dictionary.md): Configuration details for your service’s update activity endpoint.
- [ExtensionConfig.Media.Queues.ContentPlaybackFailure](queues-data.dictionary/contentplaybackfailure-data.dictionary.md): Configuration details for your service’s content playback failure endpoint.
- [ExtensionConfig.Media.Queues.ContentProtectionKey](queues-data.dictionary/contentprotectionkey-data.dictionary.md): Configuration details for your service’s content protection key endpoint.
