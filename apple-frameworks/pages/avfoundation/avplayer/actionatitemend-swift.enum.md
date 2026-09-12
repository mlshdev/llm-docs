> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/actionatitemend-swift.enum](https://developer.apple.com/documentation/avfoundation/avplayer/actionatitemend-swift.enum)

# AVPlayer.ActionAtItemEnd (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The actions a player can take when it finishes playing.

## Declaration

```swift
enum ActionAtItemEnd
```

## Topics

### Actions

- [AVPlayer.ActionAtItemEnd.advance](actionatitemend-swift.enum/advance.md): The player should advance to the next item, if there is one.
- [AVPlayer.ActionAtItemEnd.pause](actionatitemend-swift.enum/pause.md): The player should pause playing.
- [AVPlayer.ActionAtItemEnd.none](actionatitemend-swift.enum/none.md): The player should do nothing.

### Initializers

- [init(rawValue:)](actionatitemend-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding when playback ends

- [actionAtItemEnd](actionatitemend-swift.property.md): The action to perform when the current player item has finished playing.

# AVPlayerActionAtItemEnd (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The actions a player can take when it finishes playing.

## Declaration

```objectivec
enum AVPlayerActionAtItemEnd : NSInteger;
```

## Topics

### Actions

- [AVPlayerActionAtItemEndAdvance](actionatitemend-swift.enum/advance.md): The player should advance to the next item, if there is one.
- [AVPlayerActionAtItemEndPause](actionatitemend-swift.enum/pause.md): The player should pause playing.
- [AVPlayerActionAtItemEndNone](actionatitemend-swift.enum/none.md): The player should do nothing.

## See Also

### Responding when playback ends

- [actionAtItemEnd](actionatitemend-swift.property.md): The action to perform when the current player item has finished playing.
