> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/updatenowplayingbuttons(_:)

# updateNowPlayingButtons(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the app-specific playback controls that appear in the lower region of the Now Playing interface.

## Declaration

```swift
func updateNowPlayingButtons(_ nowPlayingButtons: [CPNowPlayingButton])
```

## Parameters

- `nowPlayingButtons`: The array of buttons to display. Specify a maximum of five buttons in this array, and specify the buttons in the order you want them to appear.

<a id="discussion"></a>

## Discussion

The template arranges the buttons in the same order as they appear in the array, starting from the leading edge of the interface.

## See Also

### Adding app-specific controls

- [nowPlayingButtons](nowplayingbuttons.md): Additional app-specific playback controls to display in the lower region of the Now Playing interface.

# updateNowPlayingButtons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the app-specific playback controls that appear in the lower region of the Now Playing interface.

## Declaration

```objectivec
- (void) updateNowPlayingButtons:(NSArray<__kindof CPNowPlayingButton *> *) nowPlayingButtons;
```

## Parameters

- `nowPlayingButtons`: The array of buttons to display. Specify a maximum of five buttons in this array, and specify the buttons in the order you want them to appear.

<a id="discussion"></a>

## Discussion

The template arranges the buttons in the same order as they appear in the array, starting from the leading edge of the interface.

## See Also

### Adding app-specific controls

- [nowPlayingButtons](nowplayingbuttons.md): Additional app-specific playback controls to display in the lower region of the Now Playing interface.
