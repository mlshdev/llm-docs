> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewtrimresult](https://developer.apple.com/documentation/avkit/avplayerviewtrimresult)

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

### Trim Results

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

### Trimming media

- [canBeginTrimming](avplayerview/canbegintrimming.md): A Boolean value that indicates whether the player view can begin trimming.
- [beginTrimming(completionHandler:)](avplayerview/begintrimming%28completionhandler_%29.md): Puts the player view into trimming mode.

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

### Trim Results

- [AVPlayerViewTrimOKButton](avplayerviewtrimresult/okbutton.md): The user clicked the Trim button.
- [AVPlayerViewTrimCancelButton](avplayerviewtrimresult/cancelbutton.md): The user clicked the Cancel button.

## See Also

### Trimming media

- [canBeginTrimming](avplayerview/canbegintrimming.md): A Boolean value that indicates whether the player view can begin trimming.
- [beginTrimmingWithCompletionHandler:](avplayerview/begintrimming%28completionhandler_%29.md): Puts the player view into trimming mode.
