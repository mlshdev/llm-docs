> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfig/intent-data.dictionary/playmedia-data.dictionary](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfig/intent-data.dictionary/playmedia-data.dictionary)

# ExtensionConfig.Intent.PlayMedia

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Configuration details for your service’s play media intent.

## Declaration

```
object ExtensionConfig.Intent.PlayMedia
```

## Properties

- `opt` — `[string]`: Optional intent-handling steps that [Process a Play Media Intent](../../playmedia-1g2o9.md) supports.
  **Allowed values:** `resolvePlayShuffled`, `resolvePlaybackRepeatMode`, `resolvePlaybackQueueLocation`, `resolveResumePlayback`

<a id="Discussion"></a>

## Discussion

To specify that your service only implements the required methods, provide an empty array for the `opt` property. You may omit the `opt` property if your service implements all of the optional methods.

## Relationships

### Inherits From

- [ExtensionEndpointConfig](../../extensionendpointconfig.md)

## See Also

### Specifying Required Headers and Supported Processing for Each Intent

- [ExtensionConfig.Intent.AddMedia](addmedia-data.dictionary.md): Configuration details for your service’s add media intent.
- [ExtensionConfig.Intent.UpdateMediaAffinity](updatemediaaffinity-data.dictionary.md): Configuration details for your service’s update media affinity intent.
