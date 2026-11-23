> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/isupnextbuttonenabled

# isUpNextButtonEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the Now Playing interface displays the Up Next button.

## Declaration

```swift
var isUpNextButtonEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the Now Playing interface displays an Up Next button in the upper-right corner of the Now Playing interface. This button provides access to content that’s queued and ready for playback. The default value of this property is `false`.

If you set this property to `true`, add an observer object to the Now Playing template. When someone taps the Up Next button, the template calls your observer’s  `CPNowPlayingTemplateDelegate/nowPlayingTemplateUpNextButtonTapped(_:)` method to notify you of the interaction.

## See Also

### Configuring the interface

- [nowPlayingMode](nowplayingmode.md): The type that determines the layout of the Now Playing interface.
- [upNextTitle](upnexttitle.md): The text to display in the Up Next button.
- [isAlbumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
- [allowsMiniPlayer](allowsminiplayer.md): A Boolean value that indicates whether the app supports the mini-player interface.

# upNextButtonEnabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the Now Playing interface displays the Up Next button.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isUpNextButtonEnabled) BOOL upNextButtonEnabled;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the Now Playing interface displays an Up Next button in the upper-right corner of the Now Playing interface. This button provides access to content that’s queued and ready for playback. The default value of this property is `false`.

If you set this property to `true`, add an observer object to the Now Playing template. When someone taps the Up Next button, the template calls your observer’s  `CPNowPlayingTemplateDelegate/nowPlayingTemplateUpNextButtonTapped(_:)` method to notify you of the interaction.

## See Also

### Configuring the interface

- [nowPlayingMode](nowplayingmode.md): The type that determines the layout of the Now Playing interface.
- [upNextTitle](upnexttitle.md): The text to display in the Up Next button.
- [albumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
- [allowsMiniPlayer](allowsminiplayer.md): A Boolean value that indicates whether the app supports the mini-player interface.
