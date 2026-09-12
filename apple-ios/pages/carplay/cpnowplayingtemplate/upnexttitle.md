> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate/upnexttitle](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/upnexttitle)

# upNextTitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The title for the Up Next button.

## Declaration

```swift
var upNextTitle: String { get set }
```

<a id="Discussion"></a>

## Discussion

If you display the Up Next button in your app by setting [isUpNextButtonEnabled](isupnextbuttonenabled.md) to [true](https://developer.apple.com/documentation/swift/true), use this property to set the button’s title. If you don’t specify a title, CarPlay uses the system default title.

## See Also

### Managing Albums, Artists, and Up Next

- [isAlbumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist string is a button.
- [isUpNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that manages the display of the Up Next button.

# upNextTitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The title for the Up Next button.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * upNextTitle;
```

<a id="Discussion"></a>

## Discussion

If you display the Up Next button in your app by setting [upNextButtonEnabled](isupnextbuttonenabled.md) to [true](https://developer.apple.com/documentation/swift/true), use this property to set the button’s title. If you don’t specify a title, CarPlay uses the system default title.

## See Also

### Managing Albums, Artists, and Up Next

- [albumArtistButtonEnabled](isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist string is a button.
- [upNextButtonEnabled](isupnextbuttonenabled.md): A Boolean value that manages the display of the Up Next button.
