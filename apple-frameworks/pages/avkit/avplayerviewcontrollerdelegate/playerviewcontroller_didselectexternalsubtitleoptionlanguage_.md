> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller:didselectexternalsubtitleoptionlanguage:](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller:didselectexternalsubtitleoptionlanguage:)

# playerViewController:didSelectExternalSubtitleOptionLanguage:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Tells the delegate when the user selects a specific subtitle option.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController didSelectExternalSubtitleOptionLanguage:(NSString *) language;
```

## Parameters

- `playerViewController`: The player view controller.
- `language`: The IETF BCP 47 language code.

<a id="Discussion"></a>

## Discussion

The framework calls this method only for external subtitle languages specified by the player item’s [externalSubtitleOptionLanguages](../../avfoundation/avplayeritem/externalsubtitleoptionlanguages.md) property. For all other options, the framework calls [playerViewController:didSelectMediaSelectionOption:inMediaSelectionGroup:](playerviewcontroller%28__didselect_in_%29.md) instead. The delegate is responsible for displaying the corresponding subtitles.

## See Also

### Responding to Media Selection

- [playerViewController:didSelectMediaSelectionOption:inMediaSelectionGroup:](playerviewcontroller%28__didselect_in_%29.md): Tells the delegate when the user selects a media option from a media selection group.
