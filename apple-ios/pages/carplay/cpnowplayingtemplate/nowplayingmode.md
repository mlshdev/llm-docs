> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/nowplayingmode

# nowPlayingMode (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The type that determines the layout of the Now Playing interface.

## Declaration

```swift
var nowPlayingMode: CPNowPlayingMode? { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is the [default](../cpnowplayingmode/default.md) type, which configures the Now Playing interface to display audio-related content. To change the interface layout, assign a different type to this property. For example, to display sports information, assign a [CPNowPlayingModeSports](../cpnowplayingmodesports.md) type with the information you want to display.

## See Also

### Configuring the interface

- [isUpNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that indicates whether the Now Playing interface displays the Up Next button.
- [upNextTitle](upnexttitle.md): The text to display in the Up Next button.
- [isAlbumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
- [allowsMiniPlayer](allowsminiplayer.md): A Boolean value that indicates whether the app supports the mini-player interface.

# nowPlayingMode (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The type that determines the layout of the Now Playing interface.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CPNowPlayingMode * nowPlayingMode;
```

<a id="discussion"></a>

## Discussion

The default value of this property is the [defaultNowPlayingMode](../cpnowplayingmode/default.md) type, which configures the Now Playing interface to display audio-related content. To change the interface layout, assign a different type to this property. For example, to display sports information, assign a [CPNowPlayingModeSports](../cpnowplayingmodesports.md) type with the information you want to display.

## See Also

### Configuring the interface

- [upNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that indicates whether the Now Playing interface displays the Up Next button.
- [upNextTitle](upnexttitle.md): The text to display in the Up Next button.
- [albumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
- [allowsMiniPlayer](allowsminiplayer.md): A Boolean value that indicates whether the app supports the mini-player interface.
