> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/allowsminiplayer

# allowsMiniPlayer (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether the app supports the mini-player interface.

## Declaration

```swift
var allowsMiniPlayer: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the Now Playing template isn’t visible, the system adds a mini-player interface to the navigation bar of your app’s other templates. This interface summarizes the currently playing content and offers a way to start and stop playback, change tracks, and navigate back to the Now Playing interface. If your app has its own compact interface for currently playing content, you can set this property to `false` to disable the system-provided miniature interface. The default value of this property is `true`, which displays the mini-player interface in your other templates.

## See Also

### Configuring the interface

- [nowPlayingMode](nowplayingmode.md): The type that determines the layout of the Now Playing interface.
- [isUpNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that indicates whether the Now Playing interface displays the Up Next button.
- [upNextTitle](upnexttitle.md): The text to display in the Up Next button.
- [isAlbumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.

# allowsMiniPlayer (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether the app supports the mini-player interface.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsMiniPlayer;
```

<a id="discussion"></a>

## Discussion

When the Now Playing template isn’t visible, the system adds a mini-player interface to the navigation bar of your app’s other templates. This interface summarizes the currently playing content and offers a way to start and stop playback, change tracks, and navigate back to the Now Playing interface. If your app has its own compact interface for currently playing content, you can set this property to `false` to disable the system-provided miniature interface. The default value of this property is `true`, which displays the mini-player interface in your other templates.

## See Also

### Configuring the interface

- [nowPlayingMode](nowplayingmode.md): The type that determines the layout of the Now Playing interface.
- [upNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that indicates whether the Now Playing interface displays the Up Next button.
- [upNextTitle](upnexttitle.md): The text to display in the Up Next button.
- [albumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
