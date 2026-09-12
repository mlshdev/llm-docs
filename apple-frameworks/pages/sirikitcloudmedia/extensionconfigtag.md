> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/extensionconfigtag](https://developer.apple.com/documentation/sirikitcloudmedia/extensionconfigtag)

# ExtensionConfigTag

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

A unique identifier for a specific media service configuration.

## Declaration

```
string ExtensionConfigTag
```

## Possible Values

- `/["][ -~]{1000}["]/`:

<a id="Discussion"></a>

## Discussion

Change this value whenever anything in your service’s [ExtensionConfig](extensionconfig.md) changes. Don’t include any personally identifiable information in this value and ensure the value matches the `/["][ -~]{1000}["]/` pattern.

## See Also

### Device Configuration

- [Configure Your Service Endpoints](configuration-resource.md): Provide configuration details for your media server’s endpoints to a HomePod speaker or an Apple TV.
- [ExtensionConfig](extensionconfig.md): Instructions for accessing your media service’s endpoints.
- [PlayMediaControlActivity](playmediacontrolactivity.md): Options for reporting playback progress.
