> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitemvideoinfo/episode](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitemvideoinfo/episode)

# episode (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The name of the episode, if the media item is an episode of a TV series.

## Declaration

```swift
var episode: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the media item isn’t an episode of a TV series.

## See Also

### Getting Video Information

- [videoWidth](videowidth.md): The width of the video in pixels.
- [videoHeight](videoheight.md): The height of the video in pixels.
- [series](series.md): The name of the corresponding TV series, if the media item is an episode in a TV series.
- [sortSeries](sortseries.md): The sorting name of the corresponding TV series, if the media item is an episode in a TV series.
- [season](season.md): The corresponding TV season, if the media item is an episode of a TV series.
- [isHD](ishd.md): A Boolean value that indicates whether the video is high-definition.
- [episodeOrder](episodeorder.md): The numerical order of the episode, if the media item is an episode of a TV series.

# episode (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The name of the episode, if the media item is an episode of a TV series.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * episode;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the media item isn’t an episode of a TV series.

## See Also

### Getting Video Information

- [videoWidth](videowidth.md): The width of the video in pixels.
- [videoHeight](videoheight.md): The height of the video in pixels.
- [series](series.md): The name of the corresponding TV series, if the media item is an episode in a TV series.
- [sortSeries](sortseries.md): The sorting name of the corresponding TV series, if the media item is an episode in a TV series.
- [season](season.md): The corresponding TV season, if the media item is an episode of a TV series.
- [hd](ishd.md): A Boolean value that indicates whether the video is high-definition.
- [episodeOrder](episodeorder.md): The numerical order of the episode, if the media item is an episode of a TV series.
