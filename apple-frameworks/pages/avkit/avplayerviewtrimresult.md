> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewtrimresult

# AVPlayerViewTrimResult (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Constants that specify an action a user takes when trimming media in a player view.

## Declaration

```swift
enum AVPlayerViewTrimResult
```

## Topics

### Creating a trim result

- [init(rawValue:)](avplayerviewtrimresult/init%28rawvalue_%29.md)

### Trim results

- [AVPlayerViewTrimResult.okButton](avplayerviewtrimresult/okbutton.md): The user clicked the Trim button.
- [AVPlayerViewTrimResult.cancelButton](avplayerviewtrimresult/cancelbutton.md): The user clicked the Cancel button.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Media trimming and export

- [Implementing trimming in a macOS player](implementing-trimming-in-a-macos-player.md): Provide a QuickTime media-trimming experience in your macOS app.
- [Trimming and exporting media in visionOS](trimming-and-exporting-media-in-visionos.md): Display standard controls in your app to edit the timeline of the currently playing media.

# AVPlayerViewTrimResult (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Constants that specify an action a user takes when trimming media in a player view.

## Declaration

```objectivec
enum AVPlayerViewTrimResult : NSInteger;
```

## Topics

### Trim results

- [AVPlayerViewTrimOKButton](avplayerviewtrimresult/okbutton.md): The user clicked the Trim button.
- [AVPlayerViewTrimCancelButton](avplayerviewtrimresult/cancelbutton.md): The user clicked the Cancel button.

## See Also

### Media trimming and export

- [Implementing trimming in a macOS player](implementing-trimming-in-a-macos-player.md): Provide a QuickTime media-trimming experience in your macOS app.
- [Trimming and exporting media in visionOS](trimming-and-exporting-media-in-visionos.md): Display standard controls in your app to edit the timeline of the currently playing media.
