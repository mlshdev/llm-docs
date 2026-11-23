> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/nowplayingbuttons

# nowPlayingButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Additional app-specific playback controls to display in the lower region of the Now Playing interface.

## Declaration

```swift
var nowPlayingButtons: [CPNowPlayingButton] { get }
```

<a id="discussion"></a>

## Discussion

This property contains the buttons for any additional features your app supports during playback. The template places the buttons in the lower region of the interface starting at the leading edge, and displays them in the same order as they appear in the array.

The default value of this property is an empty array. To specify buttons for your interface, call the [updateNowPlayingButtons(\_:)](updatenowplayingbuttons%28__%29.md) method. For example, you might include buttons to shuffle the queued songs, repeat songs, or change the playback rate.

## See Also

### Adding app-specific controls

- [updateNowPlayingButtons(\_:)](updatenowplayingbuttons%28__%29.md): Updates the app-specific playback controls that appear in the lower region of the Now Playing interface.

# nowPlayingButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Additional app-specific playback controls to display in the lower region of the Now Playing interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<__kindof CPNowPlayingButton *> * nowPlayingButtons;
```

<a id="discussion"></a>

## Discussion

This property contains the buttons for any additional features your app supports during playback. The template places the buttons in the lower region of the interface starting at the leading edge, and displays them in the same order as they appear in the array.

The default value of this property is an empty array. To specify buttons for your interface, call the [updateNowPlayingButtons:](updatenowplayingbuttons%28__%29.md) method. For example, you might include buttons to shuffle the queued songs, repeat songs, or change the playback rate.

## See Also

### Adding app-specific controls

- [updateNowPlayingButtons:](updatenowplayingbuttons%28__%29.md): Updates the app-specific playback controls that appear in the lower region of the Now Playing interface.
