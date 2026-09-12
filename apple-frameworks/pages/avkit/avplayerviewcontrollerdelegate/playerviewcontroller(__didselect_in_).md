> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didselect:in:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didselect:in:))

# playerViewController(\_:didSelect:in:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Tells the delegate when the user selects a media option from a media selection group.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, didSelect mediaSelectionOption: AVMediaSelectionOption?, in mediaSelectionGroup: AVMediaSelectionGroup)
```

## Parameters

- `playerViewController`: The player view controller.
- `mediaSelectionOption`: The user’s selected media option, which may be `nil`.
- `mediaSelectionGroup`: The media selection group in which the selected media option exists.

# playerViewController:didSelectMediaSelectionOption:inMediaSelectionGroup: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Tells the delegate when the user selects a media option from a media selection group.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController didSelectMediaSelectionOption:(AVMediaSelectionOption *) mediaSelectionOption inMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `playerViewController`: The player view controller.
- `mediaSelectionOption`: The user’s selected media option, which may be `nil`.
- `mediaSelectionGroup`: The media selection group in which the selected media option exists.

## See Also

### Responding to Media Selection

- [playerViewController:didSelectExternalSubtitleOptionLanguage:](playerviewcontroller_didselectexternalsubtitleoptionlanguage_.md): Tells the delegate when the user selects a specific subtitle option.
