> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate/isupnextbuttonenabled](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/isupnextbuttonenabled)

# isUpNextButtonEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that manages the display of the Up Next button.

## Declaration

```swift
var isUpNextButtonEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to have the Now Playing template display an Up Next button in the upper-right corner of the CarPlay screen.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Albums, Artists, and Up Next

- [isAlbumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist string is a button.
- [upNextTitle](upnexttitle.md): The title for the Up Next button.

# upNextButtonEnabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that manages the display of the Up Next button.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isUpNextButtonEnabled) BOOL upNextButtonEnabled;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to have the Now Playing template display an Up Next button in the upper-right corner of the CarPlay screen.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Albums, Artists, and Up Next

- [albumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist string is a button.
- [upNextTitle](upnexttitle.md): The title for the Up Next button.
