> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/upnexttitle

# upNextTitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The text to display in the Up Next button.

## Declaration

```swift
var upNextTitle: String { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to the text you want to display in the Up Next button of the Now Playing interface. When the [isUpNextButtonEnabled](isupnextbuttonenabled.md) property is `true`, the system displays the button and sets its title to the provided text. If you don’t specify a value for this property, the system supplies a default value for the button title.

## See Also

### Configuring the interface

- [nowPlayingMode](nowplayingmode.md): The type that determines the layout of the Now Playing interface.
- [isUpNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that indicates whether the Now Playing interface displays the Up Next button.
- [isAlbumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
- [allowsMiniPlayer](allowsminiplayer.md): A Boolean value that indicates whether the app supports the mini-player interface.

# upNextTitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The text to display in the Up Next button.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * upNextTitle;
```

<a id="discussion"></a>

## Discussion

Set this property to the text you want to display in the Up Next button of the Now Playing interface. When the [upNextButtonEnabled](isupnextbuttonenabled.md) property is `true`, the system displays the button and sets its title to the provided text. If you don’t specify a value for this property, the system supplies a default value for the button title.

## See Also

### Configuring the interface

- [nowPlayingMode](nowplayingmode.md): The type that determines the layout of the Now Playing interface.
- [upNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that indicates whether the Now Playing interface displays the Up Next button.
- [albumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
- [allowsMiniPlayer](allowsminiplayer.md): A Boolean value that indicates whether the app supports the mini-player interface.
