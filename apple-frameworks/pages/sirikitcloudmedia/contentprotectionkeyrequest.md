> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/contentprotectionkeyrequest](https://developer.apple.com/documentation/sirikitcloudmedia/contentprotectionkeyrequest)

# ContentProtectionKeyRequest

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A request for an item’s content protection key.

## Declaration

```
object ContentProtectionKeyRequest
```

## Properties

- `assetIdentifier` — `string`: The item’s content key asset identifier.
  **Maximum length:** `4000`
- `context` — `PlayerContext` (required): The content the client is playing.
- `keyRequest` — `byte` (required): An encrypted key request that contains session, authentication, and integrity information. For FairPlay Streaming, this is the server playback context (SPC); for more information, see [FairPlay Streaming Overview](https://developer.apple.com/streaming/fps/FairPlayStreamingOverview.pdf).
- `keySystem` — `ContentProtectionKeySystem` (required): The content’s encryption type, which must match the configuration in  [ExtensionConfig.Media.Queues.ContentProtectionKey.Cks](extensionconfig/media-data.dictionary/queues-data.dictionary/contentprotectionkey-data.dictionary/cks-data.dictionary.md).
- `userActivity` — `UserActivity` (required): A description of the client’s current playback queue.
- `version` — `string` (required): The version of the client’s `SiriKitMediaAPI` library.
  **Maximum length:** `25`  
  **Allowed values:** `/[0-9]+\.[0-9]+\.[0-9]+/`

<a id="Discussion"></a>

## Discussion

If your service implements content protection, the client requests an item’s content protection key after each of the following events:

- The client receives the queue’s initial item.
- The client preloads each subsequent item in the queue.
- The user manually transitions to an item in the queue.

For more information on providing your service’s content protection configuration, see [ExtensionConfig.Media.Queues.ContentProtectionKey](extensionconfig/media-data.dictionary/queues-data.dictionary/contentprotectionkey-data.dictionary.md) and [Retrieve an Asset’s Content Protection Key](contentprotectionkey.md).

## See Also

### Content Protection

- [Retrieve an Asset’s Content Protection Key](contentprotectionkey.md): Provide the content key for a specific protected asset.
- [ContentProtectionKeyResponse](contentprotectionkeyresponse.md): A response to a request for an item’s content protection key.
- [ContentProtectionKeySystem](contentprotectionkeysystem.md): The content protection key systems that SiriKit Cloud Media supports.
