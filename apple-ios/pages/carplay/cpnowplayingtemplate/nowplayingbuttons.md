> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate/nowplayingbuttons](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/nowplayingbuttons)

# nowPlayingButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The Now Playing template’s playback control buttons.

## Declaration

```swift
var nowPlayingButtons: [CPNowPlayingButton] { get }
```

<a id="Discussion"></a>

## Discussion

You use the [updateNowPlayingButtons(\_:)](updatenowplayingbuttons%28__%29.md) method to provide a maximum of five playback control buttons. The template arranges the buttons using the array’s order, from the leading edge of the CarPlay screen to the trailing edge.

## See Also

### Managing the Template’s Buttons

- [updateNowPlayingButtons(\_:)](updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](../cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](../cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](../cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](../cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](../cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](../cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](../cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.

# nowPlayingButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The Now Playing template’s playback control buttons.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<__kindof CPNowPlayingButton *> * nowPlayingButtons;
```

<a id="Discussion"></a>

## Discussion

You use the [updateNowPlayingButtons:](updatenowplayingbuttons%28__%29.md) method to provide a maximum of five playback control buttons. The template arranges the buttons using the array’s order, from the leading edge of the CarPlay screen to the trailing edge.

## See Also

### Managing the Template’s Buttons

- [updateNowPlayingButtons:](updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](../cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](../cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](../cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](../cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](../cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](../cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](../cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.
