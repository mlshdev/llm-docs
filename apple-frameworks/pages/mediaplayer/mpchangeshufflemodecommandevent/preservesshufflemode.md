> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpchangeshufflemodecommandevent/preservesshufflemode

# preservesShuffleMode (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value that indicates whether the shuffle mode is preserved between playback sessions.

## Declaration

```swift
var preservesShuffleMode: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the shuffle mode is preserved between playback sessions.

## See Also

### Changing the shuffle mode

- [shuffleType](shuffletype.md): The shuffle type used when fulfilling the event request.

# preservesShuffleMode (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value that indicates whether the shuffle mode is preserved between playback sessions.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL preservesShuffleMode;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the shuffle mode is preserved between playback sessions.

## See Also

### Changing the shuffle mode

- [shuffleType](shuffletype.md): The shuffle type used when fulfilling the event request.
