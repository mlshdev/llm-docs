> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/mediadatacollectors](https://developer.apple.com/documentation/avfoundation/avplayeritem/mediadatacollectors)

# mediaDataCollectors (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

The collection of associated media data collectors.

## Declaration

```swift
nonisolated var mediaDataCollectors: [AVPlayerItemMediaDataCollector] { get }
```

## See Also

### Managing player item data collectors

- [add(\_:)](add%28__%29-9l3to.md): Adds the specified media data collector to the player item’s collection of media collectors.
- [remove(\_:)](remove%28__%29-29iuz.md): Removes the specified media data collector from the player item’s collection of media collectors.

# mediaDataCollectors (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

The collection of associated media data collectors.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVPlayerItemMediaDataCollector *> * mediaDataCollectors;
```

## See Also

### Managing player item data collectors

- [addMediaDataCollector:](add%28__%29-9l3to.md): Adds the specified media data collector to the player item’s collection of media collectors.
- [removeMediaDataCollector:](remove%28__%29-29iuz.md): Removes the specified media data collector from the player item’s collection of media collectors.
