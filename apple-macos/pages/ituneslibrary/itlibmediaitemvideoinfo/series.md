> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitemvideoinfo/series](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitemvideoinfo/series)

# series (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The name of the corresponding TV series, if the media item is an episode in a TV series.

## Declaration

```swift
var series: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the media item isn’t an episode in a TV series.

## See Also

### Getting Video Information

- [videoWidth](videowidth.md): The width of the video in pixels.
- [videoHeight](videoheight.md): The height of the video in pixels.
- [sortSeries](sortseries.md): The sorting name of the corresponding TV series, if the media item is an episode in a TV series.
- [season](season.md): The corresponding TV season, if the media item is an episode of a TV series.
- [isHD](ishd.md): A Boolean value that indicates whether the video is high-definition.
- [episode](episode.md): The name of the episode, if the media item is an episode of a TV series.
- [episodeOrder](episodeorder.md): The numerical order of the episode, if the media item is an episode of a TV series.

# series (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The name of the corresponding TV series, if the media item is an episode in a TV series.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * series;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the media item isn’t an episode in a TV series.

## See Also

### Getting Video Information

- [videoWidth](videowidth.md): The width of the video in pixels.
- [videoHeight](videoheight.md): The height of the video in pixels.
- [sortSeries](sortseries.md): The sorting name of the corresponding TV series, if the media item is an episode in a TV series.
- [season](season.md): The corresponding TV season, if the media item is an episode of a TV series.
- [hd](ishd.md): A Boolean value that indicates whether the video is high-definition.
- [episode](episode.md): The name of the episode, if the media item is an episode of a TV series.
- [episodeOrder](episodeorder.md): The numerical order of the episode, if the media item is an episode of a TV series.
