> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate/updatenowplayingbuttons(_:)](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/updatenowplayingbuttons(_:))

# updateNowPlayingButtons(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the playback control buttons the template displays.

## Declaration

```swift
func updateNowPlayingButtons(_ nowPlayingButtons: [CPNowPlayingButton])
```

## Parameters

- `nowPlayingButtons`: The array of buttons to display.

<a id="Discussion"></a>

## Discussion

You can provide a maximum of five playback control buttons. The template arranges the buttons using the array’s order, from the leading edge of the CarPlay screen to the trailing edge.

## See Also

### Managing the Template’s Buttons

- [nowPlayingButtons](nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [CPNowPlayingButton](../cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](../cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](../cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](../cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](../cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](../cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](../cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.

# updateNowPlayingButtons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the playback control buttons the template displays.

## Declaration

```objectivec
- (void) updateNowPlayingButtons:(NSArray<__kindof CPNowPlayingButton *> *) nowPlayingButtons;
```

## Parameters

- `nowPlayingButtons`: The array of buttons to display.

<a id="Discussion"></a>

## Discussion

You can provide a maximum of five playback control buttons. The template arranges the buttons using the array’s order, from the leading edge of the CarPlay screen to the trailing edge.

## See Also

### Managing the Template’s Buttons

- [nowPlayingButtons](nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [CPNowPlayingButton](../cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](../cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](../cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](../cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](../cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](../cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](../cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.
