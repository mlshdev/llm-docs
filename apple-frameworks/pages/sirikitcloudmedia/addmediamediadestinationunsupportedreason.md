> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediamediadestinationunsupportedreason](https://developer.apple.com/documentation/sirikitcloudmedia/addmediamediadestinationunsupportedreason)

# AddMediaMediaDestinationUnsupportedReason

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

Reasons the media service can’t add media items to a specified playlist.

## Declaration

```
string AddMediaMediaDestinationUnsupportedReason
```

## Possible Values

- `playlistNameNotFound`: Your service can’t find the playlist.
- `playlistNotEditable`: The user doesn’t have permission to edit the playlist.

## See Also

### Reporting a Problem

- [AddMediaMediaDestinationResolutionResult.Unsupported](addmediamediadestinationresolutionresult/unsupported-data.dictionary.md): The reason your service can’t add media items to the specified library or playlist.
