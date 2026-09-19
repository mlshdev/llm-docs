> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/contentprotectionkey-data.dictionary/cks-data.dictionary

# ExtensionConfig.Media.Queues.ContentProtectionKey.Cks

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Configuration details for your service’s content protection system.

## Declaration

```
object ExtensionConfig.Media.Queues.ContentProtectionKey.Cks
```

## Properties

- `certUrl` — `string`: The URL of the certicate the client must use to sign requests to the `contentProtectionKey` endpoint. For more information, see [contentProtectionKey](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/media-data.dictionary/queues-data.dictionary/contentprotectionkey-data.dictionarykey).
  **Maximum length:** `4000`
- `keySystem` — `ContentProtectionKeySystem` (required): The content’s encryption type. The only supported value is `ContentKeySystemFairPlayStreaming`.

## See Also

### Requiring Headers

- [ExtensionConfig.Media.Queues.ContentProtectionKey.Hdr](hdr-data.dictionary.md): Headers to include with requests to the content protection key endpoint.
