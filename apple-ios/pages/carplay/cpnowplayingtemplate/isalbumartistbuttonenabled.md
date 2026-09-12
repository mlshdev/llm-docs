> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate/isalbumartistbuttonenabled](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/isalbumartistbuttonenabled)

# isAlbumArtistButtonEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the album and artist string is a button.

## Declaration

```swift
var isAlbumArtistButtonEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The Now Playing template displays a string above the playback control buttons that contains the album and artist names. Set this property to [true](https://developer.apple.com/documentation/swift/true) to turn the string into a button that you can use to present more information about the current track. To respond to a user tapping the button, create an object that conforms to [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md) and register it with the Now Playing template using the template’s [add(\_:)](add%28__%29.md) method.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Albums, Artists, and Up Next

- [isUpNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that manages the display of the Up Next button.
- [upNextTitle](upnexttitle.md): The title for the Up Next button.

# albumArtistButtonEnabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the album and artist string is a button.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isAlbumArtistButtonEnabled) BOOL albumArtistButtonEnabled;
```

<a id="Discussion"></a>

## Discussion

The Now Playing template displays a string above the playback control buttons that contains the album and artist names. Set this property to [true](https://developer.apple.com/documentation/swift/true) to turn the string into a button that you can use to present more information about the current track. To respond to a user tapping the button, create an object that conforms to [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md) and register it with the Now Playing template using the template’s [addObserver:](add%28__%29.md) method.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Albums, Artists, and Up Next

- [upNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that manages the display of the Up Next button.
- [upNextTitle](upnexttitle.md): The title for the Up Next button.
